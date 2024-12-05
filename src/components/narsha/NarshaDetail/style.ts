// NarshaDetail/style.ts
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const Header = styled.header`
  margin-bottom: 48px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const WeekBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Date = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
`;

export const StatusBadge = styled.span<{
  status: "ongoing" | "completed" | "planned";
}>`
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  background: ${({ status }) =>
    status === "ongoing"
      ? "rgba(52, 211, 153, 0.1)"
      : status === "completed"
      ? "rgba(156, 163, 175, 0.1)"
      : "rgba(96, 165, 250, 0.1)"};
  color: ${({ status }) =>
    status === "ongoing"
      ? "#34D399"
      : status === "completed"
      ? "#9CA3AF"
      : "#60A5FA"};
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TeamInfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #1a1b1e;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const TeamList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const TeamMember = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Section = styled.section<{
  variant?: "achievement" | "plan";
}>`
  background: #1a1b1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  border-left: ${({ variant }) =>
    variant
      ? `4px solid ${variant === "achievement" ? "#34D399" : "#3B82F6"}`
      : "1px solid rgba(255, 255, 255, 0.1)"};
  background: ${({ variant }) =>
    variant
      ? variant === "achievement"
        ? "rgba(52, 211, 153, 0.05)"
        : "rgba(59, 130, 246, 0.05)"
      : "#1a1b1e"};
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 15px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 15px;
  white-space: pre-wrap;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 24px;
  margin-top: 60px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

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
  gap: 16px;
  padding: 20px;
  background: #1a1b1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.2s ease;
  flex-direction: ${({ isNext }) => (isNext ? "row-reverse" : "row")};

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const NavContent = styled.div`
  flex: 1;
`;

export const NavLabel = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 4px;
`;

export const NavTitle = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const NavWeek = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
`;
