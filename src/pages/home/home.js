import React from 'react';
import ChartPrm from '../../ChartPrm.js'
import UPlot from '../../UPlot.js'
import Button from 'devextreme-react/button';
import './home.scss';

export default () => (
  <React.Fragment>
    <h2 className={'content-block'}>Home</h2>
    <div className={'content-block'}>
      <div className={'dx-card responsive-paddings'}>
        <UPlot/>
      </div>
    </div>
  </React.Fragment>
);
