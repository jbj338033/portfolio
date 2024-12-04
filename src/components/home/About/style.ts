import styled from "@emotion/styled";

export const Background = styled.section`
  width: 100%;
  padding: 120px 0;
  background: #f4f4f4;
  position: relative;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 64px;
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
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 24px;
  background: #fff;
  padding: 32px;
  border: 2px solid #222;
  box-shadow: 6px 6px 0 #222;
  position: relative;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: #f8f9fa;
  border: 1px solid #222;
  transition: all 0.2s ease;
  position: relative;

  &:before {
    content: ">";
    position: absolute;
    left: 8px;
    top: 4px;
    color: #ff3e3e;
    font-family: "Space Mono", monospace;
    font-size: 14px;
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 #222;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 22px;
  color: #222;
  background: #ffe977;
  border: 2px solid #222;
  flex-shrink: 0;
  transform: rotate(-4deg);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #666;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Space Mono", monospace;
  letter-spacing: 1px;
`;

export const Value = styled.span`
  font-size: 15px;
  color: #222;
  line-height: 1.6;
  white-space: pre-line;
  font-family: "Space Mono", monospace;
`;
