import DesktopNavbar from "./DesktopNavbar";
import { currentUser } from "@clerk/nextjs/server";

export default async function DesktopNavbarServer() {
  const user = await currentUser();

  const safeUser = user
    ? {
        id: user.id,
        username: user.username,
        email: user.emailAddresses?.[0]?.emailAddress ?? null,
        imageUrl: user.imageUrl,
      }
    : null;

  return <DesktopNavbar user={safeUser} />;
}
