"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="w-full overflow-hidden border border-primary-700/60 bg-primary-900 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.45)]">
      <div className="flex flex-col gap-3 bg-primary-800/90 px-6 py-4 text-primary-300 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-400">
          Logged in as
        </p>

        <div className="flex items-center gap-3 rounded-full bg-primary-700/70 px-3 py-2">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full border border-primary-600"
            src={user.image}
            alt={user.name}
          />
          <p className="text-sm font-semibold text-primary-100">{user.name}</p>
        </div>
      </div>

      <form
        // action={createBookingWithData}
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="flex flex-col gap-6 bg-primary-900 px-6 py-8 text-lg lg:px-10"
      >
        <div className="space-y-2">
          <label
            htmlFor="numGuests"
            className="text-sm font-medium uppercase tracking-[0.2em] text-primary-400"
          >
            How many guests?
          </label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-lg border border-primary-300 bg-primary-200 px-4 py-3 text-primary-800 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="observations"
            className="text-sm font-medium uppercase tracking-[0.2em] text-primary-400"
          >
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="min-h-[120px] w-full rounded-lg border border-primary-300 bg-primary-200 px-4 py-3 text-primary-800 shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end pt-2">
          {!(startDate && endDate) ? (
            <p className="text-base text-primary-300">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
