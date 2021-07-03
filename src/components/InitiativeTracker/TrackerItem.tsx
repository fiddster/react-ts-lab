
import { useState } from 'react'
import {StatusMarker} from '../StatusMarker/StatusMarker'

interface ITrackerItem {
    name: string;
    hitPoints: number;
    initiative: number;
}

export const TrackerItem: React.FC<ITrackerItem> = ({ name, hitPoints, initiative }) => {

    // TODO - Checkout http://www.dnd5eapi.co/ if it's useful

    const [Inputs, setInputs] = useState({
        Name: name,
        HitPoints: hitPoints,
        Initiative: initiative,
    })

    const [Name, setName] = useState(name)
    const [HitPoints, setHitPoints] = useState(hitPoints)
    const [Initiative, setInitiative] = useState(initiative)
    const [StatusConditions, setStatusConditions] = useState<string[]>([])
    const [IsActive, setIsActive] = useState(true)
    const [IsAlive, setIsAlive] = useState(true)

    const renderStatusMarkers = ():JSX.Element[] => {
        return StatusConditions.map((crStatus) => {
            return (
                <StatusMarker status={crStatus} small={true}/>
            )
        })
    }

    return (
        <>
            <div className="tracker-item-container">
                <div className={IsActive ? "tracker-item-active" : "tracker-item-not-active"}>
                    <div> 
                        <span>
                            Init: {Initiative}
                        </span>
                    </div>
                    <div>
                        <span>
                            {Name}
                        </span>
                    </div>
                    <div>
                        {renderStatusMarkers()}
                    </div>
                    <div>
                        <div>
                            HP: {HitPoints}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}