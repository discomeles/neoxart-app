import Card from "react-bootstrap/Card"

const NoteCard = ({info}) => {
  return (
  <div style={{ whiteSpace: "pre-wrap"}}>
    <Card style={{ width: '20rem'}}>
      <Card.Header as="h5">{info.title}</Card.Header>
      <Card.Body>
        <Card.Text>
        {info.text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>{info.tags}</Card.Footer>
    </Card>
  </div>
  )
}

export default NoteCard