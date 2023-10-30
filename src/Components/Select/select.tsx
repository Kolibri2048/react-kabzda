import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

export type itemType = {
    title: string
    value: any
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: itemType[]

}


export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }


    const selectTittle = props.items.find(item => item.value === props.value)

    const hoveredItem = props.items.find(item => item.value === hoveredItemValue)



    useEffect(() => {
        setHoveredItemValue(props.value)
    }, [props.value])


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {

            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectTittle) {
                props.onChange(props.items[0].value)
            }
        }

        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }



    return (
        <>

            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectTittle && selectTittle.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredItemValue(i.value)
                            }}
                            className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
}