'use client'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Button } from "../components/button";
import { classSchedule } from "@/lib/data";
import { useState } from "react";

export default function About() {
    const [filteredSchedule, setFilteredSchedule] = useState(classSchedule.map(day => ({
        ...day,
        classes: day.classes.filter(c => c.type === 'functional')
    })));
    const typeMap = {
        'All Classes': 'all',
        'Functional Classes': 'functional',
        'Studio Classes': 'studio'
    }
    const handleFilterChange = (value: string | null) => {
        const mappedValue = typeMap[value as keyof typeof typeMap] || 'all';
        if (mappedValue === "all") {
            setFilteredSchedule(classSchedule);
        } else {
            const filtered = classSchedule.map(day => ({
                ...day,
                classes: day.classes.filter(c => c.type === mappedValue)
            }));
            setFilteredSchedule(filtered);
        }
    };

    return (
        <main className="space-y-8 mb-30">
            <h1 className="mt-20 text-4xl uppercase text-center font-bold mx-10 md:mx-20 pb-4 border-b border-gray-600">
                Classes
            </h1>

            <div className="hidden items-center justify-center gap-4 mb-10">
                <span className="text-sm font-bold">Filter by:</span>

                <Select onValueChange={handleFilterChange}>
                    <SelectTrigger className="w-full max-w-48">
                        <SelectValue placeholder="Classes" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="All Classes">All Classes</SelectItem>
                            <SelectItem value="Functional Classes">Functional Classes</SelectItem>
                            <SelectItem value="Studio Classes">Studio Classes</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <section className="px-10 md:px-20">
                {/* Mobile: card layout per day */}
                <div className="lg:hidden space-y-4">
                    {filteredSchedule.map((day) => (
                        <div key={day.day} className="border border-gray-600">
                            <h3 className="font-bold text-center py-2 border-b border-gray-600 uppercase tracking-wide">
                                {day.day}
                            </h3>
                            {day.classes.length > 0 ? (
                                <div className="divide-y divide-gray-600">
                                    {day.classes.map((cls, index) => (
                                        <div key={cls.time + cls.name + index} className="py-4 px-4 space-y-2 font-bold">
                                            <p>{cls.time}</p>
                                            <p>{cls.name}</p>
                                            <Link href="https://play.google.com/store/apps/details?id=clubwise.com.fitsense" target="_blank" rel="noopener noreferrer" aria-label="Sign Up" className="pt-2 block">
                                                <Button type="primary" className="w-fit">
                                                    Book Now
                                                </Button>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="py-4 px-4 text-gray-400 text-sm">No classes</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop: table layout */}
                <table className="hidden lg:table w-full table-fixed">
                    <thead>
                        <tr>
                            {filteredSchedule.map((day, index) => (
                                <th key={day.day + index} className="text-center">
                                    {day.day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(
                            { length: Math.max(0, ...filteredSchedule.map(d => d.classes.length)) },
                            (_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {filteredSchedule.map((day, dayIndex) => {
                                        const cls = day.classes[rowIndex];
                                        return (
                                            <td key={day.day + dayIndex + rowIndex} className="py-4 px-4 space-y-2 border border-gray-600 font-bold">
                                                {cls && (
                                                    <>
                                                        <p>{cls.time}</p>
                                                        <p>{cls.name}</p>
                                                        <Link href="https://play.google.com/store/apps/details?id=clubwise.com.fitsense" target="_blank" rel="noopener noreferrer" aria-label="Sign Up" className="pt-2">
                                                            <Button type="primary" className="w-fit">
                                                                Book Now
                                                            </Button>
                                                        </Link>
                                                    </>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </section>
        </main>
    );
};
