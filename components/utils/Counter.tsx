"use client";

import { useEffect, useState } from "react";

function Counter({ value }: { value: number }) {
        const [count, setCount] = useState(0);

        useEffect(() => {
                let start = 0;
                const duration = 1200; // durée totale (ms)
                const increment = value / (duration / 16); // ~60fps

                const timer = setInterval(() => {
                        start += increment;

                        if (start >= value) {
                                start = value;
                                clearInterval(timer);
                        }

                        setCount(Math.floor(start));
                }, 16);

                return () => clearInterval(timer);
        }, [value]);

        return <span>{count}+</span>;
}

export default Counter;