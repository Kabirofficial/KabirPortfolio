import { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-mono text-sm tracking-widest uppercase tabular-nums">
            {time.toLocaleTimeString('en-GB', { hour12: false })}
        </div>
    );
};

export default Clock;
