import styled from "@emotion/styled";

export const Container = styled.div`
  color: #e9ecef;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: #e9ecef;
`;

export const Category = styled.div`
  padding: 6px 12px;
  background: #228be6;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 32px;
  color: #ced4da;
`;

export const CodeBlock = styled.div`
  margin-bottom: 32px;
  border-radius: 8px;
  overflow: hidden;

  pre {
    margin: 0 !important;
    border-radius: 8px !important;
  }
`;

export const SubTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 24px;
  font-weight: 600;
`;

export const ComplexitySection = styled.div`
  margin-top: 32px;
`;

export const ComplexityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const ComplexityItem = styled.div`
  padding: 16px;
  background: #2c2d32;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ComplexityOperation = styled.div`
  font-size: 14px;
  color: #868e96;
`;

export const ComplexityValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #228be6;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #868e96;
`;
