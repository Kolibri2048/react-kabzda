import React, {ChangeEvent, useRef, useState} from "react";
import input from "./input";
import { action } from '@storybook/addon-actions'
import {string} from "prop-types";

export default {
    title: 'input',
    component: input
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <> <input   onChange={onChange}/> - {value} </>

}
export const TrackValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null) // useRef —оздаЄт ссылку

    const onClick = () => {
        const el = inputRef.current as HTMLInputElement
       setValue(el.value)
    }

    return <> <input ref={inputRef}/> <button onClick={onClick}>

        save</button> -actual value: {value} </>

}




export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
      

    
    return <input value={parentValue} onChange={onChange}/>
}



export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={action('want')}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')


    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={1}>Minsk</option>
        <option value={2}>Moscow</option>
        <option value={3}>Kiev</option>
    </select>

}


export const ControlledInputWithFixedVales = () => <input value={'Text'}/>



