import React, { Component } from 'react';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const students = [
  {id: '12', name: 'Janekit ', score: 23},
  {id: '18', name: 'Juai', score: 27},
  {id: '20', name: 'JJ', score: 22}
]

const Home = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/students">Students</Link></li>
        </ul>
        <Route path="/students" component={Students}/>
      </div>
      
    </Router>
)
const Students = () => (
  <div>
    {
      _.map(students, student => <StudentLink {...student} key={student.id}/>)
    }
    <Route path="/students/:id" component={StudentContainer}/>
  </div>
)
const StudentContainer = ({match}) => {
  let s = _.find(students, ['id', match.params.id])
  return (
    <StudentLine {...s} key={s.id}/>
  )
}
const StudentLink = ({id, name}) => (
  <div><Link to={`/students/${id}`}>{name}</Link></div>
)
const StudentLine = ({id, name, score}) => (
  <div>{id} {name} = {score}</div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/students" component={Students}/> 
        </div>       
      </Router>
    );
  }
}

export default App;
