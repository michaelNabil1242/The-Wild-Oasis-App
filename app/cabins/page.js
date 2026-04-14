import CabinList from "@/app/_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
// revalidate=0 :will be dynamically rendered on the server on every request, This is useful for pages that need to display real-time data or personalized content that cannot be cached.
// revalidate=value , static but isr
// if revalidate isn't specified the page will be static forever
// revalidate can't be computed,it hast to be a static value in seconds
export const revalidate = 15;
export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy natur&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
