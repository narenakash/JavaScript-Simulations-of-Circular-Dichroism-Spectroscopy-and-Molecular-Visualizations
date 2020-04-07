// var x=1;
$(function() {

  var x1=1;
  var x2=1;
  var c1={x:-1.400 , y:4.728 , z:1.080};
  var c2={x:-2.718, y: 4.825, z:0.262};
  var c3={x:-3.260 , y:3.368 , z:0.389};
  var c4={x:-1.351 , y:3.218 , z:1.510};
  var c5={x:-1.985 , y:2.467 , z:0.280};
  var c6={x:-3.756 , y:3.158 , z:1.853};
  var c7={x:-2.447 , y:3.049 , z:2.513};
  var c8={x:0.063 , y:2.704 , z:1.936};
  var c9={x:-2.260 , y:0.921 , z:0.461};
  var c01={x:-1.222  , y:2.575 , z:-1.097};

  var s1={x:0.918  , y:3.621 , z:3.276};
  
  var o1={x:-2.324 , y:2.777 , z:3.729};
  var o2={x:1.128 , y:5.159 , z:2.883};
  var o3={x:0.153 , y:3.510 , z:4.679};
  var o4={x:2.468 , y:2.927 , z:3.482};

  var h1={x:-4.034 , y:3.140 , z:-0.351};
  var h2={x:-0.538 , y:5.004 , z:0.466};
  var h3={x:-1.429 , y:5.398 , z:1.946};
  var h4={x:-2.529 , y:5.092 , z:-0.780};
  var h5={x:-3.407 , y:5.562 , z:0.681};
  var h6={x:-4.337 , y:2.239 , z:1.963};
  var h7={x:-4.339 , y:3.999 , z:2.237};
  var h8={x:-0.011  , y:1.662 , z:2.254};
  var h9={x:0.729 , y:2.737 , z:1.071};
  var h01={x:2.293 , y:2.018 , z:3.804};
  var h02={x:-2.713 , y:0.663 , z:1.417};
  var h03={x:-1.329 , y:0.352 , z:0.393};
  var h04={x:-2.932 , y:0.568 , z:-0.325};
  var h05={x:-1.864  , y:2.222 , z:-1.907};
  var h06={x:-0.909  , y:3.583 , z:-1.353};
  var h07={x:-0.319  , y:1.963 , z:-1.090};

  // 2nd Molecule
  let element1 = $('#cont2');
  let config1 = { backgroundColor: 'skyblue' };
  let viewer = $3Dmol.createViewer( element1, config1 );

  viewer.addSphere({center: c1, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
});
  viewer.addSphere({center: c2, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
});
  viewer.addSphere({center: c7, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
});
  viewer.addSphere({center: c5, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
});
  viewer.addSphere({ center: c4, radius: 0.4, color: 'magenta', mid:1.0,clickable:true,
});
  viewer.addSphere({center: c6, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
});
  viewer.addSphere({ center: c3, radius: 0.4, color: 'orange',
  mid:1.0,   clickable:true,
});
  viewer.addSphere({center: c8, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
});
  viewer.addSphere({center: c9, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
});
  viewer.addSphere({center: c01, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
});
  viewer.addSphere({center: s1, color: 'yellow',radius:0.45,mid:1.0,   clickable:true,
});
  
  viewer.addSphere({ center: o1, radius: 0.42, color: 'red' ,mid:1.0,   clickable:true,
});
  viewer.addSphere({ center: o2, radius: 0.42, color: 'red' ,mid:1.0,   clickable:true,
});
  viewer.addSphere({ center: o3, radius: 0.42, color: 'red' ,mid:1.0,   clickable:true,
});  
  viewer.addSphere({ center: o4, radius: 0.42, color: 'red' ,mid:1.0,   clickable:true,
});
  
  viewer.addSphere({ center: h1, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h2, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h3, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h4, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h5, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h6, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h7, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h8, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h9, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h01, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h02, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h03, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h04, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h05, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h06, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h07, radius: 0.3, color: 'silver' });


  viewer.addCylinder({ start: c1, end: c2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c1, end: c4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c1, end: h2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c1, end: h3,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: {x:-0.380 , y:-3.95 , z:-2.930}, end: {x:-0.38 , y:-4.6 , z:-3.951},radius: .08,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: {x:-0.380 , y:-4.3 , z:-3.1}, end: {x:-0.38 , y:-4.95 , z:-4.1},radius: .08,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c2, end: c3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c2, end: h4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c2, end: h5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c3, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c3, end: c6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c3, end: h1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c4, end: c7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c4, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c4, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: o1, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c5, end: c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c5, end: c01,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: c5, end: o2,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: o2, end: c6,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: o3, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c6, end: h6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c6, end: h7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c6, end: c7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.377 , y:3.009 , z:2.473}, end: {x:-2.254 , y:2.737 , z:3.689},radius: .08,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.517 , y:3.089 , z:2.553}, end: {x:-2.394 , y:2.817 , z:3.769},radius: .08,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: c02, end: h09,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: c7, end: h9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c8, end: s1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c8, end: h9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c8, end: h8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c9, end: h02,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c9, end: h03,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c9, end: h04,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c01, end: h05,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c01, end: h06,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c01, end: h07,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:o4, end: h01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:s1, end: o4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:{x:0.808  , y:3.621 , z:3.276}, end: {x:1.018 , y:5.159 , z:2.883},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:{x:1.028  , y:3.621 , z:3.276}, end: {x:1.238 , y:5.159 , z:2.883},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:{x:0.808  , y:3.621 , z:3.276}, end: {x:0.043 , y:3.510 , z:4.679},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:{x:1.028  , y:3.621 , z:3.276}, end: {x:0.263 , y:3.510 , z:4.679},radius: .13,color:'white',radiusRadio:0.1,});
  
  viewer.zoomTo();
  viewer.render();
  viewer.setBackgroundColor('black');
  
});
