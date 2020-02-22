// var x:=1;

$(function() {

  var x1=1;
var x2=1;
  var c1={x:-3.498 ,y: -1.395  ,z:-1.877};
  var c2={x:-4.783 ,y: -1.579  ,z:-1.029};
  var c3={x:-2.260 ,y: -1.206  ,z:-0.963};
  var c4={x:-4.893 ,y: -0.478  ,z: 0.053};
  var c5={x:-2.472 ,y: -0.107  ,z: 0.127};
  var c6={x:-1.276 ,y: -0.136  ,z: 1.134};
  var c7={x:-1.321 ,y:  1.054  ,z: 2.125};
  var c8={x:-1.471 ,y:  2.397  ,z: 1.375};
  var c9={x:-2.649 ,y:  2.325  ,z: 0.373};
  var o1={x:-3.696 ,y: -0.398  ,z: 0.857};
  var o2={x:-3.634 ,y: -0.293  ,z:-2.774};
  var o3={x:-2.517 ,y:  1.194  ,z:-0.517};
  var h1={x:-3.349 ,y: -2.290  ,z:-2.487};
  var h2={x:-5.667 ,y: -1.555  ,z:-1.675};
  var h3={x:-4.754 ,y: -2.557  ,z:-0.541};
  var h4={x:-1.390 ,y: -0.961  ,z:-1.579};
  var h5={x:-2.058 ,y: -2.162  ,z:-0.470};
  var h6={x:-5.104 ,y:  0.487  ,z:-0.414};
  var h7={x:-5.729 ,y: -0.714  ,z: 0.714};
  var h8={x:-4.360 ,y: -0.549  ,z:-3.383};
  var h9={x:-1.283 ,y: -1.072  ,z: 1.699};
  var h01={x:-0.333,y:  -0.083 ,z:  0.582};
  var h02={x:-2.159,y:   0.927 ,z:  2.816};
  var h03={x:-0.399,y:   1.069 ,z:  2.715};
  var h04={x:-1.641,y:   3.207 ,z:  2.090};
  var h05={x:-0.546,y:   2.614 ,z:  0.831};
  var h06={x:-3.597,y:   2.276 ,z:  0.915};
  var h07={x:-2.658,y:   3.235 ,z: -0.228};

  let element1 = $('#cont6');
  let config1 = { backgroundColor: 'skyblue' };
  let viewer1 = $3Dmol.createViewer( element1, config1 );

  // viewer1.addSphere({center: c1, color: 'skyblue',radius:0.4});
  viewer1.addSphere({ center: c1, radius: 0.4, color: 'magenta',
  mid:1.0,   clickable:true,
  callback:function(){
      if(x1===1){
        this.color.setHex(0x0000FF00);
        x1=0;
        alert("Correct Choice");
      }
      else{
        this.color.setHex(0XF698FFFF);
        x1=1;
      }
      viewer1.render();
  }});
  viewer1.addSphere({center: c2, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c3, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c4, color: 'skyblue',radius:0.4});
  // viewer1.addSphere({center: c5, color: 'skyblue',radius:0.4});
  viewer1.addSphere({ center: c5, radius: 0.4, color: 'orange',
  mid:1.0,   clickable:true,
  callback:function(){
      if(x2===1){
        this.color.setHex(0x0000FF00);
        x2=0;
        alert("Correct Choice");
      }
      else{
        this.color.setHex(0XF698FFFF);
        x2=1;
      }
      viewer1.render();
  }});
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
  viewer1.addCylinder({ start: c1, end: o2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c1, end: h1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: c4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: h2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: h3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: h4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: h5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: o1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: h6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: h7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o3, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c5, end: c6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c5, end: o1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o3, end: c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o2, end: h8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: c7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: h9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: h01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: h03,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: h02,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: h04,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: h05,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c9, end: h06,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c9, end: h07,radius: .13,color:'white',radiusRadio:0.1,});

  viewer1.zoomTo();
  viewer1.render();
  viewer1.setBackgroundColor('black');
  
  
});
