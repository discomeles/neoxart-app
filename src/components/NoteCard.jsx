import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const NoteCard = ({entries}) => {
  return (
  <Container>
    <Row bsPrefix="row row-cols-auto">
    {entries.map(entry =>
    <Col key={entry.title}  className='py-2'>
      <Card  style={{ width: '20rem', whiteSpace: "pre-wrap"}}>
        <Card.Header as="h5">{entry.title}</Card.Header>
        <Card.Body>
          <Card.Text>
          {entry.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>{entry.tags}</Card.Footer>
      </Card>
    </Col>)}
  </Row>
  </Container>
  )
}

export default NoteCard