import React from 'react';
import Forecast from '../Forecast';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import image10 from '../assets/10.png';
import BackgroundSlider from 'react-background-slider';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latitude:this.props.latitude,
            longitude:this.props.longitude,
            location:this.props.name,
            units:'ca',
            font:'Helvetica',
            color:'Green'
        };
        
    }
    render(){ 
        
        return <div className="weather-card">
            <BackgroundSlider images={[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]} duration={4}/>
            <Forecast latitude={this.state.latitude} longitude={this.state.longitude} name={this.state.location} unit={this.state.units} font={this.state.font} color={this.state.color} />
            <h2>Made By <a href="https://github.com/AbdennourBenantar" target="_blank" rel="noopener noreferrer">Benantar Abdenour</a> with ❤️</h2>
        </div>;}
        
}
export default HomePage;