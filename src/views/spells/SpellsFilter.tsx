import React, { useCallback, useState } from 'react'
import { Col, Form, Row, Stack } from "react-bootstrap"
import Select from "react-select"
import { useDebounce } from "react-use"

const spellLevels = [
    { value: 0, label: "Cantrips" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
]

const options = {
    class: [
        { value: "Bard", label: "Bard" },
        { value: "Cleric", label: "Cleric" },
        { value: "Druid", label: "Druid" },
        { value: "Paladin", label: "Paladin" },
        { value: "Ranger", label: "Ranger" },
        { value: "Sorcerer", label: "Sorcerer" },
        { value: "Warlock", label: "Warlock" },
        { value: "Wizard", label: "Wizard" },
    ],
    school: [
        { value: "Abjuration", label: "Abjuration" },
        { value: "Conjuration", label: "Conjuration" },
        { value: "Divination", label: "Divination" },
        { value: "Enchantment", label: "Enchantment" },
        { value: "Evocation", label: "Evocation" },
        { value: "Illusion", label: "Illusion" },
        { value: "Necromancy", label: "Necromancy" },
        { value: "Transmutation", label: "Transmutation" },
    ]
}

const outlineStyles: React.CSSProperties = {
    padding: ".5rem",
    border: "1px solid whitesmoke",
}

interface Filter {
    search: string,
    classes: string[],
    schools: string[],
    levels: number[],

}

const defaultFilter: Filter = {
    search: "",
    classes: new Array<string>(),
    schools: new Array<string>(),
    levels: new Array<number>(),
}

interface Props {
    onFilterChange?: (filter: Filter) => void
}

export const SpellsFilter: React.FC<Props> = (props) => {

    const [Filter, setFilter] = useState(defaultFilter)
    const [debouncedSearch, setSearch] = useState("")

    const handleFilterChange = useCallback(
        () => {
            if (props.onFilterChange) {
                props.onFilterChange(Filter)
            }
        },
        [Filter.search, Filter.classes.length, Filter.schools.length, Filter.levels],
    )

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    useDebounce(() => {
        setFilter({
            ...Filter,
            search: debouncedSearch
        })
        console.log(debouncedSearch)
    }, 300, [debouncedSearch])

    return (
        <Row style={outlineStyles}>
            <Col>
                <Row className="mb-2">
                    <Col>
                        <Stack direction="horizontal" gap={1}>
                            <Form.Label htmlFor="spellSearch"><i className="fas fa-search"></i></Form.Label>
                            <Form.Control id="spellSearch" name="spellSearch" type="text" placeholder="Search" onChange={handleSearchChange} />
                        </Stack>
                    </Col>
                    <Col>
                        <Select options={options.class} isMulti placeholder="Class"></Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={1}>
                            {
                                spellLevels.map(sl => (
                                    <Form.Check
                                        id={`spellLevel-${sl.value}`}
                                        key={`spellLevel-${sl.value}`}
                                        className="me-1"
                                        type={'checkbox'}
                                        label={sl.label}
                                    />
                                ))
                            }
                        </Stack>

                    </Col>
                    <Col>
                        <Select options={options.school} isMulti placeholder="School"></Select>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
                <Stack direction="horizontal"></Stack>
            </Col>
        </Row>
    )
}
