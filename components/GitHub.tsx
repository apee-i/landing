"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface MinimalCommit {
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
}

const GitHub = () => {
  const repoOwner = "apee-i";
  const repoName = "apee-i";

  const [stats, setStats] = useState({
    stars: 0,
    forks: 0,
    contributors: 0,
    commits: 0,
  });
  const [activities, setActivities] = useState([
    {
      description: "Loading activity...",
      time: "",
      icon: (
        <svg
          className="w-6 h-6 text-cyan-400 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
  ]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const repoResponse = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}`,
        );
        const repoData = await repoResponse.json();

        const contributorsResponse = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
        );
        const contributorsData = await contributorsResponse.json();

        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/commits`,
        );
        const commitsData = await commitsResponse.json();

        setStats({
          stars: repoData.stargazers_count || 0,
          forks: repoData.forks_count || 0,
          contributors: contributorsData.length || 0,
          commits: commitsData.length || 0,
        });

        setActivities(
          commitsData.slice(0, 3).map((commit: MinimalCommit) => ({
            description: commit.commit.message,
            time: new Date(commit.commit.author.date).toLocaleDateString(),
            icon: (
              <svg
                className="w-6 h-6 text-cyan-400 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            ),
          })),
        );
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold">Open Source on GitHub</h2>
          <p className="mt-4 text-xl text-neutral-400">
            Join our growing community of contributors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Project Statistics
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-neutral-700 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stats.stars}
                </div>
                <div className="text-sm text-neutral-300">Stars</div>
              </div>
              <div className="text-center p-4 bg-neutral-700 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stats.forks}
                </div>
                <div className="text-sm text-neutral-300">Forks</div>
              </div>
              <div className="text-center p-4 bg-neutral-700 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stats.contributors}
                </div>
                <div className="text-sm text-neutral-300">Contributors</div>
              </div>
              <div className="text-center p-4 bg-neutral-700 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stats.commits}
                </div>
                <div className="text-sm text-neutral-300">Commits</div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Latest Activity
            </h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-neutral-700 rounded-lg"
                >
                  {activity.icon}
                  <div>
                    <p className="text-sm">{activity.description}</p>
                    <p className="text-xs text-neutral-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate__animated animate__fadeIn">
          <div className="inline-flex flex-col items-center">
            <Link
              href={`https://github.com/${repoOwner}/${repoName}`}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center mb-4"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </Link>
            <p className="text-neutral-400 text-sm">
              Star us on GitHub to stay updated with the latest releases
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GitHub };
