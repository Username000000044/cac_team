"use client";

import { csvParse } from "d3-dsv";
import { scaleSequentialSqrt } from "d3-scale";
import { interpolateMagma } from "d3-scale-chromatic";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false, // ❗ disables server-side rendering for this component
});

export const GlobePhishing = () => {
  const globeEl = useRef<any>(null);
  const [atkData, setAtkData] = useState<object[] | undefined>([]);

  useEffect(() => {
    fetch("/datasets/world_phishing.csv")
      .then((res) => res.text())
      .then((csv) =>
        csvParse(csv, ({ lat, lng, atk }) => ({
          lat: +lat,
          lng: +lng,
          atk: +atk,
        })),
      )
      .then(setAtkData);
  }, []);

  const weightColor = scaleSequentialSqrt(interpolateMagma).domain([0, 1e7]);

  return (
    <div className="absolute sm:-top-10 md:-left-200 md:-top-60 md:scale-40 opacity-100 ">
      <Globe
        ref={globeEl}
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
        // backgroundImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png"
        backgroundColor="#00000000"
        //
        hexBinPointsData={atkData}
        hexBinPointWeight="atk"
        hexAltitude={(d) => d.sumWeight * 6e-8}
        hexBinResolution={4}
        hexTopColor={(d) => weightColor(d.sumWeight)}
        hexSideColor={(d) => weightColor(d.sumWeight)}
        hexBinMerge={true}
        enablePointerInteraction={false}
        onGlobeReady={() => {
          const controls = globeEl.current?.controls();
          if (!globeEl.current) return;

          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.5;
          controls.enableRotate = true;
          controls.enableZoom = false;
          controls.enablePan = true;
        }}
        animateIn={false}
      />
    </div>
  );
};
