import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -8px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

export const Container = styled.section`
  width: 100%;
  padding: 100px 24px;
  background-color: #f8f9fa;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
  svg {
    font-size: 28px;
    color: #333;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Category = styled.span`
  background: linear-gradient(135deg, #ff6b6b, #ff8787);
  color: white;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  height: 32px;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
`;

export const Period = styled.span`
  color: #868e96;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: #adb5bd;
  }
`;

export const OngoingText = styled.span`
  background: linear-gradient(135deg, #4dabf7, #74c0fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

export const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
  line-height: 1.4;
  letter-spacing: -0.3px;
`;

export const DescriptionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 28px 0;
`;

export const DescriptionItem = styled.li`
  position: relative;
  padding-left: 18px;
  margin-bottom: 12px;
  color: #495057;
  font-size: 15px;
  line-height: 1.6;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ff6b6b;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4263eb;
  font-size: 14px;
  text-decoration: none;
  margin: 8px 0 24px;
  padding: 10px 16px;
  border-radius: 12px;
  background-color: #edf2ff;
  transition: all 0.2s ease;
  font-weight: 500;

  svg {
    font-size: 16px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: #dbe4ff;

    svg {
      transform: translateX(2px);
    }
  }
`;

export const DeprecatedUrlText = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #868e96;
  font-size: 14px;
  margin: 8px 0 24px;
  padding: 10px 16px;
  border-radius: 12px;
  background-color: #f8f9fa;
  transition: all 0.2s ease;
  position: relative;

  &:hover::after {
    content: "서비스 종료";
    position: absolute;
    bottom: -22px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #495057;
    color: white;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 500;
    white-space: nowrap;
    animation: ${fadeIn} 0.2s ease-out;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  }

  &:hover {
    background-color: #f1f3f5;
  }

  svg {
    font-size: 16px;
    color: #adb5bd;
  }
`;

export const ProjectFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
`;

export const SkillItem = styled.span`
  background-color: #f1f3f5;
  color: #495057;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e9ecef;
    transform: translateY(-1px);
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: 1.5px solid #e9ecef;
  border-radius: 12px;
  color: #495057;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  background-color: white;

  svg {
    font-size: 16px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: #f8f9fa;
    border-color: #dee2e6;
    transform: translateY(-1px);

    svg {
      transform: scale(1.1);
    }
  }
`;
