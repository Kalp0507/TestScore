"use client"

import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
`;

const Modal = ({ isOpen, onClose, setData, data }) => {
    const [rank, setRank] = useState('');
    const [percentile, setPercentile] = useState('');
    const [currentScore, setCurrentScore] = useState('');
    const [errors, setErrors] = useState({
        rank: '',
        percentile: '',
        score: '',
    });


    const validateRank = (value) => {
        if (value === '') return 'Rank is required';
        else if (!/^\d+$/.test(value)) return 'Rank must be a number';
        return '';
    };

    const validatePercentile = (value) => {
        if (value === '') return 'Percentile is required';
        else if (!/^\d+$/.test(value)) return 'Percentile must be a number';
        else if (value < 0 || value > 100) return 'Percentile must be between 0 and 100';
        return '';
    };

    const validateScore = (value) => {
        if (value === '') return 'Score is required';
        else if (!/^\d+$/.test(value)) return 'Score must be a number';
        else if (value < 0 || value > 15) return 'Score must be between 0 and 15';
        return '';
    };

    const handleRankChange = (e) => {
        const value = e.target.value;
        setRank(value);
        setErrors((prev) => ({ ...prev, rank: validateRank(value) }));
    };

    const handlePercentileChange = (e) => {
        const value = e.target.value;
        setPercentile(value);
        setErrors((prev) => ({ ...prev, percentile: validatePercentile(value) }));
    };

    const handleScoreChange = (e) => {
        const value = e.target.value;
        setCurrentScore(value);
        setErrors((prev) => ({ ...prev, score: validateScore(value) }));
    };



    const handleClose = () => {
        onClose();
    };

    const handleSave = () => {
        const currData = {
            rank: rank,
            percentile: percentile,
            correctAns: currentScore
        }

        const rankError = validateRank(currData.rank);
        const percentileError = validatePercentile(currData.percentile);
        const scoreError = validateScore(currData.correctAns);

        setErrors({ rank: rankError, percentile: percentileError, score: scoreError });

        setData(currData);
        setErrors({ rank: rankError, percentile: percentileError, score: scoreError });
        console.log(data)
        handleClose();
    };

    return (
        isOpen && (
            <ModalOverlay>
                <ModalContainer className='w-fit rounded-lg'>
                    <div className='flex justify-between items-center mb-2 p-2'>
                        <p className='text-lg font-bold'>Update Scores</p>
                        <img src="/assets/HTML-logo.png" alt='HTML-test' className='w-10 h-10' />
                    </div>

                    <div className='flex flex-col justify-start gap-4 sm:gap-2'>
                        <div className='flex flex-col gap-2 sm:gap-4 sm:flex-row w-full sm:items-center justify-between'>
                            <div className='flex items-center gap-2 sm:gap-4'>
                                <div className='bg-blue-900 text-white rounded-full w-fit h-fit py-0.5 px-2 text-sm'>1</div>
                                <label htmlFor="rank">Update your <strong>Rank</strong></label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="rank"
                                    placeholder='Rank'
                                    value={rank}
                                    required
                                    onChange={handleRankChange}
                                    className="block p-2 border border-blue-500 rounded-md w-full sm:w-36 outline-none"
                                />
                                {errors.rank && <p className="text-red-500 text-xs mt-1">{errors.rank}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 sm:gap-4 sm:flex-row w-full sm:items-center justify-between'>
                            <div className='flex items-center gap-2 sm:gap-4'>
                                <div className='bg-blue-900 text-white rounded-full w-fit h-fit py-0.5 px-2 text-sm'>2</div>
                                <label htmlFor="rank">Update your <strong>Percentile</strong></label>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="percentile"
                                    placeholder="Percentile"
                                    required
                                    value={percentile}
                                    onChange={handlePercentileChange}
                                    className="block p-2 border border-blue-500 rounded-md w-full sm:w-36 outline-none"
                                />
                                {errors.percentile && <p className="text-red-500 text-xs mt-1">{errors.percentile}</p>}
                            </div>
                        </div>

                        <div className=' flex flex-col gap-2 sm:gap-4 sm:flex-row w-full sm:items-center justify-between'>
                            <div className='flex items-center gap-2 sm:gap-4'>
                                <div className='bg-blue-900 text-white rounded-full w-fit h-fit py-0.5 px-2 text-sm'>3</div>
                                <label htmlFor="rank">Update your <strong>Current Score (out of 15)</strong></label>
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="currentScore"
                                    placeholder="Current Score"
                                    value={currentScore}
                                    required
                                    onChange={handleScoreChange}
                                    className="block p-2 border border-blue-500 rounded-md w-full sm:w-36 outline-none"
                                />
                                {errors.score && <p className="text-red-500 text-xs mt-1">{errors.score}</p>}
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-end gap-3 mt-4'>
                        <button
                            onClick={handleClose}
                            className='py-2 px-4 border border-blue-900 rounded-lg'
                        >
                            cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className='py-2 px-4 bg-blue-900 text-white rounded-lg hover:bg-blue-700 border border-blue-950'
                        >
                            save ➝
                        </button>
                    </div>
                </ModalContainer>
            </ModalOverlay>
        )
    );
};

export default Modal;