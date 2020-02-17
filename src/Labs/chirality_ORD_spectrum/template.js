// var x=1;
$(function() {

  var c1={x};
  var c2={x};
  var c3={x};
  var c4={x};
  var c5={x};
  var c6={x};
  var c7={x};
  var c8={x};
  var c9={x};
  
  var o1={x};
  var o2={x};
  var o3={x};

  var h1={x};
  var h2={x};
  var h3={x};
  var h4={x};
  var h5={x};
  var h6={x};
  var h7={x};
  var h8={x};
  var h9={x};
  var h01={x};
  var h02={x};
  var h03={x};
  var h04={x};
  var h05={x};
  var h06={x};
  var h07={x};

  // 2nd Molecule
  let element1 = $('#cont2');
  let config1 = { backgroundColor: 'skyblue' };
  let viewer1 = $3Dmol.createViewer( element1, config1 );
  viewer1.addLabel("Carbon", {position: {x:-6 , y:3.7, z:5}, backgroundColor: 'skyblue',backgroundOpacity: 0.9,fontSize: 13});
  viewer1.addLabel("Oxygen", {position: {x:-6 , y:3, z:5}, backgroundColor: 'red',backgroundOpacity: 0.8,fontSize: 13});
  viewer1.addLabel("Hydrogen", {position: {x:-6 , y:2.3, z:5}, backgroundColor: 'silver',backgroundOpacity: 0.8,fontSize: 13});

  viewer1.addSphere({center: c1, color: 'green',radius:0.4});
  viewer1.addSphere({center: c2, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c3, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c4, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c5, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c6, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c7, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c8, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c9, color: 'skyblue',radius:0.4});
  
  viewer1.addSphere({ center: o1, radius: 0.42, color: 'red' });
  viewer1.addSphere({ center: o2, radius: 0.42, color: 'red' });
  viewer1.addSphere({ center: o3, radius: 0.42, color: 'red' });
  
  viewer1.addSphere({ center: h1, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h2, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h3, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h4, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h5, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h6, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h7, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h8, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h9, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h01, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h02, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h03, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h04, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h05, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h06, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h07, radius: 0.3, color: 'silver' });

  viewer1.addCylinder({ start: c1, end: c2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c1, end: c3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c1, end: o1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c1, end: h1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: c4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: h2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: h3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: h4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: h5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: o3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: h6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: h7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o3, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c5, end: c6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c5, end: o2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o1, end: h8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o2, end:c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: c7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: h9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: h01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: h03,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: h02,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end:c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: h04,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: h05,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c9, end: h06,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c9, end: h07,radius: .13,color:'white',radiusRadio:0.1,});

  // viewer1.addSphere({ center: {x:0, y:0, z:0}, radius: 0.42, color: 'skyblue',
  // mid:1.0,   clickable:true,
  // callback:function(){
  //     console.log(x);
  //     this.color.setHex(0xFFFF3352-x);
  //     // document.querySelector(".cc").innerHTML="Chiral Center"
  //     x+=100;
  //     if(x>10000000000){
  //       x=0;
  //     }
  //     viewer1.render( );
  // }});
  
  viewer1.zoomTo();
  viewer1.render();
  viewer1.setBackgroundColor('black');
  
});
