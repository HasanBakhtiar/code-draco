import React from 'react'

const ModeBtn = ({color,setColor}) => {
    const switchColor =()=>{
            setColor(color === 'light' ? 'dark':'light')
    }
  return (
    <div>
        <button className='btn btn-dark' onClick={switchColor}>mode</button>
    </div>
  )
}

export default ModeBtn