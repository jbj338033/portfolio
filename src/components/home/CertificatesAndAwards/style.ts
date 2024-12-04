import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 120px 0;
  background: linear-gradient(180deg, #fcfcfc 0%, #f8f9fa 100%);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: repeating-linear-gradient(
      90deg,
      #e9ecef 0px,
      #e9ecef 4px,
      transparent 4px,
      transparent 8px
    );
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Header = styled.div`
  margin-bottom: 80px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #191919;
  margin: 0 0 16px 0;
  font-family: "Helvetica Neue", sans-serif;
`;

export const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 64px;
`;

export const CategoryTab = styled.button<{ isActive: boolean }>`
  padding: 12px 24px;
  background: ${(props) => (props.isActive ? "#191919" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "#666")};
  border: 2px solid ${(props) => (props.isActive ? "#191919" : "#e9ecef")};
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #191919;
    color: ${(props) => (props.isActive ? "white" : "#191919")};
  }

  svg {
    margin-right: 8px;
    vertical-align: -2px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 32px;
`;

export const Item = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  border: 1px solid #eee;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-4px);
    border-color: #ccc;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

export const ItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #191919;
  margin: 0;
`;

export const ItemDate = styled.span`
  font-size: 14px;
  color: #666;
  background: #f8f9fa;
  padding: 6px 12px;
  border-radius: 100px;
  white-space: nowrap;
`;

export const ItemOrganization = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #666;
  margin-bottom: 16px;
`;

export const ItemNumber = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #666;
  padding: 6px 12px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 16px;

  &:before {
    content: "#";
    color: #adb5bd;
  }
`;

export const ItemRank = styled.div`
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, #ffd43b, #fab005);
  color: #191919;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const ItemDescription = styled.div`
  position: relative;
  padding-left: 16px;
  color: #495057;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e9ecef;
  }
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  backdrop-filter: blur(8px);
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  width: 1000px;
  max-width: 95vw;
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  padding: 24px 32px;
  border-bottom: 1px solid #eee;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  color: #191919;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #fab005;
  }
`;

export const ModalBody = styled.div`
  padding: 32px;
  overflow-y: auto;
  max-height: calc(90vh - 200px);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f3f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #dee2e6;
    border-radius: 4px;
  }
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: white;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;

  &:hover {
    background: #191919;
    color: white;
    border-color: #191919;
  }

  svg {
    font-size: 20px;
  }
`;
