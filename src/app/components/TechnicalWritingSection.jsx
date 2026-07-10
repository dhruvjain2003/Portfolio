import { ExternalLink } from "lucide-react";

const TechnicalWritingSection = () => {
  return (
    <section id="writing" className="scroll-mt-20 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <span className="mb-4 inline-flex rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1 text-sm font-medium text-primary-300">
          Technical Writing
        </span>

        <h2 className="text-4xl font-bold md:text-5xl">
          Technical Publication
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[#ADB7BE] sm:text-lg sm:leading-8">
          Sharing practical backend engineering insights from real-world
          production experience.
        </p>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-lg shadow-blue-500/10">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr] lg:items-start">
            {/* Left */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary-300">
                Featured Article
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                GraphQL vs REST: What We Gain and What We Lose
              </h3>

              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-slate-400">
                Published on To The New&apos;s Official Engineering Blog
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#ADB7BE]">
                Drawing from my experience building production backend systems at To The New, this article explores the practical trade-offs between GraphQL and REST, covering API design, performance, caching, scalability, and real-world architectural decisions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "GraphQL",
                  "REST API",
                  "Backend",
                  "API Design",
                  "Architecture",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://www.tothenew.com/blog/graphql-vs-rest-what-we-gain-and-what-we-lose/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/30"
              >
                Read Article
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Right */}
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary-300">
                Highlights
              </p>

              <ul className="mt-5 space-y-4 text-sm text-slate-300">
                <li className="rounded-2xl bg-white/5 p-4">
                  ✅ Published on To The New&apos;s official Engineering Blog.
                </li>

                <li className="rounded-2xl bg-white/5 p-4">
                  ✅ Draws from real production backend engineering experience.
                </li>

                <li className="rounded-2xl bg-white/5 p-4">
                  ✅ Explores GraphQL vs REST architecture and API design trade-offs.
                </li>

                <li className="rounded-2xl bg-white/5 p-4">
                  ✅ Covers performance, caching, scalability, and practical implementation considerations.
                </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalWritingSection;