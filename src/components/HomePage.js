import React from 'react';
import Forecast from '../Forecast';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latitude:'',
            longitude:'',
            location:''
        };
        this.getMyLocation=this.getMyLocation.bind(this);
    }
    getMyLocation=()=>{
 
    }
    componentWillMount(){
        this.getMyLocation();
    }
    render(){ 
        return <div className="weather-card">
            <Forecast latitude={this.state.latitude} longitude={this.state.longitude} name={this.state.location}/>
        </div>
    }
}
export default HomePage;