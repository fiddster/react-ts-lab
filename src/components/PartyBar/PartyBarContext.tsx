import { createContext, useContext } from 'react';
import { IPartyBarItem } from './PartyBarInterfaces';



export type PartybarContextType = {
    PartyMembers: IPartyBarItem[];
    setPartyMembers: (PartyMembers: IPartyBarItem[]) => void;
}

export type EnemyPartybarContextType = {
    EnemyPartyMembers: IPartyBarItem[];
    setEnemyPartyMembers: (EnemyPartyMembers: IPartyBarItem[]) => void;
}

export const PartybarContext = createContext<PartybarContextType>({ PartyMembers: new Array<IPartyBarItem>(), setPartyMembers: PartyMembers => console.warn('no members provider') });
export const usePartybarContext = () => useContext(PartybarContext);

export const EnemyPartybarContext = createContext<EnemyPartybarContextType>({ EnemyPartyMembers: new Array<IPartyBarItem>(), setEnemyPartyMembers: EnemyPartyMembers => console.warn('no members provider') });
export const useEnemyPartybarContext = () => useContext(EnemyPartybarContext);
