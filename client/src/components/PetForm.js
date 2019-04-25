import React, { Component } from 'react';
import axios from 'axios';

class PetForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            pet: {
                name: "",
                type: "",
                description: "",
                skills: ["","",""],
                likes: 0
            },
            errors: {}
        }
    }

    changeName = (e) => {
        this.setState({pet: {...this.state.pet, name: e.target.value}});
    }

    changeType = (e) => {
        this.setState({pet: {...this.state.pet, type: e.target.value}});
    }

    changeDescription = (e) => {
        this.setState({pet: {...this.state.pet, description: e.target.value}});
    }

    changeSkills1 = (e) => {
        let skills = [...this.state.pet.skills];
        skills[0] = e.target.value;
        this.setState({pet: {...this.state.pet, skills: skills}});
    }

    changeSkills2 = (e) => {
        let skills = [...this.state.pet.skills];
        skills[1] = e.target.value;
        this.setState({pet: {...this.state.pet, skills: skills}});
    }

    changeSkills3 = (e) => {
        let skills = [...this.state.pet.skills];
        skills[2] = e.target.value;
        this.setState({pet: {...this.state.pet, skills: skills}});
    }

    changeLikes = (e) => {
        this.setState({pet: {...this.state.pet, likes: e.target.value}});
    }

    create = (e) => {
        e.preventDefault();
        axios.post("/pets", this.state.pet)
            .then(res => {
                if(res.data.errors){
                    this.setState({errors: res.data.errors.errors});
                    console.log(this.state);
                } else {
                    this.props.history.push("/");
                }
            }).catch(err => {
                console.log(err);
            });
    }

    cancel = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <h3>Know of a pet needing a home?</h3>
                <p>The pet must have a name</p>
                <form onSubmit={this.create}>
                    <table><tbody>
                        <tr>
                            <td>Pet Name:</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" onChange={this.changeName} />
                                {
                                    (this.state.errors.name) ? 
                                    <span className="error">&nbsp;{this.state.errors.name.message}</span> :
                                    <span></span>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Pet Type:</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" onChange={this.changeType} />
                                {
                                    (this.state.errors.type) ? 
                                    <span className="error">&nbsp;{this.state.errors.type.message}</span> :
                                    <span></span>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" onChange={this.changeDescription} />
                                {
                                    (this.state.errors.description) ? 
                                    <span className="error">&nbsp;{this.state.errors.description.message}</span> :
                                    <span></span>
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Skills:</td>
                        </tr>
                        <tr><td><table><tbody>
                            <tr>
                                <td>Skill 1:</td>
                                <td>
                                    <input type="text" onChange={this.changeSkills1} />
                                </td>
                            </tr>
                            <tr>
                                <td>Skill 2:</td>
                                <td>
                                    <input type="text" onChange={this.changeSkills2} />
                                </td>
                            </tr>
                            <tr>
                                <td>Skill 3:</td>
                                <td>
                                    <input type="text" onChange={this.changeSkills3} />
                                </td>
                            </tr>
                        </tbody></table></td></tr>
                    </tbody></table>
                    <button type="submit">Add Pet</button>
                </form>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        );
    }
}

export default PetForm;