// NarshaLayout/style.ts
import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
`;

export const Sidebar = styled.nav`
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
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
    background: ${({ theme }) => theme.colors.border.light};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const MenuWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
`;

export const MenuSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  cursor: pointer;
  user-select: none;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background.alt};
  }
`;

export const MenuTitleText = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

export const StatusBadge = styled.span<{
  status: "ongoing" | "completed" | "planned";
}>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.xs}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  background: ${({ status }) =>
    status === "ongoing"
      ? "rgba(52, 211, 153, 0.1)"
      : status === "completed"
      ? "rgba(156, 163, 175, 0.1)"
      : "rgba(96, 165, 250, 0.1)"};
  color: ${({ theme, status }) =>
    status === "ongoing"
      ? theme.colors.status.ongoing
      : status === "completed"
      ? theme.colors.status.completed
      : theme.colors.status.planned};
  margin-right: auto;
`;

export const MenuChevron = styled.div<{ isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.text.tertiary};
  display: flex;
  align-items: center;
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  transition: ${({ theme }) => theme.transition.fast};

  svg {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const MenuList = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xs} 0`};
`;

export const MenuItem = styled.div`
  margin-bottom: 2px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MenuLink = styled(NavLink)`
  display: block;
  padding: ${({ theme }) =>
    `${theme.spacing.sm} ${theme.spacing.xl} ${theme.spacing.sm} 40px`};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background.alt};
  }

  &.active {
    background: ${({ theme }) => `${theme.colors.primary.light}1a`};
    border-left: 3px solid ${({ theme }) => theme.colors.primary.main};
  }
`;

export const WeekBadge = styled.div<{ isActive: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const EntryTitle = styled.div<{ isActive: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.secondary};
  line-height: 1.4;
`;

export const MainContainer = styled.main`
  flex: 1;
  min-width: 0;
`;
