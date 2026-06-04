import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes & Timetable",
  description:
    "View the Revolution Fitness Co. class timetable: functional fitness, strength and conditioning, Hyrox and studio classes for all levels.",
  alternates: { canonical: "/classes" },
  openGraph: {
    title: "Classes & Timetable | Revolution Fitness Co.",
    description:
      "Functional fitness, strength and conditioning, Hyrox and studio classes at Revolution Fitness Co. in Cambridge.",
    url: "/classes",
  },
};

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
