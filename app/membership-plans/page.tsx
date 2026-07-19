import { membershipPlans } from "@/lib/data";
import { MembershipCard } from "../components/membershipCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "Explore Revolution Fitness Co. membership plans, including Corporate, Foundation and full-access options. Adults 18+; one month written notice to cancel.",
  alternates: { canonical: "/membership-plans" },
  openGraph: {
    title: "Membership Plans | Revolution Fitness Co.",
    description:
      "Explore Revolution Fitness Co. membership plans, including Corporate, Foundation and full-access options.",
    url: "/membership-plans",
  },
};

export default function MembershipPlans() {
  return (
    <main className="space-y-8 mb-30">
      <h1 className="mt-20 text-4xl uppercase text-center font-bold mx-10 md:mx-20 pb-4 border-b border-gray-600">
        Membership Plans
      </h1>

      <h1 className="mt-16 text-xl text-center font-bold mx-10 md:mx-20">
        Monthly Direct Debit
      </h1>

      <section className="px-4 flex flex-wrap justify-center gap-10">
        {
          membershipPlans.filter(plan => plan.frequency.toLowerCase() === "monthly").map((plan) => (
            <div key={plan.name} className="w-full lg:w-100">
              <MembershipCard data={plan} />
            </div>
          ))
        }
      </section>

      <h1 className="mt-16 text-xl text-center font-bold mx-10 md:mx-20">
        Short Term
      </h1>

      <section className="pb-16 px-4 flex flex-wrap justify-center gap-10">
        {
          membershipPlans.filter(plan => plan.frequency.toLowerCase() === "daily" || plan.frequency.toLowerCase() === "10 days").map((plan) => (
            <div key={plan.name} className="w-full lg:w-100">
              <MembershipCard data={plan} />
            </div>
          ))
        }
      </section>
    </main>
  );
}