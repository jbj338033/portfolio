import styled from "@emotion/styled";

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

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: #222;
  margin: 0 0 64px 0;
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
    margin-bottom: 48px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Category = styled.div`
  border: 2px solid #222;
  background: white;
  box-shadow: 6px 6px 0 #222;
  padding: 24px;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px dashed #222;
`;

export const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ffe977;
  border: 2px solid #222;
  transform: rotate(-4deg);

  svg {
    font-size: 20px;
    color: #222;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #222;
  margin: 0;
  font-family: "Space Mono", monospace;
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TechItem = styled.div<{ isSelected: boolean }>`
  border: 2px solid ${(props) => (props.isSelected ? "#222" : "transparent")};
  background: ${(props) => (props.isSelected ? "#f8f9fa" : "transparent")};
  transition: all 0.2s;
`;

export const TechMainWrapper = styled.div`
  position: relative;
`;

export const TechMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
  }
`;

export const TechLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TechRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TechLabel = styled.div<{ color: string }>`
  font-family: "Space Mono", monospace;
  font-size: 15px;
  color: #222;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const TechExp = styled.span`
  padding: 4px 8px;
  background: #ffe977;
  border: 1.5px solid #222;
  font-size: 13px;
  color: #222;
  transform: rotate(-2deg);
`;

export const LevelBar = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px 8px;
  background: white;
  border: 1.5px solid #222;
`;

export const LevelSegment = styled.div<{ isActive: boolean; color: string }>`
  width: 12px;
  height: 12px;
  background: ${(props) => (props.isActive ? props.color : "#f8f9fa")};
  border: 1.5px solid #222;
  transition: all 0.2s;
`;

export const TechDetails = styled.div<{ isVisible: boolean; color: string }>`
  max-height: ${(props) => (props.isVisible ? "500px" : "0")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  overflow: hidden;
  transition: all 0.3s;
  padding: ${(props) => (props.isVisible ? "0 16px 16px" : "0 16px")};
  margin-top: ${(props) => (props.isVisible ? "8px" : "0")};
  border-top: ${(props) => (props.isVisible ? "2px dashed #222" : "none")};
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: #666;
  font-family: "Space Mono", monospace;
  line-height: 1.6;
  margin: 12px 0;
  padding-left: 8px;
  position: relative;

  &:before {
    content: ">";
    position: absolute;
    left: -4px;
    color: #ff3e3e;
    font-family: "Space Mono", monospace;
  }
`;

export const MobileHint = styled.div`
  display: none;
  font-family: "Space Mono", monospace;
  color: #666;
  font-size: 13px;
  margin-top: 8px;
  text-align: center;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const ClickHint = styled.div`
  position: absolute;
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const HandIcon = styled.div`
  color: #ff3e3e;
  font-size: 20px;
  animation: wave 1s ease-in-out infinite;

  @keyframes wave {
    0%,
    100% {
      transform: rotate(-35deg);
    }
    50% {
      transform: rotate(-25deg);
    }
  }

  svg {
    filter: drop-shadow(2px 2px 0 #222);
  }
`;
