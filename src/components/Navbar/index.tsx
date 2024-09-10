import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [position, setPosition] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  return (
    <NavbarContainer>
      <Tab to="/" setPosition={setPosition}>
        Home
      </Tab>
      <Tab to="/about" setPosition={setPosition}>
        About
      </Tab>
      <Tab to="/awards" setPosition={setPosition}>
        Awards
      </Tab>
      <Tab to="/contacts" setPosition={setPosition}>
        Contacts
      </Tab>
      <Tab to="/projects" setPosition={setPosition}>
        Projects
      </Tab>

      <Cursor position={position} />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  border-radius: 999px;
  background-color: white;
  z-index: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Tab = ({ children, setPosition, to }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <TabContainer
      to={to}
      ref={ref}
      onClick={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          left: ref.current.offsetLeft,
          opacity: 1,
        });
      }}
    >
      {children}
    </TabContainer>
  );
};

const TabContainer = styled(NavLink)`
  position: relative;
  cursor: pointer;
  padding: 0.4rem 1rem;
  text-transform: uppercase;
  mix-blend-mode: difference;
  color: white;
  z-index: 10;
  text-decoration: none;
`;

const Cursor = ({ position }: any) => {
  return <CursorContainer animate={position} />;
};

const CursorContainer = styled(motion.div)`
  position: absolute;
  z-index: 0;
  height: 100%;
  border-radius: 999px;
  background-color: #333;
`;

export default Navbar;
