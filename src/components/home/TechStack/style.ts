import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  background: ${({ theme }) => theme.colors.background.default};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.md};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.xxl} 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Category = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const TechItem = styled.div<{ isSelected: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.background.paper : "transparent"};
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.border.default : "transparent"};
`;

export const TechMainWrapper = styled.div`
  position: relative;
`;

export const TechMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background.paper};
  }
`;

export const TechLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const TechRight = styled.div`
  display: flex;
  align-items: center;
`;

export const TechExp = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

export const LevelBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const LevelSegment = styled.div<{ isActive: boolean; color: string }>`
  width: 24px;
  height: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background: ${({ isActive, color, theme }) =>
    isActive ? color : theme.colors.border.default};
  opacity: ${({ isActive }) => (isActive ? 0.8 : 0.3)};
`;

export const TechDetails = styled.div<{ isVisible: boolean; color: string }>`
  max-height: ${({ isVisible }) => (isVisible ? "500px" : "0")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  overflow: hidden;
  transition: ${({ theme }) => theme.transition.normal};
  padding: ${({ theme, isVisible }) =>
    isVisible
      ? `0 ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md}`
      : `0 ${theme.spacing.md}`};
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin: ${({ theme }) => theme.spacing.sm} 0;

  &:before {
    content: "•";
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

export const TechLabel = styled.div<{ color: string }>`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
`;
