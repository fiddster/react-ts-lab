import { useState } from 'react'
import { StatusMarker } from '../StatusMarker/StatusMarker'

export const TrackerItem: React.FC<ITrackerItem> = ({ name, hitPoints, initiative }) => {

    const [Name, setName] = useState(name)
    const [HitPoints, setHitPoints] = useState(hitPoints)
    const [Initiative, setInitiative] = useState(initiative)
    const [StatusConditions, setStatusConditions] = useState<string[]>([])
    const [IsAlive, setIsAlive] = useState(true)

    const renderStatusMarkers = (): JSX.Element[] => {
        return StatusConditions.map((crStatus) => {
            return (
                <StatusMarker status={crStatus} small={true} />
            )
        })
    }

    return (
        <>
            <div className="tracker-item-container">
                <div className="tracker-item">
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
                        <div className="w100">
                            {`HP: ${HitPoints}`}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}