import React from 'react'
import Person from './Person';

function NameList() {
  const names = ['Bruce', 'Clarck', 'Diana']
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
    const nameList = names.map((name,idx) => <h2 key={idx} >{name}</h2>);
  return (<div>{nameList}</div>)
}

export default NameList