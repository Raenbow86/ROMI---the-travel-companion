"use client";

import { useState } from "react";

const needs = [
  {
    icon: "🛏️",
    label: "Sleep",
    detail: "Campgrounds, cabins, and overnight options",
  },
  {
    icon: "💧",
    label: "Water",
    detail: "Potable-water refills and water stations",
  },
  {
    icon: "🚿",
    label: "Shower",
    detail: "Showers and clean-up stops",
  },
  {
    icon: "🍎",
    label: "Food",
    detail: "Groceries, meals, and road snacks",
  },
  {
    icon: "⛽",
    label: "Fuel",
    detail: "Gas, diesel, propane, and charging later",
  },
  {
    icon: "⚡",
    label: "Power",
    detail: "Hookups, outlets, and places to recharge",
  },
  {
    icon: "📶",
    label: "Wi‑Fi & Cell",
    detail: "Simple availability and useful signal info",
  },
  {
    icon: "🧺",
    label: "Laundry",
    detail: "Laundromats and campground laundry",
  },
  {
    icon: "🐾",
    label: "Dog Needs",
    detail: "Pet-friendly stops, supplies, and walks",
  },
  {
    icon: "🏔️",
    label: "Adventure",
    detail: "Trails, fishing, views, and local fun",
  },
];

export default function Home() {
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const selectedNeedData = needs.find((need) => need.label === selectedNeed) ?? null;

  const handleNeedSelect = (label: string) => {
    setSelectedNeed((current) => (current === label ? null : label));
  };

  return (
    <main className="min-h-screen bg-amber-50 px-5 py-8 text-slate-800">
      <section className="mx-auto max-w-md">
        <header>
          <p className="text-sm font-bold tracking-[0.22em] text-teal-700">
            ROMI
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
            The Travel Companion
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Road-life Operations, Mapping &amp; Insights
          </p>
        </header>

        <section className="mt-7 rounded-3xl bg-teal-700 p-6 text-white shadow-lg">
          <p className="text-xs font-bold tracking-[0.18em] text-teal-100">
            TODAY
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight">
            What do you need today?
          </h2>
          <p className="mt-3 leading-6 text-teal-50">
            Find practical help for real life on the road—wherever your next
            stop takes you.
          </p>
        </section>

        <section className="mt-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-orange-700">
                FIND WHAT HELPS
              </p>
              <h3 className="mt-1 text-2xl font-black text-slate-900">
                Pick a road-life need
              </h3>
            </div>
            <span className="text-2xl">🧭</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {needs.map((need) => {
              const isSelected = selectedNeed === need.label;

              return (
                <button
                  key={need.label}
                  type="button"
                  onClick={() => handleNeedSelect(need.label)}
                  aria-pressed={isSelected}
                  className={`rounded-2xl p-4 text-left shadow-sm ring-1 transition ${
                    isSelected
                      ? "bg-orange-500 text-white ring-orange-500 shadow-md"
                      : "bg-white text-slate-800 ring-amber-100 hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >
                  <span className="text-3xl">{need.icon}</span>
                  <span className="mt-3 block font-bold">{need.label}</span>
                  <span
                    className={`mt-1 block text-xs leading-5 ${
                      isSelected ? "text-orange-50" : "text-slate-500"
                    }`}
                  >
                    {need.detail}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-5">
          <p className="text-xs font-bold tracking-[0.16em] text-orange-700">
            ROMI IS READY
          </p>

          {selectedNeed ? (
            <>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                Looking for {selectedNeedData?.label ?? selectedNeed}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {selectedNeedData ? (
                  <>
                    <span>{selectedNeedData.detail}</span>
                    <span className="mt-3 flex items-center gap-2 text-base font-semibold text-slate-800">
                      <span>{selectedNeedData.icon}</span>
                      <span>{selectedNeedData.label}</span>
                    </span>
                  </>
                ) : (
                  "Next we’ll connect this choice to real places, maps, saved places, and honest traveler reports."
                )}
              </p>
            </>
          ) : (
            <>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                Your road buddy, not just another map
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Choose what you need right now. ROMI will eventually help you
                compare nearby options and build a practical next stop.
              </p>
            </>
          )}
        </section>

        <footer className="mt-8 pb-3 text-center text-sm text-slate-500">
          Real place information. Honest traveler reports.
        </footer>
      </section>
    </main>
  );
}
