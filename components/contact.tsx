import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Card } from "./cardeffect";

export function AboutMe() {
  return (
    <div className="bg-slate-200 dark:bg-slate-900 border border-zinc-400 max-w-6xl mx-auto mb-6 mt-12 rounded-xl dark:border-slate-600">
      <Card></Card>
    </div>
  );
}

export default AboutMe;
