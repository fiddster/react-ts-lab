import { TrackerItem } from "./TrackerItem";
import { useState } from "react";
import Carousel from "../Generic/Carousel/Carousel";

export const InitativeTracker = ({items}: {items: ITrackerItem[]}) => {

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

            {
                Array.isArray(items) ?
                    <Carousel>
                        {
                            items.map((item, i) => {
                                return (
                                    <TrackerItem
                                        key={i}
                                        creatureName={item.creatureName}
                                        initiative={item.initiative}
                                        hitPoints={item.hitPoints}
                                    />
                                )
                            })
                        }
                    </Carousel>
                    : <div></div>
            }
        </div>

    )
}