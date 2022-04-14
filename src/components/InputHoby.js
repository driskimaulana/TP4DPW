import React from "react";
import ChoiceItem from "./ChoiceItem";

class InputHoby extends React.Component {
    render(){
        return (
            <>
                <p>Hoby</p>
                <ChoiceItem for='ngoding' label='Ngoding' type='checkbox' value='Ngoding' id='ngoding' name='hoby' />
                <ChoiceItem for='rebahan' label='Rebahan' type='checkbox' value='Rebahan' id='rebahan' name='hoby' />
                <ChoiceItem for='melamun' label='Melamun' type='checkbox' value='Melamun' id='melamun' name='hoby' />
                <ChoiceItem for='baca-buku' label='Baca Buku' type='checkbox' value='Baca Buku' id='baca-buku' name='hoby' />
                <ChoiceItem for='nonton-youtube' label='Nonton Youtube' type='checkbox' value='Nonton Youtube' id='nonton-youtube' name='hoby' />
                <ChoiceItem for='dengerin-lagu' label='Dengerin Lagu' type='checkbox' value='Dengerin Lagu' id='dengerin-lagu' name='hoby' />
                <ChoiceItem for='Other' label='Other' type='checkbox' value='Other' id='Other' name='hoby' />
            </>
        );
    }
}

export default InputHoby;