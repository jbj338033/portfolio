import { useState, useEffect } from "react";
import {
  CounterContainer,
  Title,
  CountdownContainer,
  TimeUnit,
  Number,
  Label,
  Message,
} from "./style";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const NewYear = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextYear = now.getFullYear() + 1;
      const nextNewYear = new Date(nextYear, 0, 1);
      const difference = nextNewYear.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const isNewYear =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <CounterContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Title variants={itemVariants}>새해까지 남은 시간</Title>
      <CountdownContainer>
        <TimeUnit variants={itemVariants}>
          <Number>{timeLeft.days.toString().padStart(2, "0")}</Number>
          <Label>일</Label>
        </TimeUnit>
        <TimeUnit variants={itemVariants}>
          <Number>{timeLeft.hours.toString().padStart(2, "0")}</Number>
          <Label>시간</Label>
        </TimeUnit>
        <TimeUnit variants={itemVariants}>
          <Number>{timeLeft.minutes.toString().padStart(2, "0")}</Number>
          <Label>분</Label>
        </TimeUnit>
        <TimeUnit variants={itemVariants}>
          <Number>{timeLeft.seconds.toString().padStart(2, "0")}</Number>
          <Label>초</Label>
        </TimeUnit>
      </CountdownContainer>
      <Message variants={itemVariants}>
        {isNewYear
          ? "새해 복 많이 받으세요! 🎊"
          : "희망찬 새해를 기다리며... ✨"}
      </Message>
    </CounterContainer>
  );
};

export default NewYear;
