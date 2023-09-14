import Image from "next/image";
import donkeyhmm from "@/public/donkeyhmm.jpg";
import { Button } from "./ui/ButtonLink";

export const Intro = () => {
  return (
    <section className="max-w-prose mx-auto mt-12">
      <div className="flex justify-center items-center pb-8">
        <Image
          src={donkeyhmm}
          alt="danky kang"
          width={100}
          height={100}
          className="w-[100px] h-[100px] object-cover flex items-center justify-center rounded-full shadow-xl border-2 border-white"
        />
      </div>
      <h1 className="text-2xl text-center pb-4">
        Hello, I'm Dillon. I'm a full-stack developer with 8 years of
        experience. I enjoy building sites & apps. My focus is React (Next.js).
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <Button intent="dark">Contact Me</Button>
        <Button intent="light">Download Resume</Button>
      </div>
    </section>
  );
};
