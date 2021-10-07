import { useState } from 'react'
import { InitativeTracker } from '../../components/InitiativeTracker/InitiativeTracker';
import { ITrackerItem } from '../../components/InitiativeTracker/InitiativeTrackerInterfaces';
import { PartyBar } from '../../components/PartyBar/PartyBar';
import { PartybarContext } from '../../components/PartyBar/PartyBarContext';
import { IPartyBarItem, TeamTag } from '../../components/PartyBar/PartyBarInterfaces';


// TODO - Rename to "EncounterView"?

export const InitativeTrackerView = () => {

    const [PartyMembers, setPartyMembers] = useState(new Array<IPartyBarItem>())

    const [TrackerItems, setTrackerItems] = useState(new Array<ITrackerItem>())

    const handleAddCreature = () => {
        alert('Not implemented')
        //TODO - open modal with form for adding creature
    }

    const AddPartyMember = (newItem: IPartyBarItem) => {
        //TODO - handle newItem.team (PC or Enemy)
        let items = [...PartyMembers]
        let counter = 1;
        items.forEach((item) => {
            if (item.name.includes(newItem.name)) {
                let name = item.name
                let indexOf = name.indexOf('#')

                if (indexOf !== -1) {
                    name = name.slice(0, indexOf - 1)
                }

                if (newItem.name === name) {
                    counter++
                }
            }
        })

        newItem.name = counter != 1 ? `${newItem.name} #${counter}` : `${newItem.name}`

        items.push(newItem)
        items.sort((a, b) => a.name.localeCompare(b.name))

        setPartyMembers([...items])
    }

    const handleStart = () => {
        alert('Not implemented')
        //TODO - initiative roll for all partyItems
        //TODO - manual input for players?
    }

    const handleEnd = () => {
        alert('Not implemented')
        //TODO - remove all items from trackerItems
        //TODO - clear all initiative rolls from all enteties
        //TODO - clear all enemies from PartyMembers? prompt maybe?
    }

    return (

        <PartybarContext.Provider value={{ PartyMembers, setPartyMembers }}>
            <div className="initiative-tracker-view">
                <div className="tracker-pos">
                    <InitativeTracker items={TrackerItems} />
                </div>
                <div className="tracker-buttons-pos">
                    <button className="btn" onClick={() => handleAddCreature()}>
                        <span>Add Creature</span>
                    </button>
                    <button className="btn" onClick={() => handleStart()}>
                        <span> Start Encounter</span>
                    </button>
                    <button className="btn" onClick={() => handleEnd()}>
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
        </PartybarContext.Provider>
    )
}
