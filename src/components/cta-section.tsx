import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-10">
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-xl sm:leading-tight text-center">
        Zero Deployments
      </h2>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        LaunchMyCasino&apos;s open design will allow anyone to launch a betting site/app with no
        upfront costs and zero risk management capacity needed. And launch in just a few minutes!
        Check out our Github to get started.
      </p>
      <Button size="lg" asChild variant="default" className="cursor-pointer border-border">
        <Link href="#">Get Started</Link>
      </Button>
    </section>
  );
}
