import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Anasayfa from './Anasayfa';
import './App.css';
import Hakkinda from './Hakkinda';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Anasayfa />
  },
  {
    path: "/hakkinda",
    element: <Hakkinda />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
