import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";
import { useState } from "react";

function TipCalculator() {
    const [bill, setBill] = useState('');
    const [myTip, setMyTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);

    function resetValues() {
        setBill(0);
        setMyTip(0);
        setFriendTip(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <SelectPercentage tip={myTip} act={setMyTip} > How did you like the service ? </SelectPercentage>
            <SelectPercentage tip={friendTip} act={setFriendTip} > How did your friend like the service ?</SelectPercentage>
            {
                bill > 0 && 
                <>
                    <Output bill={bill} myTip={myTip} friendTip={friendTip} />
                    <Reset act={resetValues} />
                </>
            }


        </div>
    );
}

export default TipCalculator;