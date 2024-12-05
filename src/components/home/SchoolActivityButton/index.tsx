import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { DiDatabase } from "react-icons/di";
import * as S from "./style";
import { AnimatePresence } from "framer-motion";

interface Activity {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: JSX.Element;
}

const activities: Activity[] = [
  {
    id: "narsha",
    name: "나르샤",
    description: "교내 IT 프로젝트",
    path: "/narsha",
    icon: <BiCodeAlt size={20} />,
  },
  {
    id: "database",
    name: "데이터베이스 수업",
    description: "데이터베이스 수업 프로젝트",
    path: "/database",
    icon: <DiDatabase size={20} />,
  },
  {
    id: "algorithm",
    name: "자료구조 수업",
    description: "자료구조 수업 프로젝트",
    path: "/algorithm",
    icon: <HiOutlineAcademicCap size={20} />,
  },
];

const ActivityItem = ({
  name,
  description,
  path,
  icon,
}: Omit<Activity, "id">) => {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <S.Item
      to={path}
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <S.IconBox>{icon}</S.IconBox>
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.ItemDescription>{description}</S.ItemDescription>
      </S.Content>
      <S.Arrow
        animate={{
          opacity: showArrow ? 1 : 0,
          x: showArrow ? 4 : 0,
        }}
        initial={false}
      >
        <IoArrowForward />
      </S.Arrow>
    </S.Item>
  );
};

const SchoolActivityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <AnimatePresence>
        {isOpen && (
          <S.Menu
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <S.Header>
              <S.Title>School Activities</S.Title>
              <S.Description>
                학교 생활과 관련된 다양한 활동들을 소개합니다.
              </S.Description>
            </S.Header>
            <S.List>
              {activities.map((activity) => (
                <ActivityItem key={activity.id} {...activity} />
              ))}
            </S.List>
          </S.Menu>
        )}
      </AnimatePresence>
      <S.Button
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <HiOutlineAcademicCap size={20} />
        <span>School Activities</span>
      </S.Button>
    </S.Container>
  );
};

export default SchoolActivityButton;
