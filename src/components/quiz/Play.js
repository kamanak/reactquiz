// @ts-nocheck
import React, { Component, Fragment } from 'react'
import {Helmet} from 'react-helmet';
import questions from '../../questions.json';
import isEmpty from "../../utubs/is-empty";
export class Play extends Component {
    constructor(props) {
        super(props)
        this.state={
            questions:questions,
            currntquestions:{},
            nextquestions:{},
            previousquestions:{},
            answer: '',
            numberofquestions:0,
            numberofansweredquestions:0,
            currentquestionindex:0,
            score:0,
            correctanswer:0,
            wronganswer:0,
            hints:5,
            fiftyfifty: 2,
            usedfiftyfifty: false,
            time: {}
      

        };
        
      
             
        }
        componentDidMount() {
            const{questions,currntquestions,nextquestions,previousquestions} = this.state;
            this.displayquestions(questions,currntquestions,nextquestions,previousquestions);
        }
        displayquestions = (questions = this.state.questions,currntquestions,nextquestions,previousquestions) =>{
            let{currentquestionindex}=this.state;
            if (! isEmpty(this.state.questions)) {
                      questions = this.state.questions;
                      currntquestions=questions[currentquestionindex];
                      nextquestions=questions[currentquestionindex + 1];
                      previousquestions=questions[currentquestionindex - 1];
                      const answer = currntquestions.answer;
                      
                      this.setstate({
                              currntquestions,
                              nextquestions,
                              previousquestions,
                              answer
                         });     
            
                        }          
        };

   
        render() {
            const{currntquestions}=this.state;
        return (
            <div>
             <Fragment>
                  <Helmet><title>quiz page</title></Helmet>
                  <div className='question'>
                      <h2>Quiz mode</h2>
                      <div className="lifeline">
                          <p>
                              <span>fifty-fifty</span>
                          </p>
                          <p>
                             <span>hint</span>
                          </p>
                      </div>
                      <div className="timer">
                          <p>
                              <span className='left' style={{float:'left'}}>1 of 15</span>
                           <span className="right">  2:10 <span>clock</span></span>
                          </p>
                      </div>
                      <h1>{currntquestions.questions}</h1>
                       <div className='options'>
                           <p className='opt'>{currntquestions.optionA}</p>
                           <p className='opt'>{currntquestions.optionB}</p>
                          
                       </div>
                       <div className='options'>
                           <p className='opt'>{currntquestions.optionC}</p>
                           <p className='opt'>{currntquestions.optionD}</p>
                           
                       </div>
                       <div className='buttom'>
                           <button>Previos</button>
                           <button>next</button>
                           <button>Quit</button>
                       </div>
                  </div>
             </Fragment>
            </div>
        )
    }
}

export default Play
