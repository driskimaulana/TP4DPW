import React from "react";


class ChoiceItem extends React.Component{
    render(){
        return (
            <div class="form-check form-check-inline">
                    <label for={this.props.for} className="form-label">{this.props.label}</label>
                    <input type={this.props.type} className="form-check-input" value={this.props.value} id={this.props.id} name={this.props.name}/>
            </div>
        );
    }
}

export default ChoiceItem;