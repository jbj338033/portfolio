// NarshaDiary/style.ts
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const EntryCard = styled(Link)`
  background: #1a1b1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const WeekBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;

  svg {
    width: 14px;
    height: 14px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Date = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
`;

export const CardBody = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;

export const Summary = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const PreviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PreviewItem = styled.div`
  padding-left: 16px;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
`;

export const PreviewTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4px;
`;

export const PreviewText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardFooter = styled.div`
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
`;

export const ViewMore = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #94d82d;
  font-size: 13px;
  font-weight: 500;
`;

export const ViewMoreIcon = styled.div<{ isHovered: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.isHovered ? "translateX(4px)" : "none")};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  background: #1a1b1e;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
`;
