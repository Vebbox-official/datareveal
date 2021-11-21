import React from 'react'
import './css/teammates.css'
import {Link,Router,Switch,Route} from 'react-router-dom'
import Maria from './teammate/Maria'
function Teammates(props) {
    return (
        <>
        <div className="teammateDiv text-center mb-4">
          <img src={props.person} alt="teammate" height="58%" width="100%"/>
           <div className="teamDetailes mt-3 p-3">
               <h5>{props.name}</h5>
                <h6>{props.role}</h6>
               <p>{props.post}</p> 
               <i class="fab fa-linkedin-in"></i> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
               {/* <span> READ BIO </span> */}
               <Router>
            <Link to="/teammate/Maria" class="btn btn-primary">read bio</Link>

                <Switch>
                <Route path="/teammate/Maria">
                     <Maria/>
                 </Route>
                </Switch>
            </Router>
           </div>
        </div>
       
        </>
    )
}

export default Teammates
