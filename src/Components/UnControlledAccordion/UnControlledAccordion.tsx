import React, {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";

type AccordionPropsType = {
    titleValue: string;
    // collapsed: boolean
}

type ActionType = {
    type: string
}


const reducer = (state: boolean, action:ActionType) => {
    // action description
    if(action.type === "TOGGLE-COLLAPSED") {
        return !state
    }

    return state
}


function UnControlledAccordion(props: AccordionPropsType) {
    // debugger;
    console.log('Uncontrolled rendering')
    // const collapsed = false
    // let [collapsed, setCollapsed] = useState(false)
    // первый параметр функция, второй параметр первоначальное значение так как у нас state boolean то передаём это значение
    let [collapsed, setCollapsed] = useReducer(reducer, false)

    //
    // const ButtonToogleHandler = () => {
    //     setCollapsed(!collapsed)
    // }
    return <div>


        <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
        {!collapsed && <AccordionBody/>}
    </div>

}


export type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => {props.onClick()}}>--- {props.title} ---</h3>
    )
}

export function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


export default UnControlledAccordion
