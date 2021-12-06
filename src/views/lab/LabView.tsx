import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetSet } from 'react-use'
import { setKeyValue } from '../../redux/reducers/dictionaryReducer'
import { useAppSelector } from '../../redux/store'

export const LabView = () =>  {
    const dispatch = useDispatch()

    const dictItems = useAppSelector(state => state.dictionary.items.kalle)

    const [getKeyInput, setKeyInput] = useGetSet("")
    const [getValueInput, setValueInput] = useGetSet("")

    useEffect(() => {   
        console.log({dictItems})
    }, [dictItems])

    const addDictItem = () => {
        dispatch(setKeyValue({key:getKeyInput(), value:getValueInput()}))
    }

    return (
        <div className="container">
            Lab view works!
            <div>
                <input type="text" onChange={(e:any) => setKeyInput(e.target.value)}/>
                <input type="text" onChange={(e:any) => setValueInput(e.target.value)}/>
                <button onClick={addDictItem}>Submit</button>
            </div>
        </div>
    )
}
