import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Stack } from "react-bootstrap"
import { useDispatch } from "react-redux"
import SpellService from "../../api/services/SpellService"
import { SpellActions } from "../../redux/reducers/spells"
import { useAppSelector } from "../../redux/store"
import { PreparedSpells } from "./PreparedSpells"
import { SpellList } from "./SpellList"
import { SpellsFilter } from "./SpellsFilter"

export const SpellsView = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const AllSpells = useAppSelector(state => state.spells.all)
    const FilteredSpells = useAppSelector(state => state.spells.filteredSpells)


    useEffect(() => {
        if (AllSpells.length < 1) {
            GetAllSpells()
        }

        return () => {

        }
    }, [])

    const GetAllSpells = async () => {
        setIsLoading(true)
        let result = await SpellService.getAllSpells()

        if (result.status === 200) {
            dispatch(SpellActions.setAllSpells(result.data.results))
            dispatch(SpellActions.setFilteredSpells(result.data.results))
        }
        setIsLoading(false)
    }

    return (
        <Container>
            <Row>
                <Col md={2}>
                    <PreparedSpells></PreparedSpells>
                </Col>
                <Col md={10}>
                    <Stack>
                        <SpellsFilter />
                        {
                            isLoading ? "Loading..." :
                                <SpellList spells={FilteredSpells}></SpellList>
                        }
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}
