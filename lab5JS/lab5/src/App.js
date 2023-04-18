import './App.css';
import React from "react";

import moment from 'moment';
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

      </div>
  );
}

class Task1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
        <div>
          <textarea onChange={this.handleChange} />
          <p>{this.state.value}</p>
        </div>
    );
  }
}


class Task2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  handleCheckboxChange = (event) => {
    this.setState({ isChecked: event.target.checked });
  }

  render() {
    return (
        <div>
          <input type="checkbox" onChange={this.handleCheckboxChange} />
          <p>Стан чекбоксу: {this.state.isChecked ? 'вибрано' : 'не вибрано'}</p>
        </div>
    );
  }
}

class Task3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(event) {
    this.setState({ isVisible: event.target.checked });
  }

  render() {
    return (
        <div>
          <input type="checkbox" onChange={this.handleCheckboxChange} />
          <p style={{ display: this.state.isVisible ? 'block' : 'none' }}>
            Якийсь текст
          </p>
        </div>
    );
  }

}

class Task4 extends React.Component {
  state = {
    cities: [
      { value: 'kyiv', label: 'Київ' },
      { value: 'lviv', label: 'Львів' },
      { value: 'odesa', label: 'Одеса' },
      { value: 'kharkiv', label: 'Харків' },
      { value: 'dnipro', label: 'Дніпро' },
    ],
    selectedCity: '',
  };

  handleCityChange = (event) => {
    this.setState({ selectedCity: event.target.value });
  };

  render() {
    return (
        <div>
          <select value={this.state.selectedCity} onChange={this.handleCityChange}>
            {this.state.cities.map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
            ))}
          </select>
          <p>Ви обрали місто: {this.state.selectedCity}</p>
        </div>
    );
  }
}

class Task5 extends React.Component {
  state = {
    selectedOption: ""
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    return (
        <div>
          <label>
            <input
                type="radio"
                value="1"
                checked={this.state.selectedOption === "1"}
                onChange={this.handleOptionChange}
            />
            Option 1
          </label>
          <label>
            <input
                type="radio"
                value="2"
                checked={this.state.selectedOption === "2"}
                onChange={this.handleOptionChange}
            />
            Option 2
          </label>
          <label>
            <input
                type="radio"
                value="3"
                checked={this.state.selectedOption === "3"}
                onChange={this.handleOptionChange}
            />
            Option 3
          </label>
          <p>Selected option: {this.state.selectedOption}</p>
        </div>
    );
  }
}



class Task6 extends React.Component {
    state = {
        texts: []
    };

    handleButtonClick = () => {
        const textAreaValue = document.getElementById('textArea').value;
        this.setState(prevState => ({
            texts: [...prevState.texts, textAreaValue]
        }));
    };

    render() {
        return (
            <div>
                <textarea id="textArea"></textarea>
                <button onClick={this.handleButtonClick}>Додати текст</button>
                {this.state.texts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        );
    }
}

class Task7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: 'black'
        };
    }

    handleColorChange = (event) => {
        this.setState({ selectedColor: event.target.value });
    }

    render() {
        const { selectedColor } = this.state;

        return (
            <div>
                <select value={selectedColor} onChange={this.handleColorChange}>
                    <option value="black">Чорний</option>
                    <option value="red">Червоний</option>
                    <option value="green">Зелений</option>
                    <option value="blue">Синій</option>
                </select>
                <p style={{ color: selectedColor }}>Цей текст змінить колір відповідно до вибраного вами кольору.</p>
            </div>
        );
    }
}

class Task8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            selectValue: '',
        };
    }

    handleSelectChange = (event) => {
        this.setState({ selectValue: event.target.value }, this.toggleCheckbox);
    };

    toggleCheckbox = () => {
        this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
    };

    render() {
        const { isChecked, selectValue } = this.state;
        return (
            <div>
                <label>
                    <select value={selectValue} onChange={this.handleSelectChange}>
                        <option value="not-selected">Не позначено</option>
                        <option value="selected">Позначено</option>
                    </select>
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={this.toggleCheckbox}
                    />
                    {isChecked ? 'Позначено' : 'Не позначено'}
                </label>
            </div>
        );
    }
}

class Task9 extends React.Component {
    state = {
        selectedOption: '',
    }

    handleSelectChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    }

    render() {
        let selectedParagraph;
        if (this.state.selectedOption === 'first') {
            selectedParagraph = <p>Перший абзац</p>;
        } else if (this.state.selectedOption === 'second') {
            selectedParagraph = <p>Другий абзац</p>;
        } else if (this.state.selectedOption === 'third') {
            selectedParagraph = <p>Третій абзац</p>;
        }

        return (
            <div>
                <select onChange={this.handleSelectChange}>
                    <option value="">Виберіть абзац</option>
                    <option value="first">Перший абзац</option>
                    <option value="second">Другий абзац</option>
                    <option value="third">Третій абзац</option>
                </select>
                {selectedParagraph}
            </div>
        );
    }
}
class Task10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            selectOptions: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
            ],
            selectedOption: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    }

    handleButtonClick = () => {
        const { selectOptions, inputText } = this.state;
        const newOption = { value: inputText, label: inputText };
        this.setState({
            selectOptions: [...selectOptions, newOption],
            selectedOption: inputText,
            inputText: '',
        });
    }

    handleSelectChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    }

    render() {
        const { inputText, selectOptions, selectedOption } = this.state;

        return (
            <div>
                <input type="text" value={inputText} onChange={this.handleInputChange} />
                <button onClick={this.handleButtonClick}>Add Option</button>
                <select value={selectedOption} onChange={this.handleSelectChange}>
                    {selectOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        );
    }
}
class Task11 extends React.Component {

    state = {
        isInputEnabled: false
    };

    handleCheckboxChange = () => {
        this.setState(prevState => ({
            isInputEnabled: !prevState.isInputEnabled
        }));
    };

    render() {
        const { isInputEnabled } = this.state;

        return (
            <div>
                <label>
                    <input type="checkbox" onChange={this.handleCheckboxChange} />
                    Checkbox
                </label>
                <br />
                <input type="text" disabled={!isInputEnabled} />
            </div>
        );
    }
}



class Task12 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDate: moment(),
            days: Array.from({ length: 31 }, (_, i) => i + 1),
            months: moment.months(),
            years: Array.from({ length: 50 }, (_, i) => moment().year() - i)
        };

        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }

    handleDayChange(event) {
        const day = event.target.value;
        const selectedDate = this.state.selectedDate.date(day);
        this.setState({ selectedDate });
    }

    handleMonthChange(event) {
        const month = event.target.value;
        const selectedDate = this.state.selectedDate.month(month);
        this.setState({ selectedDate });
    }

    handleYearChange(event) {
        const year = event.target.value;
        const selectedDate = this.state.selectedDate.year(year);
        this.setState({ selectedDate });
    }

    render() {
        const { selectedDate, days, months, years } = this.state;
        const dayOfWeek = selectedDate.format('dddd');

        return (
            <div>
                <select value={selectedDate.date()} onChange={this.handleDayChange}>
                    {days.map(day => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select value={selectedDate.month()} onChange={this.handleMonthChange}>
                    {months.map((month, index) => (
                        <option key={month} value={index}>
                            {month}
                        </option>
                    ))}
                </select>
                <select value={selectedDate.year()} onChange={this.handleYearChange}>
                    {years.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <p>Day of week: {dayOfWeek}</p>
            </div>
        );
    }
}







export default App;
