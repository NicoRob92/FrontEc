
const FormProductDescription = ({ nextStep, prevStep, handleChange, handleBlur, input }) => {
    const continues = e => {
        e.preventDefault()
        nextStep()
    }

    const back = e => {
        e.preventDefault()
        prevStep()
    }
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label">Choose Category</label>
                    <select className="form-select" name="categoryId" defaultValue={input.categoryId} onBlur={handleBlur} onChange={handleChange}>
                        <option hidden>Open this select menu</option>
                        <option /* id of each category */ value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Condition</label>
                    <select className="form-select" name="condition" defaultValue={input.condition} onBlur={handleBlur} onChange={handleChange}>
                        <option hidden>Open this select menu</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input type="number" className="form-control" name="stock" defaultValue={input.stock} onBlur={handleBlur} onChange={handleChange} />
                    <div className="form-text">Amount of products you have on stock</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Default file input example</label>
                    <input className="form-control" type="file" name="images" defaultValue={input.images} onBlur={handleBlur} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" defaultValue={input.description} onBlur={handleBlur} onChange={handleChange} />
                    <div className="form-text">Give a brief description of your product</div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input type="number" className="form-control" name="price" defaultValue={input.price} onBlur={handleBlur} onChange={handleChange} />
                </div>
                <button className="btn btn-primary" onClick={continues}>Continue</button>
                <button className="btn btn-light" onClick={back}>Back</button>
            </form>
        )
    }

export default FormProductDescription