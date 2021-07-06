import { StatusMarker } from "../StatusMarker/StatusMarker";
import { TrackerItem } from "./TrackerItem";
import statusConditions from '../StatusMarker/statusIcons.json';
import { Component, createRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Carousel from "../Generic/Carousel/Carousel";

interface ITrackerItems {
    items: {
        Name: string
        HitPoints: number
        Initiative: number
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

    function updateIndex(i: number) {
        if (i === 0) {
            setRoundNum((RoundNum + 1))
        }
        setIndex(i)
    }

    return (
        <div className="tracker-container">

            <div className="tracker-header">
                <h2>- Round {RoundNum} -</h2>
            </div>

            <Carousel>
                {items.map((item, i) => {
                    return (
                        <TrackerItem
                            key={i}
                            name={item.Name}
                            initiative={item.Initiative}
                            hitPoints={item.HitPoints}
                        />
                    )
                })}
            </Carousel>
        </div>

    )
}