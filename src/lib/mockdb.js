const mockAthletes = [];


const firstNames = [
  "Michael", "Emily", "Chris", "Jessica", "Matthew", "Ashley", "Daniel", "Sarah", "David", "Amanda",
  "James", "Brittany", "John", "Samantha", "Robert", "Elizabeth", "Joseph", "Megan", "Joshua", "Lauren",
  "Andrew", "Stephanie", "Ryan", "Nicole", "Brandon", "Kayla", "Justin", "Amber", "William", "Rachel",
  "Anthony", "Courtney", "Jonathan", "Danielle", "Nicholas", "Heather", "Tyler", "Melissa", "Zachary", "Rebecca",
  "Kevin", "Michelle", "Kyle", "Tiffany", "Thomas", "Chelsea", "Brian", "Erica", "Alexander", "Katherine"
];
const lastNames = [
  "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White",
  "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee",
  "Walker", "Hall", "Allen", "Young", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill",
  "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner",
  "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers"
];

function randomDate(start, end) {
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return d.toISOString().split('T')[0];
}

function randomPhone() {
  return (
    Math.floor(1000000000 + Math.random() * 9000000000)
      .toString()
  );
}

function randomTestResults() {
  return {
    "40-yard dash": +(10 + Math.random() * 5).toFixed(1),
    "5-10-5 shuttle run": +(12 + Math.random() * 5).toFixed(1),
    "agility T-test": +(20 + Math.random() * 5).toFixed(1)
  };
}

let nextId = mockAthletes.length + 1;

for (let i = 0; i < 100; i++) {
  const firstName = firstNames[i % firstNames.length];
  const lastName = lastNames[i % lastNames.length];
  const year = 1985 + (i % 20);
  const month = 1 + (i % 12);
  const day = 1 + (i % 28);
  const dateOfBirth = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;
  const phone = randomPhone();
  const testRecords = [
    {
      date: randomDate(new Date(2023, 0, 1), new Date(2023, 6, 1)),
      results: randomTestResults()
    },
    {
      date: randomDate(new Date(2023, 6, 2), new Date(2023, 11, 31)),
      results: randomTestResults()
    }
  ];
  mockAthletes.push({
    id: nextId++,
    firstName,
    lastName,
    dateOfBirth,
    email,
    phone,
    testRecords
  });
}

export default mockAthletes