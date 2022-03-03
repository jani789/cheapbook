import React, { useState } from "react";
import Select, { components } from "react-select";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getBooks } from "../../store/actions/booksAction";
import defaultImg from "../../assets/uploadImageIcon.png";
import Image from "next/image";
const searchStyle = {
  searchContent: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  title: {
    margin: 0,
    textTransform: "capitalize",
  },
  author: {
    margin: 0,
    fontSize: 12,
    color: "#e35309",
    textTransform: "capitalize",
  },
  bookDiv: {
    display: "flex",
    alignItems: "stretch",
    maxWidth: "80%",
  },
  bookImg: {
    height: "100%",
    maxHeight: "70px",
  },
  bookDetails: {
    maxHeight: "70px",
    paddingLeft: "10px",
  },
};
const Search = ({ booksData }) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const newData = booksData.map((book) => {
    const update = {
      ...book,
      value: book,
      label: `${book.title} ${book.authorName} ${book.isbn} ${book.city} `,
    };
    return update;
  });

  const Option = (props) => {
    return (
      <components.Option {...props}>
        <Link
          href={{
            pathname: `/bookDetails/${props.data.title}/${props.data.id}`,
            //query: { ...props.data, imgUrl: props?.data?.imageUrl },
          }}
          passHref
        >
          <div style={searchStyle.searchContent}>
            <div style={searchStyle.bookDiv}>
              <div style={searchStyle.bookImg}>
                <Image
                  src={props?.data?.imageUrl || defaultImg}
                  //alt='book-img'
                  alt= 'search by isbn, author, location'
                  height={70}
                  width={70}
                />
              </div>
              <div style={searchStyle.bookDetails}>
                <p style={searchStyle.title}>{props.data.title}</p>
                <p style={searchStyle.author}> {props.data.city}</p>
                <p style={searchStyle.author}> {props.data.isbn}</p>
                <p style={searchStyle.author}>By {props.data.authorName}</p>
              </div>
            </div>
            <div>${props.data.price}</div>
          </div>
        </Link>
      </components.Option>
    );
  };

  function setStateInput(e) {
    setState(e === "" ? false : true);
    dispatch(
      getBooks({
        searchInput: e,
      })
    );
  }
  return (
    <>
      <Select
        onInputChange={(e) => setStateInput(e)}
        placeholder='Search By Name, Author, ISBN and Location'
        menuIsOpen={state}
        options={newData}
        isSearchable
        components={{ Option }}
      />
    </>
  );
};
export default Search;
