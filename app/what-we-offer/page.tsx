import { services } from "@/lib/data";
import Image from "next/image";

export default function WhatWeOffer() {
    return (
        <main className="mb-10">
            <h1 className="p-8 text-center text-5xl md:text-8xl uppercase font-bold border-b border-divider-gray">
                What We Offer
            </h1>

            <section className="py-10 px-4 space-y-10 max-w-6xl w-full mx-auto">
                {
                    services.map((service, index) => (
                        <article key={service.name + index} className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 border border-divider-gray`}>
                            <div className={`relative h-90 w-full border-b lg:border-b-0 border-r border-divider-gray ${service.name.toLowerCase() === 'physiobab' && 'bg-foreground'}`}>
                                <Image src={service.img} alt={service.name} width={service.width} height={service.height} className={`w-full h-full object-contain ${service.name.toLowerCase() !== 'hyrox' && 'lg:object-cover'}`} />
                            </div>
                            <div className="flex flex-col justify-center gap-4 p-10 xl:col-span-2">
                                <h2 className="text-3xl font-bold">
                                    {service.name}
                                </h2>
                                <p>
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))
                }
            </section>
        </main>
    );
};
