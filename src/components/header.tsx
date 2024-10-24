import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";

export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link className="flex items-center gap-3" />
      <div className="flex items-center gap-10">
        <nav className="hidden items-center gap-10 md:flex justify-end">
          <Link
            href="https://app.gitbook.com/invite/pkeSxsDNmRJUiWvU3yR0/62KypV6DisNAfRH20zL8"
            className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            Docs
          </Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="#" className="cursor-pointer">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="/about"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/docs"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="/blog"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
