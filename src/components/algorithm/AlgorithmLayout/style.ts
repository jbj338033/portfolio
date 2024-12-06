import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Layout Container
export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
`;

// Sidebar
export const Sidebar = styled.nav<{ isMobileMenuOpen: boolean }>`
  width: 320px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transition.fast};

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

// Search Styles
export const SearchWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

export const SearchContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: ${({ theme }) => theme.spacing.md};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-size: ${({ theme }) => theme.fontSize.md};
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.xxl}`};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.alt};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: ${({ theme }) => theme.transition.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.background.paper};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary.light}1a`};
  }
`;

export const SuggestionList = styled.div`
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing.xs});
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const SuggestionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background.alt};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  }
`;

export const AlgorithmTitle = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const AlgorithmCategory = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.primary.main};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background: ${({ theme }) => `${theme.colors.primary.main}1a`};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

// Menu Styles
export const MenuWrapper = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} 0;
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
`;

export const MenuSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  animation: ${fadeIn} ${({ theme }) => theme.transition.normal};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.md};
  cursor: pointer;
  user-select: none;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.background.alt};
  }
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
  padding: ${({ theme }) => theme.spacing.xs} 0;
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
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.fast};
  line-height: 1.6;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.background.alt};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => `${theme.colors.primary.main}1a`};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border-left: 3px solid ${({ theme }) => theme.colors.primary.main};
  }
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

// Mobile Styles
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

// Main Container
export const MainContainer = styled.main`
  flex: 1;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.xxl};
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;
