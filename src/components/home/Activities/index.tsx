import { useState, memo, useCallback, useMemo } from "react";
import * as S from "./style";
import { BsLink45Deg } from "react-icons/bs";
import { ACTIVITIES } from "../../../constants/activity";
import { ActivityDetail } from "../../../types/activity";
import { IconType } from "react-icons";

// Types
interface TabItemProps {
  category: string;
  icon: IconType;
  isActive: boolean;
  onClick: () => void;
}

interface ActivityDescriptionProps {
  descriptions: string[];
}

interface SkillListProps {
  skills: string[];
}

interface ProjectLinkProps {
  link: string;
}

interface ActivityCardProps {
  detail: ActivityDetail;
}

// Memoized Components
const TabItem = memo(
  ({ category, icon: Icon, isActive, onClick }: TabItemProps) => (
    <S.TabItem
      isActive={isActive}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${category}`}
    >
      <Icon aria-hidden="true" />
      <span>{category}</span>
    </S.TabItem>
  )
);

TabItem.displayName = "TabItem";

const ActivityDescription = memo(
  ({ descriptions }: ActivityDescriptionProps) => (
    <S.Description role="list">
      {descriptions.map((desc, idx) => (
        <S.DescriptionItem key={`desc-${idx}`} role="listitem">
          {desc}
        </S.DescriptionItem>
      ))}
    </S.Description>
  )
);

ActivityDescription.displayName = "ActivityDescription";

const SkillList = memo(({ skills }: SkillListProps) => (
  <S.SkillList role="list" aria-label="Skills used">
    {skills.map((skill) => (
      <S.Skill key={skill} role="listitem">
        {skill}
      </S.Skill>
    ))}
  </S.SkillList>
));

SkillList.displayName = "SkillList";

const ProjectLink = memo(({ link }: ProjectLinkProps) => (
  <S.ProjectLink
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View project details"
  >
    View Project
    <BsLink45Deg aria-hidden="true" />
  </S.ProjectLink>
));

ProjectLink.displayName = "ProjectLink";

const ActivityCard = memo(({ detail }: ActivityCardProps) => {
  const isOngoing = !detail.endDate;

  return (
    <S.ActivityCard>
      <S.CardTop>
        <S.CardHeader>
          <S.CardTitle>{detail.title}</S.CardTitle>
          <S.Period>
            {detail.startDate} ~{" "}
            {isOngoing ? <S.OngoingText>진행중</S.OngoingText> : detail.endDate}
          </S.Period>
        </S.CardHeader>

        {detail.role && (
          <S.RoleBadge role="note" aria-label="Role">
            {detail.role}
          </S.RoleBadge>
        )}

        <ActivityDescription descriptions={detail.description} />
      </S.CardTop>

      <S.CardBottom>
        {detail.skills && <SkillList skills={detail.skills} />}
        {detail.projectLink && <ProjectLink link={detail.projectLink} />}
      </S.CardBottom>
    </S.ActivityCard>
  );
});

ActivityCard.displayName = "ActivityCard";

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    ACTIVITIES[0].category
  );

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  const renderTabs = useMemo(
    () => (
      <S.TabList role="tablist" aria-label="Activity categories">
        {ACTIVITIES.map((activity) => (
          <TabItem
            key={activity.category}
            category={activity.category}
            icon={activity.icon}
            isActive={activeCategory === activity.category}
            onClick={() => handleCategoryChange(activity.category)}
          />
        ))}
      </S.TabList>
    ),
    [activeCategory, handleCategoryChange]
  );

  const renderContent = useMemo(
    () => (
      <S.Content>
        {ACTIVITIES.map(
          (activity) =>
            activity.category === activeCategory && (
              <S.Grid
                key={activity.category}
                role="tabpanel"
                id={`tabpanel-${activity.category}`}
                aria-labelledby={activity.category}
              >
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
    ),
    [activeCategory]
  );

  return (
    <S.Container id="activities">
      <S.Inner>
        <S.Title>Activities</S.Title>
        {renderTabs}
        {renderContent}
      </S.Inner>
    </S.Container>
  );
};

export default memo(Activities);
