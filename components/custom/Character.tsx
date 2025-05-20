import Image from "next/image";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface CharacterProps {
    src: string;
    width: number;
    height: number;
    alt: string;
    message: string;
    messagePosition: number;
    messageWidth: number;
    className?: string;
}

interface BubbleProps {
    'data-message': string;
    'data-message-position': number;
    'data-message-width': number;
}

interface SmallBubbleProps {
    'data-message-position': number;
}

const Wrapper = styled.figure`
    position: relative;
    @media (max-width: 480px) {
        &:nth-child(2) {
            .message-bubble {
                top: -45px;
            }
        }
    }
`;

const Bubble = styled.div<BubbleProps>`
    position: absolute;
    top: -85px;
    word-break: keep-all;
    left: ${props => props['data-message-position']}px;
    width: ${props => props['data-message-width']}px;
    background-color: rgb(255 255 255 / 32%);
    color: #000000;
    font-weight: 700;
    padding: 10px;
    border-radius: 25px;
    border: 2px solid rgb(0 0 0 / 18%);
    opacity: 0;
    font-size: 1rem;

    @media (max-width: 480px) {
        width: 140px !important;
        padding: 6px;
        font-size: 0.65rem;
        left: 0px !important;
        top: -60px;
    }
`;

const SmallBubble = styled.div<SmallBubbleProps>`
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: rgb(255 255 255 / 32%);
    border: 2px solid rgb(0 0 0 / 18%);
    border-radius: 50%;
    opacity: 0;
    top: 15px;
    left: ${props => props['data-message-position'] + 15}px;

    @media (max-width: 480px) {
        width: 14px;
        height: 14px;
        top: 8px;
        left: 15px !important;
    }
`;

const SmallerBubble = styled(SmallBubble)`
    width: 15px;
    height: 15px;
    top: 30px;
    left: ${props => props['data-message-position'] + 40}px;

    @media (max-width: 480px) {
        width: 10px;
        height: 10px;
        top: 18px;
        left: 35px !important;
    }
`;

const Character = ({ src, width, height, alt, message, messagePosition, messageWidth, className }: CharacterProps) => {
    const bubbleRef = useRef<HTMLDivElement>(null);
    const smallBubbleRef = useRef<HTMLDivElement>(null);
    const smallerBubbleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        tl.to(smallerBubbleRef.current, {
            opacity: 1,
            duration: 0.3,
            y: -10
        })
            .to(smallBubbleRef.current, {
                opacity: 1,
                duration: 0.3,
                y: -10
            }, "-=0.2")
            .to(bubbleRef.current, {
                opacity: 1,
                duration: 0.5,
                y: -10
            }, "-=0.2");
    }, []);

    return (
        <Wrapper>
            <Image src={src} alt={alt} width={width} height={height} className={className} />
            <Bubble
                ref={bubbleRef}
                data-message={message}
                data-message-position={messagePosition}
                data-message-width={messageWidth}
                className="message-bubble animate-float"
            >
                {message}
            </Bubble>
            <SmallBubble
                ref={smallBubbleRef}
                data-message-position={messagePosition}
                className="animate-float"
            />
            <SmallerBubble
                ref={smallerBubbleRef}
                data-message-position={messagePosition}
                className="animate-float"
            />
        </Wrapper>
    );
}

export default Character;