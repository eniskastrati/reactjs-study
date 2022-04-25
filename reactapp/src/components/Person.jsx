import React from 'react'

function Person({person}) {
  return (
    <h1 key={person.id}>
        I am {person.name}. I am {person.age} years old.
        <br /> My Skills are : {person.skill} <hr />
     </h1>
  )
}

export default Person