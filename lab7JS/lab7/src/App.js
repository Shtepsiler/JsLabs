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




      </div>
  );
}

class Task1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    const inputStyle = {
      border: `2px solid ${value.length >= 4 && value.length <= 9 ? 'green' : 'red'}`,
    };

    return (
        <input
            type="text"
            style={inputStyle}
            value={value}
            onChange={this.handleChange}
        />
    );
  }
}

class Task2 extends React.Component {
  state = {
    employees: [
      { id: 1, firstName: 'John', lastName: 'Doe', salary: 5000, gender: 'male' },
      { id: 2, firstName: 'Jane', lastName: 'Doe', salary: 6000, gender: 'female' },
      { id: 3, firstName: 'Bob', lastName: 'Smith', salary: 4000, gender: 'male' },
    ],
    newEmployee: { firstName: '', lastName: '', salary: '', gender: 'male' }
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newEmployee: { ...prevState.newEmployee, [name]: value }
    }));
  };

  handleSelectChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      newEmployee: { ...prevState.newEmployee, [name]: value }
    }));
  };

  handleAddEmployee = e => {
    e.preventDefault();
    const newEmployee = {
      ...this.state.newEmployee,
      id: this.state.employees.length + 1
    };
    this.setState(prevState => ({
      employees: [...prevState.employees, newEmployee],
      newEmployee: { firstName: '', lastName: '', salary: '', gender: 'male' }
    }));
  };

  render() {
    const { employees, newEmployee } = this.state;

    return (
        <div>
          <table>
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
              <th>Gender</th>
            </tr>
            </thead>
            <tbody>
            {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.gender}</td>
                </tr>
            ))}
            </tbody>
          </table>
          <form onSubmit={this.handleAddEmployee}>
            <label>
              First Name:
              <input
                  type="text"
                  name="firstName"
                  value={newEmployee.firstName}
                  onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                  type="text"
                  name="lastName"
                  value={newEmployee.lastName}
                  onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Salary:
              <input
                  type="number"
                  name="salary"
                  value={newEmployee.salary}
                  onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Gender:
              <select name="gender" value={newEmployee.gender} onChange={this.handleSelectChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <br />
            <button type="submit">Add Employee</button>
          </form>
        </div>
    );
  }
}

class Task3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, firstName: 'John', lastName: 'Doe', salary: 5000 },
        { id: 2, firstName: 'Jane', lastName: 'Doe', salary: 6000 },
        { id: 3, firstName: 'Bob', lastName: 'Smith', salary: 7000 },
        { id: 4, firstName: 'Alice', lastName: 'Johnson', salary: 8000 },
        { id: 5, firstName: 'Tom', lastName: 'Williams', salary: 9000 },
        { id: 6, firstName: 'Sara', lastName: 'Davis', salary: 10000 },
        { id: 7, firstName: 'Mike', lastName: 'Brown', salary: 11000 },
        { id: 8, firstName: 'Karen', lastName: 'Taylor', salary: 12000 },
        { id: 9, firstName: 'Jack', lastName: 'Clark', salary: 13000 },
        { id: 10, firstName: 'Amy', lastName: 'Lee', salary: 14000 },
        { id: 11, firstName: 'David', lastName: 'Allen', salary: 15000 },
        { id: 12, firstName: 'Mary', lastName: 'Martin', salary: 16000 },
        { id: 13, firstName: 'Kevin', lastName: 'Scott', salary: 17000 },
        { id: 14, firstName: 'Emma', lastName: 'Young', salary: 18000 },
        { id: 15, firstName: 'Oliver', lastName: 'King', salary: 19000 },
        { id: 16, firstName: 'John', lastName: 'Doe', salary: 5000 },
        { id: 17, firstName: 'Jane', lastName: 'Doe', salary: 6000 },
        { id: 18, firstName: 'Bob', lastName: 'Smith', salary: 7000 },
        { id: 19, firstName: 'Alice', lastName: 'Johnson', salary: 8000 },
        { id: 20, firstName: 'Tom', lastName: 'Williams', salary: 9000 },
        { id: 21, firstName: 'Sara', lastName: 'Davis', salary: 10000 },
        { id: 22, firstName: 'Mike', lastName: 'Brown', salary: 11000 },
        { id: 23, firstName: 'Karen', lastName: 'Taylor', salary: 12000 },
        { id: 24, firstName: 'Jack', lastName: 'Clark', salary: 13000 },
        { id: 25, firstName: 'Amy', lastName: 'Lee', salary: 14000 },
        { id: 26, firstName: 'David', lastName: 'Allen', salary: 15000 },
        { id: 27, firstName: 'Mary', lastName: 'Martin', salary: 16000 },
        { id: 28, firstName: 'Kevin', lastName: 'Scott', salary: 17000 },
        { id: 29, firstName: 'Emma', lastName: 'Young', salary: 18000 },
        { id: 30, firstName: 'Oliver', lastName: 'King', salary: 19000 },
],
      currentPage: 1,
      employeesPerPage: 6,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event)
    });
  }

  render() {
    const {employees, currentPage, employeesPerPage} = this.state;
    console.log(currentPage);
    console.log(employeesPerPage);


    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(employees.length / employeesPerPage); i++) {
      pageNumbers.push(i);
    }




    const pageLinks = [];
    for (let i = 1; i <= pageNumbers.length; i++) {
      pageLinks.push(
          <button key={i} onClick={(int)=>this.handleClick(i)}>
            {i}
          </button>
      );
    }

    const renderEmployees = currentEmployees.map(employee => {
      return (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.salary}</td>
          </tr>
      );
    });

    return (
        <div>
          <table>
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
            </tr>
            </thead>
            <tbody>
            {renderEmployees}
            </tbody>
          </table>
          <div>{pageLinks}</div>
        </div>
    );


  }
}

class Task4 extends React.Component {
  state = {
    cities: [], // масив міст, які додані до селекта
    selectedCity: '', // вибране місто
  };

  handleAddCity = () => {
    const { cities } = this.state;
    const newCity = this.cityInput.value;

    // Перевірка, чи таке місто вже додано до селекта
    if (!cities.includes(newCity)) {
      const newCities = [...cities, newCity];
      this.setState({ cities: newCities });
    }

    // Очистити поле вводу після додавання міста
    this.cityInput.value = '';
  };

  handleSelectCity = (event) => {
    this.setState({ selectedCity: event.target.value });
  };

  render() {
    const { cities, selectedCity } = this.state;

    return (
        <div>
          <div>
            <input
                type="text"
                placeholder="Введіть назву міста"
                ref={(input) => (this.cityInput = input)}
            />
            <button onClick={this.handleAddCity}>Додати місто</button>
          </div>

          <div>
            <select value={selectedCity} onChange={this.handleSelectCity}>
              <option value="">-- Виберіть місто --</option>
              {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
              ))}
            </select>
          </div>

          <div>
            <p>Вибране місто: {selectedCity}</p>
          </div>
        </div>
    );
  }
}


class Task5 extends React.Component {
  state = {
    amount: '',
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    convertedAmount: ''
  };

  handleAmountChange = event => {
    this.setState({ amount: event.target.value });
  };

  handleFromCurrencyChange = event => {
    this.setState({ fromCurrency: event.target.value });
  };

  handleToCurrencyChange = event => {
    this.setState({ toCurrency: event.target.value });
  };

  handleConvert = async () => {
    const { amount, fromCurrency, toCurrency } = this.state;

    // Fetch exchange rate from API
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const exchangeRate = data.rates[toCurrency];

    // Calculate converted amount
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    this.setState({ convertedAmount });
  };

  render() {
    const { amount, fromCurrency, toCurrency, convertedAmount } = this.state;

    return (
        <div>
          <h1>Currency Converter</h1>
          <div>
            <label>Amount:</label>
            <input type="number" value={amount} onChange={this.handleAmountChange} />
          </div>
          <div>
            <label>From:</label>
            <select value={fromCurrency} onChange={this.handleFromCurrencyChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <div>
            <label>To:</label>
            <select value={toCurrency} onChange={this.handleToCurrencyChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <button onClick={this.handleConvert}>Convert</button>
          <p>{convertedAmount ? `${convertedAmount} ${toCurrency}` : ''}</p>
        </div>
    );
  }
}



class Task6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [
        {
          question: 'Питання 1',
          answers: [
            'Відповідь1',
            'Відповідь2',
            'Відповідь3',
            'Відповідь4',
            'Відповідь5',
          ],
          right: 3,
        },
        {
          question: 'Питання 2',
          answers: [
            'Відповідь1',
            'Відповідь2',
            'Відповідь3',
            'Відповідь4',
            'Відповідь5',
          ],
          right: 2,
        },
        {
          question: 'Питання 3',
          answers: [
            'Відповідь1',
            'Відповідь2',
            'Відповідь3',
            'Відповідь4',
            'Відповідь5',
          ],
          right: 1,
        },
      ],
      userAnswers: [],
      showResult: false,
    };
  }

  handleAnswer = (event, questionIndex) => {
    const answerIndex = Number(event.target.value);
    const userAnswers = [...this.state.userAnswers];
    userAnswers[questionIndex] = answerIndex;
    this.setState({ userAnswers });
  };



  handleSubmit = () => {
    this.setState({ showResult: true });
  };

  render() {
    const { test, userAnswers, showResult } = this.state;
    return (
        <div>
          {test.map((question, index) => (
              <div key={index}>
                <p id = {question.question}>{question.question}</p>
                {question.answers.map((answer, index) => (
                    <label key={index}>
                      <input

                          type="radio"
                          name={`question-${index}`}
                          value={index}
                          onChange={(event) => this.handleAnswer(event, index)}
                          checked={userAnswers[index] === index}
                          disabled={showResult}
                      />
                      {answer}
                    </label>
                ))}
                {showResult && (
                    <div>
                      {userAnswers[index] === question.right ? (
                          <p style={{ color: 'green' }}>Вірно!</p>
                      ) : (

                          <p style={{ color: 'red' }}>Неправильно!</p>
                      )}
                    </div>
                )}
              </div>
          ))}
          <button onClick={this.handleSubmit}>Показати результат</button>
        </div>
    );
}
}





export default App;
