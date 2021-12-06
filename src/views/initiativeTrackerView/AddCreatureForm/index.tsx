import { clone } from 'lodash';
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCreatures } from '../../../redux/reducers/encounterReducer';
import { useAppSelector } from '../../../redux/store';
import { AddCreatureForm } from './AddCreatureForm';

export const AddCreatureModal = () => {

    const dispatch = useDispatch()

    const Creatures = useAppSelector(state => state.encounter.creatures)
    const [show, setShow] = useState(false);

    const addCreatures = (creatures:IPartyBarItem[]) => {
        let items = [...Creatures]

        creatures.forEach(creature => {
            
            let counter = 1;
            let id = 0;
            items.forEach((item) => {
                if(id < item.id){
                    id = item.id
                }

                if (item.creatureName.includes(creature.creatureName)) {
                    let name = item.creatureName
                    let indexOf = name.indexOf('#')

                    if (indexOf !== -1) {
                        name = name.slice(0, indexOf - 1)
                    }

                    if (creature.creatureName === name) {
                        counter++
                    }
                }
            })

            creature.creatureName = counter != 1 ? `${creature.creatureName} #${counter}` : `${creature.creatureName}`
            creature.id = ++id
            items.push(creature)
        });

        items.sort((a, b) => a.creatureName.localeCompare(b.creatureName))
        dispatch(setCreatures(items))
    }

    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    const handleSubmit = (values: ICreatureForm) => {
        let creature:IPartyBarItem = {
            id: 0,
            team: values.team,
            creatureName: values.creatureName,
            hitPoints: values.hitPoints,
            initiativeModifier: values.initiativeModifier
        }

        let creatures = new Array<IPartyBarItem>()

        for (let index = 1; index <= values.copies; index++) {
            let copy = clone(creature)
            creatures.push(copy)
        }
        
        addCreatures(creatures)
        handleClose()
    }

    return (
        <>
            <Button variant="btn" onClick={handleShow}>
                Add Creature
            </Button>

            <Modal contentClassName="custom-modal" show={show} onHide={handleClose}>
                <Modal.Header className='' closeButton>
                    <Modal.Title>Add Creature</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddCreatureForm onCancel={handleClose} onSubmit={handleSubmit}/>
                </Modal.Body>
            </Modal>
        </>
    )
}
