import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

export const MenuContainer = styled.div`
  background: rgba(28, 28, 31, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 24px;
  width: 320px;
  animation: ${slideUp} 0.3s ease-out, ${scaleIn} 0.3s ease-out;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 24px rgba(0, 0, 0, 0.4),
    0 0 8px rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    position: fixed;
    bottom: 100px;
    right: 16px;
    left: 16px;
    width: auto;
  }
`;

export const MenuHeader = styled.div`
  margin-bottom: 20px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 4px 0;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const ActivityItem = styled(Link)<{ $color: string }>`
  text-decoration: none;
  border-radius: 16px;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1),
      0 0 12px rgba(255, 255, 255, 0.05);

    .arrow-icon {
      transform: translateX(4px);
      opacity: 1;
    }
  }
`;

export const ActivityContent = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 16px;
`;

export const IconWrapper = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${({ $color }) => `${$color}15`};
  border: 1px solid ${({ $color }) => `${$color}30`};
  box-shadow: 0 0 0 1px ${({ $color }) => `${$color}10`},
    0 0 12px ${({ $color }) => `${$color}15`};
  color: ${({ $color }) => $color};
  flex-shrink: 0;

  svg {
    font-size: 20px;
  }
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const ActivityName = styled.div`
  color: rgba(255, 255, 255, 0.95);
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 2px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
`;

export const ActivityDescription = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
`;

export const ArrowIcon = styled.div`
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  opacity: 0;

  svg {
    font-size: 16px;
  }
`;

export const Trigger = styled.button<{ $isOpen: boolean }>`
  background: rgba(28, 28, 31, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 60px;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 24px rgba(0, 0, 0, 0.4),
    0 0 8px rgba(255, 255, 255, 0.1);

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15),
      0 8px 32px rgba(0, 0, 0, 0.4), 0 0 12px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const TriggerContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);

  svg {
    font-size: 18px;
  }
`;
