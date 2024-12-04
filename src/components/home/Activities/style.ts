import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 120px 0;
  background: #fff;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #111;
  margin-bottom: 48px;
`;

export const TabList = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabItem = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.isActive ? "#f1f3f5" : "transparent")};
  color: ${(props) => (props.isActive ? "#111" : "#666")};
  font-size: 15px;
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f3f5;
  }

  svg {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  min-height: 400px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ActivityCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ccc;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const CardTop = styled.div`
  padding: 24px;
`;

export const CardHeader = styled.div`
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111;
  margin: 0 0 8px 0;
`;

export const Period = styled.div`
  font-size: 14px;
  color: #666;
`;

export const RoleBadge = styled.div`
  display: inline-flex;
  padding: 6px 12px;
  background: #f8f9fa;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 13px;
  color: #495057;
  margin-bottom: 16px;
`;

export const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DescriptionItem = styled.li`
  position: relative;
  padding-left: 12px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: #495057;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #adb5bd;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardBottom = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #eee;
  background: #f8f9fa;
  border-radius: 0 0 12px 12px;
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`;

export const Skill = styled.span`
  padding: 4px 8px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 13px;
  color: #495057;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  color: #111;
  font-size: 13px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ccc;
    background: #f8f9fa;
  }

  svg {
    font-size: 16px;
  }
`;
