import {Controller} from "@hotwired/stimulus";

export default class extends Controller{
    onChartConnect(event) {
        this.chart = event.detail.chart;

        this.changeDataSets();
    }

    changeDataSets(){
        setTimeout(() => {this.setNewData(); this.changeDataSets()}, 2000)
    }

    setNewData() {
        const newNumber = Math.floor(Math.random() * 50) + 1;
        this.chart.data.datasets[0].data[Math.floor(Math.random() * (this.chart.data.datasets[0].data.length))] = newNumber;
        this.chart.update();
    }
}