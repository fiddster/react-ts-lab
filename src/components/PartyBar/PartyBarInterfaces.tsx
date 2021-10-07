export enum TeamTag{
    PC = 'PC',
    Enemy = 'Enemy'
}

export interface IPartyBarItem {
    team: TeamTag
    name: string
    hitPoints: number
    slug?: string // TODO - v4 make use of the api and load data using this slug
    characterSheetIdentifier?: string // TODO - v3 customizable character sheet identifier
}

export interface IPartyBar {
    items: IPartyBarItem[]
}