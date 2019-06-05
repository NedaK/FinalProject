import React from 'react';
import Table from '../Table'
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
//import Scrollspy from 'react-scrollspy'
 

function Body(props){
    return(
        

        <div className="container d-flex h-100"> 
             <div className="row h-100 justify-content-center align-items-center w-100">
            <div className="col-8 mx-auto">
            
            <main role="main" className="inner cover content">
            <h1 className="cover-heading">HE SAID<i className="far fa-smile-wink"></i>SHE SAID</h1>
            <p className="lead">Ever have a dumb argument with a friend, co-worker, or significant other that you need to put to a vote? Then this is the app for you....welcome to He Said/She Said.  Post your arguments,
            and let the community help decide who gets the glory of saying "I told you so!"</p>


            {/* <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current"> */}
                {/* <li><a href="#section-1">section 1</a></li> */}
    
  
            <button type="submit" className="btn btn-success" 
                    onClick={props.showClosedPolls}>View Completed Polls</button>

                    {/* </Scrollspy> */}
            </main>

            <div className="closedPolls h-100" id="section-1">
                
              </div>
                
            
        </div>
    </div>
    </div>

 

    )

};

export default Body;
