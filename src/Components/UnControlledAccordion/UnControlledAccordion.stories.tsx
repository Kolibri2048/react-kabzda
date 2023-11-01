// .storybook/preview.tsx

import React, {useState} from 'react';
// @ts-ignore
import UnControlledAccordion, {Accordion, AccordionBody, AccordionTitle} from "./UnControlledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion
}

const callBack = action('rating changed inside')

export const EmptyRating = () => <UnControlledAccordion titleValue={'Users'} />
