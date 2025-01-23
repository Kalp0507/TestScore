import React from 'react'
import { TfiMedallAlt } from "react-icons/tfi";
import { CiFileOn } from "react-icons/ci";
import { HiMiniChartBar } from "react-icons/hi2";

const Sidebar = () => {
    const items = [
        {
            title: 'Dashboard',
            icon: <HiMiniChartBar />,
            isSelected: false
        },
        {
            title: 'Skill Test',
            icon: <TfiMedallAlt />,
            isSelected: true
        },
        {
            title: 'Internship',
            icon: <CiFileOn />,
            isSelected: false
        }
    ]
    return (
        <div className='border-r flex justify-around lg:flex-col lg:justify-start border-gray-300 h-full pr-4'>
            {
                items.map((item)=>(
                    <div key={item.title}>
                    <div className={`p-4 flex items-center gap-3 ${item.isSelected ? 'bg-blue-100 text-blue-700 rounded-b-full lg:rounded-bl-none lg:rounded-r-full' :''}`}>
                        <p className='text-2xl'>{item.icon}</p>
                        <p className='text-lg hidden lg:block'>{item.title}</p>
                    </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar