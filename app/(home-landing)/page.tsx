"use client";
import dynamic from 'next/dynamic';


const TypewriterEffectSmooth = dynamic(
  () => import('@/components/accernity-ui/TypeWriterEffect').then((mod) => mod.TypewriterEffectSmooth),
  { ssr: false }
);import { Button } from "@/components/ui/button";
import { pricingPlans, typeWriterWords } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { FeaturesSection } from "./_components/Feature";
import { FeaturesGradient } from "./_components/FeaturesGradient";
import { useEffect, useState } from 'react';


const HoverEffect = dynamic(
  () => import('@/components/accernity-ui/CardHover').then((mod) => mod.HoverEffect),
  { ssr: false }
);import Link from "next/link";
const Navbar = dynamic(() => import('./_components/Navbar'), { ssr: false });


export default function HomeLandingPage() {
  return (
    <div className="flex flex-col min-h-screen gap-4 selection:bg-primary selection:text-white dark bg-[#0C0A09]">
      <Navbar />
      <SectionWrapper className="h-[35rem] text-center" >
        <TypewriterEffectSmooth
          words={typeWriterWords}
          className="mb-0 space-y-0"
          cursorClassName="bg-primary"
        />
        <p className="text-muted-foreground text-sm md:text-xl">
          Create, automate, and scale your web scraping projects with ease. No coding required.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Button className="w-40 h-10 rounded-xl text-sm border-primary text-primary hover:text-white hover:bg-primary" variant={"outline"}>
  <Link href={"/sign-in"}>Get Started</Link>
  <ChevronRightIcon className="h-4 w-4" />
</Button>

        </div >
        <p className="text-sm text-primary">
          New users get 200 credits for free upon first login
        </p>
      </SectionWrapper>
      <SectionWrapper id="howItWorks" primaryTitle="How" secondaryTitle="It Works">
        <FeaturesGradient />
      </SectionWrapper>
      <SectionWrapper id="scrapingFeatures" primaryTitle="Scraping" secondaryTitle="Features">
        <FeaturesSection />
      </SectionWrapper>
      <SectionWrapper
        id="pricing"
        className="w-full py-12 md:py-24 lg:py-32"
        primaryTitle="Simple"
        secondaryTitle="Pricing"
      >
        <div className="flex gap-5 w-full mt-10">
          <HoverEffect items={[...pricingPlans]} />
        </div>
      </SectionWrapper>
    </div>
  );
}

function SectionWrapper({
  children,
  className,
  id,
  primaryTitle,
  secondaryTitle,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  primaryTitle?: string;
  secondaryTitle?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-10 box-border max-w-screen-xl mx-auto scroll-mt-[80px] p-5 md:p-10",
        className
      )}
      id={id}
      suppressHydrationWarning={true}>
      <div className="text-2xl md:text-4xl lg:text-6xl text-foreground">
        <span className="text-primary">{primaryTitle}</span>{" "}
        <span className="">{secondaryTitle}</span>
      </div>
      {children}
    </div>
  );
}
