// style.ts
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 0.3s ease;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

export const Count = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled(Link)`
  background: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-2px);
    background: #1a2234;
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.75rem 0;
`;

export const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
`;

export const CardFooter = styled.div`
  margin-top: auto;
`;

export const ComplexityBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(148, 216, 45, 0.1);
  color: #94d82d;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
`;
