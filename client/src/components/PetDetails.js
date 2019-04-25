import React, { Component } from 'react';
import axios from 'axios';

class PetDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                skills: [],
                likes: 0
            },
            errors: {}
        }
    }

    componentDidMount = () => {
        axios.get(`/pets/${this.props.match.params._id}`)
            .then(res => {
                this.setState({pet: res.data.pet});
            }).catch(err => {
                console.log(err);
            })
    }

    delete = (e) => {
        axios.delete(`/pets/${this.props.match.params._id}`)
            .then(res => {
                this.props.history.push('/');
            }).catch(err => {
                console.log(err);
            });
    }

    update = (e) => {
        axios.put(`/pets/${this.props.match.params._id}`, this.state.pet)
    }

    like = (e) => {
        this.setState({pet: {...this.state.pet, likes: (this.state.pet.likes+1)}}, this.update);
        this.refs.like.setAttribute("disabled", "disabled");
    }

    render() {
        return (
            <div>
                <h3>Details about {this.state.pet.name}</h3>
                <table><tbody>
                    <tr>
                        <td>Pet Type: </td>
                        <td>{this.state.pet.type}</td>
                    </tr>
                    <tr>
                        <td>Description: </td>
                        <td>{this.state.pet.description}</td>
                    </tr>
                    <tr>
                        <td>Skills: </td>
                        <td>
                        {
                            this.state.pet.skills.map( (skill, index) => 
                                <div key={index}>
                                    <p>{skill}</p>
                                </div>
                            )
                        }
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                    Likes: {this.state.pet.likes}
                </table>
                <button ref="like" onClick={this.like}>Like this Pet</button>
                <button onClick={this.delete}>Adopt this pet!</button>
            </div>
        )
    }
}

export default PetDetails;