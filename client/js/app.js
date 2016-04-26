var App = function() {
    
    var socket;
    var scene;
    var camera;
    var renderer;
    
    this.init = function() {
        // Create scene
        this.scene = new THREE.Scene();
        
        // Initialize camera
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 700 );
        this.camera.position.set(0, 0, 5);
        this.scene.add(this.camera);
        
        // Initialize lighting
        this.light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        this.scene.add( this.light );
        
        // Initialize renderer
        this.renderer = new THREE.WebGLRenderer();
        this.stereoRenderer = new THREE.StereoEffect(this.renderer);
        rem = this.renderer.domElement;
        
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( rem );
        
        
        Reticulum.init(this.camera, {
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

        
        // Initialize WindowObjController
        this.windowObjController = new WindowObjController(this.scene);
        this.windowObj = this.windowObjController.createWindow('');
        
        // TODO: windowObjs should automatically be added to scene
        this.scene.add( this.windowObj.obj );
        
        // CONTROLS
        var controls = new THREE.OrbitControls(this.camera, rem);
        // controls.target.set(
        //     camera.position.x + 0.15,
        //     camera.position.y,
        //     camera.position.z
        // );
        
        // controls.noPan = true;
        controls.enableZoom = false;
        
        // window.addEventListener('deviceorientation', setOrientationControls, true);
        // rem.addEventListener('click', this.fullscreen, false);
        
        var gestures = {
            0: function(wo) {
                console.log("gesture 0");
            },
            1: function(wo) {
                console.log("gesture 1");
            },
            2: function(wo) {
                console.log("gesture 2");
            }
        };
        
        this.socket = io();
        this.socket.on('gesture', function(gestureNum){
            // Apply gesture to active window
            var aw = this.windowObjController.getActiveWindow();
            
            if (aw !== null) {
                gestures[parseInt(gestureNum)](aw);
            }
        });
        
        this.render();
    };
    
    this.update = function() {
        // TODO: user windowControllerObject
        this.windowObj.update();
    };
    
    this.render = function() {
        this.update();

        this.stereoRenderer.render( this.scene, this.camera );
        
        requestAnimationFrame( this.render.bind(this) );
    };
    
    this.fullscreen = function() {};
    
    this.init();
    
    return this;
};