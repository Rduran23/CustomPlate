import React from 'react'

function Car({plateText = {} }) {
    const { textOne, textTwo, textThree, textFour } = plateText

    return (
        <div className='w-[400px] h-[320px] relative max-w-[400px] max-h-[320px] rounded-sm'>
            <img src='/supra.webp' alt='Toyota Supra' width={591} height={422} className='object-cover w-full h-full' />
            <div className={
                    `overflow-hidden top-[143px] left-[46%] flex flex-col border-[1px] gap-0 py-0 border-gray-800 w-[50px] h-[32px] pointer-events-none items-center justify-center place-items-center absolute`
                }
                    style={{
                        backgroundColor: plateText.bgColor || '#f0f0f0',
                        color: plateText.textColor || '#000000',
                    }}
                // Border from inside to simulate plate border using box-shadow


                >
                    <div className='w-full flex flex-row items-center justify-center  h-[18px] -mt-[2px]'>
                        <span>
                            <span className='text-[8px]'>{textOne}</span> <span className='text-[8px]'>{textTwo}</span>
                        </span>
                    </div>
                    <div className='w-full flex flex-row items-center justify-center h-[18px] -mt-[2px] mb-[6px]'>
                        <span>
                            <span className='text-[8px]'>{textThree}</span> <span className='text-[8px]'>{textFour.toUpperCase()}</span>
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default Car