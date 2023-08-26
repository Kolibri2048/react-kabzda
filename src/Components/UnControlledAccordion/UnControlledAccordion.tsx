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
        <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
        {!collapsed && <AccordionBody/>}
    </div>

}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Accordion rendering')
    return (
        <h3 onClick={() => {props.onClick()}}>--- {props.title} ---</h3>
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
