import React from 'react'
import { useState, useEffect } from 'react'

export default function Japanese({ plateText, setPlateText}) {
    const [spoilerPrefecture, setSpoilerPrefecture] = useState(false)
    const [spoilerHiragana, setSpoilerHiragana] = useState(false)



    // TextOne = Top Left Text (Prefecture)
    // TextTwo = Top Right Text (Top Text)
    // TextThree = Bottom Left Text (Hiragana)
    // TextFour = Bottom Right Text (Custom Text)

    useEffect(() => {
        setPlateText({
            ...plateText,
        })
    }, [])

    

    const changeColors = (color, type) => {
        switch (type) {
            case 'plate':
                setPlateText({
                    ...plateText,
                    bgColor: color
                })
                break
            case 'text':
                setPlateText({
                    ...plateText,
                    textColor: color
                })
                break
            default:
                break
        }
    }

    const { textOne, textTwo, textThree, textFour } = plateText


    const symbols = [
        {id: 'smile', value: '😊', label: 'Sonrisa'},
        {id: 'heart', value: '❤️', label: 'Corazón'},
        {id: 'star', value: '⭐', label: 'Estrella'},
        {id: 'sun', value: '☀️', label: 'Sol'},
        {id: 'cloud', value: '☁️', label: 'Nube'},
        {id: 'umbrella', value: '☔', label: 'Paraguas'},
        {id: 'snowflake', value: '❄️', label: 'Copo de nieve'},
        {id: 'lightning', value: '⚡', label: 'Rayo'},
        {id: 'droplet', value: '💧', label: 'Gotas'},
    ]


    const prefectureCharacters = [
        { id: 'Nagano', value: '長野', label: 'Nagano' },
        { id: 'Tsuchiura', value: '土浦', label: 'Tsuchiura' },
        { id: 'Kobe', value: '神戸', label: 'Kobe' },
        { id: 'Fukuoka', value: '福岡', label: 'Fukuoka' },
        { id: 'Hiroshima', value: '広島', label: 'Hiroshima' },
        { id: 'Osaka', value: '大阪', label: 'Osaka' },
        { id: 'Tama', value: '多摩', label: 'Tama' },
        { id: 'Shinagawa', value: '品川', label: 'Shinagawa' },
        { id: 'Sapporo', value: '札幌', label: 'Sapporo' },
        { id: 'Okinawa', value: '沖縄', label: 'Okinawa' },
        { id: 'Tokyo', value: '東京', label: 'Tokyo' },
        { id: 'Toyoda', value: '豊田', label: 'Toyoda' },
        { id: 'Yokohama', value: '横浜', label: 'Yokohama' },
        { id: 'Adachi', value: '足立', label: 'Adachi' },
        { id: 'Shizuoka', value: '静岡', label: 'Shizuoka' },
        { id: 'Suzuka', value: '鈴鹿', label: 'Suzuka' },
        { id: 'Shiga', value: '滋賀', label: 'Shiga' },
        { id: 'Mie', value: '三重', label: 'Mie' },
        { id: 'Fukuyama', value: '福山', label: 'Fukuyama' },
        { id: 'Ehime', value: '愛媛', label: 'Ehime' },
        { id: 'Chiba', value: '千葉', label: 'Chiba' },
        { id: 'Aomori', value: '青森', label: 'Aomori' },
        { id: 'Gunma', value: '群馬', label: 'Gunma' },
    ]

    const hiraganaCharacters = [
        { id: 'A', value: 'あ', label: 'A' },
        { id: 'I', value: 'い', label: 'I' },
        { id: 'U', value: 'う', label: 'U' },
        { id: 'E', value: 'え', label: 'E' },
        { id: 'O', value: 'お', label: 'O' },
        { id: 'KA', value: 'か', label: 'KA' },
        { id: 'KI', value: 'き', label: 'KI' },
        { id: 'KU', value: 'く', label: 'KU' },
        { id: 'KE', value: 'け', label: 'KE' },
        { id: 'KO', value: 'こ', label: 'KO' },
        { id: 'SA', value: 'さ', label: 'SA' },
        { id: 'SHI', value: 'し', label: 'SHI' },
        { id: 'SU', value: 'す', label: 'SU' },
        { id: 'SE', value: 'せ', label: 'SE' },
        { id: 'SO', value: 'そ', label: 'SO' },
        { id: 'TA', value: 'た', label: 'TA' },
        { id: 'CHI', value: 'ち', label: 'CHI' },
        { id: 'TSU', value: 'つ', label: 'TSU' },
        { id: 'TE', value: 'て', label: 'TE' },
        { id: 'TO', value: 'と', label: 'TO' },
        { id: 'NA', value: 'な', label: 'NA' },
        { id: 'NI', value: 'に', label: 'NI' },
        { id: 'NU', value: 'ぬ', label: 'NU' },
        { id: 'NE', value: 'ね', label: 'NE' },
        { id: 'NO', value: 'の', label: 'NO' },
        { id: 'HA', value: 'は', label: 'HA' },
        { id: 'HI', value: 'ひ', label: 'HI' },
        { id: 'FU', value: 'ふ', label: 'FU' },
        { id: 'HE', value: 'へ', label: 'HE' },
        { id: 'HO', value: 'ほ', label: 'HO' },
        { id: 'MA', value: 'ま', label: 'MA' },
        { id: 'MI', value: 'み', label: 'MI' },
        { id: 'MU', value: 'む', label: 'MU' },
        { id: 'ME', value: 'め', label: 'ME' },
        { id: 'MO', value: 'も', label: 'MO' },
        { id: 'YA', value: 'や', label: 'YA' },
        { id: 'YU', value: 'ゆ', label: 'YU' },
        { id: 'YO', value: 'よ', label: 'YO' },
        { id: 'RA', value: 'ら', label: 'RA' },
        { id: 'RI', value: 'り', label: 'RI' },
        { id: 'RU', value: 'る', label: 'RU' },
        { id: 'RE', value: 'れ', label: 'RE' },
        { id: 'RO', value: 'ろ', label: 'RO' },
        { id: 'WA', value: 'わ', label: 'WA' },
        { id: 'WO', value: 'を', label: 'WO' },
        { id: 'N', value: 'ん', label: 'N' },
    ]

    const backgroundColors = [
        { id: 'White', value: '#FFFFFF', label: 'Blanco' },
        { id: 'Black', value: '#000000', label: 'Negro' },
        { id: 'Red', value: '#FF0000', label: 'Rojo' },
        { id: 'Green', value: '#008000', label: 'Verde' },
        { id: 'Blue', value: '#0000FF', label: 'Azul' },
        { id: 'Yellow', value: '#FFFF00', label: 'Amarillo' },
        { id: 'Orange', value: '#FFA500', label: 'Naranja' },
        { id: 'Purple', value: '#800080', label: 'Morado' },
        { id: 'Pink', value: '#FFC0CB', label: 'Rosa' },
        { id: 'Gray', value: '#808080', label: 'Gris' }
    ]




    return (
        <div className='flex flex-row flex-wrap  px-4 py-4 gap-4 w-full justify-around'>

            <section className='md:w-2/4'>
                <h2 className='text-3xl py-2'>Matrícula japonesa</h2>
                <div className={
                    `flex flex-col border-4 px-2 border-black w-80 h-40 pointer-events-none items-center justify-center relative select-none`
                }
                    style={{
                        backgroundColor: plateText.bgColor,
                        color: plateText.textColor,
                    }}
                // Border from inside to simulate plate border using box-shadow


                >
                    <div className='w-full flex flex-row items-center justify-center mb-4'>
                        <p>
                            <span className='text-4xl'>{textOne}</span> <span className='text-4xl font-japanFont'>{textTwo}</span>
                        </p>
                    </div>
                    <div className='w-full flex flex-row items-center justify-center'>
                        <p>
                            <span className='text-4xl'>{textThree}</span> <span className='text-6xl font-japanFont'>{textFour.toUpperCase()}</span>
                        </p>
                    </div>
                </div>
                <form className='flex flex-col'>
                    <div className='flex flex-row flex-wrap justify-between gap-4 py-4'>
                        <div className='flex flex-col gap-1 '>
                            <label htmlFor='topText' className='font-japanFont'>Texto superior</label>
                            <input
                                className='p-2 border-[1px] border-[#666666] w-24'
                                type='text' name='topText'
                                value={plateText.textTwo} maxLength={3} onChange={(e) => setPlateText(
                                    {
                                        ...plateText,
                                        textTwo: e.target.value
                                    }
                                )} />

                        </div>
                        <div className='flex flex-col gap-1 '>
                            <label htmlFor='bottomText'>Texto inferior</label>
                            <input className='p-2 border-[1px] border-[#666666] w-40' type='text' name='bottomText' value={plateText.textFour}
                                maxLength={6}
                                onChange={
                                    (e) => {
                                        if (plateText.textThree !== '' && e.target.value.length > 5) {
                                            return
                                        } else {
                                            setPlateText({
                                                ...plateText,
                                                textFour: e.target.value
                                            })
                                        }
                                    }
                                } />
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2'>
                        {/* Japanase characters */}

                        {
                            symbols.map((char, index) => (
                                <span key={char.id}
                                    onClick={
                                        () => {
                                            setPlateText({
                                                ...plateText,
                                                textThree: char.value

                                            })
                                        }
                                    }
                                    className='select-none text-2xl text-black bg-white py-2 px-3 border-[1px] border-black hover:cursor-pointer' >{char.value}</span>
                            ))
                        }


                    </div>

                </form>
            </section>

            <section className='md:w-2/5'>
                <div className='flex flex-row justify-between mb-4 items-center'>
                    <h2 className='text-xl'>Prefecture</h2>
                    <button
                        className='bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 select-none'
                        onClick={() => setSpoilerPrefecture(!spoilerPrefecture)}
                    >
                        {spoilerPrefecture ? 'Ver menos' : 'Ver más'}
                    </button>

                </div>
                <div className='flex flex-row flex-wrap gap-y-2 gap-x-2 mb-2 '>
                    {
                        prefectureCharacters
                            .slice(0, spoilerPrefecture ? prefectureCharacters.length : 8)
                            .map((prefecture, index) => (
                                <div className='flex flex-col items-center justify-center '>
                                    <span
                                        onClick={
                                            () => {
                                                setPlateText({
                                                    ...plateText,
                                                    textOne: prefecture.value
                                                })
                                            }

                                        }

                                        key={index}
                                        className='select-none text-xl text-black bg-white hover:cursor-pointer py-2 px-3 border-[1px] border-black' >{prefecture.value}
                                    </span>
                                    <p className='text-sm'>{prefecture.label}</p>
                                </div>
                            ))
                    }
                </div>

                <div className='flex flex-row justify-between my-4 items-center'>
                    <h2 className='text-xl'>Hiragana</h2>
                    <button
                        className='bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600'
                        onClick={() => setSpoilerHiragana(!spoilerHiragana)}
                    >
                        {spoilerHiragana ? 'Ver menos' : 'Ver más'}
                    </button>

                </div>
                <div className='flex flex-row flex-wrap gap-x-4 gap-y-2'>
                    {
                        hiraganaCharacters
                            .slice(0, spoilerHiragana ? hiraganaCharacters.length : 14)
                            .map((character, index) => (
                                <div key={character.id} className='select-none flex flex-col items-center justify-center '>
                                    <span key={index}
                                        onClick={
                                            () => {
                                                setPlateText({
                                                    ...plateText,
                                                    textThree: character.value,
                                                    textFour: textFour.length > 5 ? textFour.slice(0, 5) : textFour
                                                })

                                            }
                                        }
                                        className='text-xl text-black bg-white hover:cursor-pointer py-2 px-3 border-[1px] border-black' >{character.value}</span>
                                    <p className='text-sm'>{character.label}</p>
                                </div>
                            ))
                    }
                    <div className='flex flex-col items-center justify-center '>
                        <span onClick={
                            () => {
                                setPlateText({
                                    ...plateText,
                                    textThree: ''
                                })
                            }
                        } className='text-md text-black bg-white hover:cursor-pointer py-2 px-3 border-[1px] border-black' >No Hiragana</span>
                    </div>
                </div>

                <div className='flex flex-col my-4'>
                    <h3 className='text-xl mb-2'>Fondo de matrícula</h3>
                    <div className='flex flex-row items-center flex-wrap gap-2'>
                        {
                            backgroundColors.map((color, index) => (
                                <button key={index}
                                    onClick={
                                        () => {
                                            changeColors(color.value, 'plate')
                                        }
                                    }
                                    className=' text-white px-3 py-2 w-8 h-8 rounded-sm  border-[1px] border-gray-800'
                                    title={color.label}
                                    style={{
                                        backgroundColor: color.value

                                    }}


                                ></button>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col my-4'>

                    <h3 className='text-xl mb-2'>Color del texto</h3>
                    <div className='flex flex-row items-center flex-wrap gap-2'>
                        {
                            backgroundColors.map((color, index) => (
                                <button key={index}
                                    className=' text-white px-3 py-2 w-8 h-8 rounded-sm  border-[1px] border-gray-800'
                                    title={color.label}
                                    style={{
                                        backgroundColor: color.value

                                    }}
                                    onClick={
                                        () => {
                                            changeColors(color.value, 'text')
                                        }
                                    }>

                                </button>
                            ))
                        }
                    </div>

                </div>
            </section>

        </div>
    )
}

