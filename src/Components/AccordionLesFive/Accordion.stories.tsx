// .storybook/preview.tsx

import React, {useState} from 'react';
// @ts-ignore
import {Accordion, AccordionBody, AccordionTitle} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}

const callBack = action('accordion node change event friend')

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callBack}/>
export const UserUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callBack}/>

export const NodeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
}

