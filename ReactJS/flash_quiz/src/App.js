import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import FlashcardList from './FlashcardList';
import axios from 'axios';
function App() {
  // const [flashcards, setflashcard] = useState(SAMPLE_FLASHCARDS)
  const [flashcards, setflashcard] = useState([])
  const [categories, setCategories] = useState([])
  const categoryEL = useRef()
  const amountEL = useRef()
  useEffect(()=>{
    // axios
      // .get('https://opentdb.com/api.php?amount=10')
  }, [])

  useEffect(()=>{
    axios
      .get('https://opentdb.com/api_category.php')
      .then(res => {
        setCategories(res.data.trivia_categories)
      })
  }, [])

  function decodeString(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
    }
  
  function handleSubmit(e){
    e.preventDefault()
    // console.log("rrrr")
    axios
      .get('https://opentdb.com/api.php', {
        params : {
          amount : amountEL.current.value,
          category : categoryEL.current.value
        }
      })
      .then(res => {
        setflashcard(res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer)
          const options = [
            ...questionItem.incorrect_answers.map(a => decodeString(a)), answer
          ]
          return {
            id : `${index} - ${Date.now()}`,
            question : decodeString(questionItem.question),
            answer : answer,
            options : options.sort(() => Math.random() - .5)
          }
        }))
      })
  }

  return (
    <>
    <form className="header" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select id="category" ref={categoryEL}>
          {categories.map(category => {
            return <option value={category.id} key={category.id}>{category.name}</option> 
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Number of questions</label>
        <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEL}></input>
      </div>
      <div className="form-group">
        <button className="btn">Generate</button>
      </div>
    </form>
    <div className="container">
    <FlashcardList flashcards={flashcards}/>
    </div>
    </>
  );
}

// const SAMPLE_FLASHCARDS = [
//   {
//     id : 1,
//     question : 'What is 3 + 3',
//     answer : '6',
//     options : [
//       '3',
//       '4',
//       '5',
//       '6'
//     ]
//   },
//   {
//     id : 2,
//     question : 'What is your name',
//     answer : 'vishal',
//     options : [
//       'ozo',
//       'vishal',
//       'ulu',
//       'zoro'
//     ]
//   }
// ]

export default App;
