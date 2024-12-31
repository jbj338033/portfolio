import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CounterContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0a0a0f;
  padding: 2rem;
  font-family: "Pretendard", sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(51, 51, 255, 0.03) 0%,
      rgba(0, 0, 0, 0) 70%
    );
  }
`;

export const Title = styled(motion.h1)`
  color: #fff;
  font-size: clamp(2.5rem, 6vw, 4rem);
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.6),
    0 0 10px rgba(255, 255, 255, 0.4), 0 0 21px rgba(255, 255, 255, 0.2),
    0 0 42px rgba(51, 51, 255, 0.4), 0 0 82px rgba(51, 51, 255, 0.2),
    0 0 92px rgba(51, 51, 255, 0.1);
  position: relative;
  z-index: 1;
`;

export const CountdownContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
  width: 100%;
  max-width: 800px;
  padding: 0.5rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const TimeUnit = styled(motion.div)`
  background: rgba(10, 10, 15, 0.8);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid rgba(51, 51, 255, 0.2);
  box-shadow: 0 0 5px rgba(51, 51, 255, 0.2),
    inset 0 0 15px rgba(51, 51, 255, 0.1);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(51, 51, 255, 0.5),
      rgba(51, 51, 255, 0)
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

export const Number = styled(motion.span)`
  font-size: clamp(3rem, 8vw, 4rem);
  font-weight: 700;
  color: #fff;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.6),
    0 0 10px rgba(255, 255, 255, 0.4), 0 0 21px rgba(51, 51, 255, 0.4),
    0 0 42px rgba(51, 51, 255, 0.2);
  position: relative;
  z-index: 1;
  transition: text-shadow 0.3s ease;

  ${TimeUnit}:hover & {
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.8),
      0 0 10px rgba(255, 255, 255, 0.6), 0 0 21px rgba(51, 51, 255, 0.6),
      0 0 42px rgba(51, 51, 255, 0.4), 0 0 82px rgba(51, 51, 255, 0.2);
  }
`;

export const Label = styled.span`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 10px rgba(51, 51, 255, 0.3);
`;

export const Message = styled(motion.div)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-top: 4rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  position: relative;
  padding: 0.8em 2em;
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.4),
    0 0 10px rgba(255, 255, 255, 0.2), 0 0 21px rgba(51, 51, 255, 0.2);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 100px;
    padding: 1px;
    mask-composite: exclude;
  }
`;
