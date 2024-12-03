function BillInput({input, setInput}) {
    return (
        <div>
            How much was the bill ?
            <input type="text" value={input === null ? "" : input} onChange={(e) => setInput(e.target.value)} /> 
        </div>
    )
}

export default BillInput;