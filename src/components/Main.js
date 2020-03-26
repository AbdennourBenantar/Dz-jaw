import React from 'react';
import SplashScreen from './SplashScreen';
import HomePage from './HomePage';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            renderSplashScreen:true,
            latitude:0,
            longitude:0,
            name:'your current positon',
        };
        this.apiCallBack=this.apiCallBack.bind(this);
        this.getMyLocation=this.getMyLocation.bind(this);
    }
    apiCallBack(){
        this.setState({renderSplashScreen:false});
    }
    getMyLocation(){
        var that=this;
        navigator.permissions.query({
            name:'geolocation'
        }).then(function(result){
            if(result.state ==='granted'){
                navigator.geolocation.getCurrentPosition(function(position){
                    that.updateState(position.coords.latitude,position.coords.longitude,true);
                })
            }else if (result.state ==='prompt'){
                navigator.geolocation.getCurrentPosition(function(position){
                    that.updateState(position.coords.latitude,position.coords.longitude,false);
                })     
            }else if(result.state ==='denied'){
                alert(result.state);
            }
            result.onchange=event=>{
                if(event.target.state==='granted'){
                    navigator.geolocation.getCurrentPosition(function(position){
                        that.updateState(position.coords.latitude,position.coords.longitude,false);
                    }) 
                }
            }
                
        }
        
        );

    }
    updateState(lat,long,bool){
        if (bool){
        this.setState({latitude:lat,longitude:long})}
    }
    componentDidMount(){
        this.getMyLocation();
    }
    render(){
        
        if(this.state.renderSplashScreen)
            return <SplashScreen apiCallBack={this.apiCallBack.bind(this)}/>;
        else
            return <HomePage latitude={this.state.latitude} longitude={this.state.longitude} name={this.state.name}/>
    }
}
export default Main;