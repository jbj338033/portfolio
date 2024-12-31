import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

interface Position {
  x: number;
  y: number;
}

interface Particle {
  position: Position;
  velocity: Position;
  alpha: number;
  radius: number;
  color: string;
  life: number;
  maxLife: number;
}

interface BackgroundStar {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface DisplayNumber {
  value: string;
  position: Position;
  velocity: Position;
  targetPosition: Position;
}

const NewYearCounter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const displayNumbers = useRef<DisplayNumber[]>([]);
  const backgroundStars = useRef<BackgroundStar[]>([]);
  const mousePosition = useRef<Position>({ x: 0, y: 0 });
  const rafId = useRef<number>();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const isNight = useRef(false);

  const initBackgroundStars = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const starCount = Math.floor((width * height) / 10000);

    backgroundStars.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  };

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    initBackgroundStars();
    initDisplayNumbers();
  };

  const updateTime = () => {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const nextNewYear = new Date(nextYear, 0, 1);
    const difference = nextNewYear.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      if (displayNumbers.current.length > 0) {
        const numbers = [
          days.toString().padStart(2, "0"),
          hours.toString().padStart(2, "0"),
          minutes.toString().padStart(2, "0"),
          seconds.toString().padStart(2, "0"),
        ];

        displayNumbers.current.forEach((num, i) => {
          num.value = numbers[i];
        });
      }
    }

    isNight.current = now.getHours() >= 18 || now.getHours() < 6;
  };

  const initDisplayNumbers = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const gap = width / 6;
    const startX = gap;

    const numbers = [
      timeLeft.days.toString().padStart(2, "0"),
      timeLeft.hours.toString().padStart(2, "0"),
      timeLeft.minutes.toString().padStart(2, "0"),
      timeLeft.seconds.toString().padStart(2, "0"),
    ];

    displayNumbers.current = numbers.map((num, i) => ({
      value: num,
      position: { x: startX + gap * i, y: height / 2 },
      velocity: { x: 0, y: 0 },
      targetPosition: { x: startX + gap * i, y: height / 2 },
    }));
  };

  const createParticle = (x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    const baseColor = isNight.current ? "147, 197, 253" : "59, 130, 246";

    return {
      position: { x, y },
      velocity: {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
      },
      alpha: 1,
      radius: Math.random() * 2 + 2,
      color: `rgba(${baseColor},`,
      life: 0,
      maxLife: 100,
    };
  };

  const drawBackground = (ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (isNight.current) {
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(1, "#1e1b4b");
    } else {
      gradient.addColorStop(0, "#1e40af");
      gradient.addColorStop(1, "#3b82f6");
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    backgroundStars.current.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();

      star.opacity = Math.sin(Date.now() / 1000 + star.x + star.y) * 0.2 + 0.3;
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    drawBackground(ctx);

    particles.current = particles.current.filter((particle) => {
      particle.position.x += particle.velocity.x;
      particle.position.y += particle.velocity.y;
      particle.life += 1;

      const lifeProgress = particle.life / particle.maxLife;
      particle.alpha = 1 - lifeProgress;

      const minRadius = 0.5;
      const radius = Math.max(minRadius, particle.radius * (1 - lifeProgress));

      ctx.beginPath();
      ctx.arc(particle.position.x, particle.position.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `${particle.color}${particle.alpha})`;
      ctx.fill();

      return particle.life < particle.maxLife;
    });

    displayNumbers.current.forEach((num, index) => {
      const dx = mousePosition.current.x - num.position.x;
      const dy = mousePosition.current.y - num.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        const force = (100 - distance) / 100;
        num.velocity.x -= Math.cos(angle) * force;
        num.velocity.y -= Math.sin(angle) * force;
      }

      num.velocity.x *= 0.95;
      num.velocity.y *= 0.95;

      num.position.x += num.velocity.x;
      num.position.y += num.velocity.y;

      num.position.x += (num.targetPosition.x - num.position.x) * 0.05;
      num.position.y += (num.targetPosition.y - num.position.y) * 0.05;

      ctx.shadowColor = isNight.current
        ? "rgba(147, 197, 253, 0.5)"
        : "rgba(59, 130, 246, 0.5)";
      ctx.shadowBlur = 20;
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 72px Pretendard";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(num.value, num.position.x, num.position.y);

      ctx.shadowBlur = 0;
      const units = ["일", "시간", "분", "초"];
      ctx.font = "24px Pretendard";
      ctx.fillText(units[index], num.position.x, num.position.y + 50);
    });

    rafId.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mousePosition.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    for (let i = 0; i < 2; i++) {
      particles.current.push(
        createParticle(mousePosition.current.x, mousePosition.current.y)
      );
    }
  };

  useEffect(() => {
    setupCanvas();
    updateTime();

    window.addEventListener("resize", setupCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    const timeInterval = setInterval(updateTime, 1000);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setupCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timeInterval);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <S.Canvas ref={canvasRef} />;
};

export default NewYearCounter;
