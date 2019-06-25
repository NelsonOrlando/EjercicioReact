import React from 'react';
import archives from './archivo.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './style.css';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      informations: []
    }
  }

  componentDidMount() {
    let dates = archives
    this.setState({
      informations: dates
    })
    console.log(dates);
  }

  render() {
    return (
      this.state.informations.map((informations) => {
        return (
          <Col xs={12} md={4} lg={3} className="col">
          <Card>
            <Card.Img variant="top" src={informations.url} />
            <Card.Body>
              <Card.Title>{informations.title}</Card.Title>
              <Card.Text>
                {informations.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
        )
      })
    )
  }
}

function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Container>
        <Row>
          <Cards />
        </Row>
      </Container>
    </div>
  );
}

export default App;