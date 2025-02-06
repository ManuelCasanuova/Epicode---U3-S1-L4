import { Component } from "react";
import { Badge, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = { selected: false };

  toggleSelected = () => {
    this.toggleSelected({ selected: !this.state.selected });
  };
  render() {
    return (
      <Col lg={2} className="mt-3" /* className={this.state.selected ? "border-danger" : ""} */>
        <Card>
          <Card.Img
            variant="top"
            src={this.props.book.img} /* onClick={() => this.setState({ !this.state.selected })}  */
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Badge bg="danger">€{this.props.book.price}</Badge>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;

/* import { Badge, Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  console.log(props);
  return (
    <Col lg={2} className="mt-3">
      <Card>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Badge bg="danger">€{props.book.price}</Badge>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook; */
