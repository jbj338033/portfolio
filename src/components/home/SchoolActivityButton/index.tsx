import { useState, useCallback, memo, useEffect, useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import { BiCodeAlt, BiMath } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { DiDatabase } from "react-icons/di";
import { AiFillRobot } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import * as S from "./style";

// Types
interface Activity {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly path: string;
  readonly icon: JSX.Element;
}

interface ActivityItemProps extends Omit<Activity, "id"> {
  onClick?: () => void;
}

// Constants
const EMPHASIS_THRESHOLD = 0.9; // 90% for emphasis

// Animation variants
const menuVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const arrowVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 4 },
};

const emphasisVariants = {
  normal: {
    scale: 1,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  emphasis: {
    scale: 1.05,
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const activities: readonly Activity[] = [
  {
    id: "narsha",
    name: "나르샤",
    description: "교내 IT 프로젝트",
    path: "/narsha",
    icon: <BiCodeAlt size={20} aria-hidden="true" />,
  },
  {
    id: "database",
    name: "데이터베이스 수업",
    description: "데이터베이스 수업 프로젝트",
    path: "/database",
    icon: <DiDatabase size={20} aria-hidden="true" />,
  },
  {
    id: "algorithm",
    name: "자료구조 수업",
    description: "자료구조 수업 프로젝트",
    path: "/algorithm",
    icon: <HiOutlineAcademicCap size={20} aria-hidden="true" />,
  },
  {
    id: "ai",
    name: "인공지능 수업",
    description: "인공지능 수업 프로젝트",
    path: "/ai",
    icon: <AiFillRobot size={20} aria-hidden="true" />,
  },
  {
    id: "math",
    name: "수학 수업",
    description: "수학 수업 프로젝트",
    path: "/math",
    icon: <BiMath size={20} aria-hidden="true" />,
  },
];

const ActivityItem = memo(
  ({ name, description, path, icon, onClick }: ActivityItemProps) => {
    const [showArrow, setShowArrow] = useState(false);

    return (
      <S.Item
        to={path}
        onMouseEnter={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        role="link"
        aria-label={`${name} - ${description}`}
      >
        <S.IconBox>{icon}</S.IconBox>
        <S.Content>
          <S.Name>{name}</S.Name>
          <S.ItemDescription>{description}</S.ItemDescription>
        </S.Content>
        <S.Arrow
          variants={arrowVariants}
          animate={showArrow ? "visible" : "hidden"}
          initial={false}
        >
          <IoArrowForward aria-hidden="true" />
        </S.Arrow>
      </S.Item>
    );
  }
);

ActivityItem.displayName = "ActivityItem";

const SchoolActivityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showEmphasis, setShowEmphasis] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const hasShownEmphasis = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (documentHeight - windowHeight);

      setScrollProgress(progress);

      if (progress >= EMPHASIS_THRESHOLD && !hasShownEmphasis.current) {
        setShowEmphasis(true);
        hasShownEmphasis.current = true;

        setTimeout(() => {
          setShowEmphasis(false);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
    setShowEmphasis(false);
  }, []);

  const handleItemClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <S.Container>
      <AnimatePresence>
        {isOpen && (
          <S.Menu
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-label="School Activities Menu"
          >
            <S.Header>
              <S.Title>School Activities</S.Title>
              <S.Description>
                학교 생활과 관련된 다양한 활동들을 소개합니다.
              </S.Description>
            </S.Header>
            <S.List role="list">
              {activities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  {...activity}
                  onClick={handleItemClick}
                />
              ))}
            </S.List>
          </S.Menu>
        )}
      </AnimatePresence>
      <S.ButtonWrapper>
        {showEmphasis && (
          <S.EmphasisHint
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            클릭해서 더 많은 활동을 확인해보세요!
          </S.EmphasisHint>
        )}
        <S.Button
          ref={buttonRef}
          onClick={handleToggle}
          isOpen={isOpen}
          visibility={scrollProgress}
          animate={{
            ...(scrollProgress >= EMPHASIS_THRESHOLD
              ? emphasisVariants.emphasis
              : emphasisVariants.normal),
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          initial={{ opacity: 1, scale: 1 }}
        >
          <HiOutlineAcademicCap size={20} aria-hidden="true" />
          <span>School Activities</span>
        </S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default memo(SchoolActivityButton);
