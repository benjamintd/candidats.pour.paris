import React from "react";
import ReactDOM from "react-dom";

export default class Trends extends React.Component {
  constructor(props) {
    super(props);
    this.widget = this.widget.bind(this);
  }

  clear() {
    var iframes = document.querySelectorAll("iframe");
    for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
    }
  }

  componentDidMount() {
    this.widget();
  }

  widget() {
    this.clear();

    let script = document.createElement("script");
    script.src =
      "https://ssl.gstatic.com/trends_nrtr/1243_RC12/embed_loader.js";
    script.async = true;

    ReactDOM.findDOMNode(this.refs.charts).appendChild(script);

    script.onload = () => {
      (window as any).trends.embed.renderExploreWidgetTo(
        ReactDOM.findDOMNode(this.refs.charts),
        "TIMESERIES",
        {
          comparisonItem: [
            { keyword: "/m/03hn76f", geo: "FR-J", time: "today 1-m" },
            { keyword: "/g/11dxf0gtll", geo: "FR-J", time: "today 1-m" },
            { keyword: "/m/0bwhj37", geo: "FR-J", time: "today 1-m" },
            { keyword: "/m/02r53f9", geo: "FR-J", time: "today 1-m" },
            { keyword: "David Belliard", geo: "FR-J", time: "today 1-m" }
          ],
          category: 0,
          property: ""
        },
        {
          exploreQuery:
            "date=today%201-m&geo=FR-J&q=%2Fm%2F03hn76f,%2Fg%2F11dxf0gtll,%2Fm%2F0bwhj37,%2Fm%2F02r53f9,%2Fg%2F11bw1h69w4,David%20Belliard",
          guestPath: "https://trends.google.fr:443/trends/embed/"
        }
      );
    };
  }

  render() {
    return <div ref="charts" />;
  }
}
