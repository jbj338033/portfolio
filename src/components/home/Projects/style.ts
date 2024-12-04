import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: 120px 0;
  background: #fcfcfc;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Header = styled.div`
  margin-bottom: 80px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #191919;
  margin: 0 0 20px 0;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #191919;
  margin: 0 0 40px 0;
`;

export const FeaturedSection = styled.div``;

export const FeaturedGrid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsSection = styled.div``;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #eee;
  transition: all 0.3s;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

export const ProjectContent = styled.div`
  padding: 24px;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Category = styled.span`
  background: #f8f9fa;
  color: #191919;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
`;

export const Period = styled.span`
  color: #666;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: #999;
  }
`;

export const OngoingText = styled.span`
  color: #228be6;
  font-weight: 600;
`;

export const ProjectTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: #191919;
  margin: 0 0 20px 0;
  line-height: 1.4;
`;

export const ProjectDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;

  li {
    position: relative;
    padding-left: 12px;
    margin-bottom: 8px;
    color: #666;
    font-size: 15px;
    line-height: 1.6;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #666;
    }
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillItem = styled.span`
  background: #f8f9fa;
  color: #495057;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #eee;
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  background: white;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #191919;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1;

  svg {
    color: #fab005;
  }
`;

// Modal styles
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

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  width: 1000px;
  max-width: 95vw;
  max-height: 90vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
  }
`;

export const ModalBody = styled.div`
  padding: 40px;
  overflow-y: auto;
  max-height: 90vh;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f3f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #adb5bd;
    border-radius: 4px;

    &:hover {
      background: #868e96;
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  font-weight: 800;
  color: #191919;
  margin: 0 0 16px 0;
  line-height: 1.3;
`;

export const ProjectTeam = styled.div`
  color: #666;
  font-size: 16px;
  margin-bottom: 32px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  margin: 32px 0;
`;

export const ImageTrack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.3s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
`;

export const ImageNavigation = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  pointer-events: none;
`;

export const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  color: #191919;
  transition: all 0.2s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.prev {
    left: 16px;
  }
  &.next {
    right: 16px;
  }

  &:hover {
    background: #191919;
    color: white;
  }

  svg {
    font-size: 24px;
  }
`;

export const ImageIndicator = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  background: white;
  border-radius: 20px;
`;

export const IndicatorDot = styled.button<{ active: boolean }>`
  width: ${(props) => (props.active ? "24px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background: ${(props) => (props.active ? "#191919" : "#dee2e6")};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.active ? "#191919" : "#ced4da")};
  }
`;

export const SkillsSection = styled.div`
  margin-top: 40px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #eee;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #f8f9fa;
  border: 1px solid #eee;
  border-radius: 8px;
  color: #191919;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: #191919;
    color: white;
    border-color: #191919;
  }
`;

export const DemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #e7f5ff;
  border-radius: 8px;
  color: #228be6;
  font-size: 14px;
  text-decoration: none;
  margin: 8px 0 24px;
  transition: all 0.2s;

  &:hover {
    background: #d0ebff;
  }
`;

export const DeprecatedUrl = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f8f9fa;
  border-radius: 8px;
  color: #adb5bd;
  font-size: 14px;
  margin: 8px 0 24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 24px;
    color: #191919;
  }

  &:hover {
    background: #191919;

    svg {
      color: white;
    }
  }
`;
