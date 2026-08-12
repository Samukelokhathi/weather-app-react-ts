// import { Text } from "../Text/Text";
import navStyle from "./Navbar.module.css";
import { Text } from "../Text/Text";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className={navStyle.logo}>
        <Text variant="h2" children="SkyCast" onClick={() => navigate("/")} />
      </div>
      <ul className={navStyle.navLinks}>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/location");
            }}
          >
            Locations
          </a>
        </li>
        <li>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/settings");
            }}
          >
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
