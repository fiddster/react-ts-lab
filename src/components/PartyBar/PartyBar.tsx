import { usePartybarContext } from "./PartyBarContext";
import { IPartyBarItem, TeamTag } from "./PartyBarInterfaces"
import { PartyBarItem } from "./PartyBarItem"

interface PartyBarProps {
    partyTeam: TeamTag
}

export const PartyBar: React.FC<PartyBarProps> = ({ partyTeam }) => {

    const { PartyMembers, setPartyMembers } = usePartybarContext();


    const AddPartyMember = (newItem: IPartyBarItem) => {
        let partyItem: IPartyBarItem = {
            team: partyTeam,
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

    let partyMember: IPartyBarItem = {
        team: partyTeam,
        name: partyTeam == TeamTag.PC ? 'Kalle' : 'Anka',
        hitPoints: 25
    }

    return (
        <div className="party-container">
            <div className="partybar-buttons">
                <button onClick={() => { AddPartyMember(partyMember) }}>
                    add
                </button>
            </div>

            <div className="partybar-items">
            {
                PartyMembers.map((item, i) => {
                    if(item.team == partyTeam)
                    return (
                        <PartyBarItem
                            key={i}
                            team={partyTeam}
                            name={item.name}
                            hitPoints={item.hitPoints}
                            slug={item.slug}
                            characterSheetIdentifier={item.characterSheetIdentifier}
                        />
                    )
                })
            }
        </div>

        </div>
    )
}