import Navbar from "../Navbar";
import { Container, Logo, LogoImage, Menu, MenuItem } from "./style";

const Header = () => {
  return (
    <Container>
      <Logo>
        <LogoImage src="/profile.jpg" alt="Logo" />
      </Logo>

      {/* <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/awards">Awards</MenuItem>
        <MenuItem to="/contacts">Contacts</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
      </Menu> */}

      <Navbar />
    </Container>
  );
};

export default Header;
