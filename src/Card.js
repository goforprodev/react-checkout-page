import React from "react"
import './App.css'
import {SubHeading} from "./components/SubHeading";
import {NeuomorphicCard} from "./components/NeumorphicCard";
import {PaymentMethod} from "./components/PaymentMethod";
import {Button} from "./components/Button";

export const Card = () => {
    return(
        <div>
            <div className="card">
                <div className="card-title">
                    Checkout
                </div>
                {/* description section */}
                <div className="section description">
                    <SubHeading  text={"Description"}/>
                    <NeuomorphicCard text ={"Some brief description"}/>
                </div>
                {/* Payment Section*/}
                <div className="section payment">
                    <SubHeading text={"Payment Method"}/>
                    <PaymentMethod text={"Visa Payment"}/>
                    <PaymentMethod text={"Flutterwave Payment"}/>
                    <PaymentMethod text={"Stripe Payment"}/>

                </div>
                {/* Total*/}
                <div className="section total">
                    <SubHeading text={"Total"}/>
                    <SubHeading text={"$88.99"}/>
                </div>
                {/*Checkout Button*/}
                <Button text="Pay Now"/>
            </div>
        </div>
    )
}