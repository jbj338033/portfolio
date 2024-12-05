import styled from "@emotion/styled";
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

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.8);
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.7)
  );
  z-index: 2;
`;

export const Inner = styled.div`
  position: relative;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  padding: 120px 0 60px;
`;

export const Texts = styled.div`
  animation: ${fadeIn} 1s ease;
`;

export const Greeting = styled.span`
  display: block;
  font-family: "Fira Code", monospace;
  font-size: 18px;
  color: #94d82d;
  margin-bottom: 24px;
  opacity: 0.9;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const Dot = styled.span`
  color: #94d82d;
`;

export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  line-height: 1.4;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Name = styled.span`
  font-weight: 700;
  color: #94d82d;
`;

export const Description = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    br {
      display: none;
    }
  }
`;

export const ScrollButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    animation: ${bounce} 2s ease-in-out infinite;
  }

  &:hover {
    color: #94d82d;
  }
`;

export const ScrollText = styled.span`
  font-family: "Fira Code", monospace;
  font-size: 14px;
  opacity: 0.8;
`;
