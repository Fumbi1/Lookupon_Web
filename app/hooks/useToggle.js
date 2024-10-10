"use client"
import { useState } from "react";

const useToggle = () => {
    const [toggle,  setToggle] = useState(false);
    const [toggle2,  setToggle2] = useState(false);

    const switch1 =  () => {
        setToggle(!toggle);
    }

    const switch2 = () => {
        setToggle2(!toggle2);
    }

    return {
        switch1,
        switch2,
        toggle,
        toggle2
    };
}

export default useToggle;