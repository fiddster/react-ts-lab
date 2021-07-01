import { useState, useEffect } from 'react'
import { InitativeTracker } from '../../components/InitiativeTracker/InitiativeTracker';

interface ITrackerItems {
    items: {
        Name: string
        HitPoints: number
        Initiative: number
        IsActive: boolean
        IsAlive: boolean
        StatusMarker: string
    }[]
}

// TODO - Rename to "EncounterView"?

export const InitativeTrackerView = () => {

    const [trackerItems, setTrackerItems] = useState<ITrackerItems["items"]>([]);

    useEffect(()=>{
        setTrackerItems(
            [
                {
                    Name: 'Kalle',
                    HitPoints: 10,
                    Initiative: 11,
                    IsActive: true,
                    IsAlive: true,
                    StatusMarker: ""
                },
                {
                    Name: 'Kalle',
                    HitPoints: 10,
                    Initiative: 11,
                    IsActive: true,
                    IsAlive: true,
                    StatusMarker: ""
                }
            ]
        )
    },[])


    return (
        <div className="container">
            <div>
                <h1>This is the tracker view!</h1>
            </div>
            <div>
                <InitativeTracker items={trackerItems} />
            </div>
        </div>
    )
}