import React from 'react';
import './App.css';
import CourseInfo from './CourseInfo';


class CourseArea extends React.Component {
  getCourses() {
    let courses = [];
// loop through courses added to cart
    for(const course of Object.entries(this.props.data)) {
      courses.push (
        <CourseInfo key={course[0]} data={course[1]} setCart = {(data) => this.props.setCart(data)}/>
      )
    }
    return courses;
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        {this.getCourses()}
      </div>
    )
  }
}

export default CourseArea;