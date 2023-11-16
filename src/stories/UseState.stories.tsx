import React, {useMemo, useReducer, useState} from "react";

export default {
    title: 'UseState demo'

}

function generateDara() {
    //difficult counting
    console.log('generate data')
    return 1
}


export const Example1 = () => {
    const initValue = useMemo(generateDara, [])

    console.log("Example")
    // если мы передаём initValue без useMemo тогда наша функция generateDara бутев вызываться каждый раз при отрисовки комп
    // const [counter, setCounter] = useState(initValue) // [0, function(newValue){}]
    // Так же useMemo можно заменить просто вызовом этой функции реак один раз вернёт то значение которое было в generateDara
    // Но это исп в том случае когда у нас идёт подсчёт сложного значения
    const [counter, setCounter] = useState(generateDara) // [0, function(newValue){}]

    // const change = (state: number) => {
    //     debugger
    //     return state + 1 // функция которая изм state - именитель
    // }  ||
    return<>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}


