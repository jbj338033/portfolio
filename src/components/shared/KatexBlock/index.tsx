import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import * as S from "./style";

interface Props {
  math: string;
  block?: boolean;
  errorColor?: string;
}

const KatexBlock = ({ math, block = true, errorColor = "#cc0000" }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, {
          displayMode: block,
          throwOnError: false,
          errorColor,
          trust: true,
          strict: false,
        });
      } catch (error) {
        console.error("KaTeX rendering error:", error);
        if (containerRef.current) {
          containerRef.current.textContent = math;
        }
      }
    }
  }, [math, block, errorColor]);

  return <S.Container ref={containerRef} isBlock={block} />;
};

export default KatexBlock;
