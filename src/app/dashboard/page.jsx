import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/auth"; 
import SettingsPage from "../_components/SettingsPage"

export default async function DashboardPage() {
  // Step 1: Get the current session
  const session = await getServerSession(authOptions);

  // Step 2: If user is not logged in, redirect to login
  if (!session) {
    redirect("/login");
  }

  // Step 3: Render protected content
  return (
   <div>
    <div className="p-10">
      <h1>Welcome, {session.user?.name}</h1>
      <p>This is your private dashboard page.</p>
    </div>




<SettingsPage/>

   </div>
  );
}
