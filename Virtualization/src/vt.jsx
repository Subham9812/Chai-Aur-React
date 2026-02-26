import { useState } from "react";

function vt({list, height, itemHeight}) {
    const noOfVisibleItems = Math.floor(height/itemHeight) + 3;

    const [indises, setIndises] = useState([0, noOfVisibleItems]);

    const visibleList = list.slice(indises[0], indises[1]);

    const handleScroll = (event) => {
        const {scrollTop} = event.target
        const newStartingIndix = Math.floor(scrollTop / itemHeight);
        const endIndex = newStartingIndix + noOfVisibleItems;
        setIndises([newStartingIndix, endIndex])
        // console.log(newStartingIndix, endIndex)
    }
    return (
        <>
            <div style={{
                height: height,
                backgroundColor: "gray",
                overflowY: 'auto'
            }} onScroll={handleScroll}>
                <div style={{
                    height: list.length * itemHeight,
                }}>
                    <div style={{
                        transform: `translateY(${indises[0] * itemHeight}px)`
                    }}>
                        {visibleList.map((item) => {
                            return (
                                <p style={{
                                    height: itemHeight,
                                    borderBottom: '1px solid black'
                                }} key={item}>item - {item}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default vt;