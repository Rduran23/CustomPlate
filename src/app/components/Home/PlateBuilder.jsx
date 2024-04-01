"use client";
import Banner from "./Banner";
import Car from "./Car";
import { useEffect, useState } from "react";
import Japanese from "../Plates/Japanese";
import American from "../Plates/American";
import { useSearchParams } from 'next/navigation'



function PlateBuilder() {

    const searchParams = useSearchParams()

    
    // http://localhost:3000/?plateType=japanese&textOne=%E9%95%B7%E9%87%8E&textTwo=123&textThree=&textFour=RAFA&bgColor=ff0000&textColor=FFFFFF
    const plateTypeURL = searchParams.get('plateType')
    const TextOneURL = searchParams.get('textOne')
    const TextTwoURL = searchParams.get('textTwo')
    const TextThreeURL = searchParams.get('textThree')
    const TextFourURL = searchParams.get('textFour')

    const bgColorURL = searchParams.get('bgColor')
    const textColorURL = searchParams.get('textColor')


    const [plate, setPlate] = useState('')
    const [plateComponent, setPlateComponent] = useState('japanese')
    const [plateSettings, setPlateSettings] = useState({
        colorPlate: '#f0f0f0',
        colorText: '#000000'
    })


    const [plateText, setPlateText] = useState({
        textOne: TextOneURL || '',
        textTwo: TextTwoURL || '',
        textThree: TextThreeURL || '',
        textFour: TextFourURL || '',
        bgColor: bgColorURL ? `#${bgColorURL}` : '#f0f0f0',
        textColor: textColorURL ? `#${textColorURL}` : '#000000'
    })

    useEffect(() => {
        if (plateTypeURL === 'japanese' || plateTypeURL === 'american') {
            setPlateComponent(plateTypeURL)
        }
    }, [])

    return (
        <main className="w-[1200px] max-w-full flex flex-col mx-auto">
            {/* Car picture and info */}
            <section className='w-full max-w-full border-b-[1px] border-gray-200 py-4'>

                <article className="flex flex-row justify-evenly items-center  px-4 flex-wrap">
                    <Car plateText={plateText} />
                    <Banner />
                </article>
            </section>

            <section className='w-full max-w-full border-b-[1px] border-gray-200 py-4'>
                <div className="flex flex-col ">
                    <div className="flex flex-row flex-wrap">
                        <label htmlFor="plate-type" className="p-2">Tipo de matrícula</label>
                        <select name="plate-type" className="p-2" value={plateComponent} onChange={
                            (e) => {
                                setPlateComponent(e.target.value)
                                switch (e.target.value) {
                                    case 'japanese':
                                        setPlateComponent('japanese')
                                        break
                                    case 'american':
                                        setPlateComponent('american')
                                        break
                                    default:
                                        setPlateComponent('japanese')
                                }
                            }
                        }>
                            <option value="japanese">Japonesa</option>
                            <option value="american">Americana</option>

                        </select>
                    </div>

                </div>

                <article>
                    {
                        plateComponent === 'japanese' ?
                            <Japanese
                                plate={plate}
                                setPlate={setPlate}
                                plateText={plateText}
                                setPlateText={setPlateText}
                                plateSettings={plateSettings}
                                setPlateSettings={setPlateSettings}
                            /> :
                            <American
                                plate={plate}
                                setPlate={setPlate}
                                plateText={plateText}
                                setPlateText={setPlateText}
                                plateSettings={plateSettings}
                                setPlateSettings={setPlateSettings}
                            />
                    }
                </article>
            </section>
        </main>
    )
}

export default PlateBuilder