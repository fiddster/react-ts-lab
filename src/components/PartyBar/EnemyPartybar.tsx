import { PartyBar } from "./PartyBar"
import { useEnemyPartybarContext } from "./PartyBarContext"
import { IPartyBarItem } from "./PartyBarInterfaces"

export const EnemyPartybar = () => {

    const {EnemyPartyMembers, setEnemyPartyMembers} = useEnemyPartybarContext()

    const AddEnemyPartyMember = (newItem: IPartyBarItem) => {
        AddPartyMember(newItem)
    }

    const AddPartyMember = (newItem: IPartyBarItem) => {
        let partyItem: IPartyBarItem = {
            name: newItem.name,
            hitPoints: newItem.hitPoints,
            slug: newItem.slug,
            characterSheetIdentifier: newItem.characterSheetIdentifier
        }

        let items = [...EnemyPartyMembers]
        let counter = 1;
        items.forEach((item) => {
            if (item.name.includes(partyItem.name)) {
                let name = item.name
                let indexOf = name.indexOf('#')

                if (indexOf !== -1) {
                    name = name.slice(0, indexOf - 1)
                }

                if (partyItem.name === name) {
                    counter++
                }
            }
        })

        partyItem.name = counter != 1 ? `${partyItem.name} #${counter}` : `${partyItem.name}`
        
        items.push(partyItem)
        items.sort((a, b) => a.name.localeCompare(b.name))

        setEnemyPartyMembers([...items])
    }

    let anka: IPartyBarItem = {
        name: 'Anka',
        hitPoints: 25
    }

    return (
        <>
            <button onClick={() => { AddEnemyPartyMember(anka) }}>
                add
            </button>
            <PartyBar items={[...EnemyPartyMembers]}/>
        </>
    )
}