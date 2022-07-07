const DropDownList = () => {
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className='DropDownList'>
            <select onChange={(e) => handleChange(e)} className="btn btn-secondary dropdown-toggle">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select className="btn btn-secondary dropdown-toggle" style={{marginLeft: "15px"}}>
                <option selected>Open this select menu</option>
                <option value="4">One</option>
                <option value="5">Two</option>
                <option value="6">Three</option>
            </select>

        </div>
    );
};

export default DropDownList;