import React, { useContext } from "react";
import { MyContext, useMyContext } from "../MyContext";

function F() {
    // const data = useContext(MyContext);
    const {setCount} = useMyContext();

    return (
        <div className="bg-fuchsia-600 p-10">
            <button onClick={() => setCount(prev => prev+1)}>click me</button>
            F
        </div>
    )
}

export default F;