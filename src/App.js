import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
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
