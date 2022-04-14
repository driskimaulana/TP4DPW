import React from "react";

class SubmitButton extends React.Component {
    render(){
        return (<input type={this.props.type} className="btn btn-success" value={this.props.value} id={this.props.id}/>);
    }
}

export default SubmitButton;