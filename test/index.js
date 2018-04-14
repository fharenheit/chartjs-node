'use strict';
const debug = require('debug')('chartjs-node:test');
const assert = require('assert');
const ChartjsNode = require('../index.js');
const fs = require('fs');
const stream = require('stream');

        var chartConfig = {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                width: 400,
                height: 400,
                animation: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                tooltips: {
                    mode: 'label'
                }
            }
};


 var chartNode = new ChartjsNode(600, 600);
                return chartNode.drawChart(chartConfig)
                    .then(() => {
                        return chartNode.writeImageToFile('image/png', './testimage.png');
                    })
                    .then(() => {
                        debug('Sucessfully wrote image to a file');
                    });
