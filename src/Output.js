function Output({ bill, myTip, friendTip}) {
  
    const tip = bill * (myTip + friendTip) /2 /100;
    const total = bill + tip;

    return (
        <div>
            <label>Total</label>
            <h3> You pay ${total} (${bill} + ${tip})</h3>
        </div>
    );
}

export default Output;