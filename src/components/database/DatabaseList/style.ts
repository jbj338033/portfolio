import styled from "@emotion/styled";

export const Container = styled.div<{ $compact: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $compact }) => ($compact ? "12px" : "24px")};
`;

export const EntryCard = styled.div<{ $isActive?: boolean; $compact: boolean }>`
  background: ${({ $isActive }) => ($isActive ? "#1e3a5f" : "#0f2942")};
  border-radius: 12px;
  padding: ${({ $compact }) => ($compact ? "16px" : "24px")};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#2563eb" : "#1e3a5f")};

  &:hover {
    background: #1e3a5f;
    transform: translateY(-2px);
  }
`;

export const EntryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

export const WeekBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #2563eb;
  color: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
`;

export const TopicBadge = styled.div`
  background: #0d9488;
  color: #fff;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
`;

export const EntryTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
  line-height: 1.4;
`;

export const Summary = styled.p`
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const CodePreview = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #0a1929;
  padding: 6px 12px;
  border-radius: 6px;
  color: #94a3b8;
  font-size: 13px;
  font-family: "Fira Code", monospace;
  margin-bottom: 16px;
`;

export const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

export const Keyword = styled.span`
  background: #1e3a5f;
  color: #94a3b8;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

export const AssignmentBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: #991b1b;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Date = styled.span`
  display: block;
  color: #64748b;
  font-size: 13px;
`;
