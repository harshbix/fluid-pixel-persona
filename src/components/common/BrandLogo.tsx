import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const iconDimensions = {
    sm: { width: 34, height: 22, r: 8.5, c1: 11, c2: 23, stroke: 2 },
    md: { width: 44, height: 28, r: 11, c1: 14.5, c2: 29.5, stroke: 2.25 },
    lg: { width: 56, height: 36, r: 14, c1: 18.5, c2: 37.5, stroke: 2.8 },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Two Overlapping / Crossing Circles (Audi 2-Ring Style) */}
      <div className="relative flex items-center justify-center text-foreground group-hover:text-[#1a3a35] dark:group-hover:text-emerald-400 transition-colors">
        <svg
          width={iconDimensions.width}
          height={iconDimensions.height}
          viewBox={`0 0 ${iconDimensions.width} ${iconDimensions.height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Ring 1 (Left Circle) */}
          <circle
            cx={iconDimensions.c1}
            cy={iconDimensions.height / 2}
            r={iconDimensions.r}
            stroke="currentColor"
            strokeWidth={iconDimensions.stroke}
            className="opacity-90 transition-all duration-300"
          />
          {/* Ring 2 (Right Circle, Intersecting/Crossing) */}
          <circle
            cx={iconDimensions.c2}
            cy={iconDimensions.height / 2}
            r={iconDimensions.r}
            stroke="currentColor"
            strokeWidth={iconDimensions.stroke}
            className="opacity-90 transition-all duration-300"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-[17px] font-bold tracking-tight text-gray-900 dark:text-white">
            Junior Jeconia
          </span>
          <span className="text-[9.5px] font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-0.5">
            harshbix
          </span>
        </div>
      )}
    </div>
  );
};
