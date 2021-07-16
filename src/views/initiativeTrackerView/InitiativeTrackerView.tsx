import { useState } from 'react'
import { InitativeTracker } from '../../components/InitiativeTracker/InitiativeTracker';
import { ITrackerItem } from '../../components/InitiativeTracker/InitiativeTrackerInterfaces';
import { PartyBar } from '../../components/PartyBar/PartyBar';
import { PartybarContext } from '../../components/PartyBar/PartyBarContext';
import { IPartyBarItem, TeamTag } from '../../components/PartyBar/PartyBarInterfaces';


// TODO - Rename to "EncounterView"?

export const InitativeTrackerView = () => {

    const [PartyMembers, setPartyMembers] = useState(new Array<IPartyBarItem>())

    const [trackerItems, setTrackerItems] = useState(new Array<ITrackerItem>())

    return (

        <PartybarContext.Provider value={{ PartyMembers, setPartyMembers }}>
            <div className="initiative-tracker-view">
                <div className="tracker-pos">
                    <InitativeTracker items={trackerItems} />
                </div>
                <div className="party-bar-pos">
                    <PartyBar partyTeam={TeamTag.PC} />
                </div>
                <div className="content-pos">
                    <iframe className="context-display" src="https://open5e.com/monsters/monster-list" />
                </div>
                <div className="enemy-bar-pos">
                    <PartyBar partyTeam={TeamTag.Enemy} />
                </div>
            </div>
        </PartybarContext.Provider>
    )
}
