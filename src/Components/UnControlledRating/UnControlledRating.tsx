import React from "react";


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}





function Rating(props:RatingPropsType) {
    return (
        <div>
            <Star selected = {props.value > 0} />
            <Star selected = {props.value > 1} />
            <Star selected = {props.value > 2} />
            <Star selected = {props.value > 3} />
            <Star selected = {props.value > 4} />
        </div>
    )
}

function  Star(props: any) {
    if (props.selected === true) {
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }
}



export default Rating