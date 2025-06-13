'use client';
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (titleRef.current && descriptionRef.current && buttonRef.current) {
            tl.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.2,
            })
                .to(descriptionRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                }, '-=0.8')
                .to(buttonRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                }, '-=0.6')
        }
    }, []);

    return (
        <section className={isVisible ? 'opacity-100' : 'opacity-0'}>
            <div className="text-center">
                <h1
                    ref={titleRef}
                    className="text-3xl sm:text-5xl md:text-7xl font-bold text-black mb-6 animate-float opacity-0 translate-y-5"
                >
                    리드미 독서 모임
                </h1>
                <p
                    ref={descriptionRef}
                    className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:tracking-tighter opacity-0 translate-y-5"
                >
                    매드 프로그래머들의 진정성 있는 우아한 모임
                    <br />
                    빌런들도 눈 착하게 뜨고 책 읽는 모임
                    <br />
                    개발자들이 태반이지만 모두 다 환영하는 모임
                </p>
            </div>
            <div className="mt-6 text-center">
                <Button
                    ref={buttonRef}
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer opacity-0 translate-y-5"
                    onClick={() => {
                        window.open('https://discord.com/invite/cSqnCkz98B', '_blank');
                    }}
                >
                    모임 참여하기
                </Button>
            </div>
        </section>
    );
}

export default HeroSection;