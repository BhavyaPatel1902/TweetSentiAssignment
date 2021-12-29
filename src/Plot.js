import react from 'react';
import Histogram from 'react-chart-histogram';

function Plot({data1}){
  const labels = ['Positive', 'Negative', 'Neutral'];
  const data = [data1["positive"],data1["negative"],data1["neutral"]]
  const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
  return (
    <div>
      <Histogram
          xLabels={labels}
          yValues={data}
          width='400'
          height='200'
          options={options}
      />
    </div>
  )
}
export default Plot;