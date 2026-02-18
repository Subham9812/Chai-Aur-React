import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(info => {
    //         console.log(info);
    //         setData(info);
    //     })
    // }, [])
    return (
        <>
            <div className="bg-gray-600 text-3xl text-white m-4 p-4 text-center">Github Followers: {data.followers}
                <img src="{data.avatar_url}" alt="gitpic" width={300} />
            </div>
        </>
    )
}

export default GitHub;

export const githubInfoLoader = async () => {
    // const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const response = await fetch('https://api.github.com/users/Subham9812')
    return response.json();
}