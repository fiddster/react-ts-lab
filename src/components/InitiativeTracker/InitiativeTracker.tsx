import { StatusMarker } from "../StatusMarker/StatusMarker";
import { TrackerItem } from "./TrackerItem";
import statusConditions from '../StatusMarker/statusIcons.json';
import { useState } from "react";

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

    const renderItems = (): JSX.Element[] => {
        let key = 0;
        return items.map((item) => {
            return (
                <TrackerItem
                    key={key++}
                    name={item.Name}
                    initiative={item.Initiative}
                    hitPoints={item.HitPoints}
                />
            )
        })
    }

    return (
        <div>
            <div>
                <h2>- Round {RoundNum} -</h2>
            </div>
            <div className="flex-row">
                {renderItems()}
            </div>
        </div>

    )
}