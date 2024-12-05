import { useState } from "react";
import * as S from "./style";
import { BsLink45Deg } from "react-icons/bs";
import { ACTIVITIES } from "../../../constants/activity";

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState("교내 활동");

  return (
    <S.Container id="activities">
      <S.Inner>
        <S.Title>Activities</S.Title>

        <S.TabList>
          {ACTIVITIES.map((activity) => {
            const Icon = () => activity.icon;

            return (
              <S.TabItem
                key={activity.category}
                isActive={activeCategory === activity.category}
                onClick={() => setActiveCategory(activity.category)}
              >
                <Icon />
                {activity.category}
              </S.TabItem>
            );
          })}
        </S.TabList>

        <S.Content>
          {ACTIVITIES.map(
            (activity) =>
              activity.category === activeCategory && (
                <S.Grid key={activity.category}>
                  {activity.details.map((detail, index) => (
                    <S.ActivityCard key={index}>
                      <S.CardTop>
                        <S.CardHeader>
                          <S.CardTitle>{detail.title}</S.CardTitle>
                          <S.Period>
                            {detail.startDate} ~ {detail.endDate || "진행중"}
                          </S.Period>
                        </S.CardHeader>

                        {detail.role && (
                          <S.RoleBadge>{detail.role}</S.RoleBadge>
                        )}

                        <S.Description>
                          {detail.description.map((desc, idx) => (
                            <S.DescriptionItem key={idx}>
                              {desc}
                            </S.DescriptionItem>
                          ))}
                        </S.Description>
                      </S.CardTop>

                      <S.CardBottom>
                        {detail.skills && (
                          <S.SkillList>
                            {detail.skills.map((skill) => (
                              <S.Skill key={skill}>{skill}</S.Skill>
                            ))}
                          </S.SkillList>
                        )}

                        {detail.projectLink && (
                          <S.ProjectLink
                            href={detail.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project
                            <BsLink45Deg />
                          </S.ProjectLink>
                        )}
                      </S.CardBottom>
                    </S.ActivityCard>
                  ))}
                </S.Grid>
              )
          )}
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default Activities;
