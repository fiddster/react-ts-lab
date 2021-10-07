import { usePartybarContext } from "./PartyBarContext";
import { IPartyBarItem, TeamTag } from "./PartyBarInterfaces"
import { PartyBarItem } from "./PartyBarItem"

interface PartyBarProps {
    partyTeam: TeamTag
}

export const PartyBar: React.FC<PartyBarProps> = ({ partyTeam }) => {

    const { PartyMembers, setPartyMembers } = usePartybarContext();

    let partyMember: IPartyBarItem = {
        team: partyTeam,
        name: partyTeam == TeamTag.PC ? 'Kalle' : 'Anka',
        hitPoints: 25
    }

    return (
        <div className="party-container">
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