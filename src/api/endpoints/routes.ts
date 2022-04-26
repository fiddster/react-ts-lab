export const ApiRoutes = {
    Monsters: (query:string) => `https://api.open5e.com/monsters/${query}`,
    Backgrounds: (query:string) => `https://api.open5e.com/backgrounds/${query}`,
    Documents: (query:string) => `https://api.open5e.com/documents/${query}`,
}