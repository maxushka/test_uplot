import React from 'react';
import Chart, {
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Series,
  Tooltip,
  ValueAxis,
  ConstantLine,
  Label
} from 'devextreme-react/chart';


class ChartPrm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      10
    );
  }

  tick(){
    let complaintsData = [];
    for (let i = 1; i < 1024; ++i){
      complaintsData.push({ XData: i, YData: (i > 400 && i < 600) ? Math.random()*2: Math.random() })
    }
    this.setState({data : complaintsData});
  }

  render() {
    return (
      <Chart
        title="Data"
        dataSource={this.state.data}
        palette="Harmony Light"
        id="chart"
      >
        <CommonSeriesSettings argumentField="XData" points="false" />
        <Series
          name="Cumulative percentage"
          valueField="YData"
          axis="percentage"
          type="line"
          color="#6b71c3"
        />

        <ArgumentAxis
          tickInterval={30}
        >
          <Label overlappingBehavior="YData" />
        </ArgumentAxis>

        <ValueAxis
          name="percentage"
          position="left"
          tickInterval={1}
          showZero={true}
          valueMarginsEnabled={false}
        >
        </ValueAxis>


        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        />
      </Chart>
    );
  }
}

function customizeTooltip(pointInfo) {
  return {
    html: `<div><div class="tooltip-header">${
      pointInfo.argumentText
    }</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${
      pointInfo.points[0].seriesName
    }</span>: </div><div class="value-text"><span class='top-series-value'>${
      pointInfo.points[0].valueText
    }</span></div><div class="series-name"><span class='bottom-series-name'>${
      pointInfo.points[1].seriesName
    }</span>: </div><div class="value-text"><span class='bottom-series-value'>${
      pointInfo.points[1].valueText
    }</span>% </div></div></div>`
  };
}

function customizePercentageText({ valueText }) {
  return `${valueText}%`;
}

export default ChartPrm;