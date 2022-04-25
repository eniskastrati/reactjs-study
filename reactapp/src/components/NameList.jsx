import React from 'react'

function NameList() {
    const persons = [
      {
        id: 0,
        name: 'Bruce',
        age: 25,
        skill: 'Reactjs'
      },
      {
        id: 1,
        name: 'Keit',
        age: 32,
        skill: 'Angular'
      },
      {
        id: 2,
        name: 'Angeline',
        age: 20,
        skill: 'Golang'
      },
      {
        id: 3,
        name: 'Tobi',
        age: 40,
        skill: 'Vue'
      },
    ]
    const personsList = persons.map((person) => <h1 id={person.id}>I am {person.name}. I am {person.age} years old. <br /> My Skills are : {person.skill} <hr /></h1>);
  return (<div>{personsList}</div>)
}

export default NameList