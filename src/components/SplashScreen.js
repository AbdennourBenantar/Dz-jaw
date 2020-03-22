import '../App.css';
import React from 'react';
import Typical from 'react-typical';
class SplashScreen extends React.Component{
 
    componentDidMount(){
        var apiCallBack=this.props.apiCallBack;
        setTimeout(apiCallBack,6000);
    }
    render(){
        return (
        <div className="splash-background">
            <img src={require('../assets/logo.png')} className="logo" alt="Logo"/>
            <Typical className="welcome" steps={['Bienvenue sur',2000,'DzJaw ',2000]} wrapper="h1" loop={Infinity}/>
        </div>
        );
    }
}
export default SplashScreen;