/**
 * Created by dom on 20.05.2017.
 */
import React, { Component } from  'react';
// import PropTypes from 'prop-types';


class Users extends Component {
    render() {
        return (
            <section className="users-section">
                <div key={this.props.item.id}>
                    <header>
                        <strong>
                            { this.props.item.name }
                        </strong>
                    </header>
                    <img src={this.props.item.image} alt=""/>

                    <p>
                        { this.props.item.email }
                    </p>
                    <span>{ this.props.item.bio }$</span>
                </div>
            </section>

        );
    }
}

// Users.propTypes = {
//     item:PropTypes.name({
//     name: PropTypes.string
// })
// };



export default Users;