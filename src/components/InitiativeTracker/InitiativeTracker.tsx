import { TrackerItem } from "./TrackerItem";

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

export const InitativeTracker: React.FC<ITrackerItems> = ({ items }) => {

    var key = 0;

    const renderItems = ():JSX.Element[] => {
        return items.map((item) => {
            return (
                <TrackerItem 
                    key={key++} 
                    name={item.Name}
                    initiative={item.Initiative}
                    hitPoints={item.HitPoints}
                    statusMarker={item.StatusMarker}
                /> 
            )
        })
    }

    return (
        <div>
            <h1>This is the InitativeTracker</h1>

            <ul>
                {renderItems()}
            </ul>
        </div>
    )
}