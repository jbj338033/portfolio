import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ItemPreview = styled.div`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  font-family: "Space Mono", monospace;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 48px;
`;

export const ReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #ff3e3e;
  font-size: 13px;
  font-weight: 600;
  margin-top: 8px;

  svg {
    font-size: 16px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  backdrop-filter: blur(8px);
  animation: ${fadeIn} 0.2s ease-out;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ModalContent = styled.div`
  background: white;
  width: 800px;
  max-width: 95vw;
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid #222;
  box-shadow: 8px 8px 0 #222;
  animation: ${slideIn} 0.3s ease-out;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    max-height: 100vh;
    border: none;
    box-shadow: none;
  }
`;

export const ModalHeader = styled.div`
  padding: 32px;
  border-bottom: 2px solid #222;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    #f8f9fa 10px,
    #f8f9fa 20px
  );
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const ModalIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #ffe977;
  border: 2px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-4deg);

  svg {
    font-size: 24px;
    color: #ff3e3e;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      font-size: 20px;
    }
  }
`;

export const ModalTitle = styled.h2`
  font-size: 28px;
  color: #222;
  margin: 0;
  font-family: "Space Mono", monospace;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ModalBody = styled.div`
  padding: 32px;
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f4f4f4;
  }

  &::-webkit-scrollbar-thumb {
    background: #222;
    border: 2px solid #f4f4f4;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const ModalSection = styled.div`
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 2px dashed #222;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
    padding-bottom: 24px;
  }
`;

export const ModalLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #666;
  margin-bottom: 12px;
  font-family: "Space Mono", monospace;
  text-transform: uppercase;
`;

export const ItemDescription = styled.div`
  color: #666;
  font-size: 15px;
  line-height: 1.6;
  font-family: "Space Mono", monospace;
`;

export const DescriptionParagraph = styled.p`
  margin: 0 0 12px 0;
  position: relative;
  padding-left: 16px;

  &:before {
    content: ">";
    position: absolute;
    left: 0;
    color: #ff3e3e;
    font-family: "Space Mono", monospace;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: white;
  border: 2px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 1;

  svg {
    font-size: 24px;
    color: #222;
  }

  &:hover {
    background: #ff3e3e;
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 #222;

    svg {
      color: white;
    }
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    top: 12px;
    right: 12px;
    border-width: 1.5px;

    svg {
      font-size: 20px;
    }

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
  font-family: "Space Mono", monospace;

  svg {
    font-size: 48px;
    color: #ddd;
    margin-bottom: 16px;
  }

  h4 {
    font-size: 18px;
    color: #222;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 14px;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    svg {
      font-size: 40px;
    }

    h4 {
      font-size: 16px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const Container = styled.section`
  width: 100%;
  padding: 120px 0;
  background: #f4f4f4;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    padding: 0 16px;
    gap: 40px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
  }
`;

export const TitleArea = styled.div`
  flex-shrink: 0;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: #222;
  margin: 0;
  font-family: "Space Mono", monospace;
  position: relative;
  display: inline-block;

  &:after {
    content: "_";
    animation: blink 1s step-end infinite;
    color: #ff3e3e;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const CategoryTabs = styled.div`
  display: flex;
  gap: 16px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CategoryTab = styled.button<{ isActive: boolean }>`
  height: 48px;
  padding: 0 24px;
  background: ${(props) => (props.isActive ? "#222" : "#fff")};
  color: ${(props) => (props.isActive ? "#fff" : "#222")};
  border: 2px solid #222;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  font-family: "Space Mono", monospace;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: ${(props) => (props.isActive ? "none" : "4px 4px 0 #222")};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: ${(props) =>
      props.isActive ? "none" : "translate(-2px, -2px)"};
    box-shadow: ${(props) => (props.isActive ? "none" : "6px 6px 0 #222")};
  }

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(props) => (props.isActive ? "#ffe977" : "transparent")};
    transform: ${(props) =>
      props.isActive ? "skew(-10deg) translateX(-100%)" : "none"};
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: ${(props) =>
      props.isActive ? "skew(-10deg) translateX(0)" : "none"};
  }

  svg {
    font-size: 20px;
    color: ${(props) => (props.isActive ? "#ffe977" : "#ff3e3e")};
    z-index: 1;
  }

  span {
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex: 1;
    height: 44px;
    padding: 0 16px;
    font-size: 14px;
  }
`;

export const TabCount = styled.div`
  background: #ff3e3e;
  color: white;
  height: 20px;
  padding: 0 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 6px;
    font-size: 11px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.article`
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: #222;
    z-index: -1;
    transition: all 0.2s;
  }

  &:hover {
    transform: translate(-4px, -4px);

    &:before {
      transform: translate(8px, 8px);
    }
  }
`;

export const ItemContent = styled.div`
  flex: 1;
  border: 2px solid #222;
  padding: 24px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: #222;
  margin: 0;
  font-family: "Space Mono", monospace;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ItemDate = styled.span`
  font-size: 13px;
  height: 28px;
  padding: 0 12px;
  background: #ffe977;
  border: 2px solid #222;
  color: #222;
  display: flex;
  align-items: center;
  font-family: "Space Mono", monospace;
  font-weight: 700;
`;

export const ItemOrganization = styled.span`
  font-size: 13px;
  height: 28px;
  padding: 0 12px;
  background: #f8f9fa;
  border: 2px solid #222;
  color: #222;
  display: flex;
  align-items: center;
  font-family: "Space Mono", monospace;
`;

export const ItemBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 2px dashed #222; // #eee에서 #222로 변경
`;

export const ItemNumber = styled.div`
  height: 28px;
  padding: 0 12px;
  background: #fff;
  border: 2px solid #222;
  font-size: 13px;
  color: #222;
  display: flex;
  align-items: center;
  font-family: "Space Mono", monospace;
  font-weight: 500;
  gap: 4px;

  &:before {
    content: "#";
    color: #ff3e3e;
    font-weight: 700;
  }
`;

export const ItemRank = styled.div`
  height: 28px;
  padding: 0 12px;
  background: #ffe977;
  border: 2px solid #222;
  font-size: 13px;
  color: #222;
  display: flex;
  align-items: center;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  gap: 4px;

  &:before {
    content: "★";
    color: #ff3e3e;
  }
`;
