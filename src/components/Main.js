require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rsvps: 0,
      hidden: "hidden",
      pizza: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      rsvps: event.target.rsvps.value,
      hidden: "",
      pizza: "pizzaaaa"
    })
  }

  render() {
    let attendees = this.state.rsvps > 10 ? (.8*(this.state.rsvps-10))+10 : this.state.rsvps;
    let pizzas = this.state.rsvps > 10 ?  (this.state.rsvps/(20/3))+1.5 : this.state.rsvps/(10/3);

    return (
      <div className={"index " + this.state.pizza}>
        <h1>Meetup Pizza Calculator</h1>
        <p>Same ol’ story? You bought too many pizzas for your meetup? Me too. To tackle the problem, I tracked actual attendance and consumptions records across 5 meetup groups for about a year, then turned the two observed trend lines into a reusable equation.</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="rsvps">Number of RSVPs:</label><br/><br/>
          <input type="text" name="rsvps" /><br/><br/>
          <input type="submit" className="pizza" value="Calculate Pizzas" />
        </form>
        <br/>
        <div className={this.state.hidden}>
          <hr/>
          <p><strong>Pizzas to get: {Math.floor(pizzas)} ({Math.round(pizzas * 10 )/10})</strong></p>
          <p>For {this.state.rsvps} RSVPs, we'll likely get an actual attendance of {Math.round((attendees / this.state.rsvps) * 10000 )/100}% at {attendees} attendees. Each attendee will consume an average of {Math.round((pizzas / attendees) * 100 )/100} pizzas at this group size.</p>
        </div>
      </div>
    );
  }
}

export default AppComponent;
