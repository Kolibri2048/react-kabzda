// .storybook/preview.tsx

import React, {useState} from 'react';
// @ts-ignore
import {action} from "@storybook/addon-actions";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}


export const BaseExample = () => {

    return <Clock />
}

