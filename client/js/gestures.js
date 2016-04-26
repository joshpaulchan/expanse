
//Setup the virtual world
var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
//scene
var scene = new THREE.Scene();
//camera

var camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 10;

//VR data
var controls = new THREE.VRControls( camera );
var effect = new THREE.VREffect( renderer );
effect.setSize( window.innerWidth, window.innerHeight );
var manager = new WebVRManager( renderer, effect, {hideButton: false} );
//Create lighting and set geometry objects
var hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6);
hemiLight.position.set(0, 0, 0);
scene.add(hemiLight);
var boxGeometry = new THREE.BoxGeometry( 4, 3, 0.1 );
var planeGeometry = new THREE.PlaneGeometry( 10, 10 );
var sphereGeometry = new THREE.SphereGeometry( 2, 1, 1 );
//how many objects   THIS IS WHERE THE SERVER WILL SEND THE AMOUNT OF WINDOWS OPEN
for ( var i = 0; i < 5; i ++ ) {
	addMesh(boxGeometry);
	//addMesh(planeGeometry);
	//addMesh(sphereGeometry);
}

var x = this.gestures;

//add mesh
function addMesh(geo) {
	var object = new THREE.Mesh( geo, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
	object.position.x = Math.random() * 20 - 10;
	object.position.y = Math.random() * 10 - 5;
	object.position.z = Math.random() * 3 - 1;
	
	
 this.init = function() {
 
 	this.socket = io();
	this.socket.on('gestures', function(gestureNum){
	
		switch(gestureNum){
		
case 0:
		console.log("got one")
	object.scale.x = object.scale.x + .02;
	object.scale.y = object.scale.y + .015;
	object.scale.z = 1;
if (object.scale.x >= 8 )
{
	object.scale.x = 8;
}
if (object.scale.y >= 6)
{
	object.scale.y = 6;
}
break;

case 1: 
console.log("got one")
	object.position.x = object.position.x - 0.5;
break;

		}
	});
	this.render();
	};


	//Set up rules for the crosshairs
	Reticulum.add( object, {
	
	clickCancelFuse: false, //load reticle when on an object
	reticleHoverColor: 0x00fff6, //crosshair color 
    fuseVisible: true, //is visible
    fuseDuration: 0.5, //reticle takes 0.5 seconds to load
    fuseColor: 0xcc0000, //color
    
onGazeOver: function()			//Function when reticle intersects the object
{
				this.material.emissive.setHex( 0xffcc00 ); //change color so we know it works
},
		
onGazeOut: function()			//Function when reticle moves off object
{
				
				
			this.material.emissive.setHex( 0xcc0000 );	//change color so we know it works
		},
		
onGazeLong: function()		//Function for when the reticle has been on the window long enough for the fuse to load
{
	/*
	
case 70 : //f  Make Bigger
object.scale.x = object.scale.x + .02;
object.scale.y = object.scale.y + .015;
object.scale.z = 1;
if (object.scale.x >= 8 )
{
	object.scale.x = 8;
}
if (object.scale.y >= 6)
{
	object.scale.y = 6;
}
break;
case 71 : //g  Make Smaller
object.scale.x = object.scale.x - .02;
object.scale.y = object.scale.y - .015;
object.scale.z = 1;
if (object.scale.x <= .4)
{
	object.scale.x = .4;
}
if (object.scale.y <= .3)
{
	object.scale.y = .3;
}
break;
case 86 : // v Move Closer
object.position.z = object.position.z + 0.5;
break;
case 66	: //b Move Further
object.position.z = object.position.z - 0.5;
break;
case 73 : //i Move Up
object.position.y = object.position.y + 0.01;
break;
case 74	: //j Move Left
object.position.x = object.position.x - 0.01;
break;
case 75	: //k Move Right
object.position.x = object.position.x +0.01;
break;
case 77	: //m Move Down
object.position.y = object.position.y - 0.01;
break;
case 90 : //z If minimized it will bring it back into scene
if (object.position.x == 4 && object.scale.x == 0.1 && object.scale.y == 0.1 && object.scale.z == 0.1)
{
	object.position.y = 0;
	object.scale.x = 1;
	object.scale.y = .75;
	object.scale.z = 1;
	object.position.x = Math.random()* 20-1;
}
break;
case 80 : //p Full Screen
object.position.x = 0;
object.position.y = 0;
object.position.z = 1;
object.scale.x = 8;
object.scale.y = 6;
object.scale.z = 1;
break;
case 88: //x Minimize
var ypos = 5
object.position.x = 4;
object.position.y = Math.random() * 3-1;
object.position.z = -1;
object.scale.x = 0.1;
object.scale.y = 0.1;
object.scale.z = 0.1;
this.material.emissive.setHex( 0x0000cc );
break;
case 81: //q Delete Window
object.scale.x = 0;
object.scale.y = 0;
object.scale.z = 0;
break;
case 69: //e Add Window
addMesh(boxGeometry);
}
*/

}, 
		
		
onGazeClick: function()		//Function on Click
{


					this.material.emissive.setHex( 0x00cccc * Math.random() );		//change color so we know it works
		}
	});
	scene.add( object );		//add objects to scene
}
//initiate crosshairs and set their rules

        
        Reticulum.init(camera, {
				proximity: false,
				clickevents: false,
			reticle: {
				visible: true,
				restPoint: 1000, //location when nothing selected
				color: 0xcc00cc,
				innerRadius: 0.0001,
				outerRadius: 0.003,
			hover: {
				color: 0x00cccc,
				innerRadius: 0.02,
				outerRadius: 0.024,
				speed: 5,
				vibrate: 50 
					}
				},
		fuse: {
				visible: false,
			duration: 1.0,
			color: 0x00fff6,
			innerRadius: 0.045,
			outerRadius: 0.06,
			vibrate: 0, //
		clickCancelFuse: false //If users clicks on targeted object fuse is canceled
	}
});


scene.add(camera);	//camera set
function animate(timestamp) {	//animating the crosshairs
	
	requestAnimationFrame(animate);
	Reticulum.update();		//check if looking at object
	
	controls.update();
	camera.updateMatrixWorld(); 
	manager.render(scene, camera, timestamp);
	
}
animate();
//window resizes
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  effect.setSize( window.innerWidth, window.innerHeight );
}
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', onWindowResize, false );