import { useDispatch } from "react-redux"
import { removeCreature } from "../../redux/reducers/encounterReducer"
import { Counter } from "../Generic/Counter/Counter"

export const PartyBarItem: React.FC<IPartyBarItem> = (creature: IPartyBarItem) => {
    const dispatch = useDispatch()

    // TODO - test this component

    const removeFromParty = (id:number) => {
        dispatch(removeCreature(id))
    }

    return (
        <div className="partybar-item">
            <div className="partybar-item-header">
                <strong>{creature.creatureName}</strong>
                <button className="" onClick={() => {removeFromParty(creature.id)}}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <Counter label={'HP'} startValue={creature.hitPoints} />
        </div>
    )
}