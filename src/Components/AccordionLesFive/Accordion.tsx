import React from "react";

export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onChange: () => void
}


export function Accordion(props: AccordionPropsType) {
    // debugger;
    return <div>
        <AccordionTitle

            title={props.titleValue}
            onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>

}


// function Accordion2(props: AccordionPropsType) {
//     debugger;
//     if (props.collapsed === true) {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     } else {
//         return <div>
//             <AccordionTitle
//
//                 title={props.titleValue}/>
//             <AccordionBody/>
//         </div>
//     }
// }

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Accordion rendering')
    return (
        <h3 onClick={props.onChange}> ---{props.title} ---</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


export default Accordion
