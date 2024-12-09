import styled from "@emotion/styled";

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

export const WeekBadge = styled.div`
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

export const TopicBadge = styled.div`
  background: ${({ theme }) => theme.colors.background.alt};
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSize.sm};
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

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: ${({ theme }) => `${theme.spacing.xxl} 0 ${theme.spacing.lg}`};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: ${({ theme }) => `${theme.spacing.xl} 0 ${theme.spacing.md}`};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  ul,
  ol {
    margin: ${({ theme }) => `${theme.spacing.md} 0`};
    padding-left: ${({ theme }) => theme.spacing.xl};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary.main};
    padding-left: ${({ theme }) => theme.spacing.md};
    margin: ${({ theme }) => `${theme.spacing.xl} 0`};
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

export const CodeBlock = styled.pre`
  background: ${({ theme }) => theme.colors.background.alt};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: "Fira Code", monospace;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  overflow-x: auto;
  margin: ${({ theme }) => `${theme.spacing.xl} 0`};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
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

export const AssignmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Assignment = styled.div`
  background: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const AssignmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

export const AssignmentTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const DueDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.fontSize.sm};

  svg {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

export const AssignmentContent = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.6;
`;

export const ResourceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ResourceLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background.alt};
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const ResourceTitle = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const ResourceType = styled.span`
  background: ${({ theme }) => theme.colors.background.alt};
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
