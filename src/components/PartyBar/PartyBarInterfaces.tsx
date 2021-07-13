export interface IPartyBarItem {
    name: string
    hitPoints: number
    slug?: string // TODO - make use of the api and load data using this slug
    characterSheetIdentifier?: string // TODO - v3 customizable character sheet identifier
}

export interface IPartyBar {
    items: IPartyBarItem[]
}