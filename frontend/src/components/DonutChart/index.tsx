import { SaleSum } from '../../types/sale';
import Chart from 'react-apexcharts';


type ChartData = {
    series: string[],
    labels:number[]
}



const DonutChart = ()=>{


let chartData : ChartData = { labels: [], series: []};

const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Zeze', 'Huguinho', 'Kal-El', 'Logan', 'Padmé']
}

const options = {
    legend: {
        show: true
    }
}
return(  
	<Chart
        options={{...options, labels: chartData.labels}}
        series={chartData.series}
        type="donut"
        height="240"
	/>  )

}
export default DonutChart;