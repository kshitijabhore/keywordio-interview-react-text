import react, { useState, useCallback } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

const TableData = () => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const colsTitle = {
    compaignName: "Campaingns",
    clicks: "Clicks",
    usdCost: "Cost",
    conversions: "Conversions",
    revenue: "Revenue",
  };

  const tableData = [
    {
      compaignName: "Cosmetics",
      clicks: 712,
      usdCost: 4272,
      conversions: 8,
      revenue: 16568,
    },
    {
      compaignName: "Serums",
      clicks: 3961,
      usdCost: 27331,
      conversions: 115,
      revenue: 362526,
    },
    {
      compaignName: "Facewash",
      clicks: 9462,
      usdCost: 76831,
      conversions: 123,
      revenue: 266800,
    },
    {
      compaignName: "Shampoos",
      clicks: 439,
      usdCost: 2151,
      conversions: 5,
      revenue: 11029,
    },
    {
      compaignName: "Conditioner",
      clicks: 1680,
      usdCost: 3864,
      conversions: 49,
      revenue: 175245,
    },
    {
      compaignName: "Facewash2",
      clicks: 4978,
      usdCost: 29370,
      conversions: 189,
      revenue: 1573563,
    },
  ];

  const valueTotal = (event) => {
    return tableData
      .map((data) => data[event])
      .reduce((initialValue, data) => initialValue + data);
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    const sortableData = [...tableData];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  const sortedDataArray = sortedData();

  return (
    <>
      <Card>
        <Card.Header className="tableTextAlignLeft">Ad Insights</Card.Header>
        <Card.Body style={{ padding: "0px" }}>
          <Table className="tableStyle">
            <thead>
              <tr className="table-light">
                {Object.keys(tableData[0]).map((key, index) => (
                  <th key={key} onClick={() => requestSort(key)}>
                    <div
                      className={`${
                        index !== 0 && "tableItemRightAlign"
                      } tableTitleWrapper`}
                    >
                      <span className="tableTitle">{colsTitle[key]}</span>
                      <span className="tableArrowWrapper">
                        <span
                          class={`${
                            sortConfig.key === key &&
                            sortConfig.direction === "ascending" &&
                            "blackArrow"
                          } material-symbols-outlined`}
                        >
                          expand_less
                        </span>
                        <span
                          class={`${
                            sortConfig.key === key &&
                            sortConfig.direction === "descending" &&
                            "blackArrow"
                          } material-symbols-outlined`}
                        >
                          expand_more
                        </span>
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedDataArray.map((row, index) => (
                <tr key={index}>
                  {Object.keys(row).map((key) => (
                    <td
                      className={`${
                        key === "compaignName" && "tableTextAlignLeft"
                      }`}
                      key={key}
                    >
                      {row[key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="tableTextAlignLeft">Total</td>
                <td>{valueTotal("clicks")}</td>
                <td>{`USD ${valueTotal("usdCost")}`}</td>
                <td>{valueTotal("conversions")}</td>
                <td>{`USD ${valueTotal("revenue")}`}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default TableData;
