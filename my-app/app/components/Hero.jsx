"use client"

import React, { useState } from 'react'
import PercentileGraph from './Graph'
import QuestionAnalysis from './QueAnalysisChart'
import Modal from './UpdateModal'

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const initialData = {
        rank: 1,
        percentile: 90,
        correctAns: 12
    }
    const [data,setData] = useState(initialData)

    const syllabusData = [
        { title: 'HTML Tools, Forms, History', percentage: 80, color: 'bg-blue-500' },
        { title: 'Tags & References in HTML', percentage: 60, color: 'bg-orange-500' },
        { title: 'Tables & References in HTML', percentage: 24, color: 'bg-red-500' },
        { title: 'Tables & CSS Basics', percentage: 96, color: 'bg-green-500' },
    ];

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className='p-4'>
            <p className='text-lg mb-2'>Skill Test</p>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='col-span-3'>

                    <div className='border border-gray-300 rounded-lg px-3 py-4 flex flex-col gap-4 lg:flex-row items-center justify-between'>
                        <div className='flex items-center justify-center gap-3'>
                            <img src="/assets/HTML-logo.png" alt='HTML-test' className=' w-16 h-16' />
                            <div >
                                <p className='text-lg font-semibold'>Hyper Text Markup Language</p>
                                <p className='text-gray-700'>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                            </div>
                        </div>
                        <button className=' bg-blue-800 w-full lg:w-fit rounded-lg py-2 px-3 text-white text-sm font-semibold border-2 border-black'
                            onClick={handleOpenModal}
                        >Update</button>
                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} setData={setData} data={data}/>
                    </div>

                    <div className='border border-gray-300 rounded-lg px-3 py-4 mt-6'>
                        <p className='text-lg font-semibold mb-2'>Quick Statistic</p>
                        <div className='flex flex-col gap-4 lg:flex-row ld:items-center justify-around'>
                            <div className='flex items-center gap-3'>
                                <div className='rounded-full bg-gray-100 p-4 w-fit h-fit'>
                                    <p className='text-lg'>🏆</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold'>{data.rank}</p>
                                    <p className='text-sm text-gray-400'>YOUR RANK</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='rounded-full bg-gray-100 p-4 w-fit h-fit'>
                                    <p className='text-lg'>📋</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold'>{data.percentile}%</p>
                                    <p className='text-sm text-gray-400'>PERCENTILE</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='rounded-full bg-gray-100 p-4 w-fit h-fit'>
                                    <p className='text-lg'>✅</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold'>{data.correctAns} / 15</p>
                                    <p className='text-sm text-gray-400'>CORRECT ANSWERS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-lg px-3 py-4 mt-6'>
                        <p className='text-lg font-semibold'>Comparison Graph</p>
                        <div className='flex gap-6 mb-4'>
                            <div className='mt-2 '>
                                <p className='text-gray-700'><span className=" font-semibold">You scored {data.percentile}% percentile.</span>
                                    which is lower than the average percentile 72% of all who tool this assignment.</p>
                            </div>
                            <div className='rounded-full bg-gray-100 p-4 w-fit h-fit'>
                                <p className='text-lg'>📈</p>
                            </div>
                        </div>


                        <PercentileGraph dynamicScore={data.percentile} />
                    </div>
                </div>

                {/* Analysis */}
                <div className='col-span-2'>
                    <div className='border border-gray-300 rounded-lg py-4 px-5'>
                        <p className='text-lg font-semibold mb-4'>Syllabus Wise Analysis</p>
                        <div className='flex flex-col gap-6'>
                            {syllabusData.map((item, index) => (
                                <div key={index} className='flex flex-col gap-2'>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium">{item.title}</span>
                                        <span className="font-bold">{item.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className={`${item.color} h-2.5 rounded-full`}
                                            style={{ width: `${item.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-lg py-4 px-5 mt-6'>
                        <div className='flex items-center justify-between'>
                            <span className='text-lg font-semibold'>Question Analysis</span>
                            <span className='text-lg font-semibold text-blue-600'>{data.correctAns}/15</span>
                        </div>
                        <div className='flex gap-6 mt-4'>
                            <p className='text-gray-700'><span className=" font-semibold">You scored {data.correctAns} questoin correct out of 15.</span>
                                However, it still needs some improvements.</p>
                        </div>
                        <QuestionAnalysis correct={data.correctAns} total={15}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero