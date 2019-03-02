import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Socialcard extends Component {
  render() {
    return (
      <div className="ui three column centered grid">   
      <div className="column">           
      <div class="ui horizontal divider">
      </div> 
      <PostComponent/>
      <div class="ui horizontal divider">
      </div> 
      </div>    
      </div>
  
    );      
  }
}

class PostComponent extends Component {
  state = {  }

  profileimageurl = () => {
    
  }
  render() { 
    return (              
      <div className="ui feed">                
          <div class="event">
            <div class="label">
            <img src="/images/avatars/elliot.jpg"></img>
            </div>           
            <div class="content">
              <div class="summary">              
                <a class="user" >
                  The practical dev
                </a>
                <div className="meta">
                @thepracticaldev
                </div>
                <div class="date">
                  Sep. 10
                </div>
                <i className="ui left floated angle down icon "/>
              </div>
              <div className="content ">
                <div className="header">
                  <strong>Learning react? Start small </strong>
                </div>
                <p>"Get the best news in your e-mail every day."</p>
                <div className="ui large image">
                <img src="/images/avatars/elliot.jpg"></img>                
              </div>
              <div class="ui hidden divider">
              </div>
              <a>
              <i className="black user icon"></i>
                22 Friends
              </a> 
              <div class="ui vertical hidden divider">
              </div>
              <a className="like">
                <i className="red like icon"></i> 4 Likes
              </a> 
              </div>       
            </div>            
            </div>   
            <div className="extra content">
             {/* <div className="ui spaced grid"> */}
             
             {/* </div> */}
            </div>             
        </div>
     );
  }
}

class ProfileImage extends Component {
  state = {  }
  render() { 
    return ( 
      <img className="ui mini right circular spaced image" src="/images/avatars/daniel.jpg"/>
     );
  }
}
 
class TitleComponent extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="ui centered grid">
      <div className="row">
      <div className="ui fluid card">      
        <div className="content ">
          <div className="header">
            <strong>have you heard about our mailing list?</strong>@{}
          </div>
          <p>Get the best news in your e-mail every day.</p>
        </div>
    </div>
      </div>
    </div>
     );
  }
}
 

 


export default Socialcard;
