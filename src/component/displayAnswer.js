import React, {  useState, useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom';

const DisplayAnswer = (props) => {
  const [state, setstate] = useState({
    chosenAnswer: '',
    count: 1,
  })
    
    const data = props.location.state.data;
    const Question = data[0];
   const Options = data[1];


  useEffect(() => {
    setstate({
      chosenAnswer: Options[2],
      count: + 1
    }) 
    
  }, [Options])


  const GenerateNewAnswer = () => {
     const Answer = Math.floor(Math.random() * Options.length - 0)
    if(Options.length-1  === Answer){
      setstate({
        chosenAnswer: Options[3],
        count: + 1
      }) 
  
    }else if(Options.length-2 === Answer){
      setstate({
        chosenAnswer: Options[2],
        count: + 1
      }) 
  
    }else if(Options.length-3 === Answer){
      setstate({
        chosenAnswer: Options[1],
        count: + 1
      }) 
  
    }else {
      setstate({
        chosenAnswer: Options[0],
        count: + 1
      }) 
  
    }
    
  };

//   const Ratings = () =>{
    
//       if(Question){
//         Question.sort((a,b) =>
//         Question.filter(v => v===a).length
//       - Question.filter(v => v===b).length
//   ).pop();
//       } 
//       setstate({
//          count: +1
//       })
//       console.log(state.count)
//  }
 
//  useEffect(() => {
//     Ratings();
//  },[Ratings])

        return (
      <div className="App" >
      <header className="App-header">
        Choice Maker
      </header>
      <p>🔥  When in doubt use choice maker and we would help you make a random selection 🔥</p>
      <div className="App-body" >
        {/* {console.log(data[1][1])} */}
        <h3>Question Asked:</h3>
       {Question}
      </div>
      <div className="result-display">
      <h3>Options</h3>
      <p>A. {Options[0]}</p>
      <p>B. {Options[1]}</p>
      <p>C. {Options[2]}</p>
      <p>D. {Options[3]}</p>
      </div>
      <p className="chosen-answer"><h3>Answer generated:</h3>{state.chosenAnswer}</p>
      <input type="button" value="Generate answer" className="answer-button" onClick={GenerateNewAnswer}/>
      <Link to="/">
      <input type="button" value="Ask another question" className="answer-button" />
      </Link>
      <div className="rating">
        <h3 className="rating-title">Popularity Poll</h3>
        <div className='rating-body'>
        <p className="ratings-count">Questions:</p>
        <p>{Question}</p>
        <p className="ratings-count">Times Searched</p>
        <p>{state.count}</p>
        </div>
        
      </div>
    </div>
    )
}

export default withRouter(DisplayAnswer);
