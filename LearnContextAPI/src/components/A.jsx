import React from "react";
import C from "./C";
import D from "./D";
import { useMyContext } from "../MyContext";

function A() {
    const {count} = useMyContext();
    return (
        <div className="bg-amber-800 p-10">
            <h2>{count}</h2>
            A
            <C/>
            <D/>
        </div>
    )
}

export default A;