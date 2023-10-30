import React from "react";

export type itemType = {
    title: string
    value: any
}


export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onChange: () => void
    items: itemType[]
    onClick: (value: any) => void

}


export function Accordion(props: AccordionPropsType) {
    // debugger;
    return <div>
        <AccordionTitle

            title={props.titleValue}
            onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>

}





type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}


export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Accordion rendering')
    return (
        <h3 onClick={props.onChange}> ---{props.title} ---</h3>
    )
}

export type AccordionBodyPropsType = {
    items: itemType[]
    onClick: (value: any) => void
}


export function AccordionBody(props:AccordionBodyPropsType) {
    return <ul>
        {props.items.map( (i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}


export default Accordion
