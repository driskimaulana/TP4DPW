import React from "react";
import { ReactDOM } from "react";
import InputText from "./InputText";
import InputGender from "./InputGender";
import InputAgama from "./InputAgama";
import InputTextArea from "./InputTextArea";
import SubmitButton from "./SubmitButton";
import InputHoby from "./InputHoby";
import Result from "./Result";


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            fbirthDate: '',
            fgender: '',
            fhobi: '',
            freligion: '',
            fpesan: '',
            formValid: false,
        };
    
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit = (e) => {
        e.preventDefault();

        let name = document.getElementById("fullName").value;
        let birthDate = document.getElementById("birthDate").value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        let hobi = null;
        // get reference to html element with name hobi
        let hobiChecked = document.getElementsByName('hoby');
        // get all the hobi value that checked
        for (const checkbox of hobiChecked) {
            if (checkbox.checked) {
                // concatinate the hobi with another hobi checked, so form a single string
                if(hobi != null){
                    hobi = hobi+ ", " + checkbox.value;
                }else {
                    hobi = checkbox.value;
                }
            }
        }
        let religion = document.getElementById("agama").value;
        let pesan = document.getElementById("pesan").value;


        this.setState({
            fname: name,
            fbirthDate: birthDate,
            fhobi: hobi,
            fgender: gender,
            freligion: religion,
            fpesan: pesan,
            formValid: true,
        })

    }

    renderTable(){
        return (
            <Result nama={this.state.fname} birthDate={this.state.fbirthDate} gender={this.state.fgender} hoby={this.state.fhobi} agama={this.state.freligion} pesan={this.state.fpesan} />
        )
    }

    render(){
        return (
            <>
                <form id="my-form" onSubmit={this.handleSubmit} >
                    <InputText for='fullName' label='Nama Lengkap' type='text' id='fullName' />
                    <InputText for='birthDate' label='Tanggal Lahir' type='date' id='birthDate' />
                    <InputGender />
                    <InputHoby />
                    <InputAgama />
                    <InputTextArea for='pesan' label='Pesan' name='pesan' id='pesan' cols='30' rows='5' />
                    <SubmitButton value='Submit' type='submit' id='submit' />
                 </form>
                {this.state.formValid ? this.renderTable() : ''}
            </>
            
        );
    }


}

export default Form;