import { auth } from "@/auth";
import Banner from "@/components/client-components/Banner";
import Topbrands from "@/components/client-components/Topbrands";


export default async function Home() {
  const response = await auth()
  return (
    <div className="">
      <Banner />
      <Topbrands />

    </div>
  );
}
