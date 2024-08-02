import axios from 'axios';
import { Request, Response } from 'express';

const apiUrl = process.env.API_URL;
const url = apiUrl+'/submissions';

export const submissionHandler = async (req: Request, res: Response) => {
  const { code, language } = req.body;
  const { id } = req.params;

  const data = {
    source_code: code,  
    language_id: language,
    number_of_runs: null,
    stdin: "5 1 2 3 4 5",  
    expected_output: "2 3 4 5 6",  
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
    base64_encoded: false
  };

  try {
    const response = await axios.post(url, data);
    const token = response.data.token;

    
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let result;
    let status;
    do {
      result = await axios.get(apiUrl+`/submissions/${token}`);
      status = result.data.status.description;
    } while (status === "In Queue");

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
};



