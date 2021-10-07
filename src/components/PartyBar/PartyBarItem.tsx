import { Counter } from "../Generic/Counter/Counter"
import { usePartybarContext } from "./PartyBarContext"
import { IPartyBarItem } from "./PartyBarInterfaces"

export const PartyBarItem: React.FC<IPartyBarItem> = ({ team, name, hitPoints, slug, characterSheetIdentifier }) => {

    const {PartyMembers, setPartyMembers} = usePartybarContext()

    const removeFromParty = (name:string) => {
        var members = PartyMembers
        members = members.filter(item => item.name !== name)
        setPartyMembers(members)
    }

    return (
        <div className="partybar-item">
            <div className="partybar-item-header">
                <strong>{name}</strong>
                <button className="" onClick={() => {removeFromParty(name)}}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <Counter label={'HP'} startValue={hitPoints} />
        </div>
    )
}