import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const Header = styled.div`
  margin-bottom: 48px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  line-height: 1.6;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

export const ProjectCard = styled.div`
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ProjectHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StatusBadge = styled.div<{
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

export const ProjectContent = styled.div`
  padding: 20px;
`;

export const ProjectTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
`;

export const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const ProjectMeta = styled.div`
  display: flex;
  gap: 16px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;

  svg {
    font-size: 14px;
  }
`;

export const TechStack = styled.div`
  padding: 0 20px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TechBadge = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
`;

export const ProjectFooter = styled.div`
  padding: 16px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.02);

  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
  }
`;

export const EntryCount = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
`;
