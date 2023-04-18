import './App.css';
import React from "react";

function App() {
  return (
      <div className="App">
        <div><Task1 /></div>        <br></br>
        <div><Task2 /></div>        <br></br>

        <div><Task3 /></div>        <br></br>

        <div><Task4 /></div>        <br></br>

        <div><Task5 /></div>        <br></br>

        <div><Task6 /></div>        <br></br>

        <div><Task7 /></div>        <br></br>

        <div><Task8 /></div>        <br></br>

        <div><Task9 /></div>        <br></br>

        <div><Task10 /></div>        <br></br>

        <div><Task11 /></div>        <br></br>

        <div><Task12 /></div>        <br></br>

        <div><Task13 /></div>        <br></br>

        <div><Task14 /></div>        <br></br>

        <div><Task15 /></div>        <br></br>

        <div><Task16 /></div>       <br></br>


      </div>
  );
}

class Task1 extends React.Component {  constructor(props) {
    super(props);
    this.state = {
        names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
    };
}

    render() {
        const { names } = this.state;
        const listItems = names.map((name, index) =>
            <li key={index}>{name}</li>
        );

        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}


class Task2 extends React.Component { constructor(props) {
    super(props);
    this.state = {
        names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
    };
}

    addListItem = () => {
        const names = [...this.state.names, 'пункт'];
        this.setState({ names });
    }

    render() {
        const listItems = this.state.names.map((name, index) =>
            <li key={index}>{name}</li>
        );
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
                <button onClick={this.addListItem}>Додати пункт</button>
            </div>
        );
    }
}

class Task3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
        };
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleClickAdd() {
        const names = [...this.state.names, 'пункт'];
        this.setState({ names });
    }

    handleClickRemove() {
        const names = [...this.state.names];
        names.pop();
        this.setState({ names });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
                <button onClick={this.handleClickAdd}>Додати пункт</button>
                <button onClick={this.handleClickRemove}>Видалити останній пункт</button>
            </div>
        );
    }

}

class Task4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
        };
    }

    removeItem = (index) => {
        const names = [...this.state.names];
        names.splice(index, 1);
        this.setState({ names });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.names.map((name, index) => (
                        <li key={index}>
                            {name}{' '}
                            <button onClick={() => this.removeItem(index)}>Видалити</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class Task5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <p>{this.state.text}</p>
            </div>
        );
    }

}
class Task6 extends React.Component {   constructor(props) {
    super(props);
    this.state = { text: '' };
}

    handleChange = (event) => {
        this.setState({ text: event.target.value.toUpperCase() });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <p>{this.state.text}</p>
            </div>
        );
    }
}


class Task7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { age: "" ,year:0};
    }

    handleChange = (event) => {

        const age = parseInt(event.target.value);
        console.log(age);

        const yearOfBirth = new Date().getFullYear() - age;
        this.setState({ year: yearOfBirth });
    };

    render() {
        return (
            <div>
                <label>
                    Введіть ваш вік:
                    <input type="text"  onChange={this.handleChange.bind(this)} />
                </label>
                <p>Ви народились у {this.state.year} році</p>
            </div>
        );
    }
}

class Task8 extends React.Component {
    state = {
        fullName: "",
        lastName: "",
        firstName: "",
        middleName: "",
    };

    handleInputChange = (event) => {
        const fullName = event.target.value;
        const nameParts = fullName.split(" ");
        const lastName = nameParts[0] || "";
        const firstName = nameParts[1] || "";
        const middleName = nameParts[2] || "";

        this.setState({ fullName, lastName, firstName, middleName });
    };

    render() {
        const { lastName, firstName, middleName } = this.state;

        return (
            <div>
                <input type="text" onChange={this.handleInputChange} />

                <p>Last name: {lastName}</p>
                <p>First name: {firstName}</p>
                <p>Middle name: {middleName}</p>
            </div>
        );
    }
}

class Task9 extends React.Component {
    state = {
        inputValue: '',
        text: ''
    };

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            text: this.state.inputValue,
            inputValue: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.text}</p>
            </div>
        );
    }
}
class Task10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            sum: 0,
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: Number(value) });
    };

    handleButtonClick = () => {
        const { num1, num2 } = this.state;
        const sum = num1 + num2;
        this.setState({ sum });
    };

    render() {
        const { num1, num2, sum } = this.state;
        return (
            <div>
                <label>
                    Число 1:
                    <input type="number" name="num1" value={num1} onChange={this.handleInputChange} />
                </label>
                <label>
                    Число 2:
                    <input type="number" name="num2" value={num2} onChange={this.handleInputChange} />
                </label>
                <button onClick={this.handleButtonClick}>Підрахувати суму</button>
                <p>Сума: {sum}</p>
            </div>
        );
    }
}
class Task11 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            fullName: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, middleName } = this.state;
        const fullName = `${lastName} ${firstName} ${middleName}`;

        this.setState({ fullName });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Ім'я:
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Прізвище:
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        По батькові:
                        <input type="text" name="middleName" value={this.state.middleName} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <button type="submit">Відправити</button>
                </form>
                <p>{this.state.fullName}</p>
            </div>
        );
    }
}
class Task12 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: ["John", "Mary", "Alex", "Kate", "Max"],
            newUserName: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addNewUser = this.addNewUser.bind(this);
    }

    handleInputChange(event) {
        this.setState({ newUserName: event.target.value });
    }

    addNewUser() {
        if (this.state.newUserName.trim() !== "") {
            this.setState(prevState => ({
                users: [...prevState.users, prevState.newUserName],
                newUserName: ""
            }));
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={this.state.newUserName}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.addNewUser}>Add User</button>
            </div>
        );
    }
}
class Task13 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names: ["John", "Jane", "Bob", "Alice", "Mike"],
            newName: ""
        };
    }

    handleChange = (event) => {
        this.setState({ newName: event.target.value });
    }

    handleClick = () => {
        this.setState(prevState => ({
            names: [...prevState.names, prevState.newName],
            newName: ""
        }));
    }

    handleDelete = (index) => {
        this.setState(prevState => ({
            names: prevState.names.filter((_, i) => i !== index)
        }));
    }

    render() {
        const { names, newName } = this.state;
        return (
            <div>
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>
                            {name}
                            <button onClick={() => this.handleDelete(index)}>X</button>
                        </li>
                    ))}
                </ul>
                <input type="text" value={newName} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add name</button>
            </div>
        );
    }
}

class Task14 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hrefs: [
                { href: '1.html', text: 'посилання 1' },
                { href: '2.html', text: 'посилання 2' },
                { href: '3.html', text: 'посилання 3' }
            ],
            newHref: '',
            newLinkText: ''
        };
    }

    handleNewHrefChange = event => {
        this.setState({ newHref: event.target.value });
    };

    handleNewLinkTextChange = event => {
        this.setState({ newLinkText: event.target.value });
    };

    handleAddLink = event => {
        event.preventDefault();
        const { hrefs, newHref, newLinkText } = this.state;
        const newLink = { href: newHref, text: newLinkText };
        const updatedHrefs = [...hrefs, newLink];
        this.setState({ hrefs: updatedHrefs, newHref: '', newLinkText: '' });
    };

    handleRemoveLink = index => {
        const { hrefs } = this.state;
        const updatedHrefs = [...hrefs];
        updatedHrefs.splice(index, 1);
        this.setState({ hrefs: updatedHrefs });
    };

    render() {
        const { hrefs, newHref, newLinkText } = this.state;
        return (
            <div>
                <ul>
                    {hrefs.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.text}</a>
                            <button onClick={() => this.handleRemoveLink(index)}>X</button>
                        </li>
                    ))}
                </ul>
                <form onSubmit={this.handleAddLink}>
                    <label>
                        New link href:
                        <input type="text" value={newHref} onChange={this.handleNewHrefChange} />
                    </label>
                    <label>
                        New link text:
                        <input type="text" value={newLinkText} onChange={this.handleNewLinkTextChange} />
                    </label>
                    <button type="submit">Add link</button>
                </form>
            </div>
        );
    }
}
class Task15 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
            input: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ input: event.target.value });
    };

    handleButtonClick = () => {
        const { input, items } = this.state;
        const index = parseInt(input, 10);
        if (Number.isNaN(index) || index < 1 || index > items.length) {
            alert('Invalid input');
            return;
        }
        this.setState({
            items: [...items.slice(0, index - 1), ...items.slice(index)],
            input: '',
        });
    };

    render() {
        const { items, input } = this.state;
        return (
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <input type="text" value={input} onChange={this.handleInputChange} />
                <button onClick={this.handleButtonClick}>Remove Item</button>
            </div>
        );
    }
}
class Task16 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: 'Коля', age: 30 },
                { name: 'Василь', age: 40 },
                { name: 'Петро', age: 50 },
            ],
            newName: '',
            newAge: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ newName: event.target.value });
    }

    handleAgeChange(event) {
        this.setState({ newAge: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { newName, newAge, users } = this.state;
        this.setState({
            users: [...users, { name: newName, age: newAge }],
            newName: '',
            newAge: '',
        });
    }

    render() {
        const { users, newName, newAge } = this.state;

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Ім'я</th>
                        <th>Вік</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Ім'я:
                        <input type="text" value={newName} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Вік:
                        <input type="text" value={newAge} onChange={this.handleAgeChange} />
                    </label>
                    <button type="submit">Додати</button>
                </form>
            </div>
        );
    }
}











export default App;
