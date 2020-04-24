
$(function() {

  var x1=1;
  var x2=1;
  var c1={x:-3.598 , y:-1.686, z:1.657};
  var c2={x:-3.462 , y:-0.580, z:0.561};
  var c3={x:-2.325 , y:-1.782, z:2.543};
  var c4={x:-1.053 , y:-1.915, z:1.668};
  var c5={x:-1.027 , y:-0.834, z:0.562};
  var c6={x:-4.687 , y:-0.638, z:-0.409};
  var c7={x:-4.681 , y:0.545, z:-1.412};
  var c8={x:-4.531 , y:1.900, z:-0.675};
  var c9={x:-3.352 , y:1.857, z:0.326};
  
  var o1={x:-2.250 , y:-0.823, z:-0.204};
  var o2={x:-3.443 , y:0.720, z:1.212};
  var o3={x:-2.418 , y:-2.901, z:3.421};

  var h1={x:-3.757 , y:-2.656 , z:1.176};
  var h2={x:-4.464 , y:-1.481 , z:2.294};
  var h3={x:-2.244 , y:-0.881 , z:3.157};
  var h4={x:-1.034 , y:-2.901 , z:1.200};
  var h5={x:-0.163 , y:-1.821 , z:2.295};
  var h6={x:-0.842 , y:0.149  , z:1.001};
  var h7={x:-0.205 , y:-1.044 , z:-0.124};
  var h8={x:-5.616 , y:-0.591 , z:0.168};
  var h9={x:-4.688 , y:-1.578 , z:-0.966};
  var h01={x:-5.612 , y:0.547 , z:-1.983};
  var h02={x:-3.857 , y:0.423 , z:-2.119};
  var h03={x:-5.453 , y:2.114 , z:-0.129};
  var h04={x:-4.374 , y:2.701 , z:-1.401};
  var h05={x:-2.402 , y:1.843 , z:-0.214};
  var h06={x:-3.370 , y:2.761 , z:0.935};
  var h07={x:-3.216 , y:-2.739,z:3.967};

  // 2nd Molecule
  let element1 = $('#cont3');
  let config1 = { backgroundColor: 'skyblue' };
  let viewer1 = $3Dmol.createViewer( element1, config1 );

  viewer1.addSphere({center: c1, color: 'skyblue',radius:0.4});
  // viewer1.addSphere({center: c2, color: 'green',radius:0.4});
  viewer1.addSphere({ center: c2, radius: 0.4, color: 'orange',
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
  // viewer1.addSphere({center: c3, color: 'green',radius:0.4});
  viewer1.addSphere({ center: c3, radius: 0.4, color: 'magenta',
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
  viewer1.addCylinder({ start: c1, end: h1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c1, end: h2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: c6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: o1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: o2 ,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: c4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: h3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: o3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: h5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: h4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o3, end: h07,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c5, end: h6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c5, end: h7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c5, end: o1,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer1.addCylinder({ start: o1, end: h8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o2, end: c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: c7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: h9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: h8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: h01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: h02,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: h04,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: h03,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c9, end: h06,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c9, end: h05,radius: .13,color:'white',radiusRadio:0.1,});

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
