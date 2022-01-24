import { Component } from "react"

export default class FormProductDetail extends Component {
    continues = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values, handleBlur, handleChange } = this.props
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={values.title} onBlur={handleBlur} onChange={handleChange} />
                    <div className="form-text">This will be the title, please indicate product, brand and model, ex. Google Pixel 6 Pro 128GB white</div>
                </div>
                <button className="btn btn-primary" onClick={this.continues}>Continue</button>
            </form>
        )
    }
}
