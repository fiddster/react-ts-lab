export const Open5eEndpoints = {
    Backgrounds: { 
        GetByQuery: (query: string) => `https://api.open5e.com/backgrounds/${query}`, 
    },
    Documents: {
        GetByQuery: (query: string) => `https://api.open5e.com/documents/${query}`,
    },
    Monsters: {
        GetByQuery: (query: string) => `https://api.open5e.com/monsters/${query}`,
    },
    Spells:{
        GetAll: "https://api.open5e.com/spells/?limit=1000",
    }
}