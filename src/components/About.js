import React from 'react';
import { useLocation } from "react-router";

export default function About() {
    const location = useLocation();
    console.log(location);
    return (
        <h1>About</h1>
    )
}
