import { useState } from "react"
import Card from "react-bootstrap/Card"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const TextEditor = ({addEntry}) => {

  const [noteState, setNoteState] = useState({
    title:'',
    text:'',
    tags:''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("foo")
    addEntry(noteState)
    setNoteState({
      title:'',
      text:'',
      tags:''
    })
  }

  const handleTitleChange = (event) => {
    setNoteState(prevState => ({ ...prevState, title:event.target.value}))
  }

  const handleTextChange = (event) => {
    setNoteState(prevState => ({ ...prevState, text:event.target.value}))
  }

  const handleTagChange = (event) => {
    setNoteState(prevState => ({ ...prevState, tags:event.target.value}))
  }

  return (
    // <div style={{ whiteSpace: "pre-wrap"}}>
      <Card style={{ width: '20rem'}}>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Title"
                value={noteState.title}
                onChange={handleTitleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="text">
              <Form.Label>Text</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={10}
                value={noteState.text}
                onChange={handleTextChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="tags" >
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your tag"
                value={noteState.tags}
                onChange={handleTagChange}
              />
            </Form.Group>
            <Button 
              variant="dark" 
              type="submit"
            >
              Save
            </Button>{' '}
            <Button 
              variant="secondary" 
              type="reset" 
              onClick={() => console.log("discard")}
            >
              Discard
            </Button>
          </Form>
        </Card.Body>
      </Card>
    // </div>
  )
}
  
 export default TextEditor