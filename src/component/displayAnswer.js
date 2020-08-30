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
        <Link to="/">
      <input type="button" value="Ask another question" className="header-button" />
      </Link>
      </header>
      <h1>Choice Maker</h1>
      <p>🔥  When in doubt use choice maker 🔥</p>
      <div className="App-body" >
        {/* {console.log(data[1][1])} */}
        <p>Question Asked:</p>
       {Question}
      </div>
      <div className="result-display">
      <div>options</div>
      <p>A. {Options[0]}</p>
      <p>B. {Options[1]}</p>
      <p>C. {Options[2]}</p>
      <p>D. {Options[3]}</p>
      </div>
      <p>Answer generated:{state.chosenAnswer}</p>
      <input type="button" value="Generate answer" className="header-button" onClick={GenerateNewAnswer}/>

      <div>
        Popularity Poll
        <p>Questions:</p>
        {Question}
        <p>Times Searched</p>
        {state.count}
      </div>
    </div>
    )
}

export default withRouter(DisplayAnswer);
