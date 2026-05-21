import Image from "next/image";
import { Button } from "./components/button";
import Link from "next/link";
import { membershipPlans, trainers } from "@/lib/data";
import { MembershipCard } from "./components/membershipCard";

export default function Home() {
  return (
    <main>
      <section>
        <article className="flex items-center justify-center uppercase font-bold text-5xl md:text-8xl text-center py-8 border-b border-divider-gray">
          <p>Achieve your health and fitness goals</p>
        </article>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-4 p-10 pb-16 md:border-r border-divider-gray">
            <div className="space-y-8">
              <h1 className="text-4xl flex flex-col">
                <span>Revolution Fitness Co.,</span>
                <span>the Science Park&apos;s fitness hub</span>
              </h1>

              <p className="leading-8 font-medium">
                We are committed to helping you achieve your health and fitness goals. With a team of experienced trainers and state-of-the-art facilities, we provide the guidance, support, and resources you need to stay motivated and succeed on your fitness journey.
              </p>
            </div>
            <Link href="https://secure17.clubwise.com/revolutionhealthandfitnesscentre/pos.asp" target="_blank" rel="noopener noreferrer" aria-label="Sign Up">
              <Button type="primary" className="w-fit">
                Join Now
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <Image src="/images/pri-logo-rect-trans.png" alt="Revolution Fitness Co. Logo" width={8000} height={4500} />
          </div>
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
            Whether your goal is weight loss, building strength, or improving overall fitness, we offer a wide range of functional and studio classes designed for all fitness levels. From high-energy conditioning sessions to performance-focused workouts, explore classes such as Hyrox, HIIT, Body Blast, and more to help you reach your goals.
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
              Sign Up Now
            </Button>
          </Link>
        </article>
      </section>

      <section className="py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {
          membershipPlans.map((plan) => <MembershipCard key={plan.name} data={plan} />)
        }
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
            Our team of personal trainers brings together over 30 years of combined experience, with expertise in strength and conditioning as well as mobility training. Let our highly qualified trainers create a realistic, personalised, and achievable programme tailored to help you reach your goals in both the gym and studio environment.
          </p>
        </article>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-foreground text-background py-16 px-12">
        {
          trainers.map((trainer) => (
            <article key={trainer.name + trainer.img} className="space-y-4 w-full group">
              <div className="rounded-lg overflow-hidden border border-background w-full">
                <Image src={trainer.img} alt={trainer.name} width={trainer.width} height={trainer.height} className="w-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
              <h3 className="text-2xl font-extrabold px-2 uppercase">{trainer.name}</h3>
              <p className="px-2 font-medium">{trainer.description}</p>
            </article>
          ))
        }
      </section>
    </main>
  );
}
