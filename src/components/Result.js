import React from "react";

class Result extends React.Component {
    render(){
        return(
            <table className="table mt-5">
                <thead>
                <tr>
                    <th scope="col">Label</th>
                    <th scope="col">Value</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Nama</th>
                    <td>{this.props.nama}</td>
                </tr>
                <tr>
                  <th>Tanggal Lahir</th>
                  <td>{this.props.birthDate}</td>
                </tr>
                <tr>
                  <th>Jenis Kelamin</th>
                  <td>{this.props.gender}</td>
                </tr>
                <tr>
                  <th>Hobi</th>
                  <td>
                    {
                        this.props.hoby    
                    }
                    </td>
                </tr>
                <tr>
                  <th>Agama</th>
                  <td>{this.props.agama}</td>
                </tr>
                <tr>
                  <th>Pesan</th>
                  <td>{this.props.pesan}</td>
                </tr>
              </tbody>
            </table>
        );
    }
}

export default Result;

