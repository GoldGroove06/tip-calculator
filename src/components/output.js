function Output({tip, bill}) {
    return(
        <div>
            You pay ${Number(bill) + tip} (${bill} + ${tip}) tip
        </div>
    )
}

export default Output;