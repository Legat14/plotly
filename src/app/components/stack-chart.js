"use client";

import { useMemo } from "react";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

export function StackedBars({ red, yellow, green }) {
  const N = red.length;

  const x = useMemo(() => Array.from({ length: N }, (_, i) => i), [N]);

  const data = useMemo(
    () => [
      {
        type: "bar",
        x,
        y: red,
        marker: { color: "#e53935" },
        hoverinfo: "skip",
      },
      {
        type: "bar",
        x,
        y: yellow,
        marker: { color: "#fdd835" },
        hoverinfo: "skip",
      },
      {
        type: "bar",
        x,
        y: green,
        marker: { color: "#43a047" },
        hoverinfo: "skip",
      },
    ],
    [x, red, yellow, green],
  );

  const layout = useMemo(
    () => ({
      barmode: "stack",
      showlegend: false,
      margin: { t: 10, l: 40, r: 10, b: 30 },
      yaxis: {
        fixedrange: true,
      },
      xaxis: {
        fixedrange: true,
      },
    }),
    [],
  );

  return (
    <Plot
      data={data}
      layout={layout}
      config={{
        displayModeBar: false,
        responsive: true,
      }}
      style={{ width: "100%", height: "400px" }}
    />
  );
}
