import React from 'react'
import * as Yup from 'yup';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import { TeamTag } from '../../../types/enums/PartyBarItemEnums';
import { Button, Col, Row } from 'react-bootstrap';
import { toTitleCase } from '../../../utils/StringHelpers';

const CreatureSchema = Yup.object().shape({
    team: Yup.string()
        .required('Required.'),
    creatureName: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required.'),
    copies: Yup.number()
        .min(1, 'must be greater than 0.')
        .max(10, 'Lets calm down a bit.')
        .required('Required.'),
    initiativeModifier: Yup.number()
        .min(-20)
        .max(20)
});

interface Props {
    onSubmit: (values: ICreatureForm) => void,
    onCancel: () => void
}

export const AddCreatureForm: React.FC<Props> = ({ onCancel, onSubmit }) => {
    const initialValues: ICreatureForm = {
        team: TeamTag.Enemy,
        creatureName: "",
        hitPoints: 0,
        initiativeModifier: 0,
        copies: 1
    }

    function beforeSubmit(values: ICreatureForm): ICreatureForm {
        let form: ICreatureForm = {
            team: values.team,
            creatureName: toTitleCase(values.creatureName.trim()),
            hitPoints: values.hitPoints,
            initiativeModifier: values.team === TeamTag.Enemy ? values.initiativeModifier : 0,
            copies: values.copies
        }

        return form
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={CreatureSchema}
            onSubmit={(values) => {
                onSubmit(beforeSubmit(values))
            }}
        >
            {({ values, errors, touched }) => (
                <Form>
                    <Col>
                        <Row className='mb-3 justify-evenly'>
                            <label>
                                <Field
                                    name="team"
                                    type="radio"
                                    value={TeamTag.PC}
                                />
                                Player
                            </label>
                            <label>
                                <Field
                                    name="team"
                                    type="radio"
                                    value={TeamTag.Enemy}
                                />
                                Enemy
                            </label>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor='creatureName'>Name</label>
                            </Col>
                            <Col>
                                <Field type="text" id="creatureName" name="creatureName" />
                            </Col>
                            <Col>
                                {errors.creatureName && touched.creatureName ? (
                                    <div className='text-error'>{errors.creatureName}</div>
                                ) : null}
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <label htmlFor='hitPoints'>HP</label>
                            </Col>
                            <Col>
                                <Field id="hitPoints" name="hitPoints" type="number" max="9999"/>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor='initiativeBonus'>Initiative mod</label>
                            </Col>
                            <Col>
                                <Field id="initiativeBonus" name="initiativeBonus"
                                    type="number"
                                    min="-20"
                                    max="20"
                                    disabled={values.team === TeamTag.PC}
                                />
                            </Col>
                            <Col></Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <label htmlFor='copies'>Copies</label>
                            </Col>
                            <Col>
                                <Field id="copies" name="copies"
                                    type="number"
                                    min="1"
                                    max="10"
                                />
                            </Col>
                            <Col>
                                {errors.copies && touched.copies ? (
                                    <div className='text-error'>{errors.copies}</div>
                                ) : null}
                            </Col>
                        </Row>

                        <Row>
                            <hr />
                            <div className='flex-row justify-between'>
                                <Button variant="btn" onClick={onCancel}>
                                    Cancel
                                </Button>
                                <Button variant="btn" type='submit'>
                                    Add
                                </Button>
                            </div>
                        </Row>
                    </Col>
                </Form>

            )}
        </Formik>
    );
};
