import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetSet } from 'react-use'
import { setUiStatusLoading } from '../../redux/actions/uiStatus'
import { setKeyValue } from '../../redux/reducers/dictionary'
import { useAppSelector } from '../../redux/store'

export const LabView = () => {
    const dispatch = useDispatch()

    const dictItems = useAppSelector(state => state.dictionary.items.kalle)

    const StatusFetchDocuments = useAppSelector(state => state.uiStatus.items.find(i => i.key === "fetchDocuments"))

    const [getKeyInput, setKeyInput] = useGetSet("")
    const [getValueInput, setValueInput] = useGetSet("")

    useEffect(() => {
        console.log({ dictItems })
    }, [dictItems])

    const handleLoading = () => {
        dispatch(setUiStatusLoading("fetchDocuments"))
    }

    const addDictItem = () => {
        dispatch(setKeyValue({ key: getKeyInput(), value: getValueInput() }))
    }

    return (
        <div className="container">
            Lab view works!
            <div>
                <input type="text" onChange={(e: any) => setKeyInput(e.target.value)} />
                <input type="text" onChange={(e: any) => setValueInput(e.target.value)} />
                <button onClick={addDictItem}>Submit</button>
            </div>
            <div>
                <button onClick={() => { handleLoading() }}>Fetch documents</button>
            </div>
            <div>
                {StatusFetchDocuments?.loading && <p>Loading</p>}
                {

                }
            </div>
        </div>
    )
}
