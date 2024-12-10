import { useState, useCallback, memo } from "react";
import * as S from "./style";
import { TECH_STACK } from "../../../constants/tech";

interface LevelBarProps {
  level: number;
  color: string;
}

interface TechItemProps {
  tech: {
    name: string;
    color: string;
    experience: string;
    level: number;
    description: string[];
  };
  isSelected: boolean;
  onTechClick: (name: string) => void;
}

interface CategoryProps {
  category: string;
  icon: React.ReactNode;
  items: Array<{
    name: string;
    color: string;
    experience: string;
    level: number;
    description: string[];
  }>;
  selectedTech: string | null;
  onTechClick: (name: string) => void;
}

const LevelBar = memo(({ level, color }: LevelBarProps) => (
  <S.LevelBar>
    {[...Array(5)].map((_, i) => (
      <S.LevelSegment key={i} isActive={i < level} color={color} />
    ))}
  </S.LevelBar>
));

LevelBar.displayName = "LevelBar";

const TechDetails = memo(
  ({
    description,
    isVisible,
    color,
  }: {
    description: string[];
    isVisible: boolean;
    color: string;
  }) => (
    <S.TechDetails isVisible={isVisible} color={color}>
      {description.map((desc, idx) => (
        <S.DetailItem key={idx}>{desc}</S.DetailItem>
      ))}
    </S.TechDetails>
  )
);

TechDetails.displayName = "TechDetails";

const TechItem = memo(({ tech, isSelected, onTechClick }: TechItemProps) => (
  <S.TechItem isSelected={isSelected}>
    <S.TechMainWrapper>
      <S.TechMain onClick={() => onTechClick(tech.name)}>
        <S.TechLeft>
          <S.TechLabel color={tech.color}>
            {tech.name}
            <S.TechExp>{tech.experience}</S.TechExp>
          </S.TechLabel>
        </S.TechLeft>

        <S.TechRight>
          <LevelBar level={tech.level} color={tech.color} />
        </S.TechRight>
      </S.TechMain>
    </S.TechMainWrapper>

    <TechDetails
      description={tech.description}
      isVisible={isSelected}
      color={tech.color}
    />
  </S.TechItem>
));

TechItem.displayName = "TechItem";

const Category = memo(
  ({ category, icon, items, selectedTech, onTechClick }: CategoryProps) => (
    <S.Category>
      <S.CategoryHeader>
        <S.CategoryIcon>{icon}</S.CategoryIcon>
        <S.CategoryTitle>{category}</S.CategoryTitle>
      </S.CategoryHeader>

      <S.TechList>
        {items.map((tech) => (
          <TechItem
            key={tech.name}
            tech={tech}
            isSelected={selectedTech === tech.name}
            onTechClick={onTechClick}
          />
        ))}
      </S.TechList>
    </S.Category>
  )
);

Category.displayName = "Category";

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const handleTechClick = useCallback((techName: string) => {
    setSelectedTech((prev) => (prev === techName ? null : techName));
  }, []);

  return (
    <S.Container id="tech-stack">
      <S.Inner>
        <S.Title>Tech Stack</S.Title>
        <S.Content>
          {Object.entries(TECH_STACK).map(([category, { icon, items }]) => (
            <Category
              key={category}
              category={category}
              icon={icon}
              items={items}
              selectedTech={selectedTech}
              onTechClick={handleTechClick}
            />
          ))}
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default memo(TechStack);
