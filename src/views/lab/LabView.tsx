import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useGetSet } from 'react-use'
import TodoContextProvider from '../../contexts/Todo/TodoContext'
import { TodoList } from '../../contexts/Todo/TodoList'
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

    return (<>
        <Container>
            <Row className="mb-3">
                <Col>
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
                </Col>
            </Row>
            <Row>
                <Col>
                    <TodoContextProvider>
                        <TodoList />
                    </TodoContextProvider>
                </Col>
            </Row>
        </Container>
    </>)
}
