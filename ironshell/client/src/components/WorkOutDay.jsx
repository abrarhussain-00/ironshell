import React from 'react'

export default function WorkOutDay({text, color}) {
  return (
        <h4 className={`text-${color} card bg-red m-5 p-2`}>{text}</h4>
    )
}
