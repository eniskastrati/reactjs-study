import React from 'react'

function NameList() {
    const nameArray = ['Diana', 'Clarck', 'Bruce']
    const nameList = nameArray.map((name,idx) => <h1 id={idx}>{name}</h1>);
  return (<div>{nameList}</div>)
}

export default NameList