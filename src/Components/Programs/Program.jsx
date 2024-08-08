import React from 'react'
import './Program.css'
import program1 from '../../assets/program1.jpeg'
import program2 from '../../assets/program2.jpeg'
import program3 from '../../assets/program3.jpeg'
import programicon1 from '../../assets/programicon1.jpeg'
import programicon2 from '../../assets/programicon2.jpeg'
import programicon3 from '../../assets/programicon3.jpeg'

const Program = () => {
  return (
    <div className='program' id='program'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <img src={programicon1} alt="" />
                <p>Elementary School</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={programicon2} alt="" />
                <p>Middle School</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={programicon3} alt="" />
                <p> High School</p>
            </div>
        </div>
      
    </div>
  )
}

export default Program
