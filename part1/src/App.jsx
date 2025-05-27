const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
    {
      name: 'Redux',
      exercises: 11
    }
  ]
}

  return (
    <div>
      <Header course = {course}> </Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  )
}

const Header = (props) => {
  console.log(props.course.name)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
return (
    <div>
       {props.course.parts.map((part, index) => (
          <Part key={index} name={part.name} exercises={part.exercises} />
       ))}
    </div>
   )
 }

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}


export default App