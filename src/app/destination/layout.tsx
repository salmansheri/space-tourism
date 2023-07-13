export default function DestinationLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen bg-[url('/images/destination.png')]">
            {children}
        </div>
    )
}