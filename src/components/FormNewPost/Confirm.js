import { Component } from 'react';

export default class Confirm extends Component {
    continues = e => {
        e.preventDefault()
        this.props.nextStep()
        // dispatch the action
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values: { title, category, condition, amount, photos, description, price } } = this.props
        return (
            <form>
                <ul className="list-group">
                    <li className="list-group-item" name="title" >{title}</li>
                    <li className="list-group-item" name="category" >{category}</li>
                    <li className="list-group-item" name="condition" >{condition}</li>
                    <li className="list-group-item" name="amount" >{amount}</li>
                    <li className="list-group-item" name="photos" >{photos}</li>
                    <li className="list-group-item" name="description" >{description}</li>
                    <li className="list-group-item" name="price" >{price}</li>
                </ul>
                <button type="submit" className="btn btn-primary" onClick={this.continues}>Confirm & Continue</button>
                <button className="btn btn-light" onClick={this.back}>Back</button>
            </form>
        )
    }
}
