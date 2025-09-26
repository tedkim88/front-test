"use client";
import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useParams } from "next/navigation";
import mockAthletes from "@/lib/mockdb.js";
import { searchAthlete } from "@/lib/utils";

export default function AthleteDetailsWithChart() {
  const params = useParams();
  const athlete = searchAthlete(mockAthletes, params.id);


console.log(isSignedIn, user)
  if (!athlete)
    return (
      <div className="text-center text-red-500 mt-10 text-lg">
        Athlete Not Found
      </div>
    );

  // for chart
  const barData = athlete.testRecords.map(record => ({
    date: record.date,
    "40-yard dash": record.results["40-yard dash"],
    "5-10-5 shuttle run": record.results["5-10-5 shuttle run"],
    "Agility T-test": record.results["agility T-test"]
  }));

  return (
    <div className="max-w-3xl mx-auto p-6  shadow-lg rounded-lg mt-10">
      {/* players card */}
      <h2 className="text-2xl font-bold mb-4">
        {athlete.firstName} {athlete.lastName}{" "}
        <span className="text-gray-500 text-sm">(ID: {athlete.id})</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-700">
        <p>
          <strong>Date of Birth:</strong> {athlete.dateOfBirth}
        </p>
        <p>
          <strong>Email:</strong> {athlete.email}
        </p>
        <p>
          <strong>Phone:</strong> {athlete.phone}
        </p>
      </div>

      {/* bar chart */}
      <h3 className="text-xl font-semibold mb-2">Test Records Chart</h3>
      <div style={{ height: 300 }}>
        <ResponsiveBar
          data={barData}
          keys={["40-yard dash", "5-10-5 shuttle run", "Agility T-test"]}
          indexBy="date"
          margin={{ top: 30, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "set2" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickRotation: -45,
            tickColor: "black",
            legend: "Date",
            legendPosition: "middle",
            legendOffset: 40
          }}
          axisLeft={{
            legend: "Time (s)",
            legendPosition: "middle",
            legendOffset: -50
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              translateX: 120,
              itemsSpacing: 8,
              itemWidth: 100,
              itemHeight: 20,
              symbolSize: 16,
              toggleSerie: true
            }
          ]}
          animate={true}
        />
      </div>

      {/* athlete details */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Test Records Details</h3>
      <div className="space-y-4">
        {athlete.testRecords.map((record, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-md p-4 bg-gray-50"
          >
            <strong className="block mb-2 text-blue-400 text-3xl">{record.date}</strong>
            <ul className="list-disc list-inside text-gray-700">
              {Object.entries(record.results).map(([testName, value]) => (
                <li key={testName}>
                  <span className="font-medium">{testName}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
