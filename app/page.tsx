'use client';

import CharacterSections from '@/components/sections/CharacterSections';
import IntroSection from '@/components/sections/IntroSection';
import HeroSection from '@/components/sections/HeroSection';
import TimelineSection from '@/components/sections/TimelineSection';
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto flex flex-col justify-center items-center w-full py-20 lg:py-0 lg:h-screen">
        <HeroSection />
        <CharacterSections />
      </main>
      <IntroSection />
      <TimelineSection />
    </div>
  );
}
