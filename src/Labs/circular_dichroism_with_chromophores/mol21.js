// var x=1;
$(function() {

  var x1=1;
  var x2=1;
  var c1={x:-3.593 , y:-0.206 , z:-1.433};
  var c2={x:-3.098 , y:0.407 , z:-2.770};
  var c3={x:-1.562 , y:0.606 , z:-2.531};
  var c4={x:-2.263 , y:-0.269 , z:-0.617};
  var c5={x:-1.482 , y:1.029 , z:-1.019};
  var c6={x:-0.963 , y:-0.762 , z:-2.438};
  var c7={x:-1.405 , y:-1.428 , z:-1.206};
  var c9={x:-2.197 , y:2.368 , z:-0.568};
  var c8={x:-0.025 , y:1.165 , z:-0.421};
  var c01={x:-0.881, y:1.583 , z:-3.544};

  var s1={x:-1.041  , y:1.168 , z:-5.325};
  
  var o1={x:-0.126 , y:-1.275 , z:-3.213};
  var o2={x:-0.328 , y:-0.214 , z:-5.707};
  var o3={x:-2.574 , y:1.135 , z:-5.792};
  var o4={x:-0.246 , y:2.389 , z:-6.222};

  var h1={x:-4.340 , y:0.420 , z:-0.943};
  var h2={x:-4.034 , y:-1.195 , z:-1.581};
  var h3={x:-3.603 , y:1.355 , z:-2.972};
  var h4={x:-3.289 , y:-0.266 , z:-3.609};
  var h5={x:-0.566 , y:-1.683 , z:-0.558};
  var h6={x:-1.980 , y:-2.329 , z:-1.426};
  var h7={x:0.639 ,  y:0.343 , z:-0.684};
  var h8={x:-0.065 , y:1.216 , z:0.669};
  var h9={x:0.454 ,  y:2.076 , z:-0.788};
  var h01={x:-2.191 , y:2.469 , z:0.490};
  var h02={x:-1.673 , y:3.227 , z:-1.020};
  var h03={x:-3.232 , y:2.442 , z:-0.918};
  var h04={x:-1.309 , y:2.580 , z:-3.421};
  var h05={x:0.184  , y:1.657 , z:-3.320};
  var h06={x:-0.770  , y:3.199 , z:-6.055};
  var h07={x:-2.443  , y:-0.377 , z:0.458};

  // 2nd Molecule
  let element1 = $('#cont1');
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
  viewer.addSphere({ center: c3, radius: 0.4, color: 'magenta',
  mid:1.0,   clickable:true,
  });
  viewer.addSphere({center: c6, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,

  });
  viewer.addSphere({ center: c4, radius: 0.4, color: 'orange',
  mid:1.0,   clickable:true,});
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
});  viewer.addSphere({ center: o4, radius: 0.42, color: 'red' ,mid:1.0,   clickable:true,
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
  viewer.addCylinder({ start: c1, end: h1,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: {x:-0.380 , y:-3.95 , z:-2.930}, end: {x:-0.38 , y:-4.6 , z:-3.951},radius: .08,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: {x:-0.380 , y:-4.3 , z:-3.1}, end: {x:-0.38 , y:-4.95 , z:-4.1},radius: .08,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c2, end: c3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c2, end: h4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c2, end: h3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c3, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c3, end: c6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c3, end: c01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c4, end: c7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c4, end: h07,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c4, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: o1, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c5, end: c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c5, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: c5, end: o2,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: o2, end: c6,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: o3, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-0.893 , y:-0.722 , z:-2.398}, end: {x:-0.056 , y:-1.235 , z:-3.173},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.033 , y:-0.802 , z:-2.478}, end: {x:-0.196 , y:-1.315 , z:-3.253},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c6, end: c7,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: {x:-2.377 , y:3.009 , z:2.473}, end: {x:-2.254 , y:2.737 , z:3.689},radius: .08,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: {x:-2.517 , y:3.089 , z:2.553}, end: {x:-2.394 , y:2.817 , z:3.769},radius: .08,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c7, end: h5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c7, end: h6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c8, end: h7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c8, end: h9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c8, end: h8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c9, end: h02,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c9, end: h03,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c9, end: h01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c01, end: s1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c01, end: h04,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c01, end: h05,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:o4, end: h06,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:s1, end: o4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:{x:-0.931  , y:1.128 , z:-5.285}, end: {x:-0.218 , y:-0.134 , z:-5.667},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:{x:-1.151  , y:1.208 , z:-5.365}, end: {x:-0.438 , y:-0.294 , z:-5.747},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:{x:-0.931  , y:1.128 , z:-5.285}, end: {x:-2.464 , y:1.055 , z:-5.752},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:{x:-1.151  , y:1.208 , z:-5.365}, end: {x:-2.684 , y:1.215 , z:-5.832},radius: .13,color:'white',radiusRadio:0.1,});
  
  viewer.zoomTo();
  viewer.render();
  viewer.setBackgroundColor('black');
  
});
