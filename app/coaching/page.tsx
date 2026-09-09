import { trainers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coaching",
    description:
        "Meet the Revolution Fitness Co. coaching team: personal trainers spanning functional and strength training, Hyrox coaching, powerlifting and sports therapy.",
    alternates: { canonical: "/coaching" },
    openGraph: {
        title: "Coaching | Revolution Fitness Co.",
        description:
            "Meet the Revolution Fitness Co. coaching team: personal trainers spanning functional and strength training, Hyrox coaching, powerlifting and sports therapy.",
        url: "/coaching",
    },
};

export default function Coaching() {
    return (
        <main className="space-y-8">
            <h1 className="mt-20 text-4xl uppercase text-center font-bold mx-10 md:mx-20 pb-4 border-b border-gray-600">
                Personal Training / Coaching Team
            </h1>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 px-12">
                <div>
                    <Image src="/images/team.jpeg" alt="Revolution Coaching Team" width={1600} height={1068} />
                </div>
                <div className="flex flex-col justify-center gap-8">
                    <h1 className="text-4xl uppercase font-bold">Meet The Team</h1>
                    <p className="font-medium">Our team of personal trainers brings together over 40 years of combined experience, spanning functional and strength training, competitive powerlifting, Hyrox coaching, and clinical sports therapy. From building strength and improving body composition to injury rehabilitation and long-term performance, our trainers create a realistic, personalised, and achievable programme tailored to help you reach your goals in both the gym and studio environment.</p>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-16 px-12">
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
                            <p className="px-2 font-semibold uppercase">{trainer.role}</p>
                            <p className="px-2 font-medium">{trainer.description}</p>
                            <p className="px-2 font-medium">
                                Reach out via&nbsp;
                                {
                                    trainer.phone &&
                                        <>
                                            <span className="text-brand-green">
                                                {trainer.phone}
                                            </span>
                                            <span>,</span>
                                            &nbsp;
                                        </>
                                }
                                <Link href={trainer.instagram} className="text-[#F77737]" aria-label={`${trainer.name}'s instagram`} target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </Link>
                                &nbsp;or&nbsp;
                                <Link href={trainer.email} className="text-[#4285F4]" aria-label={`${trainer.name}'s email`} target="_blank" rel="noopener noreferrer">
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