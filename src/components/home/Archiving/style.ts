import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 120px 0;
  background: #f4f4f4;
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
      #222 0px,
      #222 6px,
      transparent 6px,
      transparent 12px
    );
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    font-size: 40px;
    color: #ff3e3e;
    transform: rotate(-8deg);
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: #222;
  margin: 0;
  font-family: "Space Mono", monospace;
  position: relative;
  display: inline-block;

  &:after {
    content: "_";
    animation: blink 1s step-end infinite;
    color: #ff3e3e;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ArchiveCard = styled.a`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 32px;
  background: white;
  border: 2px solid #222;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    transition: all 0.2s;
  }

  &:hover {
    transform: translate(-4px, -4px);

    &:before {
      transform: translate(8px, 8px);
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: #ffe977;
  border: 2px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-4deg);
  flex-shrink: 0;

  svg {
    font-size: 28px;
    color: #222;
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;

    svg {
      font-size: 24px;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 800;
  color: #222;
  margin: 0;
  font-family: "Space Mono", monospace;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CardUrl = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #f8f9fa;
  border: 2px solid #222;
  font-size: 14px;
  color: #222;
  font-family: "Space Mono", monospace;
  transform: rotate(-1deg);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const CardDescription = styled.p`
  font-size: 15px;
  color: #666;
  margin: 0;
  font-family: "Space Mono", monospace;
  padding-left: 12px;
  position: relative;

  &:before {
    content: ">";
    position: absolute;
    left: 0;
    color: #ff3e3e;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
