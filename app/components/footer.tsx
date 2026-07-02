import Image from "next/image";
import { Button } from "./button";
import { navigationLinks, socialLinks } from "@/lib/data";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer>
            <div className="border-t border-divider-gray p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0 mb-10 overflow-hidden">
                <div className="w-75">
                    <Image src="/images/pri-logo-square-trans.png" loading="eager" alt="Revolution Fitness Co. logo" width={8000} height={4500} className="-ml-10 -mt-18 md:-mt-23" />
                    <p className="-mt-15 mb-10 font-medium">
                        Join Now
                    </p>
                    <Link href="https://secure17.clubwise.com/revolutionhealthandfitnesscentre/pos.asp" target="_blank" rel="noopener noreferrer" aria-label="Sign Up">
                        <Button type="primary">
                            Get Started
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-2">
                            <p className="uppercase text-lg font-extrabold">Menu</p>
                            <ul className="space-y-1">
                                {
                                    navigationLinks.map((link) => (
                                        <li key={link.href + link.label}>
                                            <Link href={link.href} aria-label={link.label} className="font-medium hover:text-brand-green whitespace-nowrap">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <p className="uppercase text-lg font-extrabold">Socials</p>
                            <ul className="space-y-1">
                                {
                                    socialLinks.map((link) => (
                                        <li key={link.href + link.label}>
                                            <Link href={link.href} aria-label={link.label} className="font-medium hover:text-brand-green">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:gap-20">
                        <div className="space-y-2">
                            <p className="uppercase text-lg font-extrabold">Gym Hours</p>
                            <ul className="space-y-1">
                                <li>Mon - Fri: 7:00am - 8:00pm</li>
                                <li>Sat: 8:00am - 12:00pm</li>
                                <li>Sun / Bank Holidays: Closed</li>
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <p className="uppercase text-lg font-extrabold">Address</p>
                            <ul className="space-y-1">
                                <li>Email: info@revolutionhealthfitness.co.uk</li>
                                <li>24 Cambridge Science Park Milton Rd,</li>
                                <li>Milton, Cambridge CB4 0FN</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-divider-gray">
                <p className="text-center p-5">© {new Date().getFullYear()} Revolution Fitness Co. All rights reserved.</p>
            </div>
        </footer>
    );
};
