import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
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

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
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
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Date = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;

  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
  }
`;

export const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Member = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Section = styled.section<{ variant?: "achievement" | "plan" }>`
  ${({ variant }) =>
    variant &&
    `
    background: ${
      variant === "achievement"
        ? "rgba(52, 211, 153, 0.1)"
        : "rgba(59, 130, 246, 0.1)"
    };
    border-radius: 12px;
    padding: 24px;
    border-left: 4px solid ${variant === "achievement" ? "#34D399" : "#3B82F6"};
  `}
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
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;

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

export const AchievementContent = styled.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

export const PlanContent = styled.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
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

export const NavLink = styled(Link)<{ isNext?: boolean }>`
  flex: 1;
  text-decoration: none;
`;

export const NavCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
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
