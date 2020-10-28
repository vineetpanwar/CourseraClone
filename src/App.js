
import {Component} from 'react';
import TopNavBar from './components/Navbar/NavBar.component';
import CourseBody from './components/CourseBody/CourseBody.component';
import './App.css';

class App extends  Component {
  componentDidMount() {
   
  }

  render() {return (
    <div className="App">
      <TopNavBar />
      <CourseBody />
    </div>
  )
  }
}

export default App;
