import React, { useContext } from 'react'
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import {TodoContext} from './TodoContext'

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement
}

interface FormAddTodo extends HTMLFormElement {
  readonly elements: FormElements
}

interface NameFormElements extends HTMLFormControlsCollection{
    name: HTMLInputElement
}
interface FormChangeName extends HTMLFormElement{
    readonly elements: NameFormElements
}

export const TodoList = () => {

    const {todos, addTodo, updateTodo, deleteTodo, name, changeName} = useContext(TodoContext)
    
    const handleSubmit = (e:React.FormEvent<FormAddTodo>) => {
        e.preventDefault()
        let elements = e.currentTarget.elements
        addTodo(elements.title.value)
    }
    
    const handleNameSubmit = (e:React.FormEvent<FormChangeName>) => {
        e.preventDefault()
        let {name} = e.currentTarget.elements
        changeName(name.value)
    }

    return (<>
        <Container fluid className="p-0">
            <Row>
                <Col>
                    <Form onSubmit={handleNameSubmit} id="formChangeName">
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>List name</Form.Label>
                            <Form.Control type="text" placeholder="list name" name="name"/>
                        </Form.Group>
                        <Button type="submit">Save</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit} id="formAddTodo">
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Todo</Form.Label>
                            <Form.Control type="text" placeholder="new todo" name="title"/>
                        </Form.Group>
                        <Button type="submit">Add</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>{name !== "" ? name : 'Todo list'}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup variant="flush">
                        {
                            todos.map((t) => {
                                return(
                                    <ListGroup.Item key={t.id}>
                                        <div>
                                            {t.title}
                                        </div>
                                        <div>
                                            <Button onClick={() => {updateTodo(t.id)}}>Done</Button>
                                            <Button onClick={() => {deleteTodo(t.id)}}>Delete</Button>
                                        </div>
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </>)
}
