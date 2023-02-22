import React from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        const response = await API.delete(`users/${this.state.id}`);

        console.log(response);
        console.log(response.data);
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
        axios
            .post(baseURL, {
                title: "Hello World!",
                body: "This is a new post."
            })
            .then((response) => {
                setPost(response.data);
            });
        axios
            .get("https://jsonplaceholder.typicode.com/customers")
            .then(data => console.log(data.data))
            .catch(error => console.log(error));
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                const posts = response.data;
                this.setState({ posts });
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}