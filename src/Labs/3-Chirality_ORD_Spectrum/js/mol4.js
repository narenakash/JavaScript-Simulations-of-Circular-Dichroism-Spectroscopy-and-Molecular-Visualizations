// var x=1;
$(function() {

  var x1=1;
  var x2=1;
  var c1={x:-1.772 , y:-3.952 , z:-2.282};
  var c2={x:-0.450 , y:-4.098 , z:-2.930};
  var c3={x:0.692 , y:-3.337 , z:-2.382};
  var c4={x:0.265 , y:-1.867 , z:-2.154};
  var c5={x:-2.114 , y:-2.441 , z:-2.072};
  var c6={x:-2.773 , y:-0.442 , z:-3.323};
  var c7={x:-4.020 , y:-0.162 , z:-2.430};
  var c8={x:-3.824 , y:-0.826 , z:-1.035};
  var c9={x:-3.370 , y:-2.301 , z:-1.159};
  var c01={x:-4.311  , y:1.373 , z:-2.351};
  var c02={x:-5.609  , y:1.755 , z:-1.599};
  
  var o1={x:-0.985 , y:-1.787 , z:-1.427};
  var o2={x:-2.422 , y:-1.845 , z:-3.359};
  var o3={x:-0.312 , y:-4.812 , z:-3.951};

  var h1={x:-1.720 , y:-4.461 , z:-1.314};
  var h2={x:-2.549 , y:-4.438 , z:-2.879};
  var h3={x:0.986 , y:-3.784 , z:-1.427};
  var h4={x:1.552 , y:-3.375 , z:-3.058};
  var h5={x:1.032 , y:-1.360 , z:-1.568};
  var h6={x:0.185 , y:-1.350 , z:-3.113};
  var h7={x:-2.989 , y:-0.137 , z:-4.350};
  var h8={x:-1.919  , y:0.148 , z:-2.979};
  var h9={x:-4.877 , y:-0.642 , z:-2.914};
  var h01={x:-4.763 , y:-0.807 , z:-0.478};
  var h02={x:-3.078 , y:-0.269 , z:-0.460};
  var h03={x:-4.196 , y:-2.881 , z:-1.582};
  var h04={x:-3.159 , y:-2.696 , z:-0.161};
  var h05={x:-3.470  , y:1.884 , z:-1.874};
  var h06={x:-4.398  , y:1.765 , z:-3.369};
  var h07={x:-5.783  , y:2.830 , z:-1.692};
  var h08={x:-5.530  , y:1.508 , z:-0.538};
  var h09={x:-6.464  , y:1.229 , z:-2.024};

  // 2nd Molecule
  let element1 = $('#cont4');
  let config1 = { backgroundColor: 'skyblue' };
  let viewer = $3Dmol.createViewer( element1, config1 );

  viewer.addSphere({center: c1, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
incorrectc();
  }});
  viewer.addSphere({center: c2, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
incorrectc();
  }});
  viewer.addSphere({center: c3, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
incorrectc();
  }});
  viewer.addSphere({center: c4, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
incorrectc();
  }});
  viewer.addSphere({ center: c5, radius: 0.4, color: 'skyblue',
  mid:1.0,   clickable:true,
  callback:function(){
      this.color.setHex(0x0000FF00);
      correct();
      viewer.render();
  }});
  viewer.addSphere({center: c6, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
incorrectc();
  }});
  viewer.addSphere({ center: c7, radius: 0.4, color: 'skyblue',
  mid:1.0,   clickable:true,
  callback:function(){
      this.color.setHex(0x0000FF00);
      correct();
      viewer.render();
  }});
  viewer.addSphere({center: c8, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
incorrectc();
  }});
  viewer.addSphere({center: c9, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
incorrectc();
  }});
  viewer.addSphere({center: c01, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
incorrectc();
  }});
  viewer.addSphere({center: c02, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
incorrectc();
  }});
  
  viewer.addSphere({ center: o1, radius: 0.42, color: 'red' ,mid:1.0,   clickable:true,
  callback:function(){
incorrecto();
  }});
  viewer.addSphere({ center: o2, radius: 0.42, color: 'red' ,mid:1.0,   clickable:true,
  callback:function(){
incorrecto();
  }});
  viewer.addSphere({ center: o3, radius: 0.42, color: 'red' ,mid:1.0,   clickable:true,
  callback:function(){
incorrecto();
  }});
  
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
  viewer.addSphere({ center: h08, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: h09, radius: 0.3, color: 'silver' });

  viewer.addCylinder({ start: c1, end: c2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c1, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c1, end: h2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c1, end: h1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-0.380 , y:-3.95 , z:-2.930}, end: {x:-0.38 , y:-4.6 , z:-3.951},radius: .08,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-0.380 , y:-4.3 , z:-3.1}, end: {x:-0.38 , y:-4.95 , z:-4.1},radius: .08,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c2, end: c3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c3, end: c4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c3, end: h4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c3, end: h3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c4, end: o1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c4, end: h6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c4, end: h5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: o1, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c5, end: c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c5, end: o1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c5, end: o2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: o2, end: c6,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer.addCylinder({ start: o3, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c6, end: c7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c6, end: h7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c6, end: h8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c7, end: c01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c7, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c02, end: h09,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c7, end: h9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c8, end: c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c8, end: h01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: c8, end: h02,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c9, end: h03,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c9, end: h04,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c01, end: h05,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c01, end: c02,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c01, end: h06,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c02, end: h07,radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start:c02, end: h08,radius: .13,color:'white',radiusRadio:0.1,});
  
  viewer.zoomTo();
  viewer.render();
  viewer.setBackgroundColor('black');
  
});
