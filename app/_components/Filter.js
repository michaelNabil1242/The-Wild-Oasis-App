"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  //useSearchParams in next returns an instance of URLSearchParams, which is immutable. To update the search params, we need to create a new instance of URLSearchParams and pass the updated
  const searchParams = useSearchParams();

  const current = searchParams.get("capacity") ?? "all";
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(filter) {
    if (current === filter) return;

    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex ">
      <Button filter="all" handleFilter={handleFilter} current={current}>
        All cabins
      </Button>
      <Button filter="small" handleFilter={handleFilter} current={current}>
        1&mdash;3
      </Button>
      <Button filter="medium" handleFilter={handleFilter} current={current}>
        4&mdash;7
      </Button>
      <Button filter="large" handleFilter={handleFilter} current={current}>
        8&mdash;12
      </Button>
    </div>
  );
}

function Button({ children, filter, current, handleFilter }) {
  const isActive = current === filter;
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={` hover:bg-primary-700 px-5 py-2 ${isActive ? "bg-primary-700" : ""}`}
    >
      {children}
    </button>
  );
}

export default Filter;
