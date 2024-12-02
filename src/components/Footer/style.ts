import styled from "@emotion/styled";

export const Container = styled.footer`
  width: 100%;
  padding: 40px 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 24px;
`;

export const LinkItem = styled.a`
  color: #495057;
  font-size: 24px;
  transition: all 0.2s ease;

  &:hover {
    color: #228be6;
    transform: translateY(-2px);
  }
`;

export const Copyright = styled.p`
  color: #868e96;
  font-size: 14px;
  text-align: center;
`;
