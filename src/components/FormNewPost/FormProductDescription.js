const FormProductDescription = ({ newStep, prevStep, handleChange, values }) => {
    const continues = e => {
        e.preventDefault()
        newStep()
    }

    const back = e => {
        e.preventDefault()
        prevStep()
    }

    return (
        <form>
            <div className="mb-3">
            <label className="form-label">Choose Category</label>
            <select class="form-select" defaultValue={values.category}>
                <option hidden>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>
            <div className="mb-3">
            <label className="form-label">Condition</label>
            <select class="form-select" defaultValue={values.condition}>
                <option hidden>Open this select menu</option>
                <option value="1">New</option>
                <option value="2">Used</option>
            </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Amount</label>
                <input type="number" className="form-control" onChange={e => handleChange(e)} defaultValue={values.amount} />
                <div className="form-text">Amount of products you have on stock</div>
            </div>
            <div className="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input className="form-control" type="file" id="formFile" onChange={e => handleChange(e)} defaultValue={values.photos} />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" onChange={e => handleChange(e)} defaultValue={values.description} />
                <div className="form-text">Give a brief description of your product</div>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input type="text" className="form-control" onChange={e=> handleChange(e)} defaultValue={values.price}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={continues}>Submit</button>
            <button type="submit" className="btn btn-light" onClick={back}>Back</button>
        </form>
    )
}

export default FormProductDescription;