import React, { useContext, useEffect, useRef } from 'react'
import { Button, Col, Container, Form, FormGroup, ListGroup, Row } from 'react-bootstrap'
import { ITodo, TodoContextType } from './TodoTypes'
import {TodoContext} from './TodoContext'

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement
}
interface FormAddTodo extends HTMLFormElement {
  readonly elements: FormElements
}

export const TodoList = () => {

    const {todos, addTodo, updateTodo, deleteTodo} = useContext(TodoContext) as TodoContextType
    
    const handleSubmit = (e:React.FormEvent<FormAddTodo>) => {
        e.preventDefault()
        let elements = e.currentTarget.elements
        addTodo(elements.title.value)
    }
    
    return (<>
        <Container>
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
                    <div>Todo list</div>
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
