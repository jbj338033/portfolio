import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #222;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;

  svg {
    font-size: 24px;
    color: #fff;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ArchiveCard = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background-color: #fff;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #333;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

export const CardUrl = styled.span`
  font-size: 14px;
  color: #666;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;
