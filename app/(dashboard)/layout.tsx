import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-col h-screen">
          <Header/>
          <div className="flex flex-1 flex-col-reverse md:flex-row">
            <Navigation/>
            <main className="w-full md:w-3/4 p-4 flex-1">
              {children}
            </main>
          </div>
        </div>
    )
}
