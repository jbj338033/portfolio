import styled from "@emotion/styled";

export const Container = styled.div<{ viewMode: "list" | "grid" }>`
  display: ${({ viewMode }) => (viewMode === "grid" ? "grid" : "flex")};
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ viewMode }) => (viewMode === "grid" ? "20px" : "1px")};
  flex-direction: column;
  ${({ viewMode }) =>
    viewMode === "list" &&
    `
    border: 1px solid #1e3a5f;
    border-radius: 12px;
    overflow: hidden;
  `}
`;

export const EntryCard = styled.div<{ isActive: boolean; viewMode: "grid" }>`
  background: ${({ isActive }) => (isActive ? "#1e3a5f" : "#0f2942")};
  border: 1px solid ${({ isActive }) => (isActive ? "#2563eb" : "#1e3a5f")};
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #2563eb;
    background: #1e3a5f;
  }
`;

export const ListItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? "#1e3a5f" : "#0f2942")};
  border-bottom: 1px solid #1e3a5f;
  transition: all 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #1e3a5f;
  }
`;

export const ListWeek = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #60a5fa;
  font-size: 14px;
  min-width: 80px;

  svg {
    font-size: 12px;
  }
`;

export const ListTitle = styled.div`
  color: #fff;
  font-size: 14px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 기존 그리드 뷰 관련 스타일
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
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
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
`;

export const Summary = styled.p`
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AssignmentBadge = styled.div`
  display: inline-block;
  background: #991b1b;
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Date = styled.span`
  display: block;
  color: #64748b;
  font-size: 12px;
`;
