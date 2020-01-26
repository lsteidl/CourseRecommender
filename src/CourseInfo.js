import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Course extends React.Component {
  render() {
    return (
      <Card style={{width: '33%', marginTop: '5px', marginBottom: '5px'}}>
        <Card.Body >

          <Card.Title>{this.props.data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.data.number} - {this.getCredits()}</Card.Subtitle>
          <Button variant = "primary" onClick={() => this.props.setCart(this.props.data)} style = {{margin:"10px"}}> All </Button>

         
        </Card.Body>
      </Card>
    )
  }
  
  getCredits() {
    if(this.props.data.credits === 1)
      return '1 credit';
    else
      return this.props.data.credits + ' credits';
  }
  cleanString(str){
    str = str.substring(1,(str.length-1));
        let days =  str.split(',');
    let times = [];
    for(let i = 0; i < days.length; i++){
     // days[i] = days[i].charAt(0).toUpperCase() + days[i].slice(1);
      times.push(days[i].split('"'));
    }
    let ret = [];
    //console.log("TIMES: " + times[0]);
    for(let i = 0; i < days.length; i++){
    // times[i] = times[i].charAt(0).toUpperCase() + days[i].slice(1);
      ret.push(
        <p> {times[i]} </p>//{times[i+2]} </p>
      )
      }
    return ret;

  }

}

export default Course;
