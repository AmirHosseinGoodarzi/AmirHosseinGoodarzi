export default function Home() {
  return (
    <div>
      <section className="h-screen flex flex-col items-center justify-center p-5">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:opacity-10">
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth="0"
              ></path>
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            ></rect>
          </svg>
        </div>
        <h1 className="title">Front end Developer.</h1>
        <br />
        <p className="text-[#888888] text-xl max-w-xl text-center leading-8">
          Hello. I&apos;m{" "}
          <span className="text-white">Amirhossein Goodarzi.</span> If you’re
          looking for a skilled and motivated{" "}
          <span className="text-white">developer</span>, you’ve come to the
          right place !
        </p>
      </section>
    </div>
  );
}
