import React from "react";

export default function PixelArray({
  pixelCount = 8_200_000_000 / 100_000_000, // 1/100,000,000th of world population
  gap = 4, // gap between pixels in px
  width = 100, // container width in px
}) {
  return (
    <div
      className="overflow-y-auto border border-gray-300 rounded"
      style={{ width: `${width}px`, maxHeight: "400px", padding: "8px" }} // adjust maxHeight as needed
    >
      <div
        className="flex flex-col"
        style={{
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: pixelCount }).map((_, i) => (
          <div
            key={i}
            className={`bg-foreground rounded-sm w-[1px] h-[1px]`}
          ></div>
        ))}
      </div>
    </div>
  );
}
