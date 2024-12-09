import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Content = styled.div`
  max-width: ${({ theme }) => theme.container.sm};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

export const WeekBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const StatusBadge = styled.span<{
  status: "ongoing" | "completed" | "planned";
}>`
  display: inline-flex;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  background: ${({ status }) =>
    status === "ongoing"
      ? "rgba(52, 211, 153, 0.1)"
      : status === "completed"
      ? "rgba(156, 163, 175, 0.1)"
      : "rgba(96, 165, 250, 0.1)"};
  color: ${({ theme, status }) =>
    status === "ongoing"
      ? theme.colors.status.ongoing
      : status === "completed"
      ? theme.colors.status.completed
      : theme.colors.status.planned};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const TeamInfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.light};

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

export const TeamList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const TeamMember = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Section = styled.section<{
  variant?: "achievement" | "plan";
}>`
  background: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border-left: ${({ theme, variant }) =>
    variant
      ? `4px solid ${
          variant === "achievement"
            ? theme.colors.status.ongoing
            : theme.colors.status.planned
        }`
      : `1px solid ${theme.colors.border.light}`};
  background: ${({ theme, variant }) =>
    variant
      ? variant === "achievement"
        ? "rgba(52, 211, 153, 0.05)"
        : "rgba(59, 130, 246, 0.05)"
      : theme.colors.background.default};
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.fontSize.md};

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  font-size: ${({ theme }) => theme.fontSize.md};
  white-space: pre-wrap;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLink = styled(Link)`
  flex: 1;
  text-decoration: none;
`;

export const NavCard = styled.div<{ isNext?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: ${({ theme }) => theme.transition.fast};
  flex-direction: ${({ isNext }) => (isNext ? "row-reverse" : "row")};

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.default};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

export const NavContent = styled.div`
  flex: 1;
`;

export const NavLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const NavTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const NavWeek = styled.div`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
