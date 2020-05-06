import React, { Component } from 'react';
import axios from 'axios';


class Fib extends Component {
    state = {
        SeenIndexes: [],
        values: {},
        index: ''
    };
    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues() {
        const values = await axios.get('/api/values/current');
        this.setState({ values: values.data });

    }

    async fetchIndexes() {
        const SeenIndexes = await axios.get('/api/values/all');
        this.setState({
            SeenIndexes: SeenIndexes.data
        });
    }
    renderSeenIndexes() {
        return this.state.SeenIndexes.map(({ number }) => number).join(', ');
    }
    renderValues(){
        const entries = [];
        for (let key in this.state.values) {
            entries.push(
                <div key={key}> for index {key} I Calculated {this.state.values[key]}  </div>
            );
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label>Enter your Index </label>
                    <input
                        value={this.state.index}
                        onChange={event => this.setState({ index: event.target.value })}
                    />
                    <button>Submit</button>
                </form>
                <h3>Indexes I have Seen</h3>
                {this.renderSeenIndexes()}
                <h3>Calculated Values</h3>
            </div>
        );
    }
}
    

export default Fib;