import { Component } from "react"

export default class FormProductDescription extends Component {
    continues = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const { values, handleBlur, handleChange } = this.props
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label">Choose Category</label>
                    <select className="form-select" name="category" defaultValue={values.category} onBlur={handleBlur} onChange={handleChange}>
                        <option hidden>Open this select menu</option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Condition</label>
                    <select className="form-select" name="condition" defaultValue={values.condition} onBlur={handleBlur} onChange={handleChange}>
                        <option hidden>Open this select menu</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Amount</label>
                    <input type="number" className="form-control" name="amount" defaultValue={values.amount} onBlur={handleBlur} onChange={handleChange} />
                    <div className="form-text">Amount of products you have on stock</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Default file input example</label>
                    <input className="form-control" type="file" name="photos" defaultValue={values.photos} onBlur={handleBlur} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" defaultValue={values.description} onBlur={handleBlur} onChange={handleChange} />
                    <div className="form-text">Give a brief description of your product</div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input type="number" className="form-control" name="price" defaultValue={values.price} onBlur={handleBlur} onChange={handleChange} />
                </div>
                <button className="btn btn-primary" onClick={this.continues}>Continue</button>
                <button className="btn btn-light" onClick={this.back}>Back</button>
            </form>
        )
    }
}