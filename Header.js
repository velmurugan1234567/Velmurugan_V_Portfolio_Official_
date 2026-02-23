import { useState } from "react";
import { Link} from "react-router-dom";
import "./Header.css";

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

const menuItems = [
  { icon: "fa-solid fa-house", path: "/home" },
  { icon: "fa-solid fa-id-card", path: "/about" },
  { icon: "fa-solid fa-laptop-code", path: "/projects" },
  { icon: "fa-solid fa-pen-nib", path: "/blog" },
  { icon: "fa-solid fa-paper-plane", path: "/contact" },
];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const pointerStyle = {
    left: `${(100 / menuItems.length) * activeIndex}%`
  };

  return (
    <nav className="navigation-bar">
      <ul className="list-items">
        <span className="pointer" style={pointerStyle}></span>

        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <Link className="link" to={item.path}>
              <i className={`fas ${item.icon}`}></i>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;