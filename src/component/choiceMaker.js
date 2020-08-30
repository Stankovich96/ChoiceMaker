import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class ChoiceMaker extends Component {
constructor(props){
super(props);
this.handleChange = this.handleChange.bind(this);
this.handleOptions = this.handleOptions.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.routeChange = this.routeChange.bind(this);
this.state = {
  question:"",
  questions:[],
  options:[],
  optionA:"",
  optionB:"",
  optionC:"",
  optionD:"",
}
}
handleChange(e){
  this.setState({
    question: e.target.value,
  });
}

handleOptions(e){
  let name = e.target.name;
  let value = e.target.value;
 
  this.setState({[name]:value});
}
handleSubmit(e){
 e.preventDefault();
 
 if( this.state.question !== "" && this.state.optionA !== "" && this.state.optionB !== "" && this.state.optionC !== "" && this.state.optionD !== ""){
   this.state.questions.push(this.state.question);
   this.state.options.push(this.state.optionA,this.state.optionB,this.state.optionC,this.state.optionD,);
   this.routeChange();
  }else{
    alert("Fill the questions and options mehn")
  }
 
}
routeChange(){
    this.props.history.push({
      pathname: "/answer",
      state: {data:[this.state.questions, this.state.options] }
    }
    )
}
  render() {
    
    
    return (
      <div className="App" >
      <header className="App-header">
        Choice Maker
      </header>
      <h1 className="title">Choice Maker</h1>
      <p>🔥  When in doubt use choice maker 🔥</p>
      <div className="App-body" >
        <form onSubmit={this.handleSubmit} className="form-body">
        <div className="question">
        <h2 className="question-title">Questions</h2>
        <input className="Input-style"  type="text" name="Question" id="qestionId" placeholder="Q: Enter your question here" value={this.state.question} onChange={this.handleChange}/>
        </div>
      <div className="options">
      <h2 className="options-title">Options</h2>
      <input className="Input-style"  type="text" name="optionA" id="optionA" placeholder="A: " value={this.state.optionA} onChange={this.handleOptions}/>
      <input className="Input-style"   type="text" name="optionB" id="optionB" placeholder="B: " value={this.state.optionB} onChange={this.handleOptions}/>
      <input className="Input-style"  type="text" name="optionC" id="optionC" placeholder="C: " value={this.state.optionC} onChange={this.handleOptions}/>
      <input className="Input-style"  type="text" name="optionD" id="optionD" placeholder="D: " value={this.state.optionD} onChange={this.handleOptions}/>
      </div>

      <input type="button" value="Answer!" className="button" onClick={this.handleSubmit}/>

      </form>
      </div>
    </div>
    )
  }
}

export default withRouter(ChoiceMaker);
