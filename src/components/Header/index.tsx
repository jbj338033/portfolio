import { IoSunnyOutline } from "react-icons/io5";
import {
  Container,
  Logo,
  LogoImage,
  Menu,
  MenuItem,
  ToggleDarkMode,
} from "./style";
import { useDarkModeStore } from "../../stores/darkModeStore";
import { MdOutlineNightsStay } from "react-icons/md";

const Header = () => {
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  return (
    <Container>
      <Logo>
        <LogoImage src="/profile.jpg" alt="Logo" />
      </Logo>

      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/awards">Awards</MenuItem>
        <MenuItem to="/contacts">Contacts</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
      </Menu>

      <ToggleDarkMode onClick={toggleDarkMode}>
        {isDarkMode ? <MdOutlineNightsStay /> : <IoSunnyOutline />}
      </ToggleDarkMode>
    </Container>
  );
};

export default Header;
