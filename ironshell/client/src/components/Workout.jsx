import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import Dropdown from './Dropdown'

export default function Workout(onClick, workout) {
  return (
    <div className='card m-3 p-3 shadown'>
        <div className="row align-items-center">
            <div className="col-6">
                <Dropdown/>
            </div>
            <div className="col-5">
                <div className="d-flex just-content-center">
                    <h3>
                        <input
                            type='number'
                            style={{
                                border:'none',
                                borderBottom:'1px solid lightGray',
                                maxWidth:60,
                                textAlign:'center',
                                outline:'none',
                                margin:'none',
                                marginBottom:'1.5rem'
                            }}
                        />
                    </h3>
                    <span>
                        <select style={{border:'none'}}>
                            <option value="minutes">minutes</option>
                            <option value="miles">miles</option>
                        </select>
                    </span>
                    <div className='badge rounded-pill bg-black text-black px-3 fs-6'>
                        <input
                            type='time'
                            style={{
                                width:'130px',
                                border:'none',
                                outline:'none',
                                margin:'none',
                                color:'black',
                                fontWeight: 500,
                                // backgroundColor:'var(--red)'
                            }}
                            
                        />
                    </div>
                </div>
                <button
                    className='btn col-1 text-danger fw-bold fs-4'
                    onClick={()=>onClick(workout.id)}
                >
                    <AiFillDelete/>
                </button>
            </div>
        </div>
    </div>
  )
}
