import Image from "next/image";
import donkeyhmm from "@/public/donkeyhmm.jpg";
import { Button } from "@/components/ui/ButtonLink";

export const Intro = () => {
  return (
    <section className="mx-auto mt-12 max-w-prose">
      <div className="flex items-center justify-center pb-8">
        <Image
          src={donkeyhmm}
          alt="danky kang"
          width={100}
          height={100}
          className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 border-white object-cover shadow-xl"
        />
      </div>
      <h1 className="pb-4 text-center text-2xl">
        Hello, I'm Dillon. I'm a full-stack developer with 8 years of
        experience. I enjoy building sites & apps. My focus is React (Next.js).
      </h1>
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
        <Button intent="dark">Contact Me</Button>
        <Button intent="light">Download Resume</Button>
      </div>
    </section>
  );
};
