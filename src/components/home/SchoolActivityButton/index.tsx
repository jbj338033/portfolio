import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import * as S from "./style";
import { DiDatabase } from "react-icons/di";

interface ActivityItem {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: JSX.Element;
  color: string;
}

const activities: ActivityItem[] = [
  {
    id: "narsha",
    name: "나르샤",
    description: "교내 IT 프로젝트",
    path: "/narsha",
    icon: <BiCodeAlt />,
    color: "#4dabf7",
  },
  {
    id: "database",
    name: "데이터베이스 수업",
    description: "교내 IT 프로젝트",
    path: "/database",
    icon: <DiDatabase />,
    color: "#63e6be",
  },
  {
    id: "data-structure",
    name: "자료구조 수업",
    description: "교내 IT 프로젝트",
    path: "/data-structure",
    icon: <HiOutlineAcademicCap />,
    color: "#74c0fc",
  },
];

const SchoolActivityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      {isOpen && (
        <S.MenuContainer>
          <S.MenuHeader>
            <S.Title>학교 활동</S.Title>
            <S.Subtitle>진행 중인 활동들을 확인해보세요</S.Subtitle>
          </S.MenuHeader>

          <S.ActivityList>
            {activities.map((activity) => (
              <S.ActivityItem
                key={activity.id}
                to={activity.path}
                $color={activity.color}
              >
                <S.ActivityContent>
                  <S.IconWrapper $color={activity.color}>
                    {activity.icon}
                  </S.IconWrapper>
                  <S.TextContent>
                    <S.ActivityName>{activity.name}</S.ActivityName>
                    <S.ActivityDescription>
                      {activity.description}
                    </S.ActivityDescription>
                  </S.TextContent>
                  <S.ArrowIcon>
                    <BsArrowRight />
                  </S.ArrowIcon>
                </S.ActivityContent>
              </S.ActivityItem>
            ))}
          </S.ActivityList>
        </S.MenuContainer>
      )}

      <S.Trigger
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
        aria-label="학교 활동 메뉴"
      >
        <S.TriggerContent $isOpen={isOpen}>
          <HiOutlineAcademicCap />
          <span>학교 활동</span>
        </S.TriggerContent>
      </S.Trigger>
    </S.Container>
  );
};

export default SchoolActivityButton;
