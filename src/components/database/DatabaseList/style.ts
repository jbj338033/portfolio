import styled from "@emotion/styled";

export const Container = styled.div<{ viewMode: "list" | "grid" }>`
  display: ${({ viewMode }) => (viewMode === "grid" ? "grid" : "flex")};
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;

export const EntryCard = styled.div<{ isActive: boolean }>`
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
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const WeekBadge = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme, isActive }) =>
    isActive ? `${theme.colors.primary.main}1a` : theme.colors.background.alt};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.secondary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  svg {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const TopicBadge = styled.div<{ isActive: boolean }>`
  background: ${({ theme, isActive }) =>
    isActive ? `${theme.colors.primary.main}1a` : theme.colors.background.alt};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.secondary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Title = styled.h3<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.4;
`;

export const Summary = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const AssignmentBadge = styled.div`
  display: inline-block;
  background: ${({ theme }) => `${theme.colors.primary.main}1a`};
  color: ${({ theme }) => theme.colors.primary.main};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

// List View Styles
export const ListItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background.default};
  border: 1px solid
    ${({ theme, isActive }) =>
      isActive ? theme.colors.primary.main : theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transition.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    background: ${({ theme }) => theme.colors.background.alt};
  }
`;

export const ListWeek = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  min-width: 80px;

  svg {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const ListTitle = styled.div<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListTopic = styled.div<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  background: ${({ theme, isActive }) =>
    isActive ? `${theme.colors.primary.main}1a` : theme.colors.background.alt};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  white-space: nowrap;
`;
