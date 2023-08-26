import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    // collapsed: boolean
}


function UnControlledAccordion(props: AccordionPropsType) {
    // debugger;

    // const collapsed = false
    let [collapsed, setCollapsed] = useState(false)

    const ButtonToogleHandler = () => {
        setCollapsed(!collapsed)
    }
    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={ButtonToogleHandler}>TOGLE</button>
        {!collapsed && <AccordionBody/>}
    </div>

}


// function UnControlledAccordion(props: AccordionPropsType) {
//
//
//
//     if (props.collapsed === true) {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     } else {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody/>
//         </div>
//     }
// }

type AccordionTitlePropsType = {
    title: string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Accordion rendering')
    return (
        <h3>--- {props.title} ---</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}


export default UnControlledAccordion
