import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'Use memo'

}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)


    let resultA = 1
    let resultB = 1

    //Первым параметром передаём функцию которая и будет делать какое то сложное вычисление
    // Вторым параметром мы передаём те самые зависимости на которым юзмемо реакт будет обращать внимание
    // чтобы перезапускать эту функцию или не перезапускать если мы оставим зависимости пусты это значит что
    //  usememo запомниться один раз и всегда будет возращаться одно и тоже значение

    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i

        }
        return tempResult
    }, [a])


    // for (let i = 1; i <= a; i++) {
    //     let fake = 0
    //     while (fake < 1000000) {
    //         fake++;
    //         const fakeValue = Math.random();
    //     }
    //     resultA = resultA * i
    // }


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

        <div>
            Result for a: {resultA}
        </div>

        <div>
            Result for b: {resultB}
        </div>
    </>
}




const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users')
    return <div>{
        props.users.map((u,i)=> <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych","Valera", "Artem"])

    //В связи с тем что фильтрация создаёт новый массив а новый масств значит новый объект а для реакт -
    //это значит то что там что то поменялось потому что другим причин ссылкам не совпадать
    //и не ссылаться на один и тото же объект других причин нету если ссылаешься на другой объект значит
    //была причина изменить этот объект. Поэтому реакт мемо думает что пришёл новый массив(объект)
    // const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)

    //поэтому нам нудно вот этот подсчёт юзерсов закэшировать :
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])


    const addUsers = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return<>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={() => addUsers()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}




export const LikesUseCallback = () => {
    console.log("LikesUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React","JS", "Css", 'HTML'])


    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])




    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books]);

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
    }, [books]);

    return<>
        <button onClick={() => setCounter(counter+1)}>+</button>

        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}

type BooksSecretPropsType  = {
    // books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')

    return <div>
        <button onClick={() => props.addBook()}>add user</button>
        {
        // props.books.map((book,i)=> <div key={i}>{book}</div>)
    }</div>
}

const Book = React.memo(BooksSecret)