import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { database } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'

export default function AddTodoButton() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const { currentUser } = useAuth()

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    // if (currentFolder === null) return
    // Create folder in database

    database.todos.add({
      name: name,
      // parentId: currentFolder.id,
      userId: currentUser.uid,
      // path,
      createdAt: database.getCurrentTimestamp(),
    })
    setName("")
    closeModal()
  }

  return (
    <>
      <Button onClick={openModal} variant="outline-success" size="small">
        Add Todo
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Todo Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Close</Button>
            <Button variant="success" type="submit">Add Todo</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
