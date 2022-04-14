import React from "react";

class OptionItem extends React.Component {
    render(){
        return ( <option value={this.props.value} required={this.props.required ? "required" : ""}>{this.props.label}</option> );
    }
}

export default OptionItem;