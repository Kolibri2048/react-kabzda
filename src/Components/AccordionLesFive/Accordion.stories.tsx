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
const onClickedCallBack = action('Some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callBack} items={[]} onClick={ onClickedCallBack}/>
export const UserUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false}
                                                    onChange={callBack}
                                                    items={[{title:'Dimych', value: 1}, {title:'Valera', value: 2},
                                                        {title:'Artem', value:3}, {title:'Victor', value:4}]}
                                                    onClick={onClickedCallBack}
/>

export const NodeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

        return <Accordion titleValue={'Users'}
                          collapsed={value} onChange={() => setValue(!value)}
                          items={[
                              {title:'Dimych', value: 1},
                              {title:'Valera', value: 2},
                              {title:'Artem', value:3},
                              {title:'Victor', value:4}
                          ]}
                              onClick={(id) => alert(`user with id ${id} should be happy`)}
                              />
    }

