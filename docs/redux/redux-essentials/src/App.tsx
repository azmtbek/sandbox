import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { PostsList } from "./features/posts/PostsList";
import { Navbar } from "./app/Navbar";
import { AddPostForm } from "./features/posts/AddPostForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
