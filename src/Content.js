import React from 'react'

const Content = () => {
    const handleNameChange =() =>{
        const name = ['bob', 'shehab', 'boushra'];
        const int = Math.floor(Math.random()*3);
        return name[int];
      }
  return (
    <main>
        <button onClick={ console.log(handleNameChange())}>Hello </button>
        

    </main>
  )
  
}

export default Content