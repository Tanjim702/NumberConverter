import React, { Component } from 'react'
import Number from './Counter/Number'

class Tracker extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Stack Counter</h1>
                </header>
                <main>
                    <section>
                        <Number/>
                    </section>
                    <section>
                        <textarea name="" id="" cols="30" rows="10"></textarea><textarea name="" id="" cols="30" rows="10"></textarea>
                    </section>
                </main>
                <footer>
                    License and terms of use
                </footer>
            </div>
        )
    }
}

export default Tracker
