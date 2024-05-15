import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoPage from './components/VideoPage';

function App() {
  const route= createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/room/:id",
      element:<videoPage/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
