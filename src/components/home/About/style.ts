import styled from "@emotion/styled";

export const Background = styled.section`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 40px;

  @media (max-width: 1400px) {
    padding: 40px 80px;
  }

  @media (max-width: 1024px) {
    padding: 40px 60px;
  }

  @media (max-width: 768px) {
    padding: 30px 40px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #333;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #666;
`;

export const Value = styled.span`
  font-size: 16px;
  color: #333;
  white-space: pre-line;
`;
