import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


// utils.js
export function searchAthletes(athletes, { id, name }) {
  if (id) {
   //search by id
    return athletes.filter((athlete) => athlete.id === id);
  } else if (name) {
    // when only name is given
    const lowerName = name.toLowerCase();
    return athletes.filter((athlete) =>
      athlete.firstName.toLowerCase().includes(lowerName) ||
      athlete.lastName.toLowerCase().includes(lowerName)
    );
  } else {
    // when no id or name is given
    return null;
  }
}

export function searchAthlete(athletes, id){
  return athletes.find((athlete) => athlete.id == id);
}
