import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
`;

export const Sidebar = styled.nav<{ isMobileMenuOpen: boolean }>`
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
  position: sticky;
  top: 0;
  overflow-y: auto;
  transition: transform ${({ theme }) => theme.transition.fast};
  display: flex;
  flex-direction: column;

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
    position: fixed;
    z-index: 50;
    left: 0;
    top: 60px;
    width: 100%;
    height: calc(100vh - 60px);
    transform: ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)"};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const TopSection = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

export const MenuSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  &:last-child {
    margin-bottom: 0;
  }
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

export const MainContainer = styled.main`
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const MobileHeader = styled.header`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 16px;
    background: ${({ theme }) => theme.colors.background.default};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
  }
`;

export const MobileTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const MobileMenuToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.background.alt};
  }

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  &.mobile {
    padding: 0;

    &:hover {
      background: none;
    }
  }

  &.desktop {
    @media (max-width: 768px) {
      display: none;
    }
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
