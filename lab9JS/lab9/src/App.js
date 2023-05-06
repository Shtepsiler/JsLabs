import './App.css';
import React, { Component } from "react";

function App() {
  return (
    <div className="App">
      <div><Task1 /></div>        <br></br>

      <div><Task2 /></div>        <br></br>



      <div><Task6  /></div>        <br></br>

    </div>
  );
}

class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, firstName: "John", lastName: "Doe", daysWorked: 20, rate: 10 },
        { id: 2, firstName: "Jane", lastName: "Smith", daysWorked: 25, rate: 12 },
        { id: 3, firstName: "Bob", lastName: "Johnson", daysWorked: 18, rate: 15 },
      ],
      totalPay: 0,
    };
  }

  handleDaysChange = (event, id) => {
    const employees = [...this.state.employees];
    const index = employees.findIndex((employee) => employee.id === id);
    employees[index].daysWorked = parseInt(event.target.value);
    this.setState({ employees }, this.calculateTotalPay);
  };

  handleRateChange = (event, id) => {
    const employees = [...this.state.employees];
    const index = employees.findIndex((employee) => employee.id === id);
    employees[index].rate = parseInt(event.target.value);
    this.setState({ employees }, this.calculateTotalPay);
  };

  calculateTotalPay = () => {
    const totalPay = this.state.employees.reduce(
        (accumulator, employee) => accumulator + employee.daysWorked * employee.rate,
        0
    );
    this.setState({ totalPay });
  };

  render() {
    const { employees, totalPay } = this.state;

    return (
        <div>
          <table>
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Days Worked</th>
              <th>Rate</th>
              <th>Pay</th>
            </tr>
            </thead>
            <tbody>
            {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>
                    <input
                        type="number"
                        value={employee.daysWorked}
                        onChange={(event) => this.handleDaysChange(event, employee.id)}
                    />
                  </td>
                  <td>
                    <input
                        type="number"
                        value={employee.rate}
                        onChange={(event) => this.handleRateChange(event, employee.id)}
                    />
                  </td>
                  <td>{employee.daysWorked * employee.rate}</td>
                </tr>
            ))}
            </tbody>
          </table>
          <p>Total pay: {totalPay}</p>
        </div>
    );
  }
}

const questions = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the highest mountain in the world?",
    answer: "Mount Everest"
  },
  {
    question: "What is the currency of Japan?",
    answer: "Yen"
  }
];

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: questions.map(() => ""),
      results: questions.map(() => "")
    };
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAnswerChange(event, index) {
    const { value } = event.target;
    this.setState(state => {
      const answers = [...state.answers];
      answers[index] = value;
      return { answers };
    });
  }

  handleSubmit() {
    this.setState(state => {
      const results = state.answers.map((answer, index) => {
        return answer.toLowerCase() === questions[index].answer.toLowerCase() ? "correct" : "incorrect";
      });
      return { results };
    });
  }

  render() {
    return (
        <div>
          {questions.map((question, index) => (
              <div key={index}>
                <p>{question.question}</p>
                <input type="text" value={this.state.answers[index]} onChange={event => this.handleAnswerChange(event, index)} />
                {this.state.results[index] === "correct" && <p style={{ color: "green" }}>Ваша відповідь правильна!</p>}
                {this.state.results[index] === "incorrect" && <p style={{ color: "red" }}>Ваша відповідь неправильна, правильна відповідь: {questions[index].answer}</p>}
              </div>
          ))}
          <button onClick={this.handleSubmit}>Скласти тест</button>
        </div>
    );
  }
}





class Task6 extends Component {
  state = {
    items: [],
    currentItem: '',
  };

  handleInputChange = (event) => {
    this.setState({
      currentItem: event.target.value,
    });
  };

  addItem = (event) => {
    event.preventDefault();
    if (this.state.currentItem !== '') {
      const newItem = {
        id: Date.now(),
        text: this.state.currentItem,
        completed: false,
      };
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: '',
      });
    }
  };

  deleteItem = (id) => {
    const items = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: items,
    });
  };

  editItem = (id, newText) => {
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text: newText,
        };
      }
      return item;
    });
    this.setState({
      items: items,
    });
  };

  toggleCompleted = (id) => {
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    this.setState({
      items: items,
    });
  };

  render() {
    const items = this.state.items.map((item) => {
      const text = item.completed ? (
          <del>{item.text}</del>
      ) : (
          item.text
      );
      return (
          <li key={item.id}>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => this.toggleCompleted(item.id)}
            />
            <input
                type="text"
                value={item.text}
                onChange={(event) =>
                    this.editItem(item.id, event.target.value)
                }
            />
            <button onClick={() => this.deleteItem(item.id)}>X</button>
          </li>
      );
    });

    return (
        <div>
          <form onSubmit={this.addItem}>
            <input
                type="text"
                placeholder="Add task"
                value={this.state.currentItem}
                onChange={this.handleInputChange}
            />
            <button type="submit">Add</button>
          </form>
          <ul>{items}</ul>
        </div>
    );
  }
}










export default App;
