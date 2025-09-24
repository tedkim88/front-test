const mockAthletes = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    email: "jane.doe@example.com",
    phone: "1234567890",
    testRecords: [
      { date: "2023-01-01", results: { "40-yard dash": 12.3, "5-10-5 shuttle run": 15.4, "agility T-test": 23.4 } },
      { date: "2023-02-01", results: { "40-yard dash": 13.1, "5-10-5 shuttle run": 12.0, "agility T-test": 12.9 } }
    ]
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    dateOfBirth: "1992-03-15",
    email: "john.smith@example.com",
    phone: "2345678901",
    testRecords: [
      { date: "2023-01-01", results: { "40-yard dash": 11.8, "5-10-5 shuttle run": 14.9, "agility T-test": 22.5 } },
      { date: "2023-03-01", results: { "40-yard dash": 11.7, "5-10-5 shuttle run": 14.7, "agility T-test": 22.2 } }
    ]
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Johnson",
    dateOfBirth: "1991-07-22",
    email: "alice.johnson@example.com",
    phone: "3456789012",
    testRecords: [
      { date: "2023-02-01", results: { "40-yard dash": 12.5, "5-10-5 shuttle run": 15.6, "agility T-test": 23.8 } },
      { date: "2023-04-01", results: { "40-yard dash": 12.4, "5-10-5 shuttle run": 15.3, "agility T-test": 23.5 } }
    ]
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Williams",
    dateOfBirth: "1989-11-10",
    email: "bob.williams@example.com",
    phone: "4567890123",
    testRecords: [
      { date: "2023-01-01", results: { "40-yard dash": 12.0, "5-10-5 shuttle run": 15.2, "agility T-test": 23.0 } },
      { date: "2023-03-01", results: { "40-yard dash": 11.9, "5-10-5 shuttle run": 15.0, "agility T-test": 22.7 } }
    ]
  }
];

export default mockAthletes