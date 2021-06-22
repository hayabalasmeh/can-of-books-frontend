import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

// import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      show: false,
    }
  }



  render() {
    return (
      <>
        <Button variant="primary" onClick={() => this.props.opening()}>Add Book</Button>

        {this.props.bookdata.map((obj, indx) => {
          return <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>{obj.name}</Card.Title>
              <Card.Text>
                {obj.description}
              </Card.Text>
              <Button variant="primary" onClick={() => this.props.deletingBooks(indx)}>Delete</Button>
            </Card.Body>
          </Card>
          //    return <Carousel>
          //    <Carousel.Item>
          //      <img
          //        className="d-block w-100"
          //        src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          //        alt="First slide"
          //      />
          //      <Carousel.Caption>
          //        <h3>{obj.name}</h3>
          //        <p>{obj.description}</p>
          //      </Carousel.Caption>
          //    </Carousel.Item>
          //    <Carousel.Item>
          //      <img
          //        className="d-block w-100"
          //        src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          //        alt="Second slide"
          //      />

          //      <Carousel.Caption>
          //      <h3>{obj.name}</h3>
          //        <p>{obj.description}</p>
          //      </Carousel.Caption>
          //    </Carousel.Item>
          //    <Carousel.Item>
          //      <img
          //        className="d-block w-100"
          //        src="https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          //        alt="Third slide"
          //      />

          //      <Carousel.Caption>
          //      <h3>{obj.name}</h3>
          //        <p>{obj.description}</p>
          //      </Carousel.Caption>
          //    </Carousel.Item>
          //  </Carousel>

        })
        }

      </>
    )
  }
}

export default BestBooks;