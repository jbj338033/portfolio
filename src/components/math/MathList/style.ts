import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 100%;
`;

export const TopicCard = styled.div<{ isActive: boolean }>`
  background: ${({ theme }) => theme.colors.background.default};
  border: 1px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.primary.main : theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.fast};
  height: fit-content;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.background.alt};
    transform: translateY(-2px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CategoryBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => `${theme.colors.primary.main}1a`};
  color: ${({ theme }) => theme.colors.primary.main};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  svg {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const DifficultyBadge = styled.div<{
  difficulty: "기본" | "중급" | "심화";
}>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  background: ${({ theme, difficulty }) =>
    difficulty === "기본"
      ? `${theme.colors.status.ongoing}1a`
      : difficulty === "중급"
      ? `${theme.colors.status.planned}1a`
      : `${theme.colors.status.error}1a`};
  color: ${({ theme, difficulty }) =>
    difficulty === "기본"
      ? theme.colors.status.ongoing
      : difficulty === "중급"
      ? theme.colors.status.planned
      : theme.colors.status.error};
`;

export const Title = styled.h3<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.4;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const PrerequisiteBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.xs};

  svg {
    color: ${({ theme }) => theme.colors.status.planned};
  }
`;

export const KeywordList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Keyword = styled.span`
  background: ${({ theme }) => theme.colors.background.alt};
  color: ${({ theme }) => theme.colors.text.tertiary};
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const ExampleCount = styled.div`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
