import * as d3 from "d3";

export function scatterplot(node, data, timeAttribute, attributeY, dataset) {
  let width = 1000;
  let height = 600;
  let margin = { top: 25, right: 50, bottom: 35, left: 80 };

  const svg = node.attr("viewBox", [0, 0, width, height]);

  // TODO: Task 3: create a scale for the x axis
  let x = (d) => d;
  
  // TODO: Task 3: create a scale for the y axis
  let y = (d) => d;
  
  // TODO: Task 3: create an axis for the x scale
  const axisX = svg.append("g");
  axisX
    .call((g) =>
      g
        .append("text")
        .attr("x", width)
        .attr("y", margin.bottom - 4)
        .attr("fill", "currentColor")
        .attr("text-anchor", "end")
        .text(timeAttribute)
    );

  // TODO: Task 3: create an axis for the y scale
  const axisY = svg.append("g");
  
  const renderG = svg.append("g");

  render();
  if (dataset instanceof d3.selection) dataset.on("change", () => render());

  function render() {
    let currentDataset = dataset;
    // get the current selection form the select (if applicable)
    if (dataset instanceof d3.selection) {
      currentDataset = dataset.property("value");
    }

    // Task 3: update the scale and axis
    axisY
      .call((g) =>
        g
          .selectAll("text.label")
          .data([attributeY])
          .join("text")
          .classed("label", true)
          .attr("x", -margin.left)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text(attributeY)
      );

    // Task 3: render circle elements for each data item
    // using the join pattern and animate the transitions
  }
}
