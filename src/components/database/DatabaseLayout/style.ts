import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.default};
  overflow: hidden;
`;

export const Sidebar = styled.aside<{ isDetailView: boolean }>`
  width: ${({ isDetailView }) => (isDetailView ? "320px" : "100%")};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  transition: ${({ theme }) => theme.transition.normal};
`;

export const SidebarHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  flex-shrink: 0;
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.lg};

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.paper};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.light};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.border.default};
  }
`;

export const DetailContent = styled.main`
  flex: 1;
  margin-left: 320px;
  min-width: 0;
  height: 100vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.xxl};

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.default};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.light};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.border.default};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.alt};
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
  }

  svg {
    font-size: ${({ theme }) => theme.fontSize.lg};
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
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
  }

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Main = styled.main<{ isDetailView: boolean }>`
  flex: 1;
  margin-left: ${({ isDetailView }) => (isDetailView ? "320px" : "0")};
  min-width: 0;
  height: 100vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.xxl};
  transition: ${({ theme }) => theme.transition.normal};

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.default};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.light};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.border.default};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;
