import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";

async function CabinList() {
  // noStore() is used to prevent caching of the data fetched by getCabins(). This is useful when you want to ensure that the data is always fresh and not served from a cache, which can be important for real-time data or frequently changing content.but this the entire route will be dynamically rendered on the server
  // noStore();

  const cabins = await getCabins();
  if (!cabins.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
export default CabinList;
