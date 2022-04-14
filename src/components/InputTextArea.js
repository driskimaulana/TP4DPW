import React from "react";

class InputTextArea extends React.Component {
    render(){
        return (
            <div className="mb-3">
                  <label for={this.props.for} class="form-label">{this.props.label}</label>
                  <textarea name={this.props.name} id={this.props.id} cols={this.props.cols} rows={this.props.rows} className="form-control"></textarea>
            </div>
        );
    }
}

export default InputTextArea;