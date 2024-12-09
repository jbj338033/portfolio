import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
`;

export const TopSection = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin: 0;

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const ViewToggle = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const IconButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary.main : theme.colors.background.alt};
  color: ${({ active, theme }) =>
    active ? theme.colors.background.paper : theme.colors.text.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.background.paper};
  }

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
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

export const SidebarContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  min-width: 0;

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
`;

export const Sidebar = styled.nav<{
  isMobileMenuOpen: boolean;
  isDetailView: boolean;
}>`
  width: 320px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  transition: all ${({ theme }) => theme.transition.fast};

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

export const MainContainer = styled.main`
  flex: 1;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;
