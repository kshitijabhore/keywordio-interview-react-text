import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import Card from 'react-bootstrap/Card';
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';

const DonutChart = () => {

  const [showChart, setShowChart] = useState(true);
  const [selectedMatrix, setSelectedMatrix] = useState('');

  const [chartData, setChartData] = useState({
    series: [40, 35, 25],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['40% Male', '35% Female', '25% Other'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
    },
  });

  const tableData = [
    {
      group: "Male",
      clicks: 348,
      usdCost: 12528,
      conversions: 42,
      revenue: 62118,
    },
    {
      group: "Female",
      clicks: 692,
      usdCost: 24912,
      conversions: 35,
      revenue: 5175,
    },
    {
      group: "Unknown",
      clicks: 105,
      usdCost: 3943,
      conversions: 3,
      revenue: 4489,
    }
  ];

  const valueTotal = (event) => {
    return tableData
      .map((data) => data[event])
      .reduce((initialValue, data) => initialValue + data);
  };

  const handleMatrixChange = (event) => {
    const matrix = event.target.value;
    setSelectedMatrix(matrix);

    if (matrix === 'clicks') {
      setChartData({
        series: [348, 692, 105],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['Male', 'Female', 'Other'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          }],
        },
      });
    } 
    else if (matrix === 'cost') {
      setChartData({
        series: [12528, 24912, 3943],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['Male', 'Female', 'Other'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          }],
        },
      });
    }
    else if (matrix === 'conversions') {
      setChartData({
        series: [42, 35, 3],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['Male', 'Female', 'Other'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          }],
        },
      });
    }
    else if (matrix === 'revenue') {
      setChartData({
        series: [62118, 5175, 4489],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['Male', 'Female', 'Other'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          }],
        },
      });
    }
};


  const toggleView = () => {
    setShowChart(!showChart);
  };

  return (
    <Card id='chartCard'>
      <div>
        <Card.Header className='chartHeader'>
          <span>Ad Insights</span>
          <div hidden={!showChart}>
          <Form.Select size="sm" value={selectedMatrix} onChange={handleMatrixChange}>
            <option value="default">Select Matrix</option>
            <option value="clicks">Clicks</option>
            <option value="cost">Cost</option>
            <option value="conversions">Conversions</option>
            <option value="revenue">Revenue</option>
          </Form.Select>
        </div>
        </Card.Header>
        {showChart ? (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            width="380"
            labels={chartData.labels}
          />
        
        ) : (
          <Table className='donutChatTable'>
              <thead>
                <tr className="table-light">
                  <th className='tableGroupCell'>Group</th>
                  <th>Clicks</th>
                  <th>Cost</th>
                  <th>Conversions</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => (
                  <tr>
                    <td className='tableGroupCell'>{data.group}</td>
                    <td>{data.clicks}</td>
                    <td>{`USD ${data.usdCost}`}</td>
                    <td>{data.conversions}</td>
                    <td>{`USD ${data.revenue}`}</td>
                  </tr>
                ))}
                <tr  className="table-light">
                  <td className='tableGroupCell'>Total</td>
                  <td>{valueTotal("clicks")}</td>
                  <td>{`USD ${valueTotal("usdCost")}`}</td>
                  <td>{valueTotal("conversions")}</td>
                  <td>{`USD ${valueTotal("revenue")}`}</td>
                </tr>
              </tbody>
            </Table>
        )}
      </div>
      <Form.Check
        type="switch"
        id="custom-switch"
        className='flex-end p-1'
        onClick={toggleView}
      />
    </Card>
  );
};

export default DonutChart;
