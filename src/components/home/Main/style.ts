import styled from "@emotion/styled";

export const Container = styled.section<{ background: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.6)
  );
`;

export const Inner = styled.div`
  position: relative;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  color: #000;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease;

  svg {
    font-size: 20px;
    transition: transform 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);

    svg {
      transform: translateX(4px);
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
  }
`;
