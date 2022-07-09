import React, { useState } from 'react'
import { Accordion, Card, Stack, Table, useAccordionButton } from "react-bootstrap"
import styled from "styled-components";
import { Spell } from "../../api/services/SpellService"

const columnWidth = "200px"
const classesColumnWidth = "400px"

interface IAccordionToggle {
    eventKey: any
}

const AccordionToggle: React.FC<IAccordionToggle> = ({ eventKey }) => {

    const [className, setClassName] = useState("fas fa-angle-double-down fa-2x")

    const decoratedOnClick = useAccordionButton(eventKey,
        () => {
            className === "fas fa-angle-double-down fa-2x" ?
                setClassName("fas fa-angle-double-down fa-rotate-180 fa-2x") :
                setClassName("fas fa-angle-double-down fa-2x")
        }
    );

    return (
        <button
            className="btn"
            type="button"
            onClick={decoratedOnClick}
            style={{ backgroundColor: "transparent" }}
        >
            <i className={className}></i>
        </button>
    );
}

const itemStyles: React.CSSProperties = {
    // border: "1px solid whitesmoke",
    backgroundColor: "transparent",
    marginBottom: ".5rem"
}

const itemHeaderStyles: React.CSSProperties = {
    fontSize: "larger",
    padding: "0",
    paddingLeft: "1rem",
    paddingBottom: ".25rem",
}

const itemBodyStyles: React.CSSProperties = {
    backgroundColor: "transparent"
}

interface ListItemProps {
    spell: Spell
}

const ListItem: React.FC<ListItemProps> = (props) => {

    return (
        <>
            <Accordion flush>
                <Card style={itemStyles}>
                    <Card.Header style={itemHeaderStyles}>
                        <div className="flex-row justify-between align-center">
                            <div className="flex-row justify-between align-center">
                                <div style={{ width: columnWidth }}>
                                    {props.spell.name}
                                </div>
                                <div style={{ width: columnWidth }}>
                                    {props.spell.level}{" "}{props.spell.school}
                                </div>
                                <div style={{ width: columnWidth }}>
                                    <span>{"Range: "}</span>
                                    {props.spell.range}
                                </div>
                            </div>
                            <div className="flex-row justify-end" style={{ width: columnWidth }}>
                                <AccordionToggle eventKey={props.spell.slug}></AccordionToggle>
                            </div>
                        </div>
                        <Stack direction="horizontal">
                            <div style={{ width: columnWidth }}>
                                <span>{"Casting time: "}</span>
                                {props.spell.casting_time}
                            </div>
                            <div style={{ width: columnWidth }}>
                                <span>{"Components: "}</span>
                                {props.spell.components}
                            </div>
                            <div style={{ minWidth: columnWidth, maxWidth: classesColumnWidth }}>
                                <span>{"Classes: "}</span>
                                {props.spell.dnd_class}
                            </div>
                        </Stack>
                    </Card.Header>
                    <Accordion.Collapse eventKey={props.spell.slug}>
                        <Card.Body>
                            <strong>{"Material"}</strong>
                            <p>{props.spell.material}</p>
                            <hr />
                            <strong>{"Description"}</strong>
                            <p>{props.spell.desc}</p>
                            {props.spell.higher_level &&
                                <>
                                    <hr />
                                    <strong>{"On higher levels"}</strong>
                                    <p>
                                        {props.spell.higher_level}
                                    </p>
                                </>
                            }

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}

interface Props {
    spells: Spell[]
}

export const SpellList: React.FC<Props> = (props) => {

    return (
        <>{
            props.spells.map(s => (
                <ListItem key={s.slug} spell={s} />
            ))
        }</>
    )
}

// "name": "Acid Arrow",
// "desc": "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
// "higher_level": "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
// "range": "90 feet",
// "components": "V, S, M",
// "material": "Powdered rhubarb leaf and an adder's stomach.",
// "ritual": "no",
// "duration": "Instantaneous",
// "concentration": "no",
// "casting_time": "1 action",
// "level": "2nd-level",
// "level_int": 2,
// "school": "Evocation",
// "dnd_class": "Druid, Wizard",