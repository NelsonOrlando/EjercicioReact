import React from 'react';
import archives from './Api.json';

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
    //console.log(dates);
  }

  render() {
    return (
      this.state.informations.map((informations) => {
        return (
          <Col className="col" xs={12} md={6} lg={4} xl={3}>
            <Card>
              <Card.Img variant="top" src={informations.url} />
              <Card.Body>
                <Card.Title>{informations.title}</Card.Title>
                <Card.Text>
                  {informations.description}
                </Card.Text>
                <a href={informations.url} target="blank_">
                  <Button variant="outline-primary">
                    Go to photo <span>{informations.id}</span>
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        )
      })
    )
  }
}

export default Cards;