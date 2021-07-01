import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useRef, useState } from 'react';
import React from 'react';

const MealItemForm = (props) =>{
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredAmount =  amountInputRef.current.value;
        const enteredAmountNUmber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNUmber < 1 || enteredAmountNUmber > 5){
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNUmber);
    }


    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" ref= {amountInputRef} input={{
            id:"amount_" + props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue: '1',
        }}/>
        <button>+Add</button>
        {!amountIsValid && <p>Please eneter a valid amount(1-5)</p>}
    </form>;
};

export default MealItemForm;