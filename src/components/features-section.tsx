import {
  DollarSign,
  BadgeHelp,
  Download,
  Globe,
  Sparkles,
  LayoutDashboard,
  Brain,
  CarFront,
} from "lucide-react";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">key Features</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Build fast, free and easy.
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        You can have your custom site up running and generating income in less than 15 minutes. All
        this for free and without the need for blockchain and code expertise.
      </p>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-l lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <DollarSign size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Revenue</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Launching through LaunchMyCasino gives you a variety of options to earn money. The
            website&apos;s smooth design and easy, 3-seconds registration process means more leads
            for your traffic. By having your own casino with us you will receive income for life.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <BadgeHelp size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Support</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Your success is our success, and our success is your success! Expect heavy support from
            the LaunchMyCasino team to take your project to the next level.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <Download size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Provably Fair</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Players can independently verify game results, ensuring that every spin, roll or
            coinflip is genuinely fair.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <Globe size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Instant Visibility</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Your project will show up on the homepage of our platform, where all of our active users
            are waiting for their next project to gamble on! If you make a post of your site on X
            you can tag us to give you more visibility to our entire community
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-l">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-b" />
          <div className="relative z-10 mb-4 px-10">
            <Sparkles size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Customizable</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Customize your site with your own branding, logo and designs for free.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-b" />
          <div className="relative z-10 mb-4 px-10">
            <LayoutDashboard size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Risk - free</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            LaunchMyCasino provides the liquidity for all platforms, so your site is risk-free.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-b" />
          <div className="relative z-10 mb-4 px-10">
            <Brain size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Knowledge</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            No blockchain expertise required.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-b" />
          <div className="relative z-10 mb-4 px-10">
            <CarFront size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Leaderboard Rewards</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            LaunchMyCasino rewards the top 6 users from all platforms each month with a prize-pool
            of $2,000!
          </p>
        </div>
      </div>
    </section>
  );
}
