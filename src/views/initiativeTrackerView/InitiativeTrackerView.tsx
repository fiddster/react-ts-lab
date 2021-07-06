import { useState, useEffect } from 'react'
import { Counter } from '../../components/Generic/Counter/Counter';
import { InitativeTracker } from '../../components/InitiativeTracker/InitiativeTracker';
import { PartyBar } from '../../components/PartyBar/PartyBar';

interface ITrackerItems {
    items: {
        Name: string
        HitPoints: number
        Initiative: number
    }[]
}

interface IPartyBarItem {
    name: string
    hitPoints: number
    slug?: string // TODO - make use of the api and load data using this slug
}

// TODO - Rename to "EncounterView"?

export const InitativeTrackerView = () => {

    const [trackerItems, setTrackerItems] = useState<ITrackerItems["items"]>([]);
    const [partyMembers, setPartyMembers] = useState<IPartyBarItem[]>([])
    const [enemyPartyMembers, setEnemyPartyMembers] = useState<IPartyBarItem[]>([])

    // function addSelectableEventListener(type:string, selector:string, callback:CallableFunction){
    //     document.addEventListener(type, e => {
    //         if(e.target?.matches(selector)){
    //             callback(e)
    //         }
    //     })
    // }

    return (

        <div className="initiative-tracker-view">
            <div className="tracker-pos">
                <InitativeTracker items={trackerItems} />
            </div>
            <div className="party-bar-pos">
                <h2 className="text-center">Party area</h2>

                <PartyBar items={partyMembers} />
            </div>
            <div className="content-pos">
                <h2>Content area</h2>

                <iframe className="context-display" src="https://open5e.com/monsters/monster-list" />
                
            </div>
            <div className="enemy-bar-pos">
                <h2 className="text-center">Enemy area</h2>
                <PartyBar items={enemyPartyMembers} />
            </div>
        </div>

    )
}