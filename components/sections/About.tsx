import { SectionHeader } from "../SectionHeader";

export const About = () => {
  return (
    <section>
      <div className="mx-auto max-w-prose space-y-4 text-center leading-8">
        <SectionHeader>About Me</SectionHeader>
        <p>
          After graduating with a degree in Accounting, I decided to pursue my
          passion for programming. I enrolled in a coding bootcamp and learned
          full-stack web development. My favorite part of programming is the
          problem-solving aspect. I love the feeling of finally figuring out a
          solution to a problem. My core stack is React, Next.js, Node.js, and
          MongoDB. I am also familiar with TypeScript and Prisma. I am always
          looking to learn new technologies. I am currently looking for a
          full-time position as a software developer.
        </p>
        <p>
          When I'm not coding, I enjoy playing video games, watching movies, and
          playing with my dog. I also enjoy learning new things. I am currently
          learning about history and philosophy. I'm also learning how to play
          the guitar.
        </p>
      </div>
    </section>
  );
};