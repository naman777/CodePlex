import axios from "axios";
import { Request, Response } from "express";

const apiUrl = process.env.API_URL;
const url = "http://13.202.142.107:2358/submissions?base64_encoded=true";

export const compilerHandler = async (req:Request,res:Response) => {

    const { code,languageId,input } = req.body;
    
    const data = {
        source_code: code,  
        language_id: languageId,
        number_of_runs: null,
        stdin: input,
        expected_output: null,  
        cpu_time_limit: null,
        cpu_extra_time: null,
        wall_time_limit: null,
        memory_limit: null,
        stack_limit: null,
        max_processes_and_or_threads: null,
        enable_per_process_and_thread_time_limit: null,
        enable_per_process_and_thread_memory_limit: null,
        max_file_size: null,
        enable_network: null,
        base64_encoded: true
    };

    try {
        const response = await axios.post(url, data);
        const token = response.data.token;

        await new Promise((resolve) => setTimeout(resolve, 2000));

        let result;
        let status;
        do {
            result = await axios.get("http://13.202.142.107:2358"+"/submissions/"+token);
            status = result.data.status.description;
        } while (status === "Processing");

        res.json({
            status,
            stdout: result.data.stdout,
            stderr: result.data.stderr,
            compile_output: result.data.compile_output,
            message: result.data.message
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }

}   