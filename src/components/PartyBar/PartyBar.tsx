import { Counter } from "../Generic/Counter/Counter"

interface IPartyBarItem {
    name: string
    hitPoints: number
    slug?: string // TODO - make use of the api and load data using this slug
}

const PartyBarItem: React.FC<IPartyBarItem> = ({ name, hitPoints, slug }) => {

    return (
        <div>
            <strong>{name}</strong>
            <Counter label={'HP'} startValue={hitPoints} />
        </div>
    )

}

interface IPartyBar {
    items: {
        name: string
        hitPoints: number
        slug?: string
    }[]
}

export const PartyBar: React.FC<IPartyBar> = ({ items }) => {
    return (
        <div>
            {
                items.map((item, i) => {
                    <PartyBarItem key={i}
                        name={item.name}
                        hitPoints={item.hitPoints}
                        slug={item.slug}
                    />
                })
            }
        </div>
    )
}