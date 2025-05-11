
import {
  Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import MainLayOut from './layout/MainLayOut';
import HomePage from './pages/HomePage';
import JobsPage  from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import JobPageNewWay, {jobLoader} from './pages/JobPageNewWay';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';




const App = () => {

    // Add new job
      const addJob = async (newJob) => {
          const res = await fetch('/api/jobs',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(newJob),
          });
          return;
      };
    
    // Delete New job

      const deleteJob = async(id) => {
        //console.log('delete', id);
        const res = await fetch(`/api/jobs/${id}`,{
          method:'DELETE',

        });
        return;
      };

      // update job

      const updateJob = async (job) => {

        const res = await fetch(`/api/jobs/${job.id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(job),

        });
        return;
      }

      const router = createBrowserRouter(
      // createRoutesFromElements(<Route index element={<h1>My App</h1>} />)
      createRoutesFromElements(
            <Route path="/" element={<MainLayOut />}>
              {/* <Route index element={<h1>My App</h1>} />
              <Route path='/about' element={<h4>About page</h4>}/> */}
              <Route index element={<HomePage />} />
              <Route path='/about' element={<h4>About Page</h4>} />
              <Route path='/jobs' element={<JobsPage  />} />
              {/* <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} /> */}
              <Route path='/jobs/:id' element={<JobPageNewWay deleteJob={deleteJob} />} loader={jobLoader} />
              <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />}  />
              <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
              <Route path='*' element={<NotFoundPage/>}  />
            </Route>
          )
      );
  
    return <RouterProvider router={router} />;
};

export default App;