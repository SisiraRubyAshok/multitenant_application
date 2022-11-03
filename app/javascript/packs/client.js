import Highcharts from 'highcharts'



alert("hello");
    $(function() {
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart-container1',
                type: 'pie'
            },
            
            plotOptions: {
                pie: {
                    shadow: true
                }
            },
            plotOptions: {
                    solidgauge: {
                        borderColor: '#009CE8',
                        borderWidth: 40,
                        radius: 90,
                        innerRadius: '90%',
                        dataLabels: {
                            y: 5,
                            borderWidth: 0,
                            format: '{y}%',
                            useHTML: true
                        }
                    }
                },
                title: {
                     text: '60',
                     align: 'center',
                     verticalAlign: 'middle',
                     color: 'black'
                    },
                pane: {
                    size: '100%',
                    center: ['50%', '60%'],
                    startAngle: -130,
                    endAngle: 130,
                    background: {
                    borderWidth: 20,
                    backgroundColor: '#DBDBDB',
                    shape: 'arc',
                    borderColor: '#DBDBDB',
                        outerRadius: '90%',
                        innerRadius: '90%'
                    }
                },
            colors: [
                '#00ff00'
            ],
            series: [{
                name: 'Projects',
                data: [["Total",60]],
                size: '100%',
                y:60,
                innerSize: '85%',
                format: '{y}%',
                showInLegend:false,
                dataLabels: {
                    enabled: false
                }
            }],
            
        });
    });
    
    $(function() {
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart-container2',
                type: 'pie'
            },
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    shadow: true
                }
            },
            plotOptions: {
                    solidgauge: {
                        borderColor: '#009CE8',
                        borderWidth: 40,
                        radius: 90,
                        innerRadius: '90%',
                        dataLabels: {
                            y: 5,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                },
                 title: {
                     text: '20',
                     align: 'center',
                     verticalAlign: 'middle',
                     color: 'black'
                    },
                pane: {
                    size: '100%',
                    center: ['50%', '60%'],
                    startAngle: -130,
                    endAngle: 130,
                    background: {
                    borderWidth: 20,
                    backgroundColor: '#DBDBDB',
                    shape: 'arc',
                    borderColor: '#DBDBDB',
                        outerRadius: '90%',
                        innerRadius: '90%'
                    }
                },
            colors: [
                '#3366ff'
            ],
            series: [{
                name: 'Clients',
                data: [["Total",100]],
                size: '100%',
                innerSize: '85%',
                showInLegend:false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    });
    
     $(function() {
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart-container3',
                type: 'pie'
            },
            title: {
                text: ''
            },
            plotOptions: {
                pie: {
                    shadow: true
                }
            },
            plotOptions: {
                    solidgauge: {
                        borderColor: '#009CE8',
                        borderWidth: 40,
                        radius: 90,
                        innerRadius: '90%',
                        dataLabels: {
                            y: 5,
                            borderWidth: 0,
                            useHTML: true
                        }
                    }
                },
                 title: {
                     text: '100',
                     align: 'center',
                     verticalAlign: 'middle',
                     color: 'black'
                    },
                pane: {
                    size: '100%',
                    center: ['50%', '60%'],
                    startAngle: -130,
                    endAngle: 130,
                    background: {
                    borderWidth: 20,
                    backgroundColor: '#DBDBDB',
                    shape: 'arc',
                    borderColor: '#DBDBDB',
                        outerRadius: '90%',
                        innerRadius: '90%'
                    }
                },
            colors: [
                'red'
            ],
            series: [{
                name: 'Invoice Generated',
                data: [["Total",100]],
                size: '100%',
                innerSize: '85%',
                showInLegend:false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    });
    
  Highcharts.chart('monthly_billable', {
          title: {
                text: 'Monthly Billable Projects'
          },
         colors: [
                '#ff1a75'
            ],
  series: [{
  	name: 'Monthly Billable Projects',
    type: 'column',
    data: [1100],
    pointWidth: 30
  }]

});

Highcharts.chart('weekly_billable', {
          title: {
                text: 'Weekly Billable Projects'
          },
         colors: [
                '#ff1a75'
            ],
  series: [{
  	name: 'Weekly Billable Projects',
    type: 'column',
    data: [1500],
    pointWidth: 30
  }]

});

Highcharts.chart('yearly_billable', {
          title: {
                text: 'Yearly Billable Projects'
          },
         colors: [
                '#ff1a75'
            ],
  series: [{
  	name: 'Yearly Billable Projects',
    type: 'column',
    data: [1900],
    pointWidth: 30
  }]

});
