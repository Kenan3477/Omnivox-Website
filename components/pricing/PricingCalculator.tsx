"use client";

import { useState } from "react";
import { competitorBenchmark, siteConfig } from "@/lib/constants";

export function PricingCalculator() {
  const [agents, setAgents] = useState(5);
  const [callsPerDay, setCallsPerDay] = useState(100);
  const [avgMinutes, setAvgMinutes] = useState(2);

  const workingDays = siteConfig.workingDaysPerMonth;
  const monthlyMinutes = callsPerDay * avgMinutes * workingDays;
  const platformCost = agents * siteConfig.platformFeePerAgent;
  const telephonyCost = monthlyMinutes * siteConfig.ratePerMinute;
  const omnivoxTotal = platformCost + telephonyCost;
  const suggestedTopUp = Math.ceil(telephonyCost / 50) * 50 || 50;

  const bundledPlatform = agents * competitorBenchmark.seatPricePerMonth;
  const bundledIncludedMinutes = agents * competitorBenchmark.fairUseMinutesPerAgent;
  const overFairUse = monthlyMinutes > bundledIncludedMinutes;
  const bundledOverageMinutes = Math.max(0, monthlyMinutes - bundledIncludedMinutes);
  const bundledOverageCost = bundledOverageMinutes * siteConfig.ratePerMinute;
  const bundledTotal = bundledPlatform + (overFairUse ? bundledOverageCost : 0);

  const formula = `${callsPerDay} calls/day × ${avgMinutes} min × ${workingDays} days × ${(siteConfig.ratePerMinute * 100).toFixed(0)}p`;

  return (
    <div className="glass-card-light p-6 md:p-8">
      <h3 className="font-display text-xl font-bold text-slate-900">Total cost clarity</h3>
      <p className="mt-2 text-sm text-slate-600">
        See your telephony cost from real usage — then compare to a typical bundled seat that assumes average volume.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="agents" className="block text-sm font-medium text-slate-700 mb-2">
            Agents: <span className="text-cyan-600 font-bold">{agents}</span>
          </label>
          <input
            id="agents"
            type="range"
            min={1}
            max={50}
            value={agents}
            onChange={(e) => setAgents(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="calls" className="block text-sm font-medium text-slate-700 mb-2">
            Connected calls per day (team total): <span className="text-cyan-600 font-bold">{callsPerDay}</span>
          </label>
          <input
            id="calls"
            type="range"
            min={10}
            max={500}
            step={10}
            value={callsPerDay}
            onChange={(e) => setCallsPerDay(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="avgMin" className="block text-sm font-medium text-slate-700 mb-2">
            Average minutes per call: <span className="text-cyan-600 font-bold">{avgMinutes}</span>
          </label>
          <input
            id="avgMin"
            type="range"
            min={1}
            max={10}
            value={avgMinutes}
            onChange={(e) => setAvgMinutes(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-cyan-100 bg-cyan-50/50 px-4 py-3 text-sm text-slate-700">
        <span className="font-mono text-xs text-slate-500">Your usage → </span>
        <strong>{formula}</strong>
        <span className="text-slate-600"> = </span>
        <strong className="text-cyan-800">{monthlyMinutes.toLocaleString()} min/mo</strong>
        <span className="text-slate-600"> ≈ </span>
        <strong className="text-cyan-800">£{telephonyCost.toFixed(0)} telephony</strong>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-cyan-200 bg-white p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-700">OMNIVOX AI</p>
          <p className="mt-3 text-2xl font-bold text-slate-900">£{omnivoxTotal.toFixed(0)}<span className="text-sm font-normal text-slate-500">/mo</span></p>
          <ul className="mt-3 space-y-1 text-xs text-slate-600">
            <li>Platform: £{platformCost} (£25 × {agents})</li>
            <li>Telephony: £{telephonyCost.toFixed(0)} (metered)</li>
            <li>Suggested top-up: £{suggestedTopUp}</li>
          </ul>
          <p className="mt-3 text-[11px] text-cyan-700 font-medium">Pay for usage, not empty seats</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{competitorBenchmark.label}</p>
          <p className="mt-3 text-2xl font-bold text-slate-900">
            £{bundledTotal.toFixed(0)}
            <span className="text-sm font-normal text-slate-500">/mo{overFairUse ? "+" : ""}</span>
          </p>
          <ul className="mt-3 space-y-1 text-xs text-slate-600">
            <li>Seats: £{bundledPlatform} (£{competitorBenchmark.seatPricePerMonth} × {agents})</li>
            <li>
              &ldquo;Included&rdquo; minutes: {bundledIncludedMinutes.toLocaleString()}/mo
            </li>
            {overFairUse ? (
              <li className="text-amber-700 font-medium">
                Over fair-use cap — +{bundledOverageMinutes.toLocaleString()} min ≈ £{bundledOverageCost.toFixed(0)} est.
              </li>
            ) : (
              <li>Within typical ~3k min/agent fair-use cap</li>
            )}
          </ul>
          <p className="mt-3 text-[11px] text-slate-500">{competitorBenchmark.note}</p>
        </div>
      </div>

      <p className="mt-5 text-xs text-slate-500 border-t border-slate-100 pt-4">
        Bundled comparison is illustrative (typical £50–90/seat dialers). OMNIVOX shows every minute in your credit ledger — no hidden ceiling.
      </p>
    </div>
  );
}
