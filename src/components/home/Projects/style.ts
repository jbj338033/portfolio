import styled from "@emotion/styled";

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
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
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
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

export const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
  line-height: 1.4;
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
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SkillItem = styled.span`
  background-color: #f1f3f5;
  color: #495057;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    padding: 0;
    align-items: flex-end;
  }
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 32px;
  width: 1000px;
  max-width: 95vw;
  max-height: 90vh;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    max-height: 85vh;
    border-radius: 24px 24px 0 0;
    margin: 0;
  }
`;

export const ModalImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background-color: #f8f9fa;
  margin: 32px 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    margin: 16px 0;
    border-radius: 16px;
  }
`;

export const ImageTrack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.3s ease-out;
  will-change: transform;
`;

export const ImageSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ModalInner = styled.div`
  padding: 48px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dee2e6;
    border-radius: 4px;

    &:hover {
      background-color: #ced4da;
    }
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 40px;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 32px;
  right: 32px;
  background: white;
  border: none;
  font-size: 24px;
  color: #868e96;
  cursor: pointer;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 2;

  &:hover {
    transform: rotate(90deg);
    background-color: #f8f9fa;
    color: #495057;
  }

  @media (max-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;

export const ImageNav = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 100px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  z-index: 1;
`;

export const ImageDot = styled.button<{ active: boolean }>`
  width: ${(props) => (props.active ? "24px" : "8px")};
  height: 8px;
  border-radius: 100px;
  border: none;
  background-color: ${(props) => (props.active ? "#ff6b6b" : "#dee2e6")};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    background-color: ${(props) => (props.active ? "#ff6b6b" : "#ced4da")};
  }
`;

export const ImageNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 24px;
  }

  &.next {
    right: 24px;
  }

  svg {
    font-size: 24px;
    color: #495057;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    &.prev {
      left: 16px;
    }

    &.next {
      right: 16px;
    }

    svg {
      font-size: 20px;
    }
  }
`;

export const ModalTitle = styled(ProjectTitle)`
  font-size: 32px;
  margin-bottom: 16px;
  color: #191919;
`;

export const ModalTeam = styled.div`
  color: #495057;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  display: inline-block;
  margin-bottom: 40px;
`;

export const ModalDescription = styled(DescriptionList)`
  margin: 0 0 40px 0;

  li {
    font-size: 16px;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ModalSkillsSection = styled.div`
  background-color: #f8f9fa;
  padding: 32px;
  border-radius: 24px;
  margin-top: 48px;
`;

export const SubTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`;

export const ModalLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #e9ecef;
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
  transition: all 0.2s;
  background-color: white;

  &:hover {
    background-color: #f8f9fa;
    border-color: #dee2e6;
    transform: translateY(-1px);
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
  transition: all 0.2s;
  font-weight: 500;

  &:hover {
    background-color: #dbe4ff;
  }
`;

export const DeprecatedUrl = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #868e96;
  font-size: 14px;
  margin: 8px 0 24px;
  padding: 10px 16px;
  border-radius: 12px;
  background-color: #f8f9fa;
  transition: background-color 0.2s;

  svg {
    font-size: 16px;
    color: #adb5bd;
  }

  &:hover {
    background-color: #f1f3f5;
  }
`;
