// @ts-nocheck
import React, { Component, Fragment } from 'react'
import {Helmet} from 'react-helmet';
import questions from '../../questions.json';
import isEmpty from "../../utubs/is-empty";
export class Play extends Component {
    constructor(props) {
        super(props)
        this.state={
            questions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            usedFiftyFifty: false,
           
            
      

        };
        
        
      
             
        }
        componentDidMount () {
            const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
            this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
            
        }
    
        displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
            let { currentQuestionIndex } = this.state;   
            if (!isEmpty(this.state.questions)) {
                questions = this.state.questions;
                currentQuestion = questions[currentQuestionIndex];
                nextQuestion = questions[currentQuestionIndex + 1];
                previousQuestion = questions[currentQuestionIndex - 1];
                const answer = currentQuestion.answer;
                this.setState({
                    currentQuestion,
                    nextQuestion,
                    previousQuestion,
                    numberOfQuestions: questions.length,
                    answer,
                   
                
                });
            }     
        };
    
       
   
        render() {
            const{currentQuestion}=this.state;
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
                      <h1>{currentQuestion.question}</h1>
                       <div className='options'>
                           <p className='opt'>{currentQuestion.optionA}</p>
                           <p className='opt'>{currentQuestion.optionB}</p>
                          
                       </div>
                       <div className='options'>
                           <p className='opt'>{currentQuestion.optionC}</p>
                           <p className='opt'>{currentQuestion.optionD}</p>
                           
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
