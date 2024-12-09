import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container.md};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const HeaderMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

export const CategoryBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => `${theme.colors.primary.main}1a`};
  color: ${({ theme }) => theme.colors.primary.main};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const DifficultyBadge = styled.div<{
  difficulty: "기본" | "중급" | "심화";
}>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
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

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Keyword = styled.span`
  background: ${({ theme }) => theme.colors.background.alt};
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const InlineMath = styled.code`
  font-family: "KaTeX_Math", serif;
  background: ${({ theme }) => theme.colors.background.alt};
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

export const Section = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xxl};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const ExampleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ExampleItem = styled.div`
  background: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const ExampleHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ExampleTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Problem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.alt};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Solution = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  padding-top: ${({ theme }) => theme.spacing.lg};
`;

export const SolutionTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Explanation = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
`;

export const PrerequisiteList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const PrerequisiteItem = styled.div`
  background: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const PrerequisiteTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const PrerequisiteDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const PrerequisiteLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  &:hover {
    text-decoration: underline;
  }
`;

export const FormulaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const FormulaItem = styled.div`
  background: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const FormulaTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const FormulaDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  margin-top: ${({ theme }) => theme.spacing.md};
`;
