import { Component } from 'react';

export default class Success extends Component {
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
        return (
            <div className='card'>
                <div class="card-body">
                    <h2 className="card-title">Thank You For Submission</h2>
                    <p className="card-text">You will get and email confirmation about your product</p>
                </div>
            </div>
        )
    }
}
