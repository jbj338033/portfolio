import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #f8f9fa;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;

  svg {
    font-size: 24px;
    color: #333;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const Section = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f3f5;
`;

export const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #f8f9fa;
  color: #228be6;
  font-size: 24px;
`;

export const SectionTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #333;
`;

export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  padding: 24px;
  background: #f8f9fa;
  border-radius: 16px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const ItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const ItemDate = styled.span`
  font-size: 14px;
  color: #868e96;
  white-space: nowrap;
`;

export const ItemOrganization = styled.div`
  font-size: 15px;
  color: #495057;
  margin-bottom: 8px;
`;

export const ItemNumber = styled.div`
  font-size: 14px;
  color: #868e96;
  margin-bottom: 8px;
`;

export const ItemRank = styled.div`
  display: inline-block;
  padding: 4px 12px;
  background-color: #e7f5ff;
  color: #228be6;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ItemDescription = styled.p`
  font-size: 15px;
  color: #495057;
  line-height: 1.6;
  margin: 0;
`;