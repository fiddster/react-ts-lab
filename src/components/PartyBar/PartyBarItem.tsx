import { Counter } from "../Generic/Counter/Counter"
import { IPartyBarItem } from "./PartyBarInterfaces"

export const PartyBarItem: React.FC<IPartyBarItem> = ({ name, hitPoints, slug, characterSheetIdentifier }) => {

    return (
        <div className="partybar-item">
            <div className="partybar-item-header">
                <strong>{name}</strong>
            </div>
            <Counter label={'HP'} startValue={hitPoints} />
        </div>
    )
}