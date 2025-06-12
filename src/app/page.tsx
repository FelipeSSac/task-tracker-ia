import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

async function Home() {
  const cookieStore = await cookies();
  const cookieName = `a_session_${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
  const session = cookieStore.get(cookieName);

  if (session) {
    return redirect("/board");
  }

  return redirect("/auth", RedirectType.replace);
}

export default Home;
