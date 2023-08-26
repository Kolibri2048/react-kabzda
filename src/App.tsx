import React, {useState} from 'react';
import Accordion from "./Components/AccordionLesFive/Accordion";

import './App.css';
import {Rating, ratingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/useStateLes6/OnOff";
import UnControlledAccordion from "./Components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from './Components/UnControlledRating/UnControlledRating';


function App() {

    let [ratingValue, setRatingValue] = useState<ratingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className={'App'}>


            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}

            <UnControlledAccordion titleValue={'Menu'}/>
            {/*<UnControlledAccordion titleValue={'Menu'}/>*/}
            <UnControlledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
            />
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
