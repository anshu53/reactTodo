import React from "react";
class TOdoApp extends React.Component{
    constructor() {
        super();
        this.state = {
            inputValue: "",
            lists:[]
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleInput(e) {
        this.setState({ inputValue: e.target.value })
    }
    handleSubmit() {
        this.setState({
            inputValue: "", lists: [...this.state.lists, { name: this.state.inputValue, id: new Date() }]
        })
    }
    handleReset() {
        this.setState({
            lists: []
        })
    }
    render() {
        return (
        <>
    <div>
                
        <input type="text" value={this.state.inputValue} onChange={ this.handleInput} /><br/><br/>
                    <button onClick={this.handleSubmit}>Add Todo</button><br /><br />
                    <button onClick={this.handleReset}>Reset</button>
                    <div>
                        {this.state.lists.map((candidate) => (
                            <p key={candidate.id}>{candidate.name}</p>
                        ))}
                    </div>     
    </div>
        </> 
        )
        
    }
}
export default TOdoApp;