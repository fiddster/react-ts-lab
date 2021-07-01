// TODO - Checkout http://www.dnd5eapi.co/ if it's useful
import {useState} from 'react'

interface ITrackerItem {
    key: any,
    name: string;
    hitPoints: number;
    initiative: number;
    statusMarker: string;
}

export const TrackerItem: React.FC<ITrackerItem> = ({name, hitPoints, initiative}) => {

    const [Inputs, setInputs] = useState({
        Name: name,
        HitPoints: hitPoints,
        Initiative: initiative,

    })

    //TODO - Status -> Buffs, Debuffs, Conditions
    // <All DnD Conditions>
    // Blinded
    // Charmed
    // Deafened
    // Frightened
    // Grappled
    // Incapacitated
    // Invisible
    // Paralyzed
    // Petrified
    // Poisoned
    // Prone
    // Restrained
    // Stunned
    // Unconscious
    // Exhaustion
    // </All DnD Conditions>

    const [Name, setName] = useState(name)
    const [HitPoints, setHitPoints] = useState(hitPoints)
    const [Initiative, setInitiative] = useState(initiative)
    const [StatusMarker, setStatusMarker] = useState<string[]>([])
    const [IsActive, setIsActive] = useState(true)
    const [IsAlive, setIsAlive] = useState(true)

    return (
        <div>
            <ul>
                <li>{Name}</li>
                <li>Init: {Initiative}</li>
                <li>HP: {HitPoints}</li>
                <li>{IsActive}</li>
                <li>{IsAlive}</li>
                <li>{StatusMarker}</li>
            </ul>
        </div>
    )
    
}