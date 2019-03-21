import React, { Component } from 'react'

class Test extends Component {
    state = {
        test: 'test',
        title: '',
        body: '',
    }


    componentDidMount() {
        console.log('Component did mount..');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
            }))



    }

    componentWillMount() {
        console.log('Component will mount..');
    }
    componentDidUpdate() {
        console.log('Component did update..');
    }
    componentWillUpdate() {
        console.log('Component will update..');
    }

    componentWillReceiveProps(nextProps, nextState) {
        console.log('Component will receive props..');
    }

    static getDerivedStateFromProps(nextProps,
        prevProps) {
        return {
            test: 'sth'
        }
    }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}
export default Test;