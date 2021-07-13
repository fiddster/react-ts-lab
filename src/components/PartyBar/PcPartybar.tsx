
import { PartyBar } from "./PartyBar"
import { usePartybarContext } from "./PartyBarContext"
import { IPartyBarItem } from "./PartyBarInterfaces"

export const PcPartybar = () => {
    
    const { PartyMembers, setPartyMembers } = usePartybarContext()

    const AddPcPartyMember = (newItem: IPartyBarItem) => {
        AddPartyMember(newItem)
    }

    const AddPartyMember = (newItem: IPartyBarItem) => {
        let partyItem: IPartyBarItem = {
            name: newItem.name,
            hitPoints: newItem.hitPoints,
            slug: newItem.slug,
            characterSheetIdentifier: newItem.characterSheetIdentifier
        }

        let items = [...PartyMembers]
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

        setPartyMembers([...items])
    }

    let kalle: IPartyBarItem = {
        name: 'Kalle',
        hitPoints: 25
    }

    return (
        <>
            <button onClick={() => { AddPcPartyMember(kalle) }}>
                add
            </button>

            <PartyBar items={[...PartyMembers]}/>
            {/* {

                PartyMembers.map((item, i) => {
                    return (
                        <PartyBarItem
                            key={i}
                            name={item.name}
                            hitPoints={item.hitPoints}
                            slug={item.slug}
                            characterSheetIdentifier={item.characterSheetIdentifier} />
                    )
                })
            } */}
        </>
    )
}