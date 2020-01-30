import React from 'react';
import classes from './Customers.module.css'

const customers = (props) => {
    console.log(props.customers);
    return (
        < div className={classes.customers} >
            <ul>
                {props.customers.map(customer =>
                    <li key={customer.id}>{customer.firstName}</li>
                )}
            </ul>
        </div >
    );
}

export default customers;