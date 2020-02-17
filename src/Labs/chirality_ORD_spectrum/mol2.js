
<<<<<<< HEAD
$(function () {
  let element = $('#cont2');
  let config = { backgroundColor: 'skyblue' };
  let viewer = $3Dmol.createViewer(element, config);
  viewer.addLabel("Carbon", { position: { x: -6, y: 3.7, z: 5 }, backgroundColor: 'skyblue', backgroundOpacity: 0.9, fontSize: 13 });
  viewer.addLabel("Oxygen", { position: { x: -6, y: 3, z: 5 }, backgroundColor: 'red', backgroundOpacity: 0.8, fontSize: 13 });
  viewer.addLabel("Hydrogen", { position: { x: -6, y: 2.3, z: 5 }, backgroundColor: 'silver', backgroundOpacity: 0.8, fontSize: 13 });

  viewer.addSphere({ center: { x: -3.498, y: -1.395, z: -1.877 }, color: 'skyblue', radius: 0.4 });
  viewer.addSphere({ center: { x: -4.783, y: -1.579, z: -1.029 }, color: 'skyblue', radius: 0.4 });
  viewer.addSphere({ center: { x: -2.260, y: -1.206, z: -0.963 }, color: 'skyblue', radius: 0.4 });
  viewer.addSphere({ center: { x: -4.893, y: -0.478, z: 0.053 }, color: 'skyblue', radius: 0.4 });
  viewer.addSphere({ center: { x: -2.472, y: -0.107, z: 0.127 }, color: 'skyblue', radius: 0.4 });
  viewer.addSphere({ center: { x: -1.276, y: -0.136, z: 1.134 }, color: 'skyblue', radius: 0.4 });
  viewer.addSphere({ center: { x: -1.321, y: 1.054, z: 2.125 }, color: 'skyblue', radius: 0.4 });
  viewer.addSphere({ center: { x: -1.471, y: 2.397, z: 1.375 }, color: 'skyblue', radius: 0.4 });
  viewer.addSphere({ center: { x: -2.649, y: 2.325, z: 0.373 }, color: 'skyblue', radius: 0.4 });

  viewer.addSphere({ center: { x: -3.634, y: -0.293, z: -2.774 }, radius: 0.42, color: 'red' });
  viewer.addSphere({ center: { x: -2.517, y: 1.194, z: -0.517 }, radius: 0.42, color: 'red' });
  viewer.addSphere({ center: { x: -3.696, y: -0.398, z: 0.857 }, radius: 0.42, color: 'red' });

  viewer.addSphere({ center: { x: -3.349, y: -2.290, z: -2.487 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -5.667, y: -1.555, z: -1.675 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -4.754, y: -2.557, z: -0.541 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -1.390, y: -0.961, z: -1.579 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -2.058, y: -2.162, z: -0.470 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -5.104, y: 0.487, z: -0.414 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -5.729, y: -0.714, z: 0.714 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -4.360, y: -0.549, z: -3.383 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -1.283, y: -1.072, z: 1.699 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -0.333, y: -0.083, z: 0.582 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -2.159, y: 0.927, z: 2.816 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -0.399, y: 1.069, z: 2.715 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -1.641, y: 3.207, z: 2.090 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -0.546, y: 2.614, z: 0.831 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -3.597, y: 2.276, z: 0.915 }, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: { x: -2.658, y: 3.235, z: -0.228 }, radius: 0.3, color: 'silver' });

  viewer.addCylinder({ start: { x: -3.498, y: -1.395, z: -1.877 }, end: { x: -4.783, y: -1.579, z: -1.029 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -3.498, y: -1.395, z: -1.877 }, end: { x: -2.260, y: -1.206, z: -0.963 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -3.498, y: -1.395, z: -1.877 }, end: { x: -3.634, y: -0.293, z: -2.774 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -3.498, y: -1.395, z: -1.877 }, end: { x: -3.349, y: -2.290, z: -2.487 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -4.783, y: -1.579, z: -1.029 }, end: { x: -4.893, y: -0.478, z: 0.053 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -4.783, y: -1.579, z: -1.029 }, end: { x: -5.667, y: -1.555, z: -1.675 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -4.783, y: -1.579, z: -1.029 }, end: { x: -4.754, y: -2.557, z: -0.541 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -2.260, y: -1.206, z: -0.963 }, end: { x: -2.472, y: -0.107, z: 0.127 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -2.260, y: -1.206, z: -0.963 }, end: { x: -1.390, y: -0.961, z: -1.579 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -2.260, y: -1.206, z: -0.963 }, end: { x: -2.058, y: -2.162, z: -0.470 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -4.893, y: -0.478, z: 0.053 }, end: { x: -3.696, y: -0.398, z: 0.857 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -4.893, y: -0.478, z: 0.053 }, end: { x: -5.104, y: 0.487, z: -0.414 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -4.893, y: -0.478, z: 0.053 }, end: { x: -5.729, y: -0.714, z: 0.714 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -3.696, y: -0.398, z: 0.857 }, end: { x: -2.472, y: -0.107, z: 0.127 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -2.472, y: -0.107, z: 0.127 }, end: { x: -1.276, y: -0.136, z: 1.134 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -2.472, y: -0.107, z: 0.127 }, end: { x: -2.517, y: 1.194, z: -0.517 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -3.634, y: -0.293, z: -2.774 }, end: { x: -4.360, y: -0.549, z: -3.383 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -2.517, y: 1.194, z: -0.517 }, end: { x: -2.649, y: 2.325, z: 0.373 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -1.276, y: -0.136, z: 1.134 }, end: { x: -1.321, y: 1.054, z: 2.125 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -1.276, y: -0.136, z: 1.134 }, end: { x: -1.283, y: -1.072, z: 1.699 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -1.276, y: -0.136, z: 1.134 }, end: { x: -0.333, y: -0.083, z: 0.582 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -1.321, y: 1.054, z: 2.125 }, end: { x: -1.471, y: 2.397, z: 1.375 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -1.321, y: 1.054, z: 2.125 }, end: { x: -0.399, y: 1.069, z: 2.715 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -1.321, y: 1.054, z: 2.125 }, end: { x: -2.159, y: 0.927, z: 2.816 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -1.471, y: 2.397, z: 1.375 }, end: { x: -2.649, y: 2.325, z: 0.373 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -1.471, y: 2.397, z: 1.375 }, end: { x: -1.641, y: 3.207, z: 2.090 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -1.471, y: 2.397, z: 1.375 }, end: { x: -0.546, y: 2.614, z: 0.831 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -2.649, y: 2.325, z: 0.373 }, end: { x: -3.597, y: 2.276, z: 0.915 }, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer.addCylinder({ start: { x: -2.649, y: 2.325, z: 0.373 }, end: { x: -2.658, y: 3.235, z: -0.228 }, radius: .13, color: 'white', radiusRadio: 0.1, });

  // viewer.addSphere({ center: {x:0, y:0, z:0}, radius: 0.42, color: 'skyblue',
  // mid:1.0,   clickable:true,
  // callback:function(){
  //     console.log(x);
  //     this.color.setHex(0xFFFF3352-x);
  //     // document.querySelector(".cc").innerHTML="Chiral Center"
  //     x+=100;
  //     if(x>10000000000){
  //       x=0;
  //     }
  //     viewer.render( );
  // }});

  viewer.zoomTo();
  viewer.render();
  viewer.setBackgroundColor('black');
});

// var x=1;
$(function () {

  var c1 = { x: -5.386, y: -2.638, z: 0.731 };
  var c2 = { x: -4.193, y: -2.869, z: -0.110 };
  var c3 = { x: -2.926, y: -3.257, z: 0.548 };
  var c4 = { x: -2.624, y: -2.285, z: 1.734 };
  var c5 = { x: -5.000, y: -1.731, z: 1.924 };
  var c6 = { x: -1.429, y: -2.807, z: 2.591 };
  var c7 = { x: -1.957, y: 0.035, z: 2.140 };
  var c8 = { x: -0.777, y: -0.351, z: 3.080 };
  var c9 = { x: -1.021, y: -1.773, z: 3.675 };
  var c01 = { x: -0.541, y: 0.697, z: 4.215 };
  var c02 = { x: -0.223, y: 2.134, z: 3.733 };

  var o1 = { x: -3.803, y: -2.202, z: 2.584 };
  var o2 = { x: -2.256, y: -0.998, z: 1.177 };
  var o3 = { x: -4.236, y: -2.662, z: -1.345 };

  var h1 = { x: -5.743, y: -3.600, z: 1.105 };
  var h2 = { x: -6.194, y: -2.171, z: 0.161 };
  var h3 = { x: -3.045, y: -4.278, z: 0.920 };
  var h4 = { x: -2.098, y: -3.254, z: -0.168 };
  var h5 = { x: -5.809, y: -1.731, z: 2.655 };
  var h6 = { x: -4.871, y: -0.700, z: 1.581 };
  var h7 = { x: -0.565, y: -2.999, z: 1.945 };
  var h8 = { x: -1.702, y: -3.749, z: 3.075 };
  var h9 = { x: -2.845, y: 0.285, z: 2.729 };
  var h01 = { x: -1.685, y: 0.919, z: 1.561 };
  var h02 = { x: 0.132, y: -0.401, z: 2.471 };
  var h03 = { x: -1.813, y: -1.729, z: 4.429 };
  var h04 = { x: -0.110, y: -2.124, z: 4.170 };
  var h05 = { x: -1.421, y: 0.743, z: 4.862 };
  var h06 = { x: 0.299, y: 0.364, z: 4.831 };
  var h07 = { x: 0.010, y: 2.766, z: 4.592 };
  var h08 = { x: -1.075, y: 2.573, z: 3.213 };
  var h09 = { x: 0.636, y: 2.130, z: 3.063 };
=======
$(function() {
  var x1=1;
  var x2=1;
  var c1={x:-5.386  ,y:-2.638   ,z:0.731};
  var c2={x:-4.193  ,y:-2.869  ,z:-0.110};
  var c3={x:-2.926  ,y:-3.257   ,z:0.548};
  var c4={x:-2.624  ,y:-2.285   ,z:1.734};
  var c5={x:-5.000  ,y:-1.731   ,z:1.924};
  var c6={x:-1.429  ,y:-2.807   ,z:2.591};
  var c7={x:-1.957  ,y:0.035   ,z:2.140};
  var c8={x:-0.777  ,y:-0.351   ,z:3.080};
  var c9={x:-1.021  ,y:-1.773   ,z:3.675};
  var c01={x:-0.541  ,y:0.697   ,z:4.215};
  var c02={x:-0.223  ,y:2.134   ,z:3.733};
  
  var o1={x:-3.803  ,y:-2.202   ,z:2.584};
  var o2={x:-2.256  ,y:-0.998   ,z:1.177};
  var o3={x:-4.236  ,y:-2.662  ,z:-1.345};

  var h1={x:-5.743  ,y:-3.600   ,z:1.105};
  var h2={x:-6.194  ,y:-2.171   ,z:0.161};
  var h3={x:-3.045  ,y:-4.278   ,z:0.920};
  var h4={x:-2.098  ,y:-3.254  ,z:-0.168 };
  var h5={x:-5.809  ,y:-1.731   ,z:2.655};
  var h6={x:-4.871  ,y:-0.700   ,z:1.581};
  var h7={x:-0.565  ,y:-2.999   ,z:1.945};
  var h8={x:-1.702  ,y:-3.749   ,z:3.075};
  var h9={x:-2.845  ,y:0.285   ,z:2.729};
  var h01={x:-1.685  ,y:0.919   ,z:1.561};
  var h02={x:0.132  ,y:-0.401   ,z:2.471};
  var h03={x:-1.813  ,y:-1.729   ,z:4.429};
  var h04={x:-0.110  ,y:-2.124   ,z:4.170};
  var h05={x:-1.421  ,y:0.743   ,z:4.862};
  var h06={x:0.299   ,y:0.364   ,z:4.831};
  var h07={x:0.010   ,y:2.766   ,z:4.592};
  var h08={x:-1.075   ,y:2.573   ,z:3.213};
  var h09={x:0.636   ,y:2.130   ,z:3.063};
>>>>>>> b300f98b3b2e28edeb0b5bfaf8c5bf77e62d341d

  // 2nd Molecule
  let element1 = $('#cont2');
  let config1 = { backgroundColor: 'skyblue' };
<<<<<<< HEAD
  let viewer1 = $3Dmol.createViewer(element1, config1);
  viewer1.addLabel("Carbon", { position: { x: -6, y: 3.7, z: 5 }, backgroundColor: 'skyblue', backgroundOpacity: 0.9, fontSize: 13 });
  viewer1.addLabel("Oxygen", { position: { x: -6, y: 3, z: 5 }, backgroundColor: 'red', backgroundOpacity: 0.8, fontSize: 13 });
  viewer1.addLabel("Hydrogen", { position: { x: -6, y: 2.3, z: 5 }, backgroundColor: 'silver', backgroundOpacity: 0.8, fontSize: 13 });

  viewer1.addSphere({ center: c1, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c2, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c3, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c4, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c5, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c6, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c7, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c8, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c9, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c01, color: 'skyblue', radius: 0.4 });
  viewer1.addSphere({ center: c02, color: 'skyblue', radius: 0.4 });

=======
  let viewer1 = $3Dmol.createViewer( element1, config1 );
  viewer1.addLabel("Carbon", {position: {x:-6 , y:3.3, z:5}, backgroundColor: 'skyblue',backgroundOpacity: 0.9,fontSize: 13});
  viewer1.addLabel("Oxygen", {position: {x:-6 , y:2.6, z:5}, backgroundColor: 'red',backgroundOpacity: 0.8,fontSize: 13});
  viewer1.addLabel("Hydrogen", {position: {x:-6 , y:1.9, z:5}, backgroundColor: 'silver',backgroundOpacity: 0.8,fontSize: 13});

  viewer1.addSphere({center: c1, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c2, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c3, color: 'skyblue',radius:0.4});
  // viewer1.addSphere({center: c4, color: 'green',radius:0.4});
  viewer1.addSphere({ center: c4, radius: 0.4, color: 'skyblue',
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
  viewer1.addSphere({center: c5, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c6, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c7, color: 'skyblue',radius:0.4});
  // viewer1.addSphere({center: c8, color: 'skyblue',radius:0.4});
  viewer1.addSphere({ center: c8, radius: 0.4, color: 'skyblue',
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
  viewer1.addSphere({center: c9, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c01, color: 'skyblue',radius:0.4});
  viewer1.addSphere({center: c02, color: 'skyblue',radius:0.4});
  
>>>>>>> b300f98b3b2e28edeb0b5bfaf8c5bf77e62d341d
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
  viewer1.addSphere({ center: h08, radius: 0.3, color: 'silver' });
  viewer1.addSphere({ center: h09, radius: 0.3, color: 'silver' });

<<<<<<< HEAD
  viewer1.addCylinder({ start: c1, end: c2, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c1, end: c5, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c1, end: h2, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c1, end: h1, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c2, end: c3, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c2, end: o3, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c2, end: o3, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c3, end: c4, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c3, end: h4, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c3, end: h3, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c4, end: o1, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c4, end: o2, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c4, end: c6, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: o1, end: c5, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c5, end: h5, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c5, end: h6, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: o2, end: c7, radius: .13, color: 'white', radiusRadio: 0.1, });
  // viewer1.addCylinder({ start: o2, end:c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: h7, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c6, end: c9, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c6, end: h8, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c7, end: c8, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c7, end: h9, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c7, end: h01, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c8, end: c9, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c8, end: c01, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c8, end: h02, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c9, end: h03, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c9, end: h04, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c01, end: c02, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c01, end: h05, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c01, end: h06, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c02, end: h07, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c02, end: h08, radius: .13, color: 'white', radiusRadio: 0.1, });
  viewer1.addCylinder({ start: c02, end: h09, radius: .13, color: 'white', radiusRadio: 0.1, });

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

=======
  viewer1.addCylinder({ start: c1, end: c2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c1, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c1, end: h2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c1, end: h1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c2, end: c3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: {x:-4.2 ,y:-2.7  ,z:-0.1}, end: {x:-4.2 ,y:-2.5  ,z:-1.3},radius: .1,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: {x:-4.2  ,y:-3  ,z:-0.2}, end: {x:-4.2  ,y:-2.8  ,z:-1.4},radius: .1,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: c4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: h4,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c3, end: h3,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: o1,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: o2,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c4, end: c6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o1, end: c5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c5, end: h5,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c5, end: h6,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: o2, end: c7,radius: .13,color:'white',radiusRadio:0.1,});
  // viewer1.addCylinder({ start: o2, end:c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: h7,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c6, end: h8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: c8,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: h9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c7, end: h01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end:c9,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: c01,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start: c8, end: h02,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c9, end: h03,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c9, end: h04,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c01, end: c02,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c01, end: h05,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c01, end: h06,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c02, end: h07,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c02, end: h08,radius: .13,color:'white',radiusRadio:0.1,});
  viewer1.addCylinder({ start:c02, end: h09,radius: .13,color:'white',radiusRadio:0.1,});
  
>>>>>>> b300f98b3b2e28edeb0b5bfaf8c5bf77e62d341d
  viewer1.zoomTo();
  viewer1.render();
  viewer1.setBackgroundColor('black');

});

