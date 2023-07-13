import CrewClient from "./components/client";

export default function CrewPage() {
    return(
        <div className="bg-[url('/images/crew/background.png')] min-h-screen w-full bg-cover">
            <div className="max-w-[1200px] mx-auto">

            <CrewClient />
            </div>
           
        </div>
    )
}