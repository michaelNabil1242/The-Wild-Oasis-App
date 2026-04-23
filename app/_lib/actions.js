"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  deleteBooking,
  getBookings,
  updateGuest as updateGuestApi,
} from "./data-service";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must login first");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const regEx = /^[a-zA-Z0-9]{6,14}$/;
  if (!regEx.test(nationalID))
    throw new Error("national id must be between 6 and 14");
  const updatedData = {
    nationalID,
    nationality,
    countryFlag,
  };
  await updateGuestApi(session.user.guestId, updatedData);
  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must login first");

  const guestBokkings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBokkings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are nit allowed to delete this booking");

  await deleteBooking(bookingId);
  revalidatePath("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
