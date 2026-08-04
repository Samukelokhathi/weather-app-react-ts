// import { Text } from "../Text/Text";
import navStyle from "./Navbar.module.css";
import { Text } from "../Text/Text";

export default function Navbar() {
  return (
    <nav>
      <div className={navStyle.logo}>
        <Text variant="h2" children="SkyCast" />
      </div>
      <ul className={navStyle.navLinks}>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Setting</a>
        </li>
      </ul>
    </nav>
  );
}
