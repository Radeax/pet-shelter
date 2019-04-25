import React, { Component } from 'react';
import axios from 'axios';

class EditPet extends Component {
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

    update = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.put(`/pets/${this.props.match.params._id}`, this.state.pet)
            .then(res => {
                if(res.data.errors){
                    this.setState({errors: res.data.errors.errors});
                } else {
                    this.props.history.push('/');
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
                <h3>Edit This Pet</h3>
                <form onSubmit={this.update}>
                    <table><tbody>
                        <tr>
                            <td>Pet Name:</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" onChange={this.changeName} value={this.state.pet.name} />
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
                                <input type="text" onChange={this.changeType} value={this.state.pet.type} />
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
                                <input type="text" onChange={this.changeDescription} value={this.state.pet.description} />
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
                                    <input type="text" onChange={this.changeSkills1} value={this.state.pet.skills[0]} />
                                </td>
                            </tr>
                            <tr>
                                <td>Skill 2:</td>
                                <td>
                                    <input type="text" onChange={this.changeSkills2} value={this.state.pet.skills[1]} />
                                </td>
                            </tr>
                            <tr>
                                <td>Skill 3:</td>
                                <td>
                                    <input type="text" onChange={this.changeSkills3} value={this.state.pet.skills[2]} />
                                </td>
                            </tr>
                        </tbody></table></td></tr>
                    </tbody></table>
                    <button type="submit">Update Pet</button>
                </form>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}

export default EditPet;