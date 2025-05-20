import Character from "../custom/Character";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CharacterSections = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const charactersRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 초기 상태 설정
            gsap.set(charactersRef.current, { 
                opacity: 0,
                visibility: "hidden"
            });

            // 순차적 페이드인 애니메이션
            const tl = gsap.timeline({
                delay: 2 // 2초 대기 후 시작
            });
            
            charactersRef.current.forEach((char, index) => {
                tl.to(char, {
                    opacity: 1,
                    visibility: "visible",
                    duration: 1,
                    ease: "power2.out"
                }, index); // 각 캐릭터마다 1초 딜레이
            });
        });

        return () => ctx.revert();
    }, []);

    const setRef = (index: number) => (el: HTMLDivElement | null) => {
        charactersRef.current[index] = el;
    };

    return (
        <div 
            ref={sectionRef}
            className="flex flex-col md:flex-row justify-between mt-[100px] md:mt-[200px] w-full max-w-7xl mx-auto px-4"
        >
            <div className="flex flex-wrap justify-around sm:justify-center gap-4 md:gap-0">
                <div ref={setRef(0)} className="opacity-0">
                    <Character 
                        src="/icons/batman.png" 
                        alt="batman" 
                        width={250} 
                        height={250} 
                        message="개발자가 라이트 모드로 코딩을 하다니... 용납할 수 없다!" 
                        messagePosition={-10} 
                        messageWidth={200}
                        className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
                    />
                </div>
                <div ref={setRef(1)} className="opacity-0">
                    <Character 
                        src="/icons/thanos.png" 
                        alt="thanos" 
                        width={250} 
                        height={250} 
                        message="코드의 절반을 지우면, 성능이 두 배가 된다!!" 
                        messagePosition={-20} 
                        messageWidth={150}
                        className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
                    />
                </div>
                <div ref={setRef(2)} className="opacity-0">
                    <Character 
                        src="/icons/deadpool.png" 
                        alt="deadpool" 
                        width={250} 
                        height={250} 
                        message="console.log()로 디버깅? 난 alert()로 해! 더 극적인거 좋아하거든~" 
                        messagePosition={20} 
                        messageWidth={250}
                        className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-around sm:justify-center gap-4 md:gap-0 mt-8 md:mt-0">
                <div ref={setRef(3)} className="opacity-0">
                    <Character 
                        src="/icons/joker.png" 
                        alt="joker" 
                        width={190} 
                        height={190} 
                        message="주석을 모두 지우고, 회사에 내 의지를 전달한다!" 
                        messagePosition={0} 
                        messageWidth={170}
                        className="w-[120px] h-[120px] md:w-[190px] md:h-[190px]"
                    />
                </div>
                <div ref={setRef(4)} className="opacity-0">
                    <Character 
                        src="/icons/venom.png" 
                        alt="venom" 
                        width={250} 
                        height={250} 
                        message="버그를 먹어치우는 게 내 전문이야... 코드도 같이 먹어도 될까?" 
                        messagePosition={0} 
                        messageWidth={280}
                        className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
                    />
                </div>
            </div>
        </div>
    );
}

export default CharacterSections;