import { useState, createRef, useEffect } from 'react'
import * as Plot from "@observablehq/plot";
const WEEK: number = 7;
interface Record {
    Date: Date,
    Dollars: number,
}
interface AppProps {
    data: Record[];
}

function Chart(props: AppProps) {
    const divRef = createRef<HTMLDivElement>();
    const [data, setData] = useState(props.data);
    const weekKey = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    useEffect(() => {
        if (data === undefined) return;
        const chart = Plot.plot({
            style: {
                background: "white",
                color: "blue"
            },

            x: {
                round: true,
                label: "Date"
            },

            y: {
                grid: true,
                label: "Dollars"
            },

            color: {
                type: "diverging",
                scheme: "burd"
            },

            marks: [
                Plot.line(props.data, { y: "Dollars", x: "Date" }),
                Plot.ruleY([0])
            ]
        });
        divRef.current.append(chart);
        return () => chart.remove();
    }, [data])
    return (
        <div ref={divRef}>
        </div>
    )
}

export default Chart