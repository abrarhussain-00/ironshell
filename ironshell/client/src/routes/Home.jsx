import React from 'react'
import Titttle from '../components/Titttle'
import homeImage from "../images/homeImage.png"
import Button from '../components/Button'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
    /*
    let h1Style = {
    color:'red',
    backgroundColor:'blue',
    }
    */
    const [workoutTime, setWorkOutTime] = useState(0);
    const [workoutDifficulty, setWorkOutDifficulty] = useState();

    useEffect(()=>{
        if(workoutTime===0) {
            setWorkOutDifficulty("Set work out difficulty");
        }
        if(workoutTime>0) {
            setWorkOutDifficulty("Easy");
        }
        if(workoutTime>60) {
            setWorkOutDifficulty("Medium");
        }
        if(workoutTime>90) {
            setWorkOutDifficulty("Hard");
        }
    })


    //test click function
    // function click(){
    //     console.log('click')
    // }

    return (
        <div>
        {/* <h1 className='text-purple' 
            //=========Styled Component Way=========
            // style= {h1Style}
            //=========Inline Styling Way=========
            // style={{color:'purple', backgroundColor:'#333'}}
            >
        Title
        </h1> */}
            {/* <Titttle text='Home' color='purple' /> */}
            <header className='text-start my-5 ms-4'>
                <h2 className='text-secondary fw-light' style={{textAlign:'center'}}>Welcome to</h2>
                <h1 className='display-1 fw-bold' style={{textAlign:'center'}}>Ironshell</h1>
            </header>
            <main className='card row text-left text-white m-4 p-4 bg-orange'>

                <div className="col text-start">
                    <h1 style={{color:'red', textAlign:'center'}}>Start your training now</h1>
                    <p style={{textAlign:'center'}}>and keep track. Remember, consistency is key  </p>
                    <div className="card bg-red d-flex flex-row justify-content-around p-3">
                        <div className="text-end">
                            <Button classes={'light btn-sm'} text={"-"} onClick={()=>setWorkOutTime(workoutTime-1)}/>
                            {/* Test button onclick function below */}
                            {/* <button className='btn btn-dark' onClick={()=>click()}>*</button> */}
                            <span style={{margin:".5rem" , color:'white'}}>{workoutTime} min</span>
                            <Button classes={'light btn-sm'} text={"+"} onClick={()=>setWorkOutTime(workoutTime+1)}/>
                        </div>
                        <h4 style={{color:'white'}}>{workoutDifficulty}</h4>
                    </div>
                </div>
                <div className='col text-start'>
                    <center><img src={homeImage} alt='home image' style={{maxWidth:'285px'}}/></center>
                </div>
                {/* <a href='/'>
                    <Button 
                        classes={"red rounded-pill my-4"} 
                        text={"Get started"}
                        icon={<BsFillPlayCircleFill className='fs-1 me-1' />}
                    />
                </a> */}
                <NavLink to='/workout'>
                    <Button 
                        classes={"red rounded-pill my-4"} 
                        text={"Get started"}
                        icon={<BsFillPlayCircleFill className='fs-1 me-1' />}
                    />
                </NavLink>
            </main>
        </div>
    )
}
