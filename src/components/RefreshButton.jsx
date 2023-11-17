import Button from 'react-bootstrap/Button'

const RefreshButton = ({loginStatus,handleFoo}) => {
  if (loginStatus) {
    return (
      <>
        <style type="text/css">
        {`
    .btn-danger {
      background-color: #B71C1C;
      color: black;
      font-size: 1.5rem;
      font-weight: 700;
      padding: 0.0rem 0.5rem;
      margin: 1rem;
    }
    `}
      </style>
      <Button 
        variant="danger"
        onClick={handleFoo}
      >R</Button>
      </>
    )
  }
}

export default RefreshButton