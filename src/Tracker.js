import React, { Component } from 'react'
import Number from './Counter/Number'
import images from './assets/images/smile.webp'
class Tracker extends Component {
    render() {
        return (
            <div style={{
                display:'flex',
                width:'100%',
                flexDirection:'column',
                height:'100vh',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <header style={{padding:'20px'}}>
                    <h1 style={{display:'block'}}>NumberConverter</h1>
                    <small>By your friend Tanjim <span><img src={images} alt="" style={{width:'20px',height:'20px'}}/></span></small>
                </header>
                <main>
                    <section>
                        <Number/>
                    </section>

                </main>
            </div>
        )
    }
}

export default Tracker
