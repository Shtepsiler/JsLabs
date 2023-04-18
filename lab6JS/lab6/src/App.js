import './App.css';
import React from "react";

function App() {
  return (
      <div className="App">
        <div><Task1 /></div>        <br></br>

        <div><Task2 /></div>        <br></br>

        <div><Task3 /></div>        <br></br>

        <div><Task4 /></div>        <br></br>

        <div><Task5 items={items}/></div>        <br></br>

        <div><Task6 /></div>        <br></br>

        <div><Task7 /></div>        <br></br>

        <div><Task8 /></div>        <br></br>

        <div><Task9 /></div>        <br></br>

        <div><Task10 /></div>        <br></br>



      </div>
  );
}

class Task1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['item1', 'item2', 'item3', 'item4'],
        };
    }

    handleCheckboxClick = (index) => {
        const newItems = [...this.state.items];
        newItems[index] = newItems[index].startsWith('✓')
            ? newItems[index].substring(1)
            : '✓' + newItems[index];
        this.setState({ items: newItems });
    };

    render() {
        const { items } = this.state;
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                onClick={() => this.handleCheckboxClick(index)}
                            />
                            {item}
                        </label>
                    </li>
                ))}
            </ul>
        );
    }
}

class Task2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 1, firstName: "John", lastName: "Doe", salary: 500 },
                { id: 2, firstName: "Jane", lastName: "Smith", salary: 700 },
                { id: 3, firstName: "Bob", lastName: "Johnson", salary: 900 },
                { id: 4, firstName: "Mary", lastName: "Williams", salary: 1200 }
            ],
            selectedEmployees: [],
            totalSalary: 0
        };
    }

    handleEmployeeSelection = (employeeId) => {
        let selectedEmployees = [...this.state.selectedEmployees];
        let employeeIndex = selectedEmployees.indexOf(employeeId);
        if (employeeIndex !== -1) {
            selectedEmployees.splice(employeeIndex, 1);
        } else {
            selectedEmployees.push(employeeId);
        }
        let totalSalary = selectedEmployees.reduce((acc, employeeId) => {
            let employee = this.state.employees.find(emp => emp.id === employeeId);
            return acc + employee.salary;
        }, 0);
        this.setState({ selectedEmployees, totalSalary });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Select</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <input type="checkbox"
                                       checked={this.state.selectedEmployees.includes(employee.id)}
                                       onChange={() => this.handleEmployeeSelection(employee.id)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div>Total Salary: {this.state.totalSalary}</div>
            </div>
        );
    }
}

class Task3 extends React.Component {
    state = {
        items: ['item 1', 'item 2', 'item 3', 'item 4'],
        checkedItems: new Array(4).fill(true),
    };

    handleCheckboxChange = (event, index) => {
        const { checked } = event.target;
        this.setState(prevState => {
            const checkedItems = [...prevState.checkedItems];
            checkedItems[index] = checked;
            return { checkedItems };
        });
    };

    render() {
        const { items, checkedItems } = this.state;
        return (
            <div>
                {items.map((item, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            checked={checkedItems[index]}
                            onChange={event => this.handleCheckboxChange(event, index)}
                        />
                        <p style={{ display: checkedItems[index] ? 'block' : 'none' }}>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        );
    }

}

class Task4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: 'Микола', surname: 'Шевченко', age: 30 },
                { name: 'Василь', surname: 'Чумак', age: 40 },
                { name: 'Петро', surname: 'Стеценко', age: 50 },
            ],
            showDetails: [],
        };
    }

    toggleDetails = (index) => {
        this.setState((prevState) => {
            const showDetails = [...prevState.showDetails];
            showDetails[index] = !showDetails[index];
            return { showDetails };
        });
    };

    render() {
        const { users, showDetails } = this.state;
        return (
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={showDetails[index]}
                            onChange={() => this.toggleDetails(index)}
                        />
                        {showDetails[index] ? (
                            `${user.name} ${user.surname} ${user.age}`
                        ) : (
                            user.name
                        )}
                    </li>
                ))}
            </ul>
        );
    }
}

const items = [
    { text: "Перший елемент", editing: false },
    { text: "Другий елемент", editing: false },
    { text: "Третій елемент", editing: false }
];
class Task5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
    }

    handleItemClick(index, event) {
        event.stopPropagation();
        let newItems = [...this.state.items];
        newItems[index].editing = true;
        this.setState({
            items: newItems
        });
    }

    handleInputChange(index, event) {
        let newItems = [...this.state.items];
        newItems[index].text = event.target.value;
        this.setState({
            items: newItems
        });
    }

    handleInputBlur(index) {
        let newItems = [...this.state.items];
        newItems[index].editing = false;
        this.setState({
            items: newItems
        });
    }

    render() {
        return (
            <ul>
                {this.state.items.map((item, index) => (
                    <li key={index} onClick={this.handleItemClick.bind(this, index)}>
                        {item.editing ? (
                            <input
                                type="text"
                                value={item.text}
                                onChange={this.handleInputChange.bind(this, index)}
                                onBlur={this.handleInputBlur.bind(this, index)}
                                autoFocus
                            />
                        ) : (
                            item.text
                        )}
                    </li>
                ))}
            </ul>
        );
    }
}



class Task6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {name: 'Микола', age: 30},
                {name: 'Василь', age: 40},
                {name: 'Петро', age: 50},
            ],
            editingIndex: null, // індекс редагованого користувача (-1 якщо ніхто не редагується)
        };
    }

    handleEditClick(index) {
        this.setState({editingIndex: index});
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const index = this.state.editingIndex;
        const users = [...this.state.users];
        users[index][name] = value;
        this.setState({users: users});
    }

    handleInputBlur() {
        this.setState({editingIndex: null});
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Вік</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map((user, index) => {
                    const isEditing = index === this.state.editingIndex;
                    return (
                        <tr key={index}>
                            <td>
                                {isEditing ? (
                                    <input type="text" name="name" value={user.name} onChange={this.handleInputChange.bind(this)} onBlur={this.handleInputBlur.bind(this)} />
                                ) : (
                                    <span>{user.name}</span>
                                )}
                            </td>
                            <td>
                                {isEditing ? (
                                    <input type="text" name="age" value={user.age} onChange={this.handleInputChange.bind(this)} onBlur={this.handleInputBlur.bind(this)} />
                                ) : (
                                    <span>{user.age}</span>
                                )}
                            </td>
                            <td>
                                <button onClick={this.handleEditClick.bind(this, index)}>Редагувати</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}

class Task7 extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            routes: [
                { id: 1, name: "Маршрут 1" },
                { id: 2, name: "Маршрут 2" },
                { id: 3, name: "Маршрут 3" },
            ],
            selectedRoute: null,
        };
    }

    handleSelectRoute = (route) => {
        this.setState({ selectedRoute: route });
    };

    render() {
        const { routes, selectedRoute } = this.state;
        return (
            <div>
                <ul>
                    {routes.map((route) => (
                        <li key={route.id}>
                            <input
                                type="radio"
                                name="routes"
                                id={`route-${route.id}`}
                                value={route.id}
                                checked={selectedRoute === route}
                                onChange={() => this.handleSelectRoute(route)}
                            />
                            <label htmlFor={`route-${route.id}`}>{route.name}</label>
                        </li>
                    ))}
                </ul>
                <p>Обраний маршрут: {selectedRoute ? selectedRoute.name : "не вибрано"}</p>
            </div>
        );
    }
}

class Task8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            currentNote: "",
        };
        this.handleNoteChange = this.handleNoteChange.bind(this);
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    handleNoteChange(event) {
        this.setState({currentNote: event.target.value});
    }

    addNote() {
        const date = new Date();
        const timestamp = date.toLocaleTimeString();
        const newNote = {
            title: `Note ${this.state.notes.length + 1}`,
            text: this.state.currentNote,
            timestamp: timestamp,
        };
        this.setState(prevState => ({
            notes: [...prevState.notes, newNote],
            currentNote: "",
        }));
    }

    deleteNote(index) {
        const newNotes = [...this.state.notes];
        newNotes.splice(index, 1);
        this.setState({notes: newNotes});
    }

    render() {
        return (
            <div>
                <h1>Notes App</h1>
                <textarea value={this.state.currentNote} onChange={this.handleNoteChange} />
                <button onClick={this.addNote}>Add Note</button>
                {this.state.notes.map((note, index) =>
                    <div key={index}>
                        <h3>{note.title}</h3>
                        <p>{note.text}</p>
                        <p>Created at {note.timestamp}</p>
                        <button onClick={() => this.deleteNote(index)}>Delete</button>
                        <button>Edit</button>
                    </div>
                )}
            </div>
        );
    }
}

class Task9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                {id: 1, firstName: 'John', lastName: 'Doe', salary: 50000},
                {id: 2, firstName: 'Jane', lastName: 'Smith', salary: 60000},
                {id: 3, firstName: 'Bob', lastName: 'Johnson', salary: 55000},
                {id: 4, firstName: 'Mary', lastName: 'Lee', salary: 65000},
            ],
            sortColumn: 'id',
            sortAscending: true,
        };
    }

    handleSortClick = (columnName) => {
        const ascending = this.state.sortColumn === columnName ? !this.state.sortAscending : true;
        this.setState({
            sortColumn: columnName,
            sortAscending: ascending,
        });
    }

    render() {
        const employees = [...this.state.employees]; // Copy employees array
        employees.sort((a, b) => {
            if (this.state.sortAscending) {
                return a[this.state.sortColumn] > b[this.state.sortColumn] ? 1 : -1;
            } else {
                return a[this.state.sortColumn] < b[this.state.sortColumn] ? 1 : -1;
            }
        });

        const rows = employees.map((employee) => (
            <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salary}</td>
            </tr>
        ));

        return (
            <table>
                <thead>
                <tr>
                    <th onClick={() => this.handleSortClick('firstName')}>First Name</th>
                    <th onClick={() => this.handleSortClick('lastName')}>Last Name</th>
                    <th onClick={() => this.handleSortClick('salary')}>Salary</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
}
class Task10 extends React.Component {
    state = {
        language: 'ukrainian',
    };

    handleLanguageChange = (event) => {
        this.setState({ language: event.target.value });
    };

    render() {
        const { language } = this.state;
        const weekdays = language === 'ukrainian' ? ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя'] : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return (
            <div>
                <label htmlFor="language-select">Виберіть мову:</label>
                <select id="language-select" value={language} onChange={this.handleLanguageChange}>
                    <option value="ukrainian">Українська</option>
                    <option value="english">English</option>
                </select>
                <br />
                <label htmlFor="weekday-select">Виберіть день тижня:</label>
                <select id="weekday-select">
                    {weekdays.map((weekday) => (
                        <option key={weekday} value={weekday}>
                            {weekday}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}





export default App;
