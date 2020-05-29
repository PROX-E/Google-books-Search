import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container} from "../components/Grid";
import SavedResult from "../components/SavedResult"

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

    //when this component mounts, grab all books that were saved to the database 
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container> 
                {this.state.savedBooks.map(book => {
                  console.log(book)
                  return (
                    <div>
                      <SavedResult
                        key={book._id}
                        authors={book.authors}
                        title={book.title}
                        synopsis={book.synopsis}
                        link={book.link}
                        thumbnail={book.thumbnail}
                        handleDeleteButton={this.handleDeleteButton()} 
                      />
                    </div>
                  )
                })}
                </Container>
            </Container>
        )
    }
}



export default SaveBook 