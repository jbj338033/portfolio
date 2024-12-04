// style.ts
import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 120px 0;
  background: linear-gradient(to bottom, #ffffff, #fafafa);
  border-bottom: 1px solid #eee;
`;

export const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #111;
  margin: 0 0 64px 0;
  font-family: "Fira Code", monospace;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 0;
    width: 60px;
    height: 3px;
    background: #228be6;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 48px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Category = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 24px;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f3f5;
`;

export const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 20px;
  color: #228be6;
  background: #e7f5ff;
  border-radius: 8px;
`;

export const CategoryTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  font-family: "Fira Code", monospace;
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TechItem = styled.div<{ isSelected: boolean }>`
  border-radius: 8px;
  transition: all 0.2s ease;
  background: ${(props) => (props.isSelected ? "#f8f9fa" : "transparent")};
  border: 1px solid ${(props) => (props.isSelected ? "#e9ecef" : "transparent")};
`;

export const TechMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }
`;

export const TechLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TechRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TechLabel = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Fira Code", monospace;
  font-size: 15px;
  color: ${(props) => props.color};
  font-weight: 500;

  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: ${(props) => props.color};
    opacity: 0.8;
  }
`;

export const TechExp = styled.span`
  font-size: 13px;
  color: #666;
  opacity: 0.8;
  font-family: "Inter", sans-serif;
  background: #f1f3f5;
  padding: 2px 8px;
  border-radius: 4px;
`;

export const LevelBar = styled.div`
  display: flex;
  gap: 3px;
  padding: 4px;
  background: #f8f9fa;
  border-radius: 4px;
`;

export const LevelSegment = styled.div<{ isActive: boolean; color: string }>`
  width: 16px;
  height: 6px;
  border-radius: 1px;
  background: ${(props) => (props.isActive ? props.color : "#e9ecef")};
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  transition: all 0.2s ease;
`;

export const TechDetails = styled.div<{ isVisible: boolean; color: string }>`
  max-height: ${(props) => (props.isVisible ? "500px" : "0")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  overflow: hidden;
  transition: all 0.3s ease;
  padding: ${(props) => (props.isVisible ? "0 16px 16px 16px" : "0 16px")};
  margin-top: ${(props) => (props.isVisible ? "8px" : "0")};
  border-top: ${(props) => (props.isVisible ? "1px solid #f1f3f5" : "none")};
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 14px;
  color: #495057;
  line-height: 1.6;
  margin: 12px 0;
  padding-left: 8px;

  &:first-of-type {
    margin-top: 16px;
  }
`;

export const DetailBullet = styled.div<{ color: string }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin-top: 8px;
  flex-shrink: 0;
`;
