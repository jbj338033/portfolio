// style.ts
import styled from "@emotion/styled";
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
  max-width: 900px;
  margin: 0 auto;
  animation: ${fadeIn} 0.3s ease;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 1rem 0;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Category = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(148, 216, 45, 0.1);
  color: #94d82d;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Section = styled.section`
  background: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: #1a2234;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1rem 0;
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
`;

export const ComplexityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const ComplexityCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ComplexityTitle = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
`;

export const ComplexityValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  font-family: "Fira Code", monospace;
`;

export const CodeWrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
  font-family: "Fira Code", monospace;
  font-size: 0.875rem;
  line-height: 1.7;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: #ef4444;
  font-size: 1.125rem;
  margin-top: 2rem;
  background: rgba(239, 68, 68, 0.1);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: rgba(255, 255, 255, 0.9);
`;
