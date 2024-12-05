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
  background: #1a1b1e;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  overflow-y: auto;
  animation: ${fadeIn} 0.5s ease;
`;

export const HomeLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 24px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  font-family: "Fira Code", monospace;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  svg {
    font-size: 18px;
  }

  &:hover {
    color: #94d82d;
  }
`;

export const MenuWrapper = styled.div`
  padding: 12px 0;
`;

export const MenuSection = styled.div`
  margin-bottom: 4px;
  animation: ${fadeIn} 0.5s ease;
`;

export const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;

  &:hover {
    color: #94d82d;
  }

  svg {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    transition: all 0.2s ease;
  }

  &:hover svg {
    color: #94d82d;
  }
`;

export const MenuList = styled.div`
  padding: 6px 0;
`;

export const MenuItem = styled.div``;

export const MenuLink = styled(NavLink)`
  display: block;
  padding: 10px 24px 10px 40px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
  line-height: 1.6;

  &:hover {
    color: #94d82d;
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    color: #94d82d;
    background: rgba(148, 216, 45, 0.1);
    font-weight: 500;
  }
`;
