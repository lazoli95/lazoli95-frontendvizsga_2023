import "./App.css"
import Books from "./components/Books";
import { useState } from "react";

function App() {

  const [book, setBook] = useState("");
  const [price, setPrice] = useState("");
  const [bookList, setBookList] = useState([]);

  function addBook(){

    setBookList([...bookList,{book:book, price:price}])
     
    setBook("");
    setPrice("");
  }
  return (
    <div>

<div className="App">

<div className="container">
  <h1>BookList</h1>

  <label>Könyv név</label>
  <input type="text" id='book' placeholder='Add book' value={book} onChange={(e) => {

    setBook(e.target.value);
  }} />

  <label>Ár</label>
  <input type="text" id='price' placeholder='Add price' value={price} onChange={(e) => {

    setPrice(e.target.value);
  }} />

  <button id='add' onClick={addBook}>Add Event</button>

  {
    bookList.map((t)=>{

      return <Books book={t.book} price={t.price}/>
    })
  }
</div>

</div>
);

    </div>
  );
}

export default App;
