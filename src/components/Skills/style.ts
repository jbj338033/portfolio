import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #f7dc67;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;

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
  background: #fff9e7;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const Category = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #333;
`;

export const CategoryTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SkillItem = styled.div<{ color: string }>`
  padding: 6px 16px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  color: ${({ color }) =>
    ["#F7DF1E", "#FFCA28", "#FF9900", "#3ECF8E"].includes(color)
      ? "#000"
      : "#fff"};
  font-size: 14px;
  font-weight: 500;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
