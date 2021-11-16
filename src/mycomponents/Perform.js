import React from "react";

class Perform extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 1
        }
    }

    render() {

        const Increment = () => {
            // console.log('increment')
            this.setState({
                counter: this.state.counter + 1
            })
            // console.log(this.state)

        }
        const Decrement = () => {
            if (this.state.counter === 1) return
            this.setState({
                counter: this.state.counter - 1
            })
        }


        return (
            <>
                <h2>
                    ********** Quantity *********
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <button onClick={Decrement}> decrement</button>
                    <div style={{ fontSize: 40 }}>{this.state.counter}</div>
                    <button onClick={Increment}> Increment</button>
                </div>
            </>


        );
    }
}
export default Perform;