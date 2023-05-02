import React, {useState} from 'react'
import Select from 'react-select';
import {
    GiConverseShoe,
    GiBodyBalance,
    GiCycling,
    GiPunchingBag
} from "react-icons/gi"
import {TbSwimming} from "react-icons/tb";

export default function Dropdown() {
    const [selectedOption, setSelectedOption] = useState(null)
    const handleChange=(e)=>{
        setSelectedOption(e)
    }

    const options=[
        {
            text:'Running',
            value:'1',
            icon:<GiConverseShoe className="text-red"/>,
        }, 
        {
            text:'Swimming',
            value:'2',
            icon:<TbSwimming className="text-red"/>,
        }, 
        {
            text:'Cycling',
            value:'3',
            icon:<GiCycling className="text-red"/>,
        }, 
        {
            text:'Body Weight',
            value:'4',
            icon:<GiBodyBalance className="text-red"/>,
        }, 
        {
            text:'Bag Workout',
            value:'5',
            icon:<GiPunchingBag className="text-red"/>,
        }, 
    ]
  return (
    <div>
        {selectedOption && (<div className='display-3'>{selectedOption.icon}</div>)}
        <Select 
            placeholder='Select Options' 
            value={selectedOption} 
            options={options} 
            onChange={handleChange}
            getOptionLabel={(e)=>(
                <div
                    style={{display:'flex', alignItems:'center', border:'none'}}
                >
                    {e.icon}
                    <span style={{marginLeft:5}}>{e.text}</span>

                </div>
            )}
        />
    </div>
  )
}
