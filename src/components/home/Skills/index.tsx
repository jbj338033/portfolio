import * as S from "./style";
import { BsLink45Deg } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { HiServer } from "react-icons/hi";
import { AiOutlineCloud } from "react-icons/ai";

const SKILLS = {
  Language: {
    icon: <BiCodeAlt />,
    items: [
      { name: "TypeScript", color: "#3178C6" },
      { name: "Kotlin", color: "#7F52FF" },
    ],
  },
  Frontend: {
    icon: <FaLaptopCode />,
    items: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "Zustand", color: "#4B5563" },
      { name: "React-Query", color: "#FF4154" },
      { name: "React-Hook-Form", color: "#1F2937" },
      { name: "Tailwind CSS", color: "#38B2AC" },
      { name: "Emotion", color: "#DB7093" },
    ],
  },
  Backend: {
    icon: <HiServer />,
    items: [
      { name: "Spring Boot", color: "#6DB33F" },
      { name: "MySQL", color: "#4479A1" },
    ],
  },
  DevOps: {
    icon: <AiOutlineCloud />,
    items: [
      { name: "AWS", color: "#FF9900" },
      { name: "Docker", color: "#2496ED" },
      { name: "Jenkins", color: "#D24939" },
      { name: "Nginx", color: "#269539" },
      { name: "Grafana", color: "#F46800" },
      { name: "Prometheus", color: "#E6522C" },
      { name: "GitHub CI/CD", color: "#181717" },
    ],
  },
};

const Skills = () => {
  return (
    <S.Container id="skills">
      <S.TitleWrapper>
        <BsLink45Deg />
        <S.Title>SKILLS</S.Title>
      </S.TitleWrapper>
      <S.Content>
        {Object.entries(SKILLS).map(([category, { icon, items }]) => (
          <S.Category key={category}>
            <S.CategoryHeader>
              <S.CategoryIcon>{icon}</S.CategoryIcon>
              <S.CategoryTitle>{category}</S.CategoryTitle>
            </S.CategoryHeader>
            <S.SkillsList>
              {items.map((skill) => (
                <S.SkillItem key={skill.name} color={skill.color}>
                  {skill.name}
                </S.SkillItem>
              ))}
            </S.SkillsList>
          </S.Category>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default Skills;
