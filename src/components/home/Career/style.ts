import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #fff;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 60px;

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
`;

export const CompanyCard = styled.div`
  display: flex;
  gap: 40px;
  padding: 32px;
  background-color: #f8f9fa;
  border-radius: 16px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CompanyInfo = styled.div`
  flex: 1;
`;

export const CompanyName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const CompanyPeriod = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
`;

export const CompanyDescription = styled.p`
  font-size: 16px;
  color: #495057;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 6px 12px;
  background-color: #e7f5ff;
  color: #1c7ed6;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

export const Timeline = styled.div`
  position: relative;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background-color: #e9ecef;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 32px;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: -36px;
  top: 8px;
  width: 12px;
  height: 12px;
  background-color: #339af0;
  border-radius: 50%;
  border: 2px solid white;
`;

export const TimelineContent = styled.div`
  padding: 16px 24px;
  background-color: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(8px);
  }
`;

export const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const TimelineTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const TimelinePeriod = styled.span`
  font-size: 14px;
  color: #868e96;
  white-space: nowrap;
`;

export const TimelineDescription = styled.p`
  font-size: 15px;
  color: #495057;
  line-height: 1.6;
`;
