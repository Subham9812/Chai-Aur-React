import React, { useEffect } from "react";
import useMyStore from "../store";

const Navbar = () => {
    // Approach -1
    // const state = useMyStore()
    // console.log(state.count)
    // const handleClick = () => {
    //     state.Increament();
    // }
    // const handleNameClick = () => {
    //     state.capitalize()
    // }
    // Approach -2
    // const {count, name, capitalize, Increament} = useMyStore();

    // useEffect(() => {
    //     console.log("re render hu kya", count)
    // })
    // Approach -3  // choose subscription of state carefully
    const count = useMyStore((state) => (state.count));
    // const name = useMyStore(bala => bala.name); 
    const capitalize = useMyStore(kalu => kalu.capitalize);
    const Increament = useMyStore(balu => balu.Increament);

    useEffect(() => {
        console.log("re render hu kya", count);
    })
    return (
        <>
        <div>
            Navbar
            {/* These all are for Approach -1 */}
            {/* <p>{state.count}</p>
            <p>{state.name}</p>
            <button onClick={handleClick}>Increament</button>
            <button onClick={handleNameClick}>Capitalize</button> */}

            {/* These all are for Approach -2 */}
            <p>{count}</p>
            {/* <p>{name}</p> */}
            <button onClick={Increament}>Increament</button>
            <button onClick={capitalize}>Capitalize</button>
        </div>
        </>
    )
}

export default Navbar;