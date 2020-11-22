import React, { Component } from 'react'
const baseValuePairs = {
    binary: 2,
    octal: 8,
    decimal: 10,
    hexadecimal: 16,
}
const handleSetState = (value, base) => {
    for (let i of Object.entries(baseValuePairs)) {
        if (i[0] === base) {
            return value.toString(i[1])
        }
    }

    return value.toString(10)
}
const handleInputChange = (baseName) => {
    let base;
    const baseNameArray = Object.entries(baseValuePairs)
    // console.log(baseNameArray)
    baseNameArray.forEach((basePair) => {
        if (basePair[0] === baseName) {
            base = basePair[1]
        } else {
            return
        }
    })
    return base
}
class Number extends Component {
    state = {
        binary: '',
        octal: '',
        decimal: '',
        hexadecimal: '',
    }

    handleChange(event) {
        const eventValue = parseInt(event.target.value, handleInputChange(event.target.name)) || 0;
        this.setState({
            [event.target.name]: handleSetState(eventValue, event.target.name),
        })
        let keys = Object.keys(this.state)
        const leftout = keys.filter(item => item !== event.target.name)
        //set value in each field
        leftout.forEach((baseName) => {
            this.setState({
                [baseName]: eventValue.toString(handleInputChange(baseName))
            })
        })

    }
    addBase(event) {
        event.preventDefault();
        if(parseInt(event.target[0].value) > 36 || parseInt(event.target[0].value < 2)){
        return alert('Not allowed!!')
        }
        const baseName = `Base${event.target[0].value}`
        this.setState({
            [baseName]: this.state.decimal.toString(parseInt(event.target[0].value)),
        })
        baseValuePairs[baseName] = event.target[0].value;
    }
    toCapitalCase(text) {
        return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
    }
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={(event) => this.addBase(event)}> 
                    <label htmlFor="">Base</label>
                    <input
                        type="text"
                        placeholder="2 to 32"
                    />
                    <button type='submit'>Add</button>
                    </form>


                </div>
                {Object.keys(this.state).map((numberKey) => {
                    return (
                        <div key={numberKey}>
                            <label htmlFor="">{this.toCapitalCase(numberKey)}</label>
                            <textarea
                                name={numberKey}
                                onChange={(e) => { this.handleChange(e) }}
                                value={this.state[numberKey]}
                                type="text"
                                placeholder={`Enter your ${numberKey} number`} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Number
