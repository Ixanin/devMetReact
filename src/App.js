import React, {Component} from 'react';
import Users from './components/UsersList'
import faker from 'faker';
import './App.css';

class App extends Component {
    state = {
        users: [
            {
                name: faker.name.findName(),
                id: faker.random.uuid(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                bio: faker.lorem.sentence(),
                image: faker.image.avatar(),
                isFav: faker.random.boolean()
            },
            {
                name: faker.name.findName(),
                id: faker.random.uuid(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                bio: faker.lorem.sentence(),
                image: faker.image.avatar(),
                isFav: faker.random.boolean()
            },
            {
                name: faker.name.findName(),
                id: faker.random.uuid(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                bio: faker.lorem.sentence(),
                image: faker.image.avatar(),
                isFav: faker.random.boolean()
            },
            {
                name: faker.name.findName(),
                id: faker.random.uuid(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                bio: faker.lorem.sentence(),
                image: faker.image.avatar(),
                isFav: faker.random.boolean()
            },
            {
                name: faker.name.findName(),
                id: faker.random.uuid(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                bio: faker.lorem.sentence(),
                image: faker.image.avatar(),
                isFav: faker.random.boolean()
            }
        ],
        filterName: ''
    };

    searchByNameAsc = () => {
        this.setState(previousState => {
            const users = previousState.users.sort(function (a, b) {
                return a.name > b.name;
            });
            return users;
        })
    };

    searchByNameDe = event => {
        this.setState(previousState => {
            const users = previousState.users.sort(function (a, b) {
                return a.name < b.name;
            });
            return users;
        })
    };

    filterResults = (e) => {
        const val = e.target.value.toUpperCase();
        this.setState({
            filterName: val
        });
    };

    render() {
        return (
            <section>
                <button className="btn btn-default" onClick={ this.searchByNameAsc }>
                    sortby name asc
                </button>
                <button onClick={ this.searchByNameDe }>
                    sortby desc
                </button>

                <input type="text" onChange={this.filterResults}/>
                <h1>Users</h1>
                { this.state.users
                    .filter(user => -1 !== JSON.stringify(user).toUpperCase().indexOf(this.state.filterName))
                    .filter(user => !user.isFav)
                    .map(user =>
                        <Users key={ user.id }
                               item={ user }/>
                    ) }

                <h2>Favourites </h2>
                { this.state.users
                    .filter(user => -1 !== JSON.stringify(user).toUpperCase().indexOf(this.state.filterName))
                    .filter(user => user.isFav)
                    .map(user =>
                        <Users key={ user.id }
                               item={ user }/>
                    ) }
            </section>
        );
    }
}

export default App;
