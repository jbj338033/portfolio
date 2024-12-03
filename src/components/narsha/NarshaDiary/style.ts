import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const EntryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Entry = styled.div`
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
`;

export const EntryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const WeekBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;

  svg {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Date = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;

export const Summary = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.5;
`;
