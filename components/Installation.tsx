import Link from "next/link";

const Installation = () => {
  return (
    <section id="installation" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold">Quick Installation</h2>
          <p className="mt-4 text-xl text-neutral-400">
            Get up and running in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">
                Prerequisites
              </h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>Go 1.23.1 or higher</li>
                <li>Git (for installation)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">
                Installation Steps
              </h3>
              <ol className="list-decimal list-inside text-neutral-300 space-y-4">
                <li>Install via Go:</li>
                <div className="bg-neutral-800 p-4 rounded-lg">
                  <code className="text-cyan-400">
                    go install github.com/apee-i/apee-i
                  </code>
                </div>

                <li>Verify installation:</li>
                <div className="bg-neutral-800 p-4 rounded-lg">
                  <code className="text-cyan-400">apee-i --version</code>
                </div>
              </ol>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 p-6 rounded-xl shadow-2xl space-y-6">
              <h3 className="text-2xl font-semibold text-cyan-400">
                Quick Start
              </h3>
              <div className="space-y-4 font-mono">
                <div className="space-y-2">
                  <p className="text-neutral-400"># Initialize a new project</p>
                  <div className="bg-neutral-700 p-2 rounded">
                    <code className="text-cyan-400">$ {`<some command>`}</code>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-neutral-400"># Make your first request</p>
                  <div className="bg-neutral-700 p-2 rounded">
                    <code className="text-cyan-400">$ {`<some command>`}</code>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-neutral-400">
                    # Save request to collection
                  </p>
                  <div className="bg-neutral-700 p-2 rounded">
                    <code className="text-cyan-400">$ {`<some command>`}</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-cyan-900/30 rounded-lg border border-cyan-500/20">
              <p className="text-sm text-cyan-400">
                <svg
                  className="inline-block w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Need help? Check out our{" "}
                <Link
                  href="#documentation"
                  className="underline hover:text-cyan-300"
                >
                  documentation
                </Link>{" "}
                or join our{" "}
                <Link
                  href="#community"
                  className="underline hover:text-cyan-300"
                >
                  community
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Installation };
