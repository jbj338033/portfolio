import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 120px 0;
  background: #f4f4f4;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      #222 0px,
      #222 6px,
      transparent 6px,
      transparent 12px
    );
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    font-size: 40px;
    color: #ff3e3e;
    transform: rotate(-8deg);
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: #222;
  margin: 0;
  font-family: "Space Mono", monospace;
  position: relative;
  display: inline-block;

  &:after {
    content: "_";
    animation: blink 1s step-end infinite;
    color: #ff3e3e;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const LogoWrapper = styled.div`
  width: 160px;
  height: 160px;
  flex-shrink: 0;
  background: #fff;
  border: 2px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  transform: rotate(-2deg);
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
  font-weight: 800;
  color: #222;
  margin: 0 0 16px 0;
  font-family: "Space Mono", monospace;
`;

export const CompanyPeriod = styled.div`
  display: inline-block;
  padding: 6px 12px;
  background: #ffe977;
  border: 2px solid #222;
  font-size: 14px;
  color: #222;
  font-family: "Space Mono", monospace;
  margin-bottom: 16px;
  transform: rotate(-1deg);
`;

export const CompanyDescription = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
  font-family: "Space Mono", monospace;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 6px 12px;
  background: #f8f9fa;
  border: 2px solid #222;
  color: #222;
  font-size: 14px;
  font-family: "Space Mono", monospace;
  transform: rotate(-1deg);
`;

export const Timeline = styled.div`
  position: relative;
  padding-left: 32px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: repeating-linear-gradient(
      to bottom,
      #222 0px,
      #222 6px,
      transparent 6px,
      transparent 12px
    );
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
  left: -38px;
  top: 8px;
  width: 16px;
  height: 16px;
  background: #ffe977;
  border: 2px solid #222;
  transform: rotate(45deg);
`;

export const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const TimelineTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin: 0;
  font-family: "Space Mono", monospace;
`;

export const TimelinePeriod = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #ffe977;
  border: 2px solid #222;
  font-size: 13px;
  color: #222;
  font-family: "Space Mono", monospace;
  white-space: nowrap;
  transform: rotate(-1deg);
`;

export const TimelineDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  font-family: "Space Mono", monospace;
  margin: 0;
  padding-left: 12px;
  position: relative;

  &:before {
    content: ">";
    position: absolute;
    left: 0;
    color: #ff3e3e;
  }
`;

export const CompanyCard = styled.div`
  position: relative;
  display: flex;
  gap: 40px;
  padding: 32px;
  background: white;
  border: 2px solid #222;
  box-shadow: 6px 6px 0 #222;
  transition: all 0.2s;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #222;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const TimelineContent = styled.div`
  position: relative;
  padding: 24px;
  background: white;
  border: 2px solid #222;
  box-shadow: 4px 4px 0 #222;
  transition: all 0.2s;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #222;
  }
`;
