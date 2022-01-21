
const FormProductDetail = ({ newStep, handleChange, values }) => {
    const continues = e => {
        e.preventDefault()
        newStep()
    }

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" onChange={e=>handleChange(e)} defaultValue={values.title} />
                <div className="form-text">This will be the title, please indicate product, brand and model, ex. Google Pixel 6 Pro 128GB white</div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={continues}>Submit</button>
        </form>
    )
}

export default FormProductDetail;
