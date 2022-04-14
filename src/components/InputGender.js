import React from "react";
import ChoiceItem from "./ChoiceItem";


class InputGender extends React.Component{
    render(){
        return (
            <>
                <p>Jenis Kelamin</p>
                <ChoiceItem for='laki-laki' label='Laki - Laki' type='radio' value='Laki-laki' id='laki-laki' name='gender' />
                <ChoiceItem for='perempuan' label='Perempuan' type='radio' value='Perempuan' id='perempuan' name='gender' />
            </>
        );
    }
}

export default InputGender;