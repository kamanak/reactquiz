// @ts-nocheck
import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import options from '../../assets/img/options.PNG';
import answer from '../../assets/img/answer.png';
import fiftyFifty   from '../../assets/img/fiftyFifty.PNG';
import hints  from '../../assets/img/hints.PNG';






const Quizinstruction = () => (
    <Fragment>
        <Helmet><title>Quiz instruction </title></Helmet>
        <div className="instruction">
            <h1>How to play the Game</h1>
            <p>
                Ensure you read this guide from start to finish.
                <ul className="brower-default" id="mainlist" >
                    <li>This game duration is 15 minutes and ends as soon as your time elapse.</li>
                    <li>Each game cotains of 15 questions. </li>
                    <li>Every question contains 4 option 
                    <img src={options} alt="qiz app optims example "/></li>
                    <li> Select the option which best answers the question by clicking instruction
                        <img src={answer} alt="Quiz app answer example "></img>
                        <ul id="sublist"></ul>
                        <li>2 50-50 chances</li>
                        <li>5 HInts</li>

                    </li>
                   <li> 
                       Selecting a 50-50 lifeline by clicking icon
                       <span className="mdi mdi-set-center mdi-24px">hint</span>
                         will remove 2 wrong answers leaving the correct answer and one wrong answer
                         <img src={fiftyFifty} alt="Quiz app fiftyfifty exapmple"></img>
                       </li> 
                    <li>
                        Using a hint by clicking the icon
                        <span className="mdi mdi-lightbulb mdi-24px lifeline-icon"></span>
                        will remove one wrong answer leaving two worng answers and one correct anser.You can use as many
                         <img src={hints} alt="Quiz app hint example"></img>
                    </li>
                    <li>Fell free to quit the game any time . In this case your score will be reveled afterwards</li>
                    <li>The timer starts as soon as game loads</li>
                 
                       
                    
                </ul>
                <div>
                    <span className="left"><Link to="/">No take me back</Link></span>
                    <span className="right"><Link to="/play/quiz">Okey lets do this</Link></span>
                </div>
            </p>

        </div>

    </Fragment>
    
)
export default Quizinstruction