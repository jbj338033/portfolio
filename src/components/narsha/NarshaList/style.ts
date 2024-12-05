// NarshaList/style.ts
import styled from "@emotion/styled";

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  height: 48px;
  padding: 0 1rem 0 3rem;
  background: #1a1b1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #94d82d;
    background: #1e293b;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: #1a1b1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #94d82d;
  }
`;

export const CardHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CardBody = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

export const MetaInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechItem = styled.span`
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
`;

export const CardFooter = styled.div`
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
`;

export const EntryCount = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
`;

export const EmptyMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  background: #1a1b1e;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
