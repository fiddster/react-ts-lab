import { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { InitativeTracker } from '../../components/InitiativeTracker/InitiativeTracker';
import { ITrackerItem } from '../../components/InitiativeTracker/InitiativeTrackerInterfaces';
import { PartyBar } from '../../components/PartyBar/PartyBar';
import { PartybarContext } from '../../components/PartyBar/PartyBarContext';
import { IPartyBarItem, TeamTag } from '../../components/PartyBar/PartyBarInterfaces';
import { AddCreatureForm } from './AddCreatureForm';


// TODO - Rename to "EncounterView"?

export const InitativeTrackerView = () => {

    const [PartyMembers, setPartyMembers] = useState(new Array<IPartyBarItem>())
    const [TrackerItems, setTrackerItems] = useState(new Array<ITrackerItem>())

    const [ShowAddCreatureForm, setShowAddCreatureForm] = useState(false)

    const handleAddCreature = () => {
        alert('Not implemented')
        //TODO - open modal with form for adding creature
    }

    let partyMember: IPartyBarItem = {
        team: Math.random() < 0.5 ? TeamTag.PC : TeamTag.Enemy,
        name: 'Test Creature',
        hitPoints: 25
    }

    const OnCloseAddCreatureForm = (e:any) => {
        console.log(`e`, e)
        debugger
        if(e.target.value === "save"){

        }
        setShowAddCreatureForm(false)
    }

    const AddPartyMember = (newItem: IPartyBarItem) => {

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

        <PartybarContext.Provider value={{ PartyMembers, setPartyMembers }}>
            <div className="initiative-tracker-view">
                <div className="tracker-pos">
                    <InitativeTracker items={TrackerItems} />
                </div>
                <div className="tracker-buttons-pos">
                    
                    <AddCreatureForm />

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

        </PartybarContext.Provider>
    )
}
