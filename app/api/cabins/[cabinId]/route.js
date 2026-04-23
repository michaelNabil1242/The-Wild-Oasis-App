import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(requrst, { params }) {
  const cabinId = params.cabinId;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ messsage: "Cabin isn't found" });
  }
}
