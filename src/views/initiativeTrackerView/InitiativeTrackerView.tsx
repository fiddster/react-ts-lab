import { useState, useEffect } from 'react'
import Carousel from '../../components/Generic/Carousel/Carousel';
import { Counter } from '../../components/Generic/Counter/Counter';
import { InitativeTracker } from '../../components/InitiativeTracker/InitiativeTracker';
import { TrackerItem } from '../../components/InitiativeTracker/TrackerItem';
import statusConditions from '../../components/StatusMarker/statusIcons.json';

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

    useEffect(() => {
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
                },
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
                },
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
                },
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
                },
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
                },
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
                },
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
                },
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
                },
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
    }, [])


    return (

        <div className="initiative-tracker-view">
            <div className="tracker-pos">
                <Carousel>
                    {trackerItems.map((item, i) => {
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
            <div className="party-bar-pos">
                <h2>Party area</h2>
            </div>
            <div className="content-pos">
                <h2>Content area</h2>
                <Counter label="HP" />
                <div>

                </div>
            </div>
            <div className="enemy-bar-pos">
                <h2>Enemy area</h2>
            </div>
        </div>

    )
}