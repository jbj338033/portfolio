import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TopicLink = styled(Link)<{ compact?: boolean }>`
  display: block;
  padding: ${({ compact }) => (compact ? "12px 16px" : "16px 20px")};
  background: #2c2d32;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #228be6;
    transform: translateY(-2px);
  }
`;

export const TopicHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopicTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #e9ecef;
`;

export const TopicContent = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
  color: #868e96;
  line-height: 1.5;
`;
