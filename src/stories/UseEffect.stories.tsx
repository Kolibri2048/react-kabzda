import React, {useEffect, useMemo, useReducer, useState} from "react";

export default {
    title: 'useEffect demo'

}




export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        debugger
        console.log('UseEffect')
        document.title = counter.toString()
        // api.getUsr().then('')
        // setInterval
        // indexedDB
        // document.getElementID
        // document.title = 'User'
    }, [counter]) // дл€ того чтобы наш useEffect не срабатывал всЄ врем€ когда это не нужно. Ќадо передать зависимоть
                // ≈сли мы передадим пустой массив то он сработает ровно один раз при монтирование компоненты
    useEffect(() => {
        console.log('UseEffect only first render (componentDidMount)')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('UseEffect only first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return<>
        Hello, {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>+</button>

    </>
}


