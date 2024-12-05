import { useState } from "react";
import * as S from "./style";
import { TECH_STACK } from "../../../constants/tech";

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleTechClick = (techName: string) => {
    setSelectedTech(selectedTech === techName ? null : techName);
  };

  return (
    <S.Container id="tech-stack">
      <S.Inner>
        <S.Title>Tech Stack</S.Title>
        <S.Content>
          {Object.entries(TECH_STACK).map(([category, { icon, items }]) => (
            <S.Category key={category}>
              <S.CategoryHeader>
                <S.CategoryIcon>{icon}</S.CategoryIcon>
                <S.CategoryTitle>{category}</S.CategoryTitle>
              </S.CategoryHeader>

              <S.TechList>
                {items.map((tech) => (
                  <S.TechItem
                    key={tech.name}
                    isSelected={selectedTech === tech.name}
                  >
                    <S.TechMainWrapper>
                      <S.TechMain onClick={() => handleTechClick(tech.name)}>
                        <S.TechLeft>
                          <S.TechLabel color={tech.color}>
                            {tech.name}
                            <S.TechExp>{tech.experience}</S.TechExp>
                          </S.TechLabel>
                        </S.TechLeft>

                        <S.TechRight>
                          <S.LevelBar>
                            {[...Array(5)].map((_, i) => (
                              <S.LevelSegment
                                key={i}
                                isActive={i < tech.level}
                                color={tech.color}
                              />
                            ))}
                          </S.LevelBar>
                        </S.TechRight>
                      </S.TechMain>
                    </S.TechMainWrapper>

                    <S.TechDetails
                      isVisible={selectedTech === tech.name}
                      color={tech.color}
                    >
                      {tech.description.map((desc, idx) => (
                        <S.DetailItem key={idx}>{desc}</S.DetailItem>
                      ))}
                    </S.TechDetails>
                  </S.TechItem>
                ))}
              </S.TechList>
            </S.Category>
          ))}
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default TechStack;
