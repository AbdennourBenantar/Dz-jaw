import React from 'react';
class Forecast extends React.Component
{
    render(){
        var url=
        "https://forecast.io/embed/#lat=" + this.props.latitude +
        "&lon=" + this.props.longitude +
        "&name=" + this.props.name || '' +
        "&color=" + this.props.color || '' +
        "&font=" + this.props.font || '' +
        "&units=" + this.props.unit || '';
        return <iframe id='forecast_embed' type="text/html" height='245' width='100%' frameBorder='0' src={url} />
    }
}
export default Forecast;