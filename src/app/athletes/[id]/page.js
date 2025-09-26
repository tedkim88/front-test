"use client";
import React from "react";
import { useParams } from "next/navigation";
import mockAthletes from "@/lib/mockdb.js";
import { searchAthlete } from "@/lib/utils";
import AthleteChart from "@/components/AthleteChart";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AthleteDetailsWithChart() {
  const params = useParams();
  const athlete = searchAthlete(mockAthletes, params.id);

  if (!athlete)
    return (
      <div className="text-center text-red-500 mt-10 text-lg">
        Athlete Not Found
      </div>
    );

  const testCategories = [
    "40-yard dash",
    "5-10-5 shuttle run",
    "Agility T-test",
    //to be added
  ];

  const testColors = {
    "40-yard dash": "#f87171", // red
    "5-10-5 shuttle run": "#60a5fa", // blue
    "Agility T-test": "#34d399", // green
    //to be added
  };

  return (
    <div className="max-w-6xl mx-auto p-6 shadow-lg rounded-lg mt-10">
      {/* player basic info */}
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">Info</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-white">
        <p>
          <strong>Name:</strong> {athlete.firstName} {athlete.lastName}{" "}
          <span className="text-white text-sm">(ID: {athlete.id})</span>
        </p>
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

      {/* player chart */}
      <h3 className="text-2xl font-semibold mb-4 mt-9 text-yellow-400">
        Performance by Category
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-6 bg-white min-h-[22rem]">
        {testCategories.map((testName) => {
          const testData = athlete.testRecords.map((record) => ({
            date: record.date,
            value: record.results[testName],
          }));

          return (
            <AthleteChart
              key={testName}
              testName={testName}
              testData={testData}
              color={testColors[testName]}
            />
          );
        })}
      </div>

      {/* player info table */}
      <h3 className="text-2xl font-semibold mb-4 mt-9 text-yellow-400">
        Test Records Details
      </h3>
      <Table>
        <TableCaption>Athlete Test Performance Records</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Date</TableHead>
            {testCategories.map((test) => (
              <TableHead key={test}>{test}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {athlete.testRecords.map((record, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{record.date}</TableCell>
              {testCategories.map((test) => (
                <TableCell key={test}>{record.results[test]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
