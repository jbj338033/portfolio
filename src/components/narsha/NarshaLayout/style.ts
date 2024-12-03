import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #0a0a0b;
`;

export const SidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ProjectTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;

export const Period = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`;

export const EntryLink = styled(Link)<{ isActive?: boolean }>`
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  margin-bottom: 4px;
  background: ${({ isActive }) =>
    isActive ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  border-left: 3px solid
    ${({ isActive }) => (isActive ? "#3B82F6" : "transparent")};

  &:hover {
    background: ${({ isActive }) =>
      isActive ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.05)"};
  }
`;

export const Week = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 4px;
`;

export const EntryTitle = styled.div`
  font-size: 15px;
  color: #fff;
  font-weight: 500;
`;

export const ProjectSelector = styled.div`
  position: relative;
  margin-bottom: 8px;
`;

export const ProjectButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
    transition: transform 0.2s ease;
  }
`;

export const ProjectDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 50;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const ProjectOption = styled.div<{ isSelected: boolean }>`
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ isSelected }) =>
    isSelected ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const ProjectName = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const ProjectPeriod = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
`;

export const ProjectStatus = styled.div<{ status: "ongoing" | "completed" }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  background: ${({ status }) =>
    status === "ongoing"
      ? "rgba(52, 211, 153, 0.1)"
      : "rgba(156, 163, 175, 0.1)"};
  color: ${({ status }) => (status === "ongoing" ? "#34D399" : "#9CA3AF")};
`;

export const EntrySummary = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-top: 4px;
`;

export const MobileHeader = styled.header`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #141414;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileProjectSelector = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  svg {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const MobileMenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;

  svg {
    font-size: 24px;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #141414;
  z-index: 90;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  display: none;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenuHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const MobileMenuContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`;

export const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 80;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Main 컴포넌트 수정
export const Main = styled.main<{ withSidebar?: boolean }>`
  flex: 1;
  min-width: 0;
  margin-left: ${({ withSidebar }) => (withSidebar ? "320px" : "0")};
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 60px;
  }
`;

// Sidebar 컴포넌트 수정
export const Sidebar = styled.aside`
  width: 320px;
  height: 100vh;
  background: #141414;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  svg {
    font-size: 18px;
  }
`;

export const MobileHomeLink = styled(HomeLink)`
  margin: 0;
  width: 40px;
  height: 40px;
  padding: 0;
  justify-content: center;
`;
