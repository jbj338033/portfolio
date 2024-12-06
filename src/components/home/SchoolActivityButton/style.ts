import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
`;

export const Menu = styled(motion.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 360px;
  background: ${({ theme }) => theme.colors.background.paper};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: calc(100vw - 48px);
    right: -16px;
  }
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-family: "Fira Code", monospace;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 8px 0;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.main}, ${({ theme }) => theme.colors.primary.light});
  color: ${({ theme }) => theme.colors.text.inverse};
  flex-shrink: 0;
`;

export const Arrow = styled(motion.div)`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.fontSize.md};
  flex-shrink: 0;
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Item = styled(motion(Link))`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.alt};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  transition: ${({ theme }) => theme.transition.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.background.paper};
    border-color: ${({ theme }) => theme.colors.border.default};
  }
`;

interface ButtonProps {
  isOpen: boolean;
}

export const Button = styled(motion.button)<ButtonProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme, isOpen }) => 
    isOpen ? theme.colors.primary.main : theme.colors.background.paper};
  color: ${({ theme, isOpen }) => 
    isOpen ? theme.colors.text.inverse : theme.colors.text.primary};
  border: 1px solid ${({ theme, isOpen }) => 
    isOpen ? theme.colors.primary.main : theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: ${({ theme }) => theme.transition.normal};

  &:hover {
    background: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.primary.hover : theme.colors.background.alt};
    border-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.primary.hover : theme.colors.border.default};
  }
`;
