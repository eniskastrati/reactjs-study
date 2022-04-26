import React from 'react'

function Person({person}) {
    console.log(person.id)
  return (
    <h1>
        I am {person.name}. I am {person.age} years old.
        <br /> My Skills are : {person.skill} <br /> <br /> ID : {person.id} <hr />
     </h1>
  )
}

export default Person