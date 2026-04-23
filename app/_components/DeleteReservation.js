"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteReservation } from "../_lib/actions";
import { useTransition } from "react";
import Swal from "sweetalert2";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId }) {
  const [isPending, startTransition] = useTransition();

  async function handleDelete() {
    const result = await Swal.fire({
      title: "Delete reservation?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "rounded-xl",
        confirmButton:
          "bg-accent-600 mx-2 text-primary-900 px-4 py-2 rounded-md font-bold",
        cancelButton:
          "bg-gray-600 mx-2 text-white px-4 py-2 rounded-md font-bold",
      },
      buttonsStyling: false,
    });

    if (result.isConfirmed) {
      startTransition(() => deleteReservation(bookingId));
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">{isPending ? <SpinnerMini /> : "Delete"}</span>
    </button>
  );
}

export default DeleteReservation;
