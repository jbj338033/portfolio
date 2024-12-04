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

export const Container = styled.section`
  width: 100%;
  padding: 120px 0;
  background: #f4f4f4;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      #222 0px,
      #222 6px,
      transparent 6px,
      transparent 12px
    );
  }

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

  svg {
    font-size: 20px;
    color: ${(props) => (props.isActive ? "#ffe977" : "#ff3e3e")};
  }

  &:hover {
    transform: ${(props) =>
      props.isActive ? "none" : "translate(-2px, -2px)"};
    box-shadow: ${(props) => (props.isActive ? "none" : "6px 6px 0 #222")};
  }

  @media (max-width: 768px) {
    flex: 1;
    height: 44px;
    padding: 0 16px;
    font-size: 14px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  animation: ${fadeIn} 0.3s ease-out;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    max-width: 700px;
    margin: 0 auto;
  }
`;

export const Item = styled.div`
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
`;

export const Period = styled.span`
  display: inline-flex;
  padding: 6px 12px;
  background: #ffe977;
  border: 2px solid #222;
  font-size: 13px;
  color: #222;
  font-family: "Space Mono", monospace;
  box-shadow: 2px 2px 0 #222;
`;

export const RoleBadge = styled.div`
  display: inline-flex;
  padding: 6px 12px;
  background: #ff3e3e;
  border: 2px solid #222;
  font-size: 13px;
  color: white;
  font-family: "Space Mono", monospace;
  box-shadow: 2px 2px 0 #222;
`;

export const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DescriptionItem = styled.li`
  position: relative;
  padding-left: 16px;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  font-family: "Space Mono", monospace;

  &:before {
    content: ">";
    position: absolute;
    left: 0;
    color: #ff3e3e;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 2px dashed #eee;
`;

export const Skill = styled.span`
  height: 28px;
  padding: 0 12px;
  background: #f8f9fa;
  border: 2px solid #222;
  font-size: 13px;
  color: #222;
  display: flex;
  align-items: center;
  font-family: "Space Mono", monospace;
  box-shadow: 2px 2px 0 #222;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border: 2px solid #222;
  color: #222;
  font-size: 14px;
  font-family: "Space Mono", monospace;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 3px 3px 0 #222;

  svg {
    color: #ff3e3e;
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #222;
    background: #ffe977;
  }
`;
