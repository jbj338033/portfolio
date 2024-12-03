import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  color: #e9ecef;
`;

export const Header = styled.div`
  margin-bottom: 48px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 40px;
  font-weight: 700;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 18px;
  color: #868e96;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

export const Card = styled(Link)`
  background: #25262b;
  border-radius: 12px;
  padding: 24px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    background: #2c2d32;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #e9ecef;
`;

export const Category = styled.div`
  padding: 6px 12px;
  background: #228be6;
  border-radius: 4px;
  font-size: 14px;
  color: white;
`;

export const TopicsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TopicItem = styled.li`
  color: #ced4da;
  font-size: 16px;
  padding: 8px 0;
  border-bottom: 1px solid #2c2d32;

  &:last-child {
    border-bottom: none;
  }
`;
