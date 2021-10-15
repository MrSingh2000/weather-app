import React from 'react';

export default function ForcastCard(props) {
    var dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] ;
    var monthArray = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    var date = new Date(props.date);
    console.log(date.getDay())

    return (
        <div className="fcard">
            <div>
                <p><span>{dayArray[date.getDay()]} </span><span>{monthArray[date.getMonth()]} </span><span>{date.getDate()}</span></p>
                <div><img src={props.icon} alt="sunny" height="60px" width="60px" /></div>
                <div><span>{props.maxT}°C</span> / <span>{props.minT}°C</span></div>
            </div>
        </div>
    )
}