import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul>
        <li>
        <Link to="randomapp">App random gift</Link>
        </li>
        <li>
        <Link to="twowaybindingapp">Two-way binding</Link>
        </li>
        <li>
        <Link to="todoapp">To do list</Link>
        </li>
        <li>
        <Link to="useeffecthook">useEffect</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
