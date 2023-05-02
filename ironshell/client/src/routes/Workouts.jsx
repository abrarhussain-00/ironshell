import React from 'react'
import Titttle from '../components/Titttle'
import { NavLink, Outlet } from 'react-router-dom'

export default function Workouts() {
  return (
    <div>
        <Titttle text={"Workout plan"} color={'black'}/>
        <nav className="d-flex mx-3 my-5 justify-content-between fw-bold text-dark">
            <NavLink to='/workout/monday' className={({isActive})=>(isActive ? "day-active":"day")}>
                M
            </NavLink>
            <NavLink to='/workout/tuesday' className={({isActive})=>(isActive ? "day-active":"day")}>
                T
            </NavLink>
            <NavLink to='/workout/wednesday' className={({isActive})=>(isActive ? "day-active":"day")}>
                W
            </NavLink>
            <NavLink to='/workout/thursday' className={({isActive})=>(isActive ? "day-active":"day")}>
                Th
            </NavLink>
            <NavLink to='/workout/friday' className={({isActive})=>(isActive ? "day-active":"day")}>
                F
            </NavLink>
            <NavLink to='/workout/saturday' className={({isActive})=>(isActive ? "day-active":"day")}>
                S
            </NavLink>
            <NavLink to='/workout/sunday' className={({isActive})=>(isActive ? "day-active":"day")}>
                S
            </NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
