// .storybook/preview.tsx

import React from 'react';

import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import callBack1 from "../../lesson8CallBack01/callBack-1";



export default {
    title: 'Accordion',
    component: Accordion

}


const Template: Story<AccordionPropsType> = args => <Accordion {...args} />

export const  MenuCollapsedMode2 = Template.bind({}); //Take copy func Templte
MenuCollapsedMode2["args"] = {
    titleValue: "Menu",
    collapsed: true,
    onChange: callBack1,

}



// const preview: Preview = {
//     decorators: [
//         (Story) => (
//             <ThemeProvider theme="default">
//                 {/* ? Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
//                 <Story />
//             </ThemeProvider>
//         ),
//     ],
// };
//
// export default preview;