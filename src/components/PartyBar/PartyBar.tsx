import { useAppSelector } from "../../redux/store";
import { TeamTag } from "../../types/enums/PartyBarItemEnums";
import { PartyBarItem } from "./PartyBarItem"

interface PartyBarProps {
    partyTeam: TeamTag
}

export const PartyBar: React.FC<PartyBarProps> = ({ partyTeam }) => {

    const PartyMembers = useAppSelector(state => state.encounter.creatures)

    return (
        <div className="party-container">
            <div className="partybar-items">
            {
                PartyMembers.map((item, i) => {
                    if(item.team == partyTeam)
                    return (
                        <PartyBarItem
                            key={i}
                            id={item.id}
                            team={partyTeam}
                            creatureName={item.creatureName}
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