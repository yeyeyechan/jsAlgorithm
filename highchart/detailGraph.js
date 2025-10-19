function findValue(series, type) {
  if ("high" === type) {
    let maxIdx = series.length - 1;
    for (let i = series.length - 1; i >= 0; i--) {
      if (series[i][1] > series[maxIdx][1]) maxIdx = i;
    }
    return maxIdx;
  } else {
    let minIdx = series.length - 1;
    for (let i = series.length - 1; i >= 0; i--) {
      if (series[i][1] < series[minIdx][1]) minIdx = i;
    }
    return minIdx;
  }
}
function drawGraph(id, series) {
  Highcharts.chart(id, {
    height: "100%",
    chart: {
      type: "area",
    },
    legend: {
      enabled: false,
    },
    title: {
      text: "",
    },
    yAxis: {
      visible: false,
      title: "",
    },
    xAxis: {
      visible: false,
    },

    series: [
      {
        marker: {
          enabled: false,
        },
        data: series,
        threshold: -Infinity,
      },
    ],
    annotations: [
      {
        labelOptions: {
          verticalAlign: "top",
          y: 300,
        },
        labels: [
          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: series[findValue(series, "high")][0],
              y: series[findValue(series, "high")][1],
            },
            text: "TOP",
          },
        ],
      },
    ],

    plotOptions: {
      series: {
        fillColor: {
          linearGradient: [0, 0, 0, 100000],
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
      },
    },
  });
}
const options = {
  method: "GET",
  url: "https://api.upbit.com/v1/candles/days",
  params: {
    market: "KRW-BTC",
    count: "90",
    to: new Date("28 April 2024 14:48 UTC").toISOString(),
  },
  headers: { accept: "application/json" },
};

let series = [];

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    series = response.data
      .map(function (ele) {
        return [ele["timestamp"], ele["trade_price"]];
      })
      .reverse();
    console.log(series);
    let id = [
      "container",
      "container2",
      "container3",
      "container4",
      "container5",
      "container6",
      "container7",
    ];
    for (let i = 0; i < id.length; i++) {
      drawGraph(id[i], series);
    }
  })
  .catch(function (error) {
    console.error(error);
  });
