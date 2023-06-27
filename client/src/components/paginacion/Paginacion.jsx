import React, { useState } from "react";


export default function Paginacion(props) {
    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        props.setPage(parseInt(props.page) + 1);
    };
    const previousPage = () => {
        setInput(parseInt(input) - 1);
        props.setPage(parseInt(props.page) - 1);
    };

    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            props.setPage(parseInt(e.target.value));
            if(
                parseInt(e.target.value) < 1 || 
                parseInt(e.target.value) > Math.ceil(props.max) || 
                isNaN(parseInt(e.target.value)) 
            ) {
                props.setPage(1);
                setInput(1);
            } else {
                props.setPage(parseInt(e.target.value));
            }
        }
    }

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <button
            disabled={props.page === 1 || props.page < 1} 
            onClick={previousPage}>back</button>
            <input
             onChange = { (e) => onChange(e) }
             onKeyDown={ (e)=> onKeyDown(e) }
             name="page"
             autoComplete="off"
             value={input} />
            <p>De: {Math.ceil(props.max)}</p>
            <button
            disabled={props.page === Math.ceil(props.max)} 
            onClick={nextPage}>next</button>
        </div>
    )
};
