
import { redirect } from "next/navigation";

async function Home() {
  redirect("/board");
}

export default Home;
