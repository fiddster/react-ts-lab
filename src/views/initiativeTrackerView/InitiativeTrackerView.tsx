import { useState } from 'react'
import { InitativeTracker } from '../../components/InitiativeTracker/InitiativeTracker';
import { PartyBar } from '../../components/PartyBar/PartyBar';
import { useAppSelector } from '../../redux/store';
import { TeamTag } from '../../types/enums/PartyBarItemEnums';
import { AddCreatureModal } from './AddCreatureForm';

// TODO - Rename to "EncounterView"?

export const InitativeTrackerView = () => {

    const Creatures = useAppSelector(state => state.encounter.creatures)
    const [TrackerItems, setTrackerItems] = useState(new Array<ITrackerItem>())

    const handleStartEncounter = () => {
        alert('Not implemented')
        //TODO - initiative roll for all partyItems
        //TODO - manual input for players?
    }

    const handleEndEncounter = () => {
        alert('Not implemented')
        //TODO - remove all items from trackerItems
        //TODO - clear all initiative rolls from all entities
        //TODO - clear all enemies from PartyMembers? prompt maybe?
    }

    return (

        <div className="initiative-tracker-view">
            <div className="tracker-pos">
                <InitativeTracker items={TrackerItems} />
            </div>
            <div className="tracker-buttons-pos">
                {/* // TODO - Should look like a toolbar */}
                <AddCreatureModal />

                <button className="btn" onClick={() => handleStartEncounter()}>
                    <span> Start Encounter</span>
                </button>
                <button className="btn" onClick={() => handleEndEncounter()}>
                    <span> End Encounter</span>
                </button>
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
    )
}
