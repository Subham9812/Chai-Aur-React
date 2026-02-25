import React from "react";
import { useMyContext } from "../MyContext";

function C() {
    const {count} = useMyContext()
    return (
        <div className="bg-amber-300 p-10">
            <h1>{count}</h1>
            C
        </div>
    )
}

export default C;