import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-neutral-900 text-white pt-16 min-h-[70vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Powerful API Client <span className="text-cyan-400">for Go</span>
            </h1>
            <p className="text-xl text-gray-300">
              A lightning-fast command line tool for testing, debugging, and
              automating API interactions with Go&#39;s performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#installation">
                <p className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-center font-semibold transition-all duration-300 animate__animated animate__pulse animate__infinite">
                  Get Started
                </p>
              </Link>
            </div>
          </div>

          <div className="relative animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 p-6 rounded-xl shadow-2xl">
              <pre className="text-cyan-400 font-mono text-sm md:text-base overflow-x-auto">
                <code>
                  $ go install github.com/apee-i/apee-i
                  <br />
                  <br />
                  <br />
                  {"{"}
                  <br />
                  &nbsp;&nbsp;&#34;status&#34;: &#34;success&#34;,
                  <br />
                  &nbsp;&nbsp;&#34;data&#34;: {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#34;message&#34;: &#34;API response
                  received&#34;
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
