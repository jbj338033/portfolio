// NarshaLayout/style.ts
import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #1a1b1e;
`;

export const Sidebar = styled.nav`
  width: 280px;
  height: 100vh;
  background: #1a1b1e;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  overflow-y: auto;

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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 24px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    color: #94d82d;
  }

  svg {
    font-size: 18px;
  }
`;

export const MenuWrapper = styled.div`
  padding: 12px 0;
`;

export const MenuSection = styled.div`
  margin-bottom: 4px;
`;

export const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const MenuTitleText = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 15px;
  margin-right: 8px;
`;

export const StatusBadge = styled.span<{
  status: "ongoing" | "completed" | "planned";
}>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background: ${({ status }) =>
    status === "ongoing"
      ? "rgba(52, 211, 153, 0.1)"
      : status === "completed"
      ? "rgba(156, 163, 175, 0.1)"
      : "rgba(96, 165, 250, 0.1)"};
  color: ${({ status }) =>
    status === "ongoing"
      ? "#34D399"
      : status === "completed"
      ? "#9CA3AF"
      : "#60A5FA"};
  margin-right: auto;
`;

export const MenuChevron = styled.div<{ isOpen: boolean }>`
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  transition: transform 0.2s ease;

  svg {
    font-size: 16px;
  }
`;

export const MenuList = styled.div`
  padding: 6px 0;
`;

export const MenuItem = styled.div`
  margin-bottom: 2px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MenuLink = styled(NavLink)`
  display: block;
  padding: 10px 24px 10px 40px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    background: rgba(148, 216, 45, 0.1);
    border-left: 3px solid #94d82d;
  }
`;

export const WeekBadge = styled.div<{ isActive: boolean }>`
  font-size: 13px;
  color: ${({ isActive }) =>
    isActive ? "#94d82d" : "rgba(255, 255, 255, 0.5)"};
  margin-bottom: 4px;
`;

export const EntryTitle = styled.div<{ isActive: boolean }>`
  font-size: 14px;
  color: ${({ isActive }) =>
    isActive ? "#94d82d" : "rgba(255, 255, 255, 0.8)"};
  line-height: 1.4;
`;

export const MainContainer = styled.main`
  flex: 1;
  min-width: 0;
`;
