import { StatusMarker } from "../StatusMarker/StatusMarker";
import { TrackerItem } from "./TrackerItem";
import statusConditions from '../StatusMarker/statusIcons.json';
import { Component, createRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface ITrackerItems {
    items: {
        Name: string
        HitPoints: number
        Initiative: number
        IsActive: boolean
        IsAlive: boolean
    }[]
}

// TODO - v2
// interface IStatusCondition {
//     name: string
//     imgSrc: string
// }

export const InitativeTracker: React.FC<ITrackerItems> = ({ items }) => {

    const [Index, setIndex] = useState(0)
    const [RoundNum, setRoundNum] = useState(1)

    interface ICarouselSlide {
        active?: boolean;
    }

    const SCarouselSlide = styled.div<ICarouselSlide>`
        flex: 0 0 auto;
        opacity: ${props => (props.active ? 1 : 0)};
        transition: all 0.5s ease;
        width: 100%;
    `;

    const activeItem = items.map((item, i) => {
        return (
            <SCarouselSlide active={Index === i} key={i}>
                <TrackerItem
                    name={item.Name}
                    initiative={item.Initiative}
                    hitPoints={item.HitPoints}
                />
            </SCarouselSlide>
        )
    })

    function updateIndex(i: number) {
        if(i === 0){
            setRoundNum((RoundNum + 1))
        }
        setIndex(i)
    }

    return (
        <div className="tracker-container">

            <div className="tracker-header">
                <h2>- Round {RoundNum} -</h2>
            </div>

            <div className="tracker-wrapper flex-row">
                {activeItem}
            </div>

            <div className="tracker-btns-wrapper">
                <button onClick={() => updateIndex((Index - 1 + items.length) % items.length)}>
                    {'<'}
                </button>
                <button onClick={() => updateIndex((Index + 1) % items.length)}>
                    {'>'}
                </button>
            </div>
        </div>

    )
}