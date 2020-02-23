
$(function() {

  var x2=1;
  var x1=1;
  // 1st Molecule
  let element = $('#cont1');
  let config = { backgroundColor: 'skyblue' };
  let viewer = $3Dmol.createViewer( element, config );

  viewer.addSphere({ center: {x:-3.498 , y:-1.395, z:-1.877}, radius: 0.4, color: 'skyblue',
  mid:1.0,   clickable:true,
  callback:function(){
        this.color.setHex(0x0000FF00);
        correct();
        // document.getElementById("overlay2").style.display = 'block';
        // document.getElementById("result1").innerHTML = "Correct";
        // setTimeout(function(){ 
        //   document.getElementById("result1").innerHTML = "";
        //   document.getElementById("overlay2").style.display = "none";
        // }, 500);
        // document.getElementById("result1").style.color = 'white';
        // document.getElementById("overlay2").style.backgroundColor="rgba(0,255,0,0.50)";
      viewer.render();
  }});
  viewer.addSphere({center: {x:-4.783 , y:-1.579, z:-1.029}, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
      incorrectc();
  }});
  viewer.addSphere({center: {x:-2.260 , y:-1.206, z:-0.963}, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
    incorrectc();
  }});

  viewer.addSphere({center: {x:-4.893 , y:-0.478 , z:0.053}, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
    incorrectc();
  }});

  viewer.addSphere({ center: {x:-2.472 , y:-0.107 ,  z:0.127}, radius: 0.4, color: 'skyblue',
  mid:1.0,   clickable:true,
  callback:function(){
      this.color.setHex(0x0000FF00);
      correct();
      viewer.render();
  }});

  viewer.addSphere({center: {x:-1.276 , y:-0.136 ,  z:1.134}, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
      incorrectc();
  }});

  viewer.addSphere({center: {x:-1.321 , y:1.054 ,  z:2.125}, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
    incorrectc();
  }});

  viewer.addSphere({center: {x:-1.471 ,  y:2.397 ,  z:1.375}, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
    incorrectc();
  }});

  viewer.addSphere({center: {x:-2.649 ,  y:2.325 ,  z:0.373}, color: 'skyblue',radius:0.4,mid:1.0,   clickable:true,
  callback:function(){
    incorrectc();
  }});
  
  viewer.addSphere({ center: {x:-3.634 , y:-0.293  ,z:-2.774}, radius: 0.42, color: 'red',mid:1.0, clickable: true, callback:function(){
    incorrecto();
  }});
  viewer.addSphere({ center: {x:-2.517 , y:1.194 , z:-0.517}, radius: 0.42, color: 'red',mid:1.0, clickable: true, callback:function(){
    incorrecto();
  }});
  viewer.addSphere({ center: {x:-3.696 , y:-0.398 , z:0.857}, radius: 0.42, color: 'red',mid:1.0, clickable: true, callback:function(){
    incorrecto();
  }});
  
  viewer.addSphere({ center: {x:-3.349 , y:-2.290 , z:-2.487}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-5.667 , y:-1.555 , z:-1.675}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-4.754 , y:-2.557 , z:-0.541}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-1.390 , y:-0.961 , z:-1.579}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-2.058 , y:-2.162 , z:-0.470}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-5.104 , y:0.487  , z:-0.414}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-5.729 , y:-0.714 , z:0.714}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-4.360 , y:-0.549 , z:-3.383}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-1.283 , y:-1.072 , z:1.699}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-0.333 , y:-0.083 , z:0.582}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-2.159 , y:0.927  , z:2.816}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-0.399 , y:1.069  , z:2.715}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-1.641 , y:3.207  , z:2.090}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-0.546 , y:2.614  , z:0.831}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-3.597 , y:2.276  , z:0.915}, radius: 0.3, color: 'silver' });
  viewer.addSphere({ center: {x:-2.658 , y:3.235 , z:-0.228}, radius: 0.3, color: 'silver' });

  viewer.addCylinder({ start: {x:-3.498 , y:-1.395, z:-1.877}, end: {x:-4.783 , y:-1.579, z:-1.029},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-3.498 , y:-1.395, z:-1.877}, end: {x:-2.260 , y:-1.206, z:-0.963},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-3.498 , y:-1.395, z:-1.877}, end: {x:-3.634 , y:-0.293  ,z:-2.774},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-3.498 , y:-1.395, z:-1.877}, end: {x:-3.349 , y:-2.290 , z:-2.487},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-4.783 , y:-1.579, z:-1.029}, end: {x:-4.893 , y:-0.478 , z:0.053},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-4.783 , y:-1.579, z:-1.029}, end: {x:-5.667 , y:-1.555 , z:-1.675},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-4.783 , y:-1.579, z:-1.029}, end: {x:-4.754 , y:-2.557 , z:-0.541},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.260 , y:-1.206, z:-0.963}, end: {x:-2.472 , y:-0.107 ,  z:0.127},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.260 , y:-1.206, z:-0.963}, end: {x:-1.390 , y:-0.961 , z:-1.579},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.260 , y:-1.206, z:-0.963}, end: {x:-2.058 , y:-2.162 , z:-0.470},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-4.893 , y:-0.478 , z:0.053}, end: {x:-3.696 , y:-0.398 , z:0.857},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-4.893 , y:-0.478 , z:0.053}, end: {x:-5.104 , y:0.487  , z:-0.414},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-4.893 , y:-0.478 , z:0.053}, end: {x:-5.729 , y:-0.714 , z:0.714},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-3.696 , y:-0.398 , z:0.857}, end: {x:-2.472 , y:-0.107 ,  z:0.127},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.472 , y:-0.107 ,  z:0.127}, end: {x:-1.276 , y:-0.136 ,  z:1.134},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.472 , y:-0.107 ,  z:0.127}, end: {x:-2.517 , y:1.194 , z:-0.517},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-3.634 , y:-0.293  ,z:-2.774}, end: {x:-4.360 , y:-0.549 , z:-3.383},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.517 , y:1.194 , z:-0.517}, end: {x:-2.649 ,  y:2.325 ,  z:0.373},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.276 , y:-0.136 ,  z:1.134}, end: {x:-1.321 , y:1.054 ,  z:2.125},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.276 , y:-0.136 ,  z:1.134}, end: {x:-1.283 , y:-1.072 , z:1.699},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.276 , y:-0.136 ,  z:1.134}, end: {x:-0.333 , y:-0.083 , z:0.582},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.321 , y:1.054 ,  z:2.125}, end: {x:-1.471 ,  y:2.397 ,  z:1.375},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.321 , y:1.054 ,  z:2.125}, end: {x:-0.399 , y:1.069  , z:2.715},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.321 , y:1.054 ,  z:2.125}, end: {x:-2.159 , y:0.927  , z:2.816},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.471 ,  y:2.397 ,  z:1.375}, end: {x:-2.649 ,  y:2.325 ,  z:0.373},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.471 ,  y:2.397 ,  z:1.375}, end: {x:-1.641 , y:3.207  , z:2.090},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-1.471 ,  y:2.397 ,  z:1.375}, end: {x:-0.546 , y:2.614  , z:0.831},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.649 ,  y:2.325 ,  z:0.373}, end: {x:-3.597 , y:2.276  , z:0.915},radius: .13,color:'white',radiusRadio:0.1,});
  viewer.addCylinder({ start: {x:-2.649 ,  y:2.325 ,  z:0.373}, end: {x:-2.658 , y:3.235 , z:-0.228},radius: .13,color:'white',radiusRadio:0.1,});
  
  viewer.zoomTo();
  viewer.render();
  viewer.setBackgroundColor('black');


  // 2nd Molecule
  
});
