import React from 'react'
import Button from '../button'
import './styles.css'

const listItems = [
    'Fruits',
    'Vegetables',
    'Other Items',
]

const arr = []

listItems.forEach((item, index) => {
    arr.push(<li key={index}>{item}</li>)
})

const Main = () => {
    return (
        <div className="content">
           
            <div className="buttonWrapper">
                <Button name="Home" />
                <Button name="Prducts" />
                <Button name="Gallery" />
                <Button name="Contact Us" />
            </div>
            <div className="content1">
            <h1>100% Organic</h1>
            

            
            <ul>
                {/* {listItems.map((item, index) => <li key={index}>{item}</li>)} */}
                {arr}
            </ul>
            </div>
            
        </div>
    )
}

export default Main