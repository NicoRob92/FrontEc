import { Component } from "react"

export default class FormProductDetail extends Component {
    continues = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values, handleChange } = this.props
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" defaultValue={values.title} onChange={handleChange('title')} />
                    <div className="form-text">This will be the title, please indicate product, brand and model, ex. Google Pixel 6 Pro 128GB white</div>
                </div>
                <button className="btn btn-primary" onClick={this.continues}>Continue</button>
            </form>
        )
    }
}


