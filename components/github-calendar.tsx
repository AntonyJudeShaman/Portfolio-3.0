import { siteConfig } from "config/site";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalendar() {
  return (
    <div className="md:mt-[5rem] mt-0 hidden md:block flex justify-center items-center mx-auto">
      <GitHubCalendar
        username={siteConfig.name}
        blockSize={12}
        blockMargin={4}
        fontSize={16}
      />
    </div>
  );
}
