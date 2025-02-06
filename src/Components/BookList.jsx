import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-between">
          {this.props.libri.map((book) => {
            return <SingleBook key={book.asin} book={book} />;
          })}
          ;
        </Row>
      </Container>
    );
  }
}

export default BookList;
