
import { useState } from 'react';
import styled, { css } from 'styled-components'

const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    overflow:hidden;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface ICarouselSlide {
    active?: boolean
}

const CarouselSlide = styled.div<ICarouselSlide>`
    flex: 0 0 auto;
    opacity: ${props => (props.active ? 1 : 0)};
    transition: all 0.5s ease;
    width: 100%;
`;

interface CarouselProps {
    currentSlide: number;
}

const CarouselSlides = styled.div<CarouselProps>`
    display: flex;
    ${props =>
        props.currentSlide &&
        css`
        transform: translateX(-${props.currentSlide * 100}%);
    `};
    transition: all 0.5s ease;
`;

interface IProps {
    children: JSX.Element[]
}

const Carousel = ({ children }: IProps) => {
    const [currentSlide, setCurrentSlide] = useState(0)


    const activeSlide = children.map((slide, index) => {
        return (
            <CarouselSlide active={currentSlide === index} key={index}>
                {slide}
            </CarouselSlide>
        )
    })

    return (
        <div>
            <CarouselWrapper>
                <CarouselSlides currentSlide={currentSlide}>
                    {activeSlide}
                </CarouselSlides>
            </CarouselWrapper>
            <ButtonWrapper>
                <button onClick={() => {
                    setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length)
                }}>
                    {'<<'}
                </button>
                <button onClick={() => {
                    setCurrentSlide((currentSlide + 1) % activeSlide.length)
                }}>
                    {'>>'}
                </button>
            </ButtonWrapper>
        </div>
    )
}

export default Carousel;