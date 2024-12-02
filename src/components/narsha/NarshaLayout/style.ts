import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const scrollbarStyle = `
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const baseButtonStyles = `
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

export const IconButton = styled.button`
  ${baseButtonStyles}
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #2c2d32;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  height: 36px;
  color: #e9ecef;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  flex-grow: 1;

  &:hover {
    background: #228be6;
    color: white;
  }

  svg {
    font-size: 20px;
  }
`;

export const MinimalHomeLink = styled(Link)`
  ${baseButtonStyles}
  text-decoration: none;
`;

export const Sidebar = styled.aside<{ isOpen: boolean }>`
  background-color: #25262b;
  width: 360px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 50;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MinimalSidebar = styled.aside`
  background-color: #25262b;
  width: 68px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
`;

export const SidebarHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #2c2d32;
`;

export const SidebarTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #e9ecef;
  margin: 0;
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  ${scrollbarStyle}
`;

export const Main = styled.main<{ isSidebarOpen: boolean }>`
  flex: 1;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "360px" : "68px")};
  transition: margin-left 0.3s ease;
  min-height: 100vh;

  @media (max-width: 1024px) {
    margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "300px" : "68px")};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
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
