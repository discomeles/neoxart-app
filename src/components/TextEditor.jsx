import Card from "react-bootstrap/Card"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EditorCard = () => {
  return (
    <div style={{ whiteSpace: "pre-wrap"}}>
      <Card style={{ width: '20rem'}}>
        <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Tags</Form.Label>
        <Form.Control type="text" placeholder="Your tag" />
      </Form.Group>
    </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

const TextEditor = () => {
  return (
    <EditorCard />
  )
}
  
 export default TextEditor