
// TODO - v2
// interface IStatusCondition {
//     name: string
//     imgSrc: string
// }

interface IPartyBarItem {
    id: number
    team: TeamTag
    creatureName: string
    hitPoints: number
    initiativeModifier?: number
    slug?: string // TODO - v4 make use of the api and load data using this slug
    characterSheetIdentifier?: string // TODO - v3 customizable character sheet identifier
}

interface ICreatureForm {
    team: TeamTag
    creatureName: string
    hitPoints: number
    initiativeModifier: number
    copies: number
}

interface IPartyBar {
    items: IPartyBarItem[]
}