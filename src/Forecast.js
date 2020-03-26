import React from 'react';
class Forecast extends React.Component
{
    render(){
        var url=
        "https://forecast.io/embed/#lat=" + this.props.latitude +
        "&lon=" + this.props.longitude +
        "&name=" + this.props.name  +"&units=" + this.props.unit+
        "&color=" + this.props.color  +
        "&font=" + this.props.font  ;
        
        return <iframe title="f" type="text/html" height='245' width='100%' frameBorder='0' src={url} />
    }
}
export default Forecast;