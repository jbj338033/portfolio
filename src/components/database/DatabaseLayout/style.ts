import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #0a1929;
  overflow: hidden;
`;

export const Sidebar = styled.aside<{ isDetailView: boolean }>`
  width: ${({ isDetailView }) => (isDetailView ? "320px" : "100%")};
  height: 100vh;
  background-color: #0f2942;
  border-right: 1px solid #1e3a5f;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.3s ease;
`;

export const SidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #1e3a5f;
  flex-shrink: 0;
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #0f2942;
  }
  &::-webkit-scrollbar-thumb {
    background: #1e3a5f;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #2d4a6d;
  }
`;

export const DetailContent = styled.main`
  flex: 1;
  margin-left: 320px;
  min-width: 0;
  height: 100vh;
  overflow-y: auto;
  padding: 40px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #0a1929;
  }
  &::-webkit-scrollbar-thumb {
    background: #1e3a5f;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #2d4a6d;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  background: #1e3a5f;
  transition: all 0.2s ease;

  &:hover {
    background: #2563eb;
  }

  svg {
    font-size: 20px;
  }
`;

export const ViewToggle = styled.div`
  display: flex;
  gap: 4px;
`;

export const IconButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background: ${({ active }) => (active ? "#2563eb" : "#1e3a5f")};
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2563eb;
  }

  svg {
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;

  svg {
    color: #60a5fa;
  }
`;

export const Main = styled.main<{ isDetailView: boolean }>`
  flex: 1;
  margin-left: ${({ isDetailView }) => (isDetailView ? "320px" : "0")};
  min-width: 0;
  height: 100vh;
  overflow-y: auto;
  padding: 40px;
  transition: margin-left 0.3s ease;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #0a1929;
  }
  &::-webkit-scrollbar-thumb {
    background: #1e3a5f;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #2d4a6d;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
  }
`;
