
import {
  Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import MainLayOut from './pages/MainLayOut';
import HomePage from './pages/HomePage';


const App = () => {

  
  const router = createBrowserRouter(
    // createRoutesFromElements(<Route index element={<h1>My App</h1>} />)
    createRoutesFromElements(
          <Route path="/" element={<MainLayOut />}>
            {/* <Route index element={<h1>My App</h1>} />
            <Route path='/about' element={<h4>About page</h4>}/> */}
            <Route index element={<HomePage />} />
            <Route path='/about' element={<h4>About Page</h4>} />

          </Route>
        )
  );

  return <RouterProvider router={router} />;
  // return (
  //   <>
      
  //   <Navbar />
  //   <Hero  />
  //   <HomeCards />
  //   <JobListings />
  //   <ViewAllJobs />
    
    
  //   </>
  // );
};

export default App;