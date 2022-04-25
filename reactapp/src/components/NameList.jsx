import React from 'react'
import uniqid from 'uniqid'
import Person from './Person';

function NameList() {
  const names = ['Bruce', 'Clarck', 'Diana']
    const persons = [
      {
        id: uniqid(),
        name: 'Bruce',
        age: 25,
        skill: 'Reactjs'
      },
      {
        id: uniqid(),
        name: 'Keit',
        age: 32,
        skill: 'Angular'
      },
      {
        id: uniqid(),
        name: 'Angeline',
        age: 20,
        skill: 'Golang'
      },
      {
        id: uniqid(),
        name: 'Tobi',
        age: 40,
        skill: 'Vue'
      },
      {
        id: uniqid(),
        name: 'James',
        age: 44,
        skill: 'Vue'
      }
    ]
    const nameList = names.map((name,idx) => <h2 key={idx} >{name}</h2>);
    const personsList = persons.map(person => <Person key={person.id} person={person} />);
  return (<div>{personsList}</div>)
}

export default NameList