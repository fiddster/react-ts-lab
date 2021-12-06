export namespace ApiRoutes{
    export const Monsters = (query:string) => `https://api.open5e.com/monsters/${query}`
    export const Backgrounds = (query:string) => `https://api.open5e.com/backgrounds/${query}`
    export const Documents = (query:string) => `https://api.open5e.com/documents/${query}`
}