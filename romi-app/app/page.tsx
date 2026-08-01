"use client";

import { useState } from "react";

const needs = [
  { icon: "🛏️", label: "Sleep", detail: "Campgrounds, cabins, and overnight options" },
  { icon: "💧", label: "Water", detail: "Potable-water refills and water stations" },
  { icon: "🚿", label: "Shower", detail: "Showers and clean-up stops" },
  { icon: "🍎", label: "Food", detail: "Groceries, meals, and road snacks" },
  { icon: "⛽", label: "Fuel", detail: "Gas, diesel, propane, and charging later" },
  { icon: "⚡", label: "Power", detail: "Hookups, outlets, and places to recharge" },
  { icon: "📶", label: "Wi‑Fi & Cell", detail: "Simple availability and useful signal info" },
  { icon: "🧺", label: "Laundry", detail: "Laundromats and campground laundry" },
  { icon: "🐾", label: "Dog Needs", detail: "Pet-friendly stops, supplies, and walks" },
  { icon: "🏔️", label: "Adventure", detail: "Trails, fishing, views, and local fun" },
];

export default function Home() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [showPlan, setShowPlan] = useState(false);

  function toggleNeed(label: string) {
    setSelectedNeeds((currentNeeds) =>
      currentNeeds.includes(label)
        ? currentNeeds.filter((need) => need !== label)
        : [...currentNeeds, label]
    );
  }

  if (showPlan) {
    return (
      <main className="min-h-screen bg-amber-50 px-5 py-8 text-slate-800">
        <section className="mx-auto max-w-md">
          <button
            type="button"
            onClick={() => setShowPlan(false)}
            className="text-sm font-bold text-teal-700"
          >
            ← Edit my road-day mission
          </button>

          <header className="mt-6">
            <p className="text-sm font-bold tracking-[0.22em] text-teal-700">
              ROMI
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
              Your Quick Plan
            </h1>
            <p className="mt-2 leading-6 text-slate-600">
              Here’s what ROMI will help you handle next.
            </p>
          </header>

          <section className="mt-7 rounded-3xl bg-teal-700 p-6 text-white shadow-lg">
            <p className="text-xs font-bold tracking-[0.18em] text-teal-100">
              YOUR ROAD-DAY MISSION
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight">
              {selectedNeeds.length} thing
              {selectedNeeds.length === 1 ? "" : "s"} to handle
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {selectedNeeds.map((need) => (
                <span
                  key={need}
                  className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white"
                >
                  {need}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <p className="text-xs font-bold tracking-[0.16em] text-orange-700">
              NEXT UP
            </p>
            <h3 className="mt-1 text-2xl font-black text-slate-900">
              Find places that work together
            </h3>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-100">
                <p className="font-bold text-slate-900">📍 Choose a starting area</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Tell ROMI where you are or where you’re headed.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-100">
                <p className="font-bold text-slate-900">🗺️ Compare helpful stops</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  ROMI will eventually show places that knock out several needs
                  without sending you all over town.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-100">
                <p className="font-bold text-slate-900">⭐ Save what works</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Keep the places you trust for your next trip through.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-5">
            <p className="text-xs font-bold tracking-[0.16em] text-orange-700">
              COMING NEXT
            </p>
            <h3 className="mt-2 text-2xl font-black text-slate-900">
              Where are you headed?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Our next build will add ROMI’s first location search, starting with
              your Lodgepole Campground test.
            </p>
          </section>
        </section>
      </main>
    );
  }

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
            Pick one thing—or build a whole little road-day mission.
          </p>
        </section>

        <section className="mt-8">
          <p className="text-xs font-bold tracking-[0.16em] text-orange-700">
            FIND WHAT HELPS
          </p>
          <h3 className="mt-1 text-2xl font-black text-slate-900">
            Pick your road-life needs
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Choose as many as you need. Tap one again to remove it.
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {needs.map((need) => {
              const isSelected = selectedNeeds.includes(need.label);

              return (
                <button
                  key={need.label}
                  type="button"
                  onClick={() => toggleNeed(need.label)}
                  className={`rounded-2xl p-4 text-left shadow-sm ring-1 transition ${
                    isSelected
                      ? "bg-orange-500 text-white ring-orange-500 shadow-md"
                      : "bg-white text-slate-800 ring-amber-100 hover:-translate-y-0.5 hover:shadow-md"
                  }`}
                >
                  <span className="text-3xl">{need.icon}</span>
                  <span className="mt-3 block font-bold">{need.label}</span>
                  <span className={`mt-1 block text-xs leading-5 ${isSelected ? "text-orange-50" : "text-slate-500"}`}>
                    {need.detail}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-5">
          {selectedNeeds.length > 0 ? (
            <>
              <p className="text-xs font-bold tracking-[0.16em] text-orange-700">
                YOUR ROAD-DAY MISSION
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                {selectedNeeds.length} thing
                {selectedNeeds.length === 1 ? "" : "s"} to handle
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedNeeds.map((need) => (
                  <span
                    key={need}
                    className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-orange-700 ring-1 ring-orange-200"
                  >
                    {need}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowPlan(true)}
                className="mt-5 w-full rounded-full bg-orange-600 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-orange-700"
              >
                Build my quick plan →
              </button>
            </>
          ) : (
            <>
              <p className="text-xs font-bold tracking-[0.16em] text-orange-700">
                ROMI IS READY
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                Your road buddy, not just another map
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tell ROMI what you need, and it will help build a practical next
                stop.
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
