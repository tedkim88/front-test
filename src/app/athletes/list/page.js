"use client";

import { useState } from "react";
import { searchAthletes } from "@/lib/utils";
import { toast } from "react-hot-toast";
import mockAthletes from "@/lib/mockdb.js";
import Link from "next/link";


export default function AthletesList() {
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [results, setResults] = useState([]);

  const clearInput = () => {
    setSearchId("");
    setSearchName("");
    setResults([]);
  };
  const handleSearch = () => {
    if (!searchId && !searchName) {
      toast.error("Please Enter ID or Name");
      return;
    }

    let id = null;
    if (searchId) {
      const parsed = Number(searchId);
      if (!isNaN(parsed)) {
        id = parsed;
      } else {
        toast.error("ID should be a number!!");
        return;
      }
    }

    const res = searchAthletes(mockAthletes, {
      id: searchId ? Number(searchId) : null,
      name: searchName,
    });

    if (res.length === 0) {
      toast.error("There is no data matching your search!");
    } else {
      setResults(res);
      0;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="p-8 max-w-3xl mx-auto w-full ">
        <h1 className="text-2xl font-bold mb-6">Search Athletes</h1>

        <div className="flex flex-col gap-2 mb-4">
          <input
            type="text"
            placeholder="Search by ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="border px-4 py-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Search by Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="border px-4 py-2 rounded w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition mt-2"
          >
            Search
          </button>

          <button
            onClick={clearInput}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition mt-2"
          >
            Clear
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {results.map((athlete) => (
            <div key={athlete.id} className="border p-4 rounded shadow-sm">
              <h2 className="font-semibold text-lg">
                {athlete.firstName} {athlete.lastName} (ID: {athlete.id})
              </h2>
              <p className="text-sm text-gray-600">
                DOB: {athlete.dateOfBirth}
              </p>
              <p className="text-sm text-gray-600">Email: {athlete.email}</p>
              <p className="text-sm text-gray-600">Phone: {athlete.phone}</p>

              <div className="mt-2">
                <h3 className="font-medium">Test Records:</h3>
                <ul className="mt-1 space-y-1">
                  {athlete.testRecords.map((record, idx) => (
                    <li key={idx} className="text-sm">
                      <span className="font-semibold">{record.date}</span>:{" "}
                      {Object.entries(record.results).map(
                        ([test, value], i) => (
                          <span key={i}>
                            {test} - {value}
                            {i < Object.entries(record.results).length - 1
                              ? ", "
                              : ""}
                          </span>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center mt-2">
                <Link href={`/athletes/${athlete.id}`}>
                  <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
