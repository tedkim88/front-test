// AthleteChart.js
"use client";
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

export default function AthleteChart({ testName, testData, color }) {
  return (
    <div className="h-72">
      <h4 className="text-lg font-bold mb-2 text-center" style={{ color }}>
        {testName}
      </h4>
      <ResponsiveBar
        data={testData}
        keys={["value"]}
        indexBy="date"
        margin={{ top: 30, right: 20, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={[color]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickRotation: 0,
          legend: "Date",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        axisLeft={{
          legend: "Time (s)",
          legendPosition: "middle",
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
      />
    </div>
  );
}
