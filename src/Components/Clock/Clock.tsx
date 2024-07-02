import React, {useEffect, useState} from 'react'
import {number} from "prop-types";
import {clearInterval} from "timers";

type PropsType = {

}

const get2dString = (number: number) => number < 10 ? '0' + number : number


export const Clock : React.FC<PropsType> = (props) => {
    const  [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    const secondString = get2dString(date.getSeconds())
    const minutesString = get2dString(date.getMinutes())
    const hoursString = get2dString(date.getHours())



    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondString}</span>
    </div>
}