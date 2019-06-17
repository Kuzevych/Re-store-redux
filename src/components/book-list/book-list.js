import React, {Component} from 'react';
import './book-list.css';
import BookListItem from '../book-list-item';
import { connect } from "react-redux";
import { withBookstoreService } from '../hoc/with-bookstore-service ';
 class BookList extends Component {

     componentDidMount() {
         // 1. recieve data

         // 2. dispatch store
     }

     render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ books }) => {
    return { books };
};


export default withBookstoreService(connect(mapStateToProps)(BookList));