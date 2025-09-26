"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs"; // 

export default function SyncUserClient() {
  const { user } = useUser(); // 
console.log("user:", user);
  useEffect(() => {
    async function syncUser() {
      if (!user) return;

      const payload = {
        ClerkId: user.id,
        Email: user.emailAddresses[0]?.emailAddress,
        Name: user.firstName,
        Phone: user.phoneNumbers[0]?.phoneNumber,
        ImageUrl: user.imageUrl,
        Role: "User",
      };

      try {
        await fetch("http://localhost:5294/api/SyncDb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error("Failed to sync user:", err);
      }
    }

    syncUser();
  }, [user]); // when user changes, re-run

  return null;
}
