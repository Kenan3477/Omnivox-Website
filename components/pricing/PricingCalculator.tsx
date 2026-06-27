"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants";

export function PricingCalculator() {
  const [agents, setAgents] = useState(5);
  const [minutes, setMinutes] = useState(2000);

  const platformCost = agents * siteConfig.platformFeePerAgent;
  const telephonyCost = minutes * siteConfig.ratePerMinute;
  const total = platformCost + telephonyCost;
  const suggestedTopUp = Math.ceil(telephonyCost / 50) * 50 || 50;

  return (
    <div className="glass-card-light p-8">
      <h3 className="text-xl font-bold text-slate-900">Cost calculator</h3>
      <p className="mt-2 text-sm text-slate-600">
        Estimate your monthly platform fee and suggested credit top-up.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label htmlFor="agents" className="block text-sm font-medium text-slate-700 mb-2">
            Agent count: <span className="text-cyan-600 font-bold">{agents}</span>
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
          <label htmlFor="minutes" className="block text-sm font-medium text-slate-700 mb-2">
            Expected minutes/month: <span className="text-cyan-600 font-bold">{minutes.toLocaleString()}</span>
          </label>
          <input
            id="minutes"
            type="range"
            min={100}
            max={20000}
            step={100}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-full accent-cyan-500"
          />
          <p className="mt-1 text-xs text-slate-500">Inbound and outbound combined</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
          <p className="text-xs font-medium text-slate-500 uppercase">Platform</p>
          <p className="text-2xl font-bold text-slate-900">£{platformCost}</p>
          <p className="text-xs text-slate-500">/month</p>
        </div>
        <div className="rounded-xl bg-cyan-50 p-4 border border-cyan-100">
          <p className="text-xs font-medium text-cyan-700 uppercase">Telephony</p>
          <p className="text-2xl font-bold text-cyan-800">£{telephonyCost.toFixed(0)}</p>
          <p className="text-xs text-cyan-600">~5p/min</p>
        </div>
        <div className="rounded-xl bg-purple-50 p-4 border border-purple-100">
          <p className="text-xs font-medium text-purple-700 uppercase">Suggested top-up</p>
          <p className="text-2xl font-bold text-purple-900">£{suggestedTopUp}</p>
          <p className="text-xs text-purple-600">prepaid credits</p>
        </div>
      </div>

      <p className="mt-6 text-sm text-slate-600 border-t border-slate-100 pt-4">
        Estimated total: <strong className="text-slate-900">£{total.toFixed(0)}/month</strong> (£{platformCost} platform + £{telephonyCost.toFixed(0)} credits)
      </p>
    </div>
  );
}
