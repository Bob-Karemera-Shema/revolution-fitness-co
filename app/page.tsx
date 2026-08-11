import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "./components/button";
import { trainers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Revolution Fitness Co. | Gym in Cambridge Science Park",
  description:
    "Community-driven gym at Cambridge Science Park. Functional fitness, Hyrox, free weights, studio classes and personal training for adults 18+.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Revolution Fitness Co. | Gym in Cambridge Science Park",
    description:
      "Community-driven gym at Cambridge Science Park. Functional fitness, Hyrox, free weights, studio classes and personal training for adults 18+.",
    url: "/",
  },
};

export default function Home() {
  return (
    <main>
      <section>
        <article className="relative w-full h-[80vh] flex items-center justify-center">
          <video
            src='/images/revolution-hero.mp4'
            className="absolute inset-0 w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          />
          <div className="relative z-10 text-center text-white px-4 space-y-8">
            <h1 className="uppercase text-3xl font-extrabold">Revolution Fitness Co.</h1>
            <Link href="https://secure17.clubwise.com/revolutionhealthandfitnesscentre/pos.asp" target="_blank" rel="noopener noreferrer" aria-label="Sign Up">
              <Button type="primary" className="w-fit">
                Join Now
              </Button>
            </Link>
          </div>
        </article>
        <article className="flex flex-col items-center justify-center gap-8 px-8 py-16 border-b border-t border-divider-gray">
          <p className="text-3xl text-center max-w-5xl mx-auto">{`Revolution isn't just a gym. It's a place where people show up for each other. Where every rep, every drop of sweat, and every small win is `}<span className="text-brand-green font-bold">shared</span>{`. We believe `}<span className="text-brand-green font-bold">strength</span>{` isn't built alone; it grows in the energy of a `}<span className="text-brand-green font-bold">community</span>{` that lifts, pushes, and `}<span className="text-brand-green font-bold">supports</span>{` one another.`}</p>
        </article>
      </section>

      <section className="flex flex-col lg:flex-row bg-foreground text-background border-b border-background">
        <article className="p-10 pb-0 lg:pb-10 lg:pl-16 lg:pr-5 lg:border-r border-background">
          <h2 className="flex flex-col text-5xl uppercase font-extrabold tracking-tighter md:whitespace-nowrap">
            <span>Checkout our</span>
            <span>class schedule</span>
          </h2>
        </article>

        <article className="w-full flex flex-col lg:flex-row lg:items-center gap-20 justify-between p-10 lg:pr-16">
          <p className="max-w-150 w-full font-medium">
            We offer functional fitness classes for everyone, from beginners to athletes. Our classes range from strength and conditioning to Hyrox and team workouts called Club work. The classes are well programmed for anyone looking for more structure in their training but also gives the flexibility to anyone that may like the option to do a drop in class. Whatever the goal, we are here to help.
          </p>
          <Link href="/classes" aria-label="Classes" className="lg:self-end">
            <Button type="secondary" className="w-fit">
              View Timetable
            </Button>
          </Link>
        </article>
      </section>

      <section className="py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 bg-foreground">
        <div className="relative h-80">
          <Image src="/images/hyrox-badge.png" alt="Hyrox Badge" fill sizes="w-full" className="md:object-cover" />
        </div>
        <div className="relative h-80">
          <Image src="/images/functional-training.png" alt="Functional Training" fill sizes="w-full" className="md:object-cover" />
        </div>
        <div className="relative h-80">
          <Image src="/images/free-weights.png" alt="Free Weights" fill sizes="w-full" className="md:object-cover" />
        </div>
      </section>

      <section id="membership-plans" className="flex flex-col lg:flex-row border-b border-divider-gray">
        <article className="p-10 pb-0 lg:pb-10 lg:pl-16 lg:pr-5 lg:border-r border-divider-gray">
          <h2 className="flex flex-col text-5xl uppercase font-extrabold tracking-tighter whitespace-nowrap">
            <span>Sign Up</span>
            <span>Today!</span>
          </h2>
        </article>

        <article className="w-full flex flex-col lg:flex-row lg:items-center gap-20 justify-between p-10 lg:pr-16">
          <p className="max-w-150 w-full font-medium">
            Join today and start working toward your health and fitness goals. Please note that one month&apos;s written notice is required to cancel a membership. We are an adult-only gym, and membership is available to individuals aged 18 and above.
          </p>
          <Link href="/membership-plans" aria-label="Membership Plans" className="lg:self-end">
            <Button type="primary" className="w-fit">
              View Membership Plans
            </Button>
          </Link>
        </article>
      </section>

      <section className="h-160 w-full relative">
        <Image src="/images/studio-coming.jpg" loading="eager" alt="Studio Coming Soon" width={1280} height={853} className="absolute inset-0 w-full h-full object-cover" />
        <div className="w-full h-full relative z-10 flex flex-col items-center justify-center gap-4 text-center bg-black/40">
        <h2 className="text-5xl uppercase font-bold tracking-tighter text-brand-green">
          Brand New Gym Coming Soon
        </h2>
        <p className="text-xl font-medium max-w-2xl">
          Stay tuned for our new upgraded gym including elegantly designed spaces, fueled by Techno GYM equipment.
        </p>
        </div>
      </section>

      <section id="personal-training" className="flex flex-col lg:flex-row bg-foreground text-background border-b border-background">
        <article className="p-10 pb-0 lg:pb-10 lg:pl-16 lg:pr-5 lg:border-r border-background">
          <h2 className="flex flex-col text-5xl uppercase font-extrabold tracking-tighter md:whitespace-nowrap">
            <span>Meet our</span>
            <span>trainers</span>
          </h2>
        </article>

        <article className="w-full flex lg:items-center gap-20 p-10 lg:pr-16">
          <p className="font-medium">
            Our team of personal trainers brings together over 44 years of combined experience, spanning functional and strength training, competitive powerlifting, Hyrox coaching, and clinical sports therapy. From building strength and improving body composition to injury rehabilitation and long-term performance, our trainers create a realistic, personalised, and achievable programme tailored to help you reach your goals in both the gym and studio environment.
          </p>
        </article>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-foreground text-background py-16 px-12">
        {
          trainers.map((trainer) => (
            <article key={trainer.name + trainer.email} className="space-y-4 w-full group">
              <div className="rounded-lg overflow-hidden border border-background w-full">
                <Image
                  src={trainer.giff}
                  alt={trainer.name}
                  width={trainer.width}
                  height={trainer.height}
                  unoptimized
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
              <h3 className="text-2xl font-extrabold px-2 uppercase">{trainer.name}</h3>
              <p className="px-2 font-medium">{trainer.description}</p>
              <p className="px-2 font-medium">
                Reach out via&nbsp;
                <Link href={trainer.instagram} className="text-[#F77737]" aria-label={`${trainer.name}'s instagram`} target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
                &nbsp;or&nbsp;
                <Link href={`mailto::${trainer.email}`} className="text-[#4285F4]" aria-label={`${trainer.name}'s email`} target="_blank" rel="noopener noreferrer">
                  Email
                </Link>
              </p>
            </article>
          ))
        }
      </section>
    </main>
  );
}
