import React from 'react';
import SplashScreen from './SplashScreen';
import HomePage from './HomePage';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            renderSplashScreen:true
        };
        this.apiCallBack=this.apiCallBack.bind(this);
    }
    apiCallBack(){
        this.setState({renderSplashScreen:false});
    }
    render(){
        let view;
        if(this.state.renderSplashScreen)
            return <SplashScreen apiCallBack={this.apiCallBack.bind(this)}/>;
        else
            return <HomePage/>
    }
}
export default Main;