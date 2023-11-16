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
    // ���� �� ������� initValue ��� useMemo ����� ���� ������� generateDara ����� ���������� ������ ��� ��� ��������� ����
    // const [counter, setCounter] = useState(initValue) // [0, function(newValue){}]
    // ��� �� useMemo ����� �������� ������ ������� ���� ������� ���� ���� ��� ����� �� �������� ������� ���� � generateDara
    // �� ��� ��� � ��� ������ ����� � ��� ��� ������� �������� ��������
    const [counter, setCounter] = useState(generateDara) // [0, function(newValue){}]

    // const change = (state: number) => {
    //     debugger
    //     return state + 1 // ������� ������� ��� state - ���������
    // }  ||
    return<>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}


