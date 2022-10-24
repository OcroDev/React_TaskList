import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/Home/homePage.jsx";
import { Error404 } from "./pages/404/error404";
import { AboutPage } from "./pages/about-faqs/AboutPage";

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS ||</Link>
          <Link to='/any404'>| doesn't exist ||</Link>
        </aside>
      </div>
      <Switch>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faqs' element={<AboutPage />} />
        {/* 404 - page not found */}
        <Route path='/not_found' element={<Error404 />} />
        <Route path='*' element={<Navigate to='not_found' replace />} />
      </Switch>
    </Router>
  );
}

export default AppRoutingOne;

//! link del curso https://campus.open-bootcamp.com/cursos/1/leccion/209
