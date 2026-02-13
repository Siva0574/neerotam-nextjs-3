"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="flex justify-start mb-6">
        <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
            bg-slate-100 dark:bg-slate-800 
            text-slate-700 dark:text-slate-200 
            hover:bg-primary hover:text-white 
            hover:shadow-lg hover:shadow-primary/40
            transition-all duration-300 font-semibold">
            <span className="material-symbols-outlined text-lg">
            arrow_back
            </span>
            Back
        </button>
    </div>
);
}