import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const IntroSection = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const paragraphsRef = useRef<HTMLParagraphElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 초기 상태 설정
            gsap.set([titleRef.current, ...paragraphsRef.current], {
                opacity: 0,
                y: 20
            });

            // 순차적 페이드인 애니메이션
            const tl = gsap.timeline({
                delay: 0.5
            });

            // 제목 애니메이션
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            });

            // 문단 순차적 애니메이션
            paragraphsRef.current.forEach((p, index) => {
                tl.to(p, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6");
            });
        });

        return () => ctx.revert();
    }, []);

    const setParagraphRef = (index: number) => (el: HTMLParagraphElement | null) => {
        if (el) paragraphsRef.current[index] = el;
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
            <div className="max-w-xl mx-auto text-center space-y-8">
                <hgroup className="flex items-center justify-center gap-4 mb-6">
                    <Image
                        src="/icons/book.png"
                        alt="책"
                        width={48}
                        height={48}
                        className="w-8 h-8 md:w-12 md:h-12"
                    />
                    <h1 ref={titleRef} className="text-3xl md:text-5xl font-bold">
                        리드미 독서 모임
                    </h1>
                </hgroup>
                <div className="space-y-6 text-base md:text-xl">
                    <p ref={setParagraphRef(0)} className="leading-relaxed">
                        개발자, 디자이너, 기획자가 함께 모여 책을 읽고 이야기하는 독서 모임이자 친목 모임입니다.
                    </p>

                    <p ref={setParagraphRef(1)} className="leading-relaxed">
                        매 모임마다 각자 읽은 책에 대한 감상을 나누며, 서로 다른 관점에서의 인사이트를 공유합니다.
                    </p>

                    <p ref={setParagraphRef(2)} className="leading-relaxed">
                        독서 모임 후에는 희망자에 한해 2차 식사나 술자리를 가볍게 가지며 더욱 친근한 분위기에서 이야기를 나눕니다.
                    </p>

                    <p ref={setParagraphRef(3)} className="text-xl md:text-2xl font-semibold mt-8 text-blue-400">
                        취준생, 주니어분들 대환영입니다! 👋
                    </p>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;