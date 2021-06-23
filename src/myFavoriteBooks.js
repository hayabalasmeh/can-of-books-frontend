import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import BestBooks from './bestBooks';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModel from './BookFormModel';
import UpdateForm from './updateForm';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      bookdata: [],
      userEmail: this.props.auth0.user.email,
      showForm: false,
      bookIndex: 0,
      defaultName: '',
      defaultDescription: '',

    }
  }
  handelingShow = () => {
    this.setState({
      showing: true,
    })

  }
  handelingClose = () => {
    this.setState({
      showing: false,
    })
  }
  componentDidMount = async () => {
    try {
      const books = await axios.get(`${process.env.REACT_APP_SERVER}/books?email=${this.state.userEmail}`);
      console.log(books.data);

      // if (books.data.length > 0) {
      this.setState({
        bookdata: books.data,

      })
      // }
    }
    catch (error) {
      console.log(error);
    }
  }
  addingBooks = async (event) => {
    event.preventDefault();
    let val = '';
    if (event.target.status.checked) {
      val = 'available'
    } else {
      val = 'not available';
    }

    const newBook = {
      name: event.target.name.value,
      description: event.target.description.value,
      status: val,
    }

    try {
      const book = await axios.post(`${process.env.REACT_APP_SERVER}/addbooks`, { email: this.state.userEmail, book: newBook });
      this.setState({
        bookdata: book.data,
      })
    }
    catch (err) {
      console.log(`${err}`);


    }
  }
  deletingBooks = async (index) => {
    try {
      const book = await axios.delete(`${process.env.REACT_APP_SERVER}/deletebooks/${index}?email=${this.state.userEmail}`);
      this.setState({
        bookdata: book.data,
      })
    }
    catch (err) {
      console.log(`${err}`);

    }
  }
  showUpdateForm = (indx) => {
    this.setState({
      showForm: true,
      bookIndex: indx,
      defaultName: this.state.bookdata[indx].name,
      defaultDescription: this.state.bookdata[indx].description,
    })
  }
  hideUpdateForm = () => {
    this.setState({
      showForm: false,
    })
  }

  updatingForm = async (event) => {
    event.preventDefault();
    let status = '';
    if (event.target.status.checked) {
      status = 'available';
    } else {
      status = 'Not available'
    }
    const updatedBook = {
      name: event.target.name.value,
      description: event.target.description.value,
      status: status,
    }
    console.log(updatedBook)

    try {
      const book = await axios.put(`${process.env.REACT_APP_SERVER}/updatebook/${this.state.bookIndex}`, { email: this.state.userEmail, book: updatedBook })

      this.setState({
        bookdata: book.data,
      })
    }
    catch (err) {
      console.log(`${err}`);

    }
  }
  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <BestBooks opening={this.handelingShow} bookdata={this.state.bookdata} deletingBooks={this.deletingBooks} showUpdateForm={this.showUpdateForm} />
        <BookFormModel opening={this.handelingShow} hiding={this.handelingClose} show={this.state.showing} addingBooks={this.addingBooks} />
        <UpdateForm showForm={this.state.showForm} showUpdateForm={this.showUpdateForm} hideUpdateForm={this.hideUpdateForm} updatingForm={this.updatingForm} defaultName={this.state.defaultName}
          defaultDescription={this.state.defaultDescription} />
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
