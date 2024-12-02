import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface StyleProps {
  isScrolled: boolean;
  isActive?: boolean;
}

interface MobileNavProps {
  isOpen: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 1000;
`;

export const Container = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? "blur(10px)" : "none")};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 1px 10px rgba(0, 0, 0, 0.05)" : "none"};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.h1<{ isScrolled: boolean }>`
  font-size: 20px;
  font-weight: 600;
  color: ${({ isScrolled }) => (isScrolled ? "#333" : "#fff")};
  transition: color 0.3s ease;
`;

export const DesktopNav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.button<StyleProps>`
  background: none;
  border: none;
  padding: 4px 8px;
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  color: ${({ isScrolled, isActive }) => {
    if (isScrolled) {
      return isActive ? "#111" : "#495057";
    }
    return isActive ? "#fff" : "rgba(255, 255, 255, 0.8)";
  }};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: ${({ isScrolled, isActive }) => {
      if (!isActive) return "transparent";
      return isScrolled ? "#111" : "#fff";
    }};
    transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ isScrolled }) => (isScrolled ? "#111" : "#fff")};

    &::after {
      transform: scaleX(1);
      background-color: ${({ isScrolled }) => (isScrolled ? "#111" : "#fff")};
    }
  }
`;

export const MobileMenuButton = styled.button<{ isScrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  padding: 8px;
  color: ${({ isScrolled }) => (isScrolled ? "#333" : "#fff")};
  cursor: pointer;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    svg {
      transition: transform 0.3s ease;
    }
  }
`;

export const MobileNav = styled.nav<MobileNavProps>`
  position: fixed;
  inset: 0;
  top: 60px;
  background: ${({ isOpen }) =>
    isOpen ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  backdrop-filter: blur(10px);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.25s ease;
  animation: ${fadeIn} 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavItem = styled.button<{ isActive?: boolean }>`
  position: relative;
  width: 100%;
  background: none;
  border: none;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  color: ${({ isActive }) => (isActive ? "#111" : "#495057")};
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    background: rgba(0, 0, 0, 0.02);
    color: #111;
  }

  &:active {
    background: rgba(0, 0, 0, 0.04);
  }
`;
