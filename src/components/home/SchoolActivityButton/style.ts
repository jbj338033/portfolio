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
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
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
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 8px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
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
  border-radius: 10px;
  background: linear-gradient(135deg, #82c91e, #94d82d);
  color: #fff;
  flex-shrink: 0;
`;

export const Arrow = styled(motion.div)`
  color: #94d82d;
  font-size: 18px;
  flex-shrink: 0;
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemDescription = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Item = styled(motion(Link))`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  text-decoration: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

interface ButtonProps {
  isOpen: boolean;
}

export const Button = styled(motion.button)<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${({ isOpen }) => (isOpen ? "#94d82d" : "rgba(0, 0, 0, 0.85)")};
  color: ${({ isOpen }) => (isOpen ? "#111" : "#fff")};
  border: 1px solid
    ${({ isOpen }) => (isOpen ? "#94d82d" : "rgba(255, 255, 255, 0.1)")};
  border-radius: 30px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: ${({ isOpen }) =>
      isOpen ? "#82c91e" : "rgba(255, 255, 255, 0.1)"};
    border-color: ${({ isOpen }) =>
      isOpen ? "#82c91e" : "rgba(255, 255, 255, 0.2)"};
  }
`;
