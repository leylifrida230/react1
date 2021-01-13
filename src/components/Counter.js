import React from "react"
class Counter extends React.Component{
    constructor(){
        super()
        /**super() -> constructor dari superclass (react.Component) */
        this.state = {
            count: 0
        }
    }

    increment = () => {
        let c = this.state.count;
        this.setState({
            count: ++c
        })
    }

    deccrement = () => {
        let c = this.state.count;
        this.setState({
            count: --c
        })
    }

    /**
     * konsep state itu sama seperti konsep encapsulation
     * dimana ada data private dan ada fungsi untuk mengontrol atau
     * memanipulasi data private tersebut
     * 
     * data private -> state
     * acessor -> this.state.state_name
     * mutator -> this.setState({state_name: value})
     */

    render(){
        return(
            <div className="row col-4">
                <div className="col-3" >
                    <button className="btn btn-danger btn-block" onClick={this.deccrement}>
                        -
                    </button>
                </div>
                <div className="col-6">
                    <input type="number" value={this.state.count} 
                    className="form-control" readOnly />
                </div>
                <div className="col-3" >
                    <button className="btn btn-success btn-block" onClick={this.increment}>
                        +
                    </button>
                </div>
            </div>
        )
    }
}
export default Counter;