import { useState, memo } from "react";
import * as S from "./style";
import { BsLink45Deg } from "react-icons/bs";
import { ACTIVITIES } from "../../../constants/activity";
import { ActivityDetail } from "../../../types/activity";
import { IconType } from "react-icons";

const TabItem = memo(
  ({
    category,
    icon: Icon,
    isActive,
    onClick,
  }: {
    category: string;
    icon: IconType;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <S.TabItem isActive={isActive} onClick={onClick}>
      <Icon />
      {category}
    </S.TabItem>
  )
);

TabItem.displayName = "TabItem";

const ActivityDescription = memo(
  ({ descriptions }: { descriptions: string[] }) => (
    <S.Description>
      {descriptions.map((desc, idx) => (
        <S.DescriptionItem key={idx}>{desc}</S.DescriptionItem>
      ))}
    </S.Description>
  )
);

ActivityDescription.displayName = "ActivityDescription";

const SkillList = memo(({ skills }: { skills: string[] }) => (
  <S.SkillList>
    {skills.map((skill) => (
      <S.Skill key={skill}>{skill}</S.Skill>
    ))}
  </S.SkillList>
));

SkillList.displayName = "SkillList";

const ProjectLink = memo(({ link }: { link: string }) => (
  <S.ProjectLink href={link} target="_blank" rel="noopener noreferrer">
    View Project
    <BsLink45Deg />
  </S.ProjectLink>
));

ProjectLink.displayName = "ProjectLink";

const ActivityCard = memo(({ detail }: { detail: ActivityDetail }) => (
  <S.ActivityCard>
    <S.CardTop>
      <S.CardHeader>
        <S.CardTitle>{detail.title}</S.CardTitle>
        <S.Period>
          {detail.startDate} ~ {detail.endDate || "진행중"}
        </S.Period>
      </S.CardHeader>

      {detail.role && <S.RoleBadge>{detail.role}</S.RoleBadge>}

      <ActivityDescription descriptions={detail.description} />
    </S.CardTop>

    <S.CardBottom>
      {detail.skills && <SkillList skills={detail.skills} />}
      {detail.projectLink && <ProjectLink link={detail.projectLink} />}
    </S.CardBottom>
  </S.ActivityCard>
));

ActivityCard.displayName = "ActivityCard";

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    ACTIVITIES[0].category
  );

  return (
    <S.Container id="activities">
      <S.Inner>
        <S.Title>Activities</S.Title>

        <S.TabList>
          {ACTIVITIES.map((activity) => (
            <TabItem
              key={activity.category}
              category={activity.category}
              icon={activity.icon}
              isActive={activeCategory === activity.category}
              onClick={() => setActiveCategory(activity.category)}
            />
          ))}
        </S.TabList>

        <S.Content>
          {ACTIVITIES.map(
            (activity) =>
              activity.category === activeCategory && (
                <S.Grid key={activity.category}>
                  {activity.details.map((detail, index) => (
                    <ActivityCard
                      key={`${activity.category}-${index}`}
                      detail={detail}
                    />
                  ))}
                </S.Grid>
              )
          )}
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default memo(Activities);
