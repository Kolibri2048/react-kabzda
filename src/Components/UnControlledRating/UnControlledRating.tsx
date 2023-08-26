import React, {useState} from "react";


// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
//
// }





function UnControlledRating() {

    let [value, setValue] = useState(0)

    const ButtonRatingHandler =(newValue:number) => {
        setValue(newValue)
    }
    return (
        <div>
            <Star selected = {value > 0} setValue={() =>{setValue(1)} }/>
            <Star selected = {value > 1} setValue={() =>{setValue(2)} }/>
            <Star selected = {value > 2} setValue={() =>{setValue(3)} }/>
            <Star selected = {value > 3} setValue={() =>{setValue(4)} }/>
            <Star selected = {value > 4} setValue={() =>{setValue(5)} }/>
        </div>
    )
}

type StarPopsType = {
    selected: boolean
    setValue: () => void
}


function  Star(props: StarPopsType) {
    // return props.selected ? <span><b>star</b></span> : <span>star</span>


    return <span onClick={() => {props.setValue() }     }>
        {props.selected ? <b>star </b> : 'star '}</span>



}



export default UnControlledRating