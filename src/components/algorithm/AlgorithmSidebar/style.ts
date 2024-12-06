import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
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

export const Container = styled.nav`
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.default};
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
  position: sticky;
  top: 0;
  overflow-y: auto;
  animation: ${fadeIn} ${({ theme }) => theme.transition.normal};
`;

export const HomeLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: "Fira Code", monospace;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  transition: ${({ theme }) => theme.transition.fast};

  svg {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const MenuWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
`;

export const MenuSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  animation: ${fadeIn} ${({ theme }) => theme.transition.normal};
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
  }

  svg {
    color: ${({ theme }) => theme.colors.text.tertiary};
    font-size: ${({ theme }) => theme.fontSize.md};
    transition: ${({ theme }) => theme.transition.fast};
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const MenuList = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xs} 0`};
`;

export const MenuItem = styled.div``;

export const MenuLink = styled(NavLink)`
  display: block;
  padding: ${({ theme }) =>
    `${theme.spacing.sm} ${theme.spacing.xl} ${theme.spacing.sm} ${theme.spacing.xxl}`};
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
    background: ${({ theme }) => theme.colors.primary.light};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
