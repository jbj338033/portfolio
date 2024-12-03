import * as S from "./style";
import { BsLink45Deg } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";

interface ActivityDetail {
  title: string;
  period: string;
  description: string[];
  skills?: string[];
}

interface Activity {
  category: string;
  icon: JSX.Element;
  details: ActivityDetail[];
}

const ACTIVITIES: Activity[] = [
  {
    category: "교내 활동",
    icon: <HiOutlineAcademicCap />,
    details: [
      {
        title: "나르샤 프로젝트",
        period: "2024.04 ~ 2024.11",
        description: [
          "교내 IT 프로젝트 동아리 활동",
          "백엔드 개발자로 참여",
          "Spring Boot를 활용한 REST API 개발",
          "프로젝트 아키텍처 설계 및 구현",
        ],
        skills: ["Spring Boot", "MySQL", "JPA", "AWS"],
      },
      {
        title: "자료구조 스터디",
        period: "2024.03 ~ 2024.07",
        description: [
          "알고리즘 문제 풀이 스터디 리더",
          "주 2회 스터디 진행",
          "코딩 테스트 대비 문제 해설",
        ],
        skills: ["Java", "Algorithm", "Data Structure"],
      },
    ],
  },
  {
    category: "외부 활동",
    icon: <AiOutlineTeam />,
    details: [
      {
        title: "IT 연합 동아리",
        period: "2024.06 ~ 2024.12",
        description: [
          "대구 지역 IT 연합 동아리 활동",
          "웹 서비스 개발 프로젝트 참여",
          "백엔드 파트 리더 역할 수행",
        ],
        skills: ["Spring Boot", "AWS", "Docker", "Jenkins"],
      },
    ],
  },
];

const Activities = () => {
  return (
    <S.Container id="activities">
      <S.TitleWrapper>
        <BsLink45Deg />
        <S.Title>ACTIVITIES</S.Title>
      </S.TitleWrapper>

      <S.Content>
        {ACTIVITIES.map((activity, index) => (
          <S.CategorySection key={index}>
            <S.CategoryHeader>
              <S.CategoryIcon>{activity.icon}</S.CategoryIcon>
              <S.CategoryTitle>{activity.category}</S.CategoryTitle>
            </S.CategoryHeader>

            <S.ActivityList>
              {activity.details.map((detail, detailIndex) => (
                <S.ActivityItem key={detailIndex}>
                  <S.ActivityHeader>
                    <S.ActivityTitle>{detail.title}</S.ActivityTitle>
                    <S.ActivityPeriod>{detail.period}</S.ActivityPeriod>
                  </S.ActivityHeader>

                  <S.DescriptionList>
                    {detail.description.map((desc, descIndex) => (
                      <S.DescriptionItem key={descIndex}>
                        {desc}
                      </S.DescriptionItem>
                    ))}
                  </S.DescriptionList>

                  {detail.skills && (
                    <S.SkillsList>
                      {detail.skills.map((skill) => (
                        <S.SkillItem key={skill}>{skill}</S.SkillItem>
                      ))}
                    </S.SkillsList>
                  )}
                </S.ActivityItem>
              ))}
            </S.ActivityList>
          </S.CategorySection>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default Activities;
