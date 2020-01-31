// @ts-nocheck
import React, { Component, Fragment } from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';


const Home =  () => {
    return(
        <Fragment>
            <Helmet> <title>Quiz app-home</title> </Helmet>
            <div id="home">
             <section>
                
                 <h1>Quiz app</h1>
                 <span className="mdi mdi-cube-outline mdi-48px"></span>
               
                 <div className="play-button">
                    
                     <ul>
                         <li>
                            <Link className="play" to="/play/instructions">play</Link>
                         </li>
                     </ul>

                 </div>
                 <div className="auth-container">
                      <Link className="but"  id="login-but" to='/login' >login</Link>
                      <Link className="but"  id="sign-but" to='/register'>sign in</Link>
                 </div>
                 
                 </section> 
            
             </div>
        </Fragment>
        
       
    )
}
export default Home