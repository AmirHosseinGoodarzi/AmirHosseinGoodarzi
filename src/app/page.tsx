import Navbar from "@/components/Navbar";
import Files from "@/components/svgr-icons/files.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import EduCard from "@/components/EducationCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="relative h-screen flex flex-col items-center justify-center p-5">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] opacity-5">
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
        <h1 className="title text-center">Front end Developer.</h1>
        <br />
        <p className="text-[#888888] text-xl max-w-xl text-center leading-8">
          Hello. I&apos;m{" "}
          <span className="text-white">Amirhossein Goodarzi.</span> If you’re
          looking for a skilled and motivated{" "}
          <span className="text-white">developer</span>, you’ve come to the
          right place !
        </p>
        <br />
        <div className="flex items-center gap-5 mt-3">
          <a
            className="w-full lg:w-fit"
            href="/assets/files/AmirhosseinGoodarzi-Front-end-developer-Resume.pdf"
            download={true}
          >
            <Button size="lg">
              <Files /> Donwload CV
            </Button>
          </a>
          <Link href={ROUTES_OBJECT.contact}>
            <Button size="lg" variant="outline">
              Get in touch.
            </Button>
          </Link>
        </div>
      </section>
      <section className="p-5 min-h-[50vh]">
        <div className="max-w-5xl mx-auto">
          <h2 className="title text-center">My Story.</h2>
          <p className="text-justify text-base lg:text-lg leading-7">
            Imagine having a front-end developer on your team who can craft
            everything with precision and creativity. That’s me, With more than
            5 years of experience in building responsive and user-friendly web
            applications. I bring a blend of technical expertise and a keen eye
            for design to every project.
          </p>
        </div>
      </section>
      <section className="p-5 min-h-[100vh]">
        <div className="max-w-5xl mx-auto">
          <h2 className="title text-center">Career Highlights.</h2>
          <p className="text-center text-base lg:text-lg leading-7">
            I am always eager to learn new skills and tools, and I value
            teamwork and collaboration.
          </p>
        </div>
        <br />
        <br />
        <div className="max-w-7xl mx-auto border p-5 lg:p-10 flex flex-col lg:flex-row gap-10 items-center justify-between rounded-md">
          <div className="flex-1">
            <p className="text-gray-400 text-sm">May 2021 - PRESENT</p>
            <p className="text-2xl font-bold my-0.5">
              Kahkeshan Group of Companies
            </p>
            <p className="text-gray-400 text-sm">
              Front-end Developer (On-site)
            </p>
            <ul className="text-gray-300 mt-3 pl-8 list-disc">
              <li>
                Developed 15+ production-grade web applications for business and
                consumer use.
              </li>
              <li>
                Collaborated with <b>10+ developers</b>, ensuring high code
                quality and performance.
              </li>
              <li>
                Acted as a code reviewer for <b>10+ projects</b> over{" "}
                <b>2 years</b>, ensuring code quality and adherence to best
                practices.
              </li>
            </ul>
            <br />
            <br />
            <Button size="lg">
              <Files />
              Visit Kahkeshan
            </Button>
          </div>
          <div className="group flex items-center justify-center pt-20 pb-5 scale-[80%] md:scale-90 lg:scale-100">
            <div className="-rotate-8 -mt-32 group-hover:-rotate-12 group-hover:-translate-x-8 w-[300] h-[250px] border rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 bg-background">
              <div className="h-[70%] bg-white">
                <img src="" className="size-full object-cover" />
              </div>
              <div className="flex flex-col justify-center h-[30%] p-5 bg-black">
                <div className="text-white">
                  <p>Next.js Boilerplate</p>
                  <p className="text-gray-400 text-sm mt-3">
                    A Next.js starter from create-next-app.
                  </p>
                </div>
              </div>
            </div>
            <div className="-rotate-3 -mt-16 group-hover:-rotate-6 group-hover:-translate-x-3 -mx-38 w-[300] h-[250px] border rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 bg-background">
              <div className="h-[70%] bg-white">
                <img src="" className="size-full object-cover" />
              </div>
              <div className="flex flex-col justify-center h-[30%] p-5 bg-black">
                <div className="text-white">
                  <p>Next.js Boilerplate</p>
                  <p className="text-gray-400 text-sm mt-3">
                    A Next.js starter from create-next-app.
                  </p>
                </div>
              </div>
            </div>
            <div className="rotate-3 group-hover:rotate-8 group-hover:translate-x-2 w-[300] h-[250px] border rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 bg-background">
              <div className="h-[70%] bg-white">
                <img src="" className="size-full object-cover" />
              </div>
              <div className="flex flex-col justify-center h-[30%] p-5 bg-black">
                <div className="text-white">
                  <p>Next.js Boilerplate</p>
                  <p className="text-gray-400 text-sm mt-3">
                    A Next.js starter from create-next-app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Nov 2024 - July 2025</p>
          <p>Salona</p>
          <p>Front-end Developer (Remote)</p>
          <p>
            Salona is a new solution for managing beauty salons. This
            application includes an online appointment system, digital business
            cards, certificate issuance, reporting, discount codes, loyalty sms
            and cards, accounting, and more.
          </p>
          <p>🌐 Visit Salona</p>
        </div>
        <br />
        <div>
          <p>2020 - 2021</p>
          <p>Front-end Developer (Freelancer)</p>
          <p>
            Creating over 15 successful responsive websites that are fast, easy
            to use, and built with best practices.
          </p>
        </div>
      </section>
      <section className="p-5 min-h-[50vh]">
        <div className="max-w-5xl mx-auto">
          <h2 className="title text-center">Educations.</h2>
          <p className="text-center text-base lg:text-lg leading-7">
            I am always eager to learn new skills and tools, and I value
            teamwork and collaboration.
          </p>
          <div className="grid grid-cols-2 gap-5 place-items-center mt-20">
            <EduCard
              data-aos="fade-up-left"
              title="Master of Software Engineering"
              years="2021 - 2023"
              uniName="PNU University"
              uniLocation="Iran, Tehran"
              imagePosition="bg-right-top"
              link="http://www.pnu.ac.ir/"
            />
            <EduCard
              data-aos="fade-up-right"
              title="Bachelor of Computer Engineering"
              years="2017 - 2021"
              uniName="ABRU University"
              uniLocation="Iran, Borujerd"
              imagePosition="bg-left-top"
              link="https://abru.ac.ir"
            />
          </div>
        </div>
      </section>
      <footer className="w-full py-7 text-center">
        &copy; Made with <span className="text-lg text-red-500">&#10084;</span>{" "}
        by AmirHossein Goodarzi
      </footer>
    </div>
  );
}
