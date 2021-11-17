import React,{Component} from 'react'
import GoogleLogin from 'react-google-login'
class App extends Component{
    responseGoogle=(response)=>{
        console.log(response)
        console.log(response.profileObj)
    }
    render()
    {
     return(
         <div>
             <GoogleLogin
             clientId="71511250992-pjigv0okghp3iomg7ijki74ca7goiats.apps.googleusercontent.com"
             buttonText="Login with your google account"
             onSuccess={this.responseGoogle}
             onFailure={this.responseGoogle}
             cookiePolicy={'single_host_origin'}
             />
         </div>
     )
    }
}
export default App