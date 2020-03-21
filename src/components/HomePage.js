import React from 'react';
import Forecast from 'react-forecast';
class HomePage extends React.Component{
    render(){
        
        return <div className="weather-card">
            <Forecast latitude={34.05} longtitude={118.25} name='Los Angeles'/>
        </div>
    }
}
export default HomePage;