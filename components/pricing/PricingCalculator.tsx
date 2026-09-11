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
    <div className="border border-stone-300 bg-white p-6 md:p-8">
      <h3 className="font-display text-xl font-bold text-ink">Total cost clarity</h3>
      <p className="mt-2 text-sm text-ink-500">
        Telephony from real usage at the outbound default (~5p/min). Inbound in code is ~4p. Digital is not in this meter.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="agents" className="mb-2 block text-sm font-medium text-ink">
            Agents: <span className="font-mono tabular text-cta-700">{agents}</span>
          </label>
          <input
            id="agents"
            type="range"
            min={1}
            max={50}
            value={agents}
            onChange={(e) => setAgents(Number(e.target.value))}
            className="w-full accent-cta-500"
          />
        </div>
        <div>
          <label htmlFor="calls" className="mb-2 block text-sm font-medium text-ink">
            Connected calls per day (team total): <span className="font-mono tabular text-cta-700">{callsPerDay}</span>
          </label>
          <input
            id="calls"
            type="range"
            min={10}
            max={500}
            step={10}
            value={callsPerDay}
            onChange={(e) => setCallsPerDay(Number(e.target.value))}
            className="w-full accent-cta-500"
          />
        </div>
        <div>
          <label htmlFor="avgMin" className="mb-2 block text-sm font-medium text-ink">
            Average minutes per call: <span className="font-mono tabular text-cta-700">{avgMinutes}</span>
          </label>
          <input
            id="avgMin"
            type="range"
            min={1}
            max={10}
            value={avgMinutes}
            onChange={(e) => setAvgMinutes(Number(e.target.value))}
            className="w-full accent-cta-500"
          />
        </div>
      </div>

      <div className="mt-6 border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-ink">
        <span className="font-mono text-xs text-ink-500">Usage → </span>
        <strong>{formula}</strong>
        <span> = </span>
        <strong className="font-mono tabular">{monthlyMinutes.toLocaleString("en-GB")} min/mo</strong>
        <span> ≈ </span>
        <strong className="font-mono tabular">£{telephonyCost.toFixed(0)} telephony</strong>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="border-2 border-ink bg-paper p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-signal-800">OMNIVOX</p>
          <p className="mt-3 font-mono text-2xl tabular text-ink">
            £{omnivoxTotal.toFixed(0)}
            <span className="text-sm font-normal text-ink-500">/mo</span>
          </p>
          <ul className="mt-3 space-y-1 text-xs text-ink-500">
            <li>Platform: £{platformCost} (£25 × {agents})</li>
            <li>Telephony: £{telephonyCost.toFixed(0)} (metered)</li>
            <li>Suggested top-up: £{suggestedTopUp}</li>
          </ul>
        </div>
        <div className="border border-stone-300 bg-stone-50 p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500">{competitorBenchmark.label}</p>
          <p className="mt-3 font-mono text-2xl tabular text-ink">
            £{bundledTotal.toFixed(0)}
            <span className="text-sm font-normal text-ink-500">/mo{overFairUse ? "+" : ""}</span>
          </p>
          <ul className="mt-3 space-y-1 text-xs text-ink-500">
            <li>
              Seats: £{bundledPlatform} (£{competitorBenchmark.seatPricePerMonth} × {agents})
            </li>
            <li>“Included” minutes: {bundledIncludedMinutes.toLocaleString("en-GB")}/mo</li>
            {overFairUse ? (
              <li className="font-medium text-amber-800">
                Over fair-use — +{bundledOverageMinutes.toLocaleString("en-GB")} min ≈ £{bundledOverageCost.toFixed(0)} est.
              </li>
            ) : (
              <li>Within typical ~3k min/agent fair-use cap</li>
            )}
          </ul>
        </div>
      </div>
      <p className="mt-5 border-t border-stone-200 pt-4 text-xs text-ink-500">{competitorBenchmark.note}</p>
    </div>
  );
}
