import React, { useEffect } from "react";
import * as d3 from "d3";
import { sortBy } from "lodash";

export default ({ data }: { data: IHypermind }) => {
  return (
    <div className="w-100 shadow-1 br1 flex-column f5 fw2">
      <div className="w-100 pa3 bb b--light-gray flex space-between">
        <span>Évolution des probabilités de gagner de chaque candidat</span>
        <span className="ml-auto pl3">
          <a
            className="blue link underline-hover"
            href="https://predict.hypermind.com"
          >
            Hypermind
          </a>
        </span>
      </div>
      <div className="pa3 gray f6">
        {data.map(outcome => (
          <>
            <span className="pr1" key={outcome.props.title}>
              <div
                className="legend dib br-100"
                style={{ backgroundColor: outcome.props.color }}
              />{" "}
              {outcome.props.title}
            </span>
            <span className="pr3 b" style={{ color: outcome.props.color }}>
              {
                sortBy(outcome.trades, e => e.ts)[outcome.trades.length - 1]
                  .price
              }
              %
            </span>
          </>
        ))}
      </div>
      <div className="w-100 pa3">
        <Graph data={data} />
      </div>
      <div className="w-100 pa3 bt b--light-gray">30 derniers jours</div>
      <style jsx>{`
        .legend {
          width: 0.5rem;
          height: 0.5rem;
        }
      `}</style>
    </div>
  );
};

const Graph = ({ data }: { data: IHypermind }) => {
  useEffect(() => {
    const margin = 20;

    const width =
      parseInt(
        d3
          .select("#chart")
          .node()
          .getBoundingClientRect().width
      ) -
      2 * margin;
    const height =
      parseInt(
        d3
          .select("#chart")
          .node()
          .getBoundingClientRect().height
      ) -
      2 * margin;

    var svg = d3
      .select("#chart")
      .attr("width", width + 2 * margin)
      .attr("height", height + 2 * margin)
      .select("g")
      .attr("transform", "translate(" + margin + "," + margin + ")");

    const series = data[0].trades;
    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    x.domain(d3.extent(series, d => new Date(d.ts)));

    var y = d3.scaleLinear().range([height, 0]);
    y.domain([0, d3.max(series, d => d.price)]);

    var valueline = d3
      .line()
      .x(d => x(new Date(d.ts)))
      .y(d => y(d.price))
      .curve(d3.curveBasis);

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(3));

    svg
      .append("g")
      .attr("class", "y axis")
      .call(
        d3
          .axisLeft(y)
          .ticks(4)
          .tickSize(-width)
      );

    data.forEach(d => {
      svg
        .append("path")
        .data([d.trades])
        .attr("class", "line")
        .style("stroke", d.props.color)
        .style("stroke-width", 3)
        .style("fill", "none")
        .attr("d", valueline);
    });
  });
  return (
    <div className="h5 relative">
      <svg
        id="chart"
        className="w-100 h-100 absolute"
        style={{ stroke: "#bbb", color: "#bbb", fontWeight: 200 }}
      >
        <g></g>
      </svg>
    </div>
  );
};
