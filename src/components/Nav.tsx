import { FC } from "react";
import { Link } from "react-router-dom";
import { rootClass, ulClass } from "./Nav.css";

const Nav: FC = () => {
  return (
    <nav className={rootClass}>
      <ul className={ulClass}>
        <li>
          <Link to="/">main</Link>
        </li>
        <li>
          <Link to="/apis">random APIs</Link>
        </li>
        <li>
          <Link to="/message">messaging</Link>
        </li>
        <li>
          <Link to="/camera">camera</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
