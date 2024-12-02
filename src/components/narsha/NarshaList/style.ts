import styled from "@emotion/styled";

export const Container = styled.div<{ $compact: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $compact }) => ($compact ? "12px" : "24px")};
`;

export const EntryCard = styled.div<{ $isActive?: boolean; $compact: boolean }>`
  background: ${({ $isActive }) => ($isActive ? "#2c2d32" : "#25262b")};
  border-radius: 12px;
  padding: ${({ $compact }) => ($compact ? "16px" : "24px")};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#5c7cfa" : "#2c2d32")};

  &:hover {
    background: #2c2d32;
  }
`;

export const EntryHeader = styled.div<{ $compact: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ $compact }) => ($compact ? "8px" : "16px")};
`;

export const WeekBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #2c2d32;
  color: #e9ecef;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;

  svg {
    font-size: 13px;
  }
`;

export const Date = styled.span`
  color: #868e96;
  font-size: 13px;
`;

export const EntryTitle = styled.h3<{ $compact: boolean }>`
  font-size: ${({ $compact }) => ($compact ? "15px" : "20px")};
  font-weight: 600;
  color: #e9ecef;
  margin-bottom: ${({ $compact }) => ($compact ? "0" : "12px")};
  line-height: 1.4;
`;

export const EntrySummary = styled.p`
  color: #adb5bd;
  font-size: 14px;
  line-height: 1.6;
`;
