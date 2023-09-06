// Chart terminal 1 start
const options = {
    chart: {
        type: "donut",
        width: 550
    },
    colors: ["#3E97FF", "#50CD89", "#F1416C", "#7239EA"],
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '9px',
                        fontFamily: 'Rubik',
                        color: '#dfsda',
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return val
                        }
                    },
                    total: {
                        show: true,
                        label: 'Total Permit',
                        color: '#A1A5B7',
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b
                            }, 0)
                        }
                    }
                }
            }
        }
    },
    series: [45, 34, 32, 23],
    labels: ['Daily pass application - Malaysian', 'Daily pass application - Foreigner', 'Permanent pass application - Malaysian', 'Permanent pass application - Foreigner'],
    legend: {
        show: true,
        formatter: function (seriesName, opts) {
            return [seriesName, "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ", opts.w.globals.series[opts.seriesIndex]]
        }
    }
};
const permit_chart = new ApexCharts(document.querySelector("#permit_chart"), options);
permit_chart.render();

const permit_status = {
    chart: {
        type: "donut",
    },
    colors: ["#50CD89", "#A1A5B7", "#FAA61A"],
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        pie: {
            donut: {
                size: 55,
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '9px',
                        fontFamily: 'Rubik',
                        color: '#dfsda',
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return val
                        }
                    }
                }
            }
        }
    },
    series: [63, 34, 32],
    labels: ['Applied', 'Pending Review', 'Pending Approval'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left'

    }
};
const status_chart = new ApexCharts(document.querySelector("#permit_status"), permit_status);
status_chart.render();

const overview_option = {
    series: [{
        name: 'Approved',
        data: [60, 70, 80, 100]
    }, {
        name: 'Rejected',
        data: [60, 70, 80, 100]
    }, {
        name: 'Pending',
        data: [60, 70, 80, 100]
    }],
    chart: {
        type: 'bar',
        height: 260,
        toolbar: {
            show: false
        },
    },
    colors: ["#50CD89", "#F1416C", "#F6C000"],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '8px',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Daily pass - Malaysian', 'Daily pass - Foreigner', 'Permanent pass - Malysian', 'Permanent pass - Foreigner']
    },
    fill: {
        opacity: 1
    }
};

const overview_chart = new ApexCharts(document.querySelector("#overview_chart"), overview_option);
overview_chart.render();
// Chart terminal 1 end


// Chart terminal 1 start
const totalGrafOptions = {
    series: [{
        name: "Penalty",
        data: [0.6, 0.8, 0.8, 0.6, 0.6, 0.7, 0.7, 1, 1, 1, 1.2]
    }, {
        name: "Planned",
        data: [0.7, 0.9, 0.9, 0.7, 0.7, 0.8, 0.8, 1.1, 1.1, 1.1, 1.3]
    }, {
        name: "Hourly",
        data: [0.7, 1, 1, 0.8, 0.8, 0.9, 0.9, 1.2, 1.2, 1.2, 1.4]
    }],
    colors: ["#50CD89", "#0078C1", "#E9B500"],
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    plotOptions: {
        stroke: {
            show: true,
            width: 1,
            dashArray: 0,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    },
    legend: {
        show: true,
        position: 'bottom',
        formatter: function (seriesName, opts) {
            return ["<span class='", seriesName, "'>", seriesName, "<small>RM0.00</small> </span> "]
        }
    }
};

var totalGraf = new ApexCharts(document.querySelector("#total_graf"), totalGrafOptions);
totalGraf.render();


const totalPieOptions = {
    chart: {
        type: "donut",
    },
    colors: ["#50CD89", "#3E97FF", "#F1F1F2", "#FAA61A"],
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            donut: {
                size: 55
            }
        }
    },
    series: [63, 34, 32, 22],
    labels: ['Today', 'Week', 'Month', 'Year'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        formatter: function (seriesName, opts) {
            return ["<span class='grey'>", seriesName, " </span> <span class='grey'> -------------------- </span>", "<strong>RM", opts.w.globals.series[opts.seriesIndex], "</strong>"]
        }
    }
};
const totalPie = new ApexCharts(document.querySelector("#total_pie"), totalPieOptions);
totalPie.render();


// Chart terminal 1 end