import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="pt-4 pb-10 xl:pt-8 xl:pb-10 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Gerson<span className="text-accent">.</span>
            </h1>
            </Link>
            {/* Desktop NAV & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="contact">
                    <Button>Hire me</Button>
                </Link>
            </div>
            
            {/* mobile nav */}
            
            <div className="xl:hidden">
                <MobileNav />
            </div>
            
        </div>
    </header>
  )
}

export default Header