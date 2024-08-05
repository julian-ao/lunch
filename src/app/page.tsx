import LunchTime from "@/components/LunchTime";
import NotLunchTime from "@/components/NotLunchTime";
import {ReactElement} from "react";

export default function Home(): ReactElement {
    const currentTime: Date = new Date()

    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        { currentTime.getHours() >= 11 && currentTime.getHours() <= 12 ?
            <LunchTime/> :
            <NotLunchTime/>
        }
    </main>
    );
}