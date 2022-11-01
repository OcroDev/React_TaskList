import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  redirect,
  Routes,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";

import { Error404 } from "./pages/404/error404";
import { AboutPage } from "./pages/about-faqs/AboutPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { TaskPage } from "./pages/tasks/TaskPage";
import { TaskDetailPage } from "./pages/tasks/TaskDetailPage";
import { TaskBar } from "./components/pure/TaskBar";
import { LoginPage } from "./pages/auth/loginPage";
import { useEffect, useState } from "react";
import { HomePage } from "./pages/home/homePage";
function AppRoutingOne() {
  const [logged, setLogged] = useState(localStorage.getItem("credentials"));
  const params = useParams();
  let taskList = {
    id: 0,
    name: "Task 1",
    description: "My First task",
  };
  const loggedIn = () => {
    setLogged(localStorage.getItem("credentials"));
  };
  const loggedOut = () => {
    setLogged(localStorage.clear("credentials"));
  };
  //  console.log(localStorage.getItem("credentials"));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskBar state={loggedOut} />}>
          <Route index path="/" element={<HomePage></HomePage>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faqs" element={<AboutPage />} />
          <Route
            path="login"
            element={
              !logged ? <LoginPage state={loggedIn} /> : <Navigate to="/" />
            }
          />
          <Route
            path="profile"
            element={
              !logged ? <Navigate replace to="/login" /> : <ProfilePage />
            }
          />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="task/:id" element={<TaskDetailPage task={taskList} />} />
          {/* 404 - page not found */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;

//! link del curso https://campus.open-bootcamp.com/cursos/1/leccion/209

//! https://www.youtube.com/watch?v=KKXFmzr0nKk

//! https://www.youtube.com/watch?v=an2hyrNwCNE (RTK Redux)
