import React, {Component} from 'react';
import './book-list.css';
import BookListItem from '../book-list-item';
import {connect} from "react-redux";
import withBookstoreService from '../hoc';
import booksLoaded from '../../actions';
import { compose } from '../../utils';
class BookList extends Component {

    componentDidMount() {
        // 1. recieve data
        const {bookstoreService, booksLoaded} = this.props;
        const data = bookstoreService.getBooks();


        // 2. dispatch store
        console.log(booksLoaded(data));

    }

    render() {
        const {books} = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => {
    return {books};
};

const mapDispatchToProps = {
  booksLoaded
};

//without compose
// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList));

//with compose
export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);