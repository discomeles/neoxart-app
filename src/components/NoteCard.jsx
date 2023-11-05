import Card from "react-bootstrap/Card"

const NoteCard = ({info}) => {
  return (
  <div style={{ whiteSpace: "pre-wrap"}}>
    <Card>
      <Card.Body>
        <Card.Text>
        {info}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  )
}

export default NoteCard