import React, { Component } from 'react'
const baseValuePairs = {
    binary:2,
    octal:8,
    decimal:10,
    hexadecimal:16,
}
const handleSetState = (value, base)=>{
    if(base === 'hexadecimal'){
        return value.toString(16)
    }
    else if(base === 'octal'){
        return value.toString(8)
    }
    else if(base === 'binary'){
        return value.toString(2)
    }
    else {
        return value.toString (10)
    }
} 
const handleInputChange = (baseName)=>{
    let base;
    const baseNameArray = Object.entries(baseValuePairs)
    // console.log(baseNameArray)
    baseNameArray.forEach((basePair)=>{
        if(basePair[0] === baseName ){
           base = basePair[1]
        }else{
            return
        }
    })
    return base
}
class Number extends Component {
    state = {
        decimal:'',
        binary:'',
        octal:'',
        hexadecimal:'',
    }

    handleChange(event){
        const eventValue = parseInt(event.target.value, handleInputChange(event.target.name)) || 0;
        console.log(eventValue)
        this.setState({
            [event.target.name]: handleSetState(eventValue, event.target.name),
        })
        let keys = Object.keys(this.state)
        const leftout = keys.filter(item=> item!==event.target.name)
        //set value in each field
        leftout.forEach((baseName)=>{
            this.setState({
                [baseName]:eventValue.toString(handleInputChange(baseName))
            })
        })

    }
    toCapitalCase(text){
        return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
    }
    render() {
        return (
            <div>
                {Object.keys(this.state).map((numberKey)=>{
                    return(
                        <div key={numberKey}>
                            <label htmlFor="">{this.toCapitalCase(numberKey)}</label>
                            <textarea
                            name={numberKey}
                            onChange={(e)=>{this.handleChange(e)}} 
                            value={this.state[numberKey]}
                            type="text" 
                            placeholder={`Enter your ${numberKey} number`}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Number
