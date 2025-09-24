import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";

export default async function MobileNavbarServer() {
  const user = await currentUser();

  const safeUser = user
    ? {
        id: user.id,
        username: user.username,
        email: user.emailAddresses?.[0]?.emailAddress ?? null,
        imageUrl: user.imageUrl,
      }
    : null;

  return <MobileNavbar user={safeUser} />;
}
