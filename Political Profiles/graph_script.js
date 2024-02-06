// Width and height for our graph
const width = document.getElementById('graph-container').clientWidth;
const height = document.getElementById('graph-container').clientHeight;

// Sample data - nodes and links (edges)
const nodes = [
    {id: "Node1", name: "Name Name", color: "red"}, {id: "Node2", name: "Person 1"}, {id: "Node3", name: "Person 2"}, {id: "Node4"}, {id: "Node5"}, {id: "Node6"}, {id: "Node7"}, {id: "Node8"}, {id: "Node9"}, {id: "Node10"}, {id: "Node11"}, {id: "Node12"}, {id: "Node13"}, {id: "Node14"}, {id: "Node15"}
];

const links = [
  {source: "Node1", target: "Node2", label: "same Party"},
  {source: "Node1", target: "Node3", label: "same comitee"},
  {source: "Node1", target: "Node4"},
  {source: "Node1", target: "Node5"},
  {source: "Node1", target: "Node6"},
  {source: "Node1", target: "Node7"},
  {source: "Node1", target: "Node8"},
  {source: "Node1", target: "Node9"},
  {source: "Node1", target: "Node10"},
  {source: "Node1", target: "Node11"},
  {source: "Node1", target: "Node12"},
  {source: "Node1", target: "Node13"},
  {source: "Node1", target: "Node14"},
  {source: "Node1", target: "Node15"},
  {source: "Node2", target: "Node3"},
  {source: "Node3", target: "Node4"},
];

const svg = d3.select("#graph-container")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

// Initialize a simple force layout, using the nodes and links in dataset
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(200)) // Increase distance between nodes
    .force("charge", d3.forceManyBody().strength(-800)) // Increase repulsive force
    .force("center", d3.forceCenter(width / 2, height / 2));


// Create edges as lines
const edge = svg.selectAll(".edge")
  .data(links)
  .enter().append("line")
  .attr("class", "link");

// Create nodes as c
const node = svg.selectAll(".node")
  .data(nodes)
  .enter()
  .append("g") // Append a group for each node to contain the circle and text

node.append("circle")
  .attr("class", "node")
  .attr("r", 10) // radius of circle
  .style("fill", d => d.color || "black") // Use the color property if it exists
  .style("stroke", d => d.id === "Node1" ? "none" : "black"); // Remove stroke for Node1


node.append("text")
  .text(d => d.name || "") // Use the name property if it exists
  .attr("dx", 12)
  .attr("dy", ".35em")
  .style("fill", "black");

const link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links)
  .enter().append("line")
  .attr("class", "link")



// Create link labels
const linkLabels = svg.append("g")
  .attr("class", "link-labels")
  .selectAll("text")
  .data(links)
  .enter().append("text")
  .text(d => d.label) // Use the label property from each link data object
  .attr("font-family", "Arial, sans-serif")
  .attr("font-size", 12)
  .attr("fill", "black");

// Update the link and label positions on each tick of the simulation
simulation.on("tick", () => {
    // Update link positions
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
  
    // Update link label positions
    linkLabels
      .attr("x", d => (d.source.x + d.target.x) / 2)
      .attr("y", d => (d.source.y + d.target.y) / 2);
  
    // Update node and text positions
    node
      .attr("transform", d => `translate(${d.x}, ${d.y})`);
  });