import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: #1a1b1e;

  @media (max-width: 768px) {
    padding: 80px 16px 40px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
`;

export const WeekBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #4263eb 0%, #5c7cfa 100%);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(76, 99, 235, 0.1);

  svg {
    font-size: 14px;
  }
`;

export const Date = styled.span`
  color: #868e96;
  font-size: 14px;
  font-weight: 500;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 24px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TeamSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 48px;
  padding: 16px 24px;
  background-color: #25262b;
  border-radius: 16px;
  border: 1px solid #2c2d32;
  overflow-x: auto;

  svg {
    font-size: 20px;
    color: #868e96;
    flex-shrink: 0;
  }
`;

export const TeamMembers = styled.span`
  color: #ced4da;
  font-size: 15px;
  white-space: nowrap;
`;

export const Section = styled.section`
  margin-bottom: 48px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 16px;
  color: #ced4da;
  font-size: 16px;
  line-height: 1.6;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #5c7cfa;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Achievement = styled.div`
  background-color: #25262b;
  padding: 24px;
  border-radius: 16px;
  color: #ced4da;
  font-size: 16px;
  line-height: 1.6;
  border-left: 4px solid #5c7cfa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const NextPlan = styled.div`
  background-color: #25262b;
  padding: 24px;
  border-radius: 16px;
  color: #ced4da;
  font-size: 16px;
  line-height: 1.6;
  border-left: 4px solid #ff6b6b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid #2c2d32;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLink = styled(Link)<{ direction: "prev" | "next" }>`
  flex: 1;
  text-decoration: none;
  padding: 20px;
  background: #25262b;
  border-radius: 16px;
  border: 1px solid #2c2d32;
  transition: all 0.2s ease;

  &:hover {
    background: #2c2d32;
    border-color: #343a40;
    transform: translateY(-2px);
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  svg {
    font-size: 20px;
    color: #868e96;
  }
`;

export const NavLabel = styled.div`
  font-size: 13px;
  color: #868e96;
  margin-bottom: 4px;
`;

export const NavWeek = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #e9ecef;
  font-size: 15px;
  font-weight: 600;

  svg {
    font-size: 14px;
    color: #5c7cfa;
  }
`;
