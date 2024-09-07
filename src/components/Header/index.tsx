import { IoSunnyOutline } from "react-icons/io5";
import {
  Container,
  Logo,
  LogoImage,
  Menu,
  MenuItem,
  ToggleDarkMode,
} from "./style";

const Header = () => {
  return (
    <Container>
      <Logo>
        <LogoImage src="/profile.jpg" alt="Logo" />
      </Logo>

      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/awards">Awards</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
      </Menu>

      <ToggleDarkMode>
        <IoSunnyOutline />
      </ToggleDarkMode>
    </Container>
  );
};

export default Header;
