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

        <div><Task6  list={items} /></div>        <br></br>

        <div><Task7 /></div>        <br></br>

        <div><Task8 /></div>        <br></br>
      </div>
  );
}

class UserTable extends  React.Component {
  render() {
    const { users } = this.props;

    return (
        <table>
          <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Вік</th>
          </tr>
          </thead>
          <tbody>
          {users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
              </tr>
          ))}
          </tbody>
        </table>
    );
  }
}


class Task1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { firstName: 'Іван', lastName: 'Іванов', age: 25 },
        { firstName: 'Петро', lastName: 'Петров', age: 30 },
        { firstName: 'Марія', lastName: 'Коваль', age: 28 },
      ],
    };
  }

  render() {
    const { users } = this.state;

    return (
        <div>
          <h1>Користувачі</h1>
          <UserTable users={users} />
        </div>
    );
  }
}
class UserTable1 extends React.Component {
  render() {
    return (
        <table>
          <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Вік</th>
            <th>Дія</th>
          </tr>
          </thead>
          <tbody>
          {this.props.users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>
                  <a href="#" onClick={() => this.props.showMessage()}>
                    Показати повідомлення
                  </a>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
    );
  }
}
class Task2 extends React.Component {
  state = {
    users: [
      { id: 1, firstName: 'Іван', lastName: 'Іванов', age: 30 },
      { id: 2, firstName: 'Петро', lastName: 'Петров', age: 25 },
      { id: 3, firstName: 'Марія', lastName: 'Коваль', age: 28 },
    ],
  };

  showMessage = () => {
    alert('!');
  };

  render() {
    return (
        <div>
          <h1>Користувачі</h1>
          <UserTable1 users={this.state.users} showMessage={this.showMessage} />
        </div>
    );
  }
}



class UserTable2 extends React.Component {
    handleClick = (name) => {
        this.props.onClick(`Ім'я користувача: ${name}`);
    };

    render() {
        const { users } = this.props;

        return (
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Вік</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.age}</td>
                        <td>
                            <a href="#" onClick={() => this.handleClick(user.name)}>
                                Показати ім'я
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}
class Task3 extends React.Component {
    showMessage = (message) => {
        alert(message);
    };

    render() {
        const users = [
            { id: 1, name: 'Іван', surname: 'Іванов', age: 25 },
            { id: 2, name: 'Петро', surname: 'Петров', age: 30 },
            { id: 3, name: 'Марія', surname: 'Коваленко', age: 22 },
        ];

        return (
            <div>
                <UserTable2 users={users} onClick={this.showMessage} />
            </div>
        );
    }

}

class Task4 extends React.Component {
    state = {
        users: [
            { name: 'John', surname: 'Doe', age: 25 },
            { name: 'Jane', surname: 'Doe', age: 30 },
            { name: 'Bob', surname: 'Smith', age: 40 }
        ]
    };

    showMessage = (num) => {
        alert(num);
    };

    handleClick = (num) => {
        return () => {
            this.showMessage(num);
        };
    };

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.age}</td>
                            <td>
                                <a href="#" onClick={this.handleClick(index)}>
                                    Show number
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


class Task5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
                { id: 2, firstName: 'Jane', lastName: 'Doe', age: 25 },
                { id: 3, firstName: 'Bob', lastName: 'Smith', age: 40 },
            ],
        };
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id) {
        const filteredUsers = this.state.users.filter((user) => user.id !== id);
        this.setState({ users: filteredUsers });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user) => (
                        <User
                            key={user.id}
                            user={user}
                            deleteUser={this.deleteUser}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

class User extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteUser(this.props.user.id);
    }

    render() {
        const { id, firstName, lastName, age } = this.props.user;
        return (
            <tr>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>
                    <a href="#" onClick={this.handleDelete}>
                        Delete
                    </a>
                </td>
            </tr>
        );
    }
}


const items = ['Item 1', 'Item 2', 'Item 3'];
class Task6 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: props.list, // масив елементів списку
            editableIndex: null, // індекс редагованого елементу
            editableValue: '', // значення редагованого елементу
        };
    }

    handleEdit = (index) => {
        this.setState({
            editableIndex: index,
            editableValue: this.state.list[index],
        });
    };

    handleInputChange = (event) => {
        this.setState({ editableValue: event.target.value });
    };

    handleInputBlur = () => {
        const { list, editableIndex, editableValue } = this.state;
        if (editableIndex !== null) {
            const newList = [...list];
            newList[editableIndex] = editableValue;
            this.setState({
                list: newList,
                editableIndex: null,
                editableValue: '',
            });
        }
    };

    render() {
        const { list, editableIndex, editableValue } = this.state;

        return (
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {editableIndex === index ? (
                            <input
                                type="text"
                                value={editableValue}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputBlur}
                            />
                        ) : (
                            <span>{item}</span>
                        )}
                        <a href="#" onClick={() => this.handleEdit(index)}>
                            Редагувати
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}

class Task7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { name: 'Product 1', price: 10, quantity: 2 },
                { name: 'Product 2', price: 20, quantity: 3 },
                { name: 'Product 3', price: 5, quantity: 10 },
            ],
        };
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    }

    handleDeleteProduct(index) {
        const products = this.state.products.slice();
        products.splice(index, 1);
        this.setState({ products });
    }

    render() {
        const { products } = this.state;

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <ProductRow
                        key={index}
                        index={index}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        onDeleteProduct={this.handleDeleteProduct}
                    />
                ))}
                </tbody>
            </table>
        );
    }
}

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick() {
        const { index, onDeleteProduct } = this.props;
        onDeleteProduct(index);
    }

    render() {
        const { name, price, quantity } = this.props;
        const total = price * quantity;

        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{total}</td>
                <td>
                    <button onClick={this.handleDeleteClick}>Delete</button>
                </td>
            </tr>
        );
    }
}





class Product extends React.Component {
    handleDelete = () => {
        const { onDelete, product } = this.props;
        onDelete(product);
    };

    render() {
        const { name, price, quantity } = this.props.product;
        const total = price * quantity;
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{total}</td>
                <td>
                    <button onClick={this.handleDelete}>Видалити</button>
                </td>
            </tr>
        );
    }
}

class ProductForm extends React.Component {
    state = {
        name: '',
        price: '',
        quantity: '',
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { name, price, quantity } = this.state;
        const product = { name, price, quantity };
        this.props.onSubmit(product);
        this.setState({ name: '', price: '', quantity: '' });
    };

    render() {
        const { name, price, quantity } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Назва товару:
                    <input type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
                <label>
                    Ціна:
                    <input type="number" name="price" value={price} onChange={this.handleChange} />
                </label>
                <label>
                    Кількість:
                    <input type="number" name="quantity" value={quantity} onChange={this.handleChange} />
                </label>
                <button type="submit">Додати товар</button>
            </form>
        );
    }
}

class Task8 extends React.Component {
    state = {
        products: [],
    };

    handleAddProduct = product => {
        this.setState(prevState => ({
            products: [...prevState.products, product],
        }));
    };

    handleDeleteProduct = product => {
        this.setState(prevState => ({
            products: prevState.products.filter(p => p !== product),
        }));
    };

    render() {
        const { products } = this.state;
        return (
            <div>
                <h2>Таблиця продуктів</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Назва</th>
                        <th>Ціна</th>
                        <th>Кількість</th>
                        <th>Загальна вартість</th>
                        <th>Дії</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <Product key={product.name} product={product} onDelete={this.handleDeleteProduct} />
                    ))}
                    </tbody>
                </table>
                <ProductForm onSubmit={this.handleAddProduct} />
                <TotalPrice products={this.state.products} />
            </div>
        );
    }
}

function TotalPrice(props) {
    const totalPrice = props.products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
    return <div>Total Price: {totalPrice}</div>;
}




export default App;
