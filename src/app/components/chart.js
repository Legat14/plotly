"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false,
});

export function Chart() {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
      ]}
      layout={{
        width: "100%",
        height: "100%",
        title: { text: "A Fancy Plot" },
      }}
    />
  );
}
