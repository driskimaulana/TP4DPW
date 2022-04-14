import React from "react";


class InputText extends React.Component {
    render(){
        return (
            <div class="mb-3">
                  <label for={this.props.for} className="form-label">{this.props.label}</label>
                  <input type={this.props.type} className="form-control" id={this.props.id} required/>
            </div>
        );
    }
}

export default InputText;