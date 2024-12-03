import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #f8f9fa;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;

  svg {
    font-size: 24px;
    color: #333;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const Category = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 24px;
  }
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
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #f8f9fa;
  color: #228be6;
  font-size: 24px;
`;

export const CategoryTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TechItem = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: #f8f9fa;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const TechHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const TechName = styled.h4<{ color: string }>`
  font-size: 18px;
  font-weight: 600;
  color: ${({ color }) => color};
  padding: 6px 16px;
  background-color: ${({ color }) => `${color}15`};
  border-radius: 20px;
`;

export const TechInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TechLevel = styled.div`
  display: flex;
  gap: 4px;
`;

export const LevelDot = styled.div<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? "#228be6" : "#dee2e6")};
`;

export const TechExperience = styled.span`
  font-size: 14px;
  color: #868e96;
  padding: 4px 12px;
  background-color: #e9ecef;
  border-radius: 20px;
`;

export const DescriptionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const DescriptionItem = styled.li`
  position: relative;
  padding-left: 16px;
  margin-bottom: 8px;
  color: #495057;
  font-size: 15px;
  line-height: 1.6;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #228be6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
