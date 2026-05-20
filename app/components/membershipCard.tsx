import Link from "next/link";
import { Button } from "./button";

interface MembershipCardProps {
    data: {
        name: string;
        price: string;
        description: string;
        frequency: string;
    }
}

export const MembershipCard = ({ data }: MembershipCardProps) => {
    return (
        <div className="flex flex-col items-center justify-between gap-8 py-8 px-10 border border-divider-gray">
            <div className="flex flex-col items-center gap-8">
                <span className="font-bold uppercase">{data.frequency}</span>
                <div className="text-brand-green font-bold flex flex-col">
                    <span className="text-xl">£</span>
                    <span className="text-6xl pl-4 -mt-2">{data.price}</span>
                </div>
                <p className="text-center leading-7 font-bold">{data.description}</p>
            </div>
            <Link href="https://secure17.clubwise.com/revolutionhealthandfitnesscentre/pos.asp" target="_blank" rel="noopener noreferrer" aria-label={`Sign Up for ${data.name} Membership`}>
                <Button type="primary" className="w-fit">
                    Sign Up
                </Button>
            </Link>
        </div>
    );
};