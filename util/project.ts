// api.js

import { Octokit } from "@octokit/core";

export async function fetchProjects() {
    
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  try {
    const res = await octokit.request(`GET /user/repos`, {
      per_page: 100,
      affiliation: "owner",
      sort: "updated",
    });

    const result = res.data.map((project) => ({
      ...project,
      emoji: String.fromCodePoint(0x1f600 + Math.floor(Math.random() * 80)),
    }));

    const projects = result
      .filter((project) => !["cru", "To-Do-List-in-Nextjs", "Tri2Champ"].includes(project.name))
      .sort((a, b) => {
        const stargazersComparison = b.stargazers_count - a.stargazers_count;

        if (stargazersComparison !== 0) {
          return stargazersComparison;
        }

        return (
          new Date(b.created_at ?? Number.POSITIVE_INFINITY).getTime() -
          new Date(a.created_at ?? Number.POSITIVE_INFINITY).getTime()
        );
      });

    return projects;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}
