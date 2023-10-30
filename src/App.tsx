import React, {useState} from 'react';
import Accordion, {AccordionBody} from "./Components/AccordionLesFive/Accordion";

import './App.css';
import {Rating, ratingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/useStateLes6/OnOff";
import UnControlledAccordion from "./Components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from './Components/UnControlledRating/UnControlledRating';
import {Select} from "./Components/Select/select";


function App() {

    let [ratingValue, setRatingValue] = useState<ratingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className={'App'}>


            {/*<OnOff/>*/}
            {/*<OnOff/>*/}

            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Select value={1} onChange={()=> {}} items={[{title:'Dimych', value: 1}, {title:'Valera', value: 2},
                {title:'Artem', value:3}, {title:'Victor', value:4}]}/>
            {/*<Accordion titleValue={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}*/}
            {/*           onClick={() => {}}*/}
            {/*/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle redering")
    return <h1>{props.title}</h1>
}

export default App;
