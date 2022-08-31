import React from "react";
import ForceGraph2D from "react-force-graph-2d";
import genRandomTree from "./random_data";
// import image1 from "./Pictures/"

// const test = require('./Pictures/')

// const imgs = [
//   {src: './Pictures/img1', title: 'img1'},
//   {src: './Pictures/img2', title: 'img2'},
//   {src: './Pictures/img3', title: 'img3'},
//   {src: './Pictures/img4', title: 'img4'},
//   {src: './Pictures/img5', title: 'img5'},
//   {src: './Pictures/img6', title: 'img6'}
// ];

const imgs = [
  {src: './Pictures/img3.png', title: 'img3'},
  {src: './Pictures/img4.png', title: 'img4'},
  {src: './Pictures/img5.png', title: 'img5'},
  {src: './Pictures/img6.png', title: 'img6'},
  {src: './Pictures/img7.png', title: 'img7'}
];

const iData = {
  nodes: imgs.map((img, id) => ({ id, img })),
  links: [...Array(imgs.length).keys()]
    .filter(id => id)
      .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id-1))
      }))
};


// gen a number persistent color from around the palette
// const getColor = (n) =>
//   "#" + ((n * 1234567) % Math.pow(2, 24)).toString(16).padStart(6, "0");

function App() {
  return (
    <div>
      <ForceGraph2D
       graphData={iData}
       nodeCanvasObject = {(node, ctx, global) => {
        console.log(node);
          const size = 12;
          const nodeImg = new Image();
          nodeImg.src = node.img;
          ctx.drawImage(nodeImg, node.x - size/2, node.y - size/2, size, size);
       }} 
      />
    </div>
  );
}

export default App;

