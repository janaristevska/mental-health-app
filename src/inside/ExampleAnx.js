import React, { Component } from 'react';

class ExampleAnx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            newEntryText: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ newEntryText: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { entries, newEntryText } = this.state;
        if (newEntryText.trim() === '') {
            return; // Don't add empty entries
        }
        const newEntry = {
            id: Date.now(),
            text: newEntryText,
            date: new Date().toLocaleString(),
        };
        this.setState({
            entries: [...entries, newEntry],
            newEntryText: '',
        });
    };

    render() {
        const { entries, newEntryText } = this.state;

        return (
            <div>
                <h1>Journal App</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="Write your journal entry here..."
                        value={newEntryText}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <button type="submit">Add Entry</button>
                </form>
                <div className="entry-list">
                    <h2>Journal Entries</h2>
                    <ul>
                        {entries.map((entry) => (
                            <li key={entry.id}>
                                <strong>{entry.date}</strong>: {entry.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ExampleAnx;
