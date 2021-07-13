import { IPartyBarItem } from "./PartyBarInterfaces"
import { PartyBarItem } from "./PartyBarItem"

interface PartyBarProps{
    items: Array<IPartyBarItem>;
}

export const PartyBar: React.FC<PartyBarProps> = ({items}) => {
    return (
        <div className="partybar">
            {
                items.map((item, i) => {
                    return (
                        <PartyBarItem 
                            key={i}
                            name={item.name}
                            hitPoints={item.hitPoints}
                            slug={item.slug}
                            characterSheetIdentifier={item.characterSheetIdentifier}
                        />
                    )
                })
            }
        </div>
    )
}