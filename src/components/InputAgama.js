import React from "react";
import OptionItem from "./OptionItem";

class InputAgama extends React.Component {
    render(){
        return(
            <>
                <p>Agama</p>
                <div className="input-group mb-3">
                    <select name="agama" id="agama" className="form-select" required>
                        <OptionItem value='' required={true} label="Choose" />
                        <OptionItem value='Islam' required={false} label="Islam" />
                        <OptionItem value='Katolik' required={false} label="Katolik" />
                        <OptionItem value='Protestan' required={false} label="Protestan" />
                        <OptionItem value='Hindu' required={false} label="Hindu" />
                        <OptionItem value='Buddha' required={false} label="Buddha" />
                        <OptionItem value='Konghucu' required={false} label="Konghucu" />
                    </select>
    
                </div>
            </>
        );
    }
}


export default InputAgama;