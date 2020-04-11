import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    
    orderHandler = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.state.price,
            customer: {
                name: 'Alex Costan',
                address: {
                    street: 'Sleepy Hollow',
                    zipCode: '93753',
                    country: 'USA'
                },
                email: 'alexcostan13@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false})
            })
    }

    render() {
        let form = (                
            <form>
                <input className={classes.Input} type='text' name='name' placeholder="Name"></input>
                <input className={classes.Input} type='text' name='email' placeholder="Email"></input>
                <input className={classes.Input} type='text' name='street' placeholder="Street"></input>
                <input className={classes.Input} type='text' name='zipcode' placeholder="Zip Code"></input>
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>)
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Information</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;