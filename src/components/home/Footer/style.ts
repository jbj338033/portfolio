import styled from "@emotion/styled";

export const Container = styled.footer`
  width: 100%;
  padding: 80px 20px;
  background: #222;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      #fff 0px,
      #fff 6px,
      transparent 6px,
      transparent 12px
    );
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const LinkItem = styled.a`
  width: 48px;
  height: 48px;
  background: #fff;
  border: 2px solid #222;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.2s;
  position: relative;
  box-shadow: 3px 3px 0 #fff;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 #ffe977;
  }

  svg {
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

export const Copyright = styled.p`
  color: #fff;
  font-size: 14px;
  text-align: center;
  font-family: "Space Mono", monospace;
  padding: 8px 16px;
  background: #333;
  border: 1px solid #444;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
