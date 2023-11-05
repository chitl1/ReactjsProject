import './index.css';
import { useState } from 'react';

function TodoApp() {
  const storageJob = JSON.parse(localStorage.getItem('jobs'))
  
  const [job, setJob] = useState();
  // const [jobs, setJobs] = useState((storageJob) ?? [] );
  const [jobs, setJobs] = useState(() =>{
    const storageJob = JSON.parse(localStorage.getItem('jobs'))
    return storageJob
  } );
  const handleSubmit = () => {
    setJobs(prev => {
      const newJob = [...prev, job];
      //lưu vào localstorage 
      const jsonJobs = JSON.stringify(newJob);
      localStorage.setItem('jobs', jsonJobs);
      return newJob
    })
    setJob('')
  }
  return (
    <div className="todo-container">
      <input 
      value={job} 
      onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {
          jobs.map((itemJob, index) => (
            <li key={index}>
              {itemJob}
            </li>
          ))
        }

      </ul>
    </div>
  );
}

export default TodoApp;