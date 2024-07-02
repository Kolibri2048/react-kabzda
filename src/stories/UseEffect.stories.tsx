import React, {useEffect, useMemo, useReducer, useState} from "react";

export default {
    title: 'useEffect demo'

}




// export const SimpleExample = () => {
//
//     const [fake, setFake] = useState(1)
//     const [counter, setCounter] = useState(1)
//
//     console.log('SimpleExample')
//
//     useEffect(() => {
//         debugger
//         console.log('UseEffect')
//         document.title = counter.toString()
//         // api.getUsr().then('')
//         // setInterval
//         // indexedDB
//         // document.getElementID
//         // document.title = 'User'
//     }, [counter]) // дл€ того чтобы наш useEffect не срабатывал всЄ врем€ когда это не нужно. Ќадо передать зависимоть
//                 // ≈сли мы передадим пустой массив то он сработает ровно один раз при монтирование компоненты
//
//     useEffect(() => {
//         console.log('useEffect every render')
//         document.title = counter.toString()
//     })
//
//
//     useEffect(() => {
//         console.log('UseEffect only first render (componentDidMount)')
//         document.title = counter.toString()
//     })
//
//     useEffect(() => {
//         console.log('UseEffect only first render and every counter change')
//         document.title = counter.toString()
//     }, [counter])
//
//     return<>
//         Hello, {counter} {fake}
//         <button onClick={() => setCounter(counter + 1)}>+</button>
//         <button onClick={() => setFake(fake + 1)}>+</button>
//
//     </>
// }

export const SetTimeoutExp = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExp')



    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        setInterval(() => {
            console.log('tick ' + counter)
            setCounter((state) => state + 1)

        }, 1000)
    }, [])





    return<>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}

    </>
}


