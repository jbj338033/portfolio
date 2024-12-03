import styled from "@emotion/styled";

export const HomeButton = styled.button`
  position: absolute;
  left: 40px;
  top: 40px;
  background: #2c2d32;
  border: none;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #e9ecef;
  font-size: 20px;

  &:hover {
    background: #363739;
    transform: translateY(-2px);
  }
`;

export const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #e9ecef;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  color: #adb5bd;
  font-size: 16px;
  margin-bottom: 40px;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

export const ProjectCard = styled.div`
  background: #25262b;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2c2d32;
    transform: translateY(-2px);
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #868e96;
  font-size: 14px;
`;

export const EntryCount = styled.span`
  background: #2c2d32;
  color: #e9ecef;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 13px;
`;

export const ProjectTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #e9ecef;
  margin-bottom: 8px;
`;

export const ProjectDescription = styled.p`
  color: #adb5bd;
  font-size: 14px;
  line-height: 1.6;
`;
