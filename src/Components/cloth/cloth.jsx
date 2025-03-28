import React from 'react'
import './cloth.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'
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
                <p>Male Wears</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={programicon2} alt="" />
                <p>Traditonal Wears</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={programicon3} alt="" />
                <p>Stylish Wears</p>
            </div>
        </div>
      
    </div>
  )
}

export default Program
