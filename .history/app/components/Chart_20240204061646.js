
'use client'

import { AreaChartPlot } from "./dashboard/AreaChart";

const Charts = () => {
    return (
        <>

            <div className="w-1/2 h-[300px] bg-gray-700 rounded">
                <AreaChartPlot />
            </div>

        </>
    )
};

export default Charts;