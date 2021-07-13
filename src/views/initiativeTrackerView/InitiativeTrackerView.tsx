import { useState } from 'react'
import { InitativeTracker } from '../../components/InitiativeTracker/InitiativeTracker';
import { ITrackerItem } from '../../components/InitiativeTracker/InitiativeTrackerInterfaces';
import { EnemyPartybar } from '../../components/PartyBar/EnemyPartybar';
import { EnemyPartybarContext, PartybarContext } from '../../components/PartyBar/PartyBarContext';
import { IPartyBarItem } from '../../components/PartyBar/PartyBarInterfaces';
import { PcPartybar } from '../../components/PartyBar/PcPartybar';

// TODO - Rename to "EncounterView"?

export const InitativeTrackerView = () => {

    const [PartyMembers, setPartyMembers] = useState(new Array<IPartyBarItem>())
    const [EnemyPartyMembers, setEnemyPartyMembers] = useState(new Array<IPartyBarItem>())

    const [trackerItems, setTrackerItems] = useState(new Array<ITrackerItem>())

    return (

        <PartybarContext.Provider value={{ PartyMembers, setPartyMembers }}>
            <EnemyPartybarContext.Provider value={{ EnemyPartyMembers, setEnemyPartyMembers }}>

                <div className="initiative-tracker-view">
                    <div className="tracker-pos">
                        <InitativeTracker items={trackerItems} />
                    </div>
                    <div className="party-bar-pos">
                        <PcPartybar />
                    </div>
                    <div className="content-pos">
                        <iframe className="context-display" src="https://open5e.com/monsters/monster-list" />
                    </div>
                    <div className="enemy-bar-pos">
                        <EnemyPartybar />
                    </div>
                </div>
            </EnemyPartybarContext.Provider>
        </PartybarContext.Provider>
    )
}
