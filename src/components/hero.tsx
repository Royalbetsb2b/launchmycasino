import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 pt-20 sm:gap-10">
      <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight">
        Build your own risk- free casino in under 10 minutes
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        LaunchMyCasino is a protocol that enables anyone to deploy a risk-free casino that is
        instantly playable and earn revenue from it.
      </p>
      <Avatar>
        <AvatarImage
          alt="avatar"
          src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/imagen2024-10-21182030510_d3772685-ef69-452b-a1ec-e468ab63ccd3.png"
          className="object-cover"
        />
        <AvatarFallback>ML</AvatarFallback>
      </Avatar>
      <section className="container flex flex-col items-center gap-10 pt-20 sm:gap-14 lg:flex-row row-span-1">
        <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
          <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl lg:text-left tracking-tight">
            <br />
            Build a free customized casino in just minutes
          </h1>
          <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
            Zero risk, zero cost and no Blockchain expertise required.
          </p>
          <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center" />
        </div>
        <div className="relative flex-1">
          <Image
            alt="SaaS Dashboard"
            src="/images/imagen2024-10-21170928147.png"
            width={1000}
            height={698}
            priority
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            placeholder="empty"
            className="rounded-xl border border-border shadow-lg"
          />
          <Link href="#https://royalbets.xyz">Royalbets Casino</Link>
          <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
        </div>
      </section>
      <section className="container" />
      <div className="grid grid-cols-2 gap-3">
        <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
          <Link href="#">Learn More</Link>
        </Button>
        <Button size="lg" asChild className="cursor-pointer">
          <Link href="#">Get Started</Link>
        </Button>
      </div>
      <div className="relative sm:mt-8">
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
