import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const SIDEBAR_WIDTH = {
  full: "360px",
  minimal: "68px",
} as const;

const scrollbarStyle = `
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const buttonBase = `
  background: #2c2d32;
  border: none;
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #e9ecef;

  &:hover {
    background: #228be6;
    color: white;
  }

  svg {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #1a1b1e;
  position: relative;
`;

export const HomeNav = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
`;

export const Button = styled.button`
  ${buttonBase}
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const MinimalNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const HomeLink = styled(Link)`
  ${buttonBase}
  padding: 0 16px;
  gap: 8px;
  flex-grow: 1;
  font-size: 14px;
  text-decoration: none;

  &:only-child {
    padding: 0;
    flex-grow: 0;
  }
`;

export const MinimalHomeLink = styled(Link)`
  ${buttonBase}
  text-decoration: none;
`;

export const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  transition: opacity 0.3s ease;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Sidebar = styled.aside<{ isOpen: boolean }>`
  background-color: #25262b;
  width: ${SIDEBAR_WIDTH.full};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 50;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const MinimalSidebar = styled.aside<{ isOpen: boolean }>`
  background-color: #25262b;
  width: ${SIDEBAR_WIDTH.minimal};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #2c2d32;
`;

export const SidebarTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #e9ecef;
  margin: 0 0 8px 0;
`;

export const Period = styled.div`
  color: #868e96;
  font-size: 14px;
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  ${scrollbarStyle}
`;

export const Main = styled.main<{
  isOpen: boolean;
  isProjectListPage: boolean;
}>`
  flex: 1;
  margin-left: ${({ isOpen, isProjectListPage }) =>
    isProjectListPage
      ? "0"
      : isOpen
      ? SIDEBAR_WIDTH.full
      : SIDEBAR_WIDTH.minimal};
  transition: margin-left 0.3s ease;
  min-height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const ContentWrapper = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
