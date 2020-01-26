import React from 'react';
import './App.css';
import CourseArea from './CourseArea';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: {},
      filteredCourses: {},
      takenCourses: {},
      
    };
  }

  componentDidMount() {
    fetch('https://mysqlcs639.cs.wisc.edu:5000/classes').then(
      res => res.json()
    ).then(data => this.setState({ allCourses: data, filteredCourses: data }));
    fetch('https://mysqlcs639.cs.wisc.edu/students/5022025924/classes/completed').then(
      res => res.json()
    ).then(data => this.setState({ takenCourses: data }))
  }
    
  render() {
    return (
      
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
            <div style={{ marginLeft: '20vw' }}> 
              <CourseArea data={this.state.filteredCourses} setCart={(data) => this.setCart(data)}  />
            </div>
          <div style={{ marginLeft: '20vw' }}>
        
            </div>
      </>
    )
  }
}

export default App;