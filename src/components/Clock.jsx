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
        <div className="font-mono text-sm tracking-widest tabular-nums text-slate-500 dark:text-slate-500">
            {time.toLocaleTimeString('en-GB', { hour12: false })}
        </div>
    );
};

export default Clock;
