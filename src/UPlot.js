import React from 'react';
import './uPlot.min.css';
import Button from 'devextreme-react/button';
import {UPlotObj} from './uPlot.iife.js';
import Plot from './Plot.js';


class UPlot extends React.Component {

  constructor(props) {
    super(props);
    this.length = 2048;
    this.state = {
      stop_update: 0,
      xMin: 800,
      xMax: 1150
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount(){

    this.data = this.getData();
    this.opts = {
      title: "Rand series",
      width: 1190,
      height: 500,
      pxAlign: false,
        // select: {
        //   over: true,
        // },
        // cursor: {
        //   drag: {
        //     x: true,
        //     y: false
        //   },
        //   sync: {
        //     key: "moo"
        //   }
        // },
      scales: {
        "x": {
          time: false,
          distr: 1,
          range: [800, 1300]
        }
      //   y: {
      //     auto: false,
      //     range: [-6, 6],
      //   }
      },
      // ticks: {
      //   show: true,
      //   stroke: "#eee",
      //   width: 2,
      //   dash: [],
      //   size: 10,
      // },
      // axes: [
      //   {},
      //   {
      // grid: {
      //   show: true,
      //   stroke: "#eee",
      //   width: 2,
      //   dash: [],
      // },
      // ticks: {
      //   show: true,
      //   stroke: "#eee",
      //   width: 2,
      //   dash: [],
      //   size: 10,
      // }
      //   }
      // ],
      series: [
        {},
        {
          label: "Rand",
          stroke: "green",
          fill: "rgba(255,0,0,0.1)",
        }

      ],
        hooks: {
          setSelect: [
            uRanger => {
              // var pos = 1;
              // var a = uRanger.posToVal(left, "x");
              // console.log(a);
              // console.log();
              // console.log(uRanger.posToVal(uRanger.cursor.top, "x"));
              let left = uRanger.posToVal(uRanger.cursor.left, "x");
              let top = uRanger.posToVal(uRanger.cursor.top, "x");
              this.setState({
                    xMin:left,
                    xMax: top
                  });
              // clearInterval(this.timerID);
              this.setState({stop_update:1});
              uRanger.destroy();
              this.plot = new UPlotObj(this.opts, this.data, document.getElementById('plot_1') );
              this.setState({xMin:left, xMax:top});
              this.setState({stop_update:0});
            }
          ]
        }
    };

    this.plot = new UPlotObj(this.opts, this.data, document.getElementById('plot_1') );

    this.timerID = setInterval(
      () => this.update(),
      50
    );
  }

  getData() {
    let xs = [];
    let ys = [];

    for (let i = 0; i < this.length; i++) {
      xs.push(i );
      ys.push(Math.random()*2-5);
    }
    
    for (let i = this.length/2-200; i < this.length/2+200; i++) {
      ys[i]=(Math.random()* 10-5);
    }
    return [
      xs,
      ys
    ];
  }

  update() {
    if (this.state.stop_update == 0) {
      this.data = this.getData();
      this.plot.setData(this.data);
    }
  }

  onClick(e) {
    this.setState({stop_update:1});
    // clearInterval(this.timerID);
  }

  render(){
    return (
      <div>
      <Button 
        id={'stop_render'} 
        type={'danger'} 
        stylingMode={'outlined'} 
        onClick={this.onClick}
      >
        STOP
      </Button>
      <Plot/>
      </div>
    );
  }
}

export default UPlot;
