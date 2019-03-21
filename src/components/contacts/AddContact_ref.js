import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }


    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log('contact', contact)
    }

    static defaultProps = {
        name: 'Fred Smith',
        email: 'fred@yahoo.com',
        phone: '777-777-7777'
    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                <div className="card-body">
                    <form action="" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" defaultValue={name}
                                className="form-control form-control-lg"
                                placeholder="Enter Name.." ref={this.nameInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" defaultValue={email}
                                className="form-control form-control-lg"
                                placeholder="Enter Email.." ref={this.emailInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" defaultValue={phone}
                                className="form-control form-control-lg"
                                placeholder="Enter Phone.." ref={this.phoneInput} />
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-block btn-light" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;
