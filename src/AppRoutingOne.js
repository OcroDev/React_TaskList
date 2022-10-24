import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/Home/homePage";
import { Error404 } from "./pages/404/error404";
import { AboutPage } from "./pages/about-faqs/AboutPage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { TaskPage } from "./pages/tasks/TaskPage";
import { TaskDetailPage } from "./pages/tasks/TaskDetailPage";
import { TaskBar } from "./components/pure/TaskBar";

function AppRoutingOne() {
  return (
    <Router>
      {/* <div>
        <aside>
          <Link to="/">|| HOME </Link>
          <Link to="/about">| ABOUT </Link>
          <Link to="/faqs">| FAQS </Link>
          <Link to="/any404">| doesn't exist ||</Link>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/tasks/:id" element={<TaskDetailPage />} />
            {/* 404 - page not found /}
            <Route path="*" element={<Error404 />} />
            {/* <Route path="*" element={<Navigate to="not_found" replace />} /> /}
          </Routes>
        </main>
      </div > */}
      <TaskBar></TaskBar>
    </Router>
  );
}

export default AppRoutingOne;

//! link del curso https://campus.open-bootcamp.com/cursos/1/leccion/209
