// written by: Joshua Chan, Anthony Wong, Dmitriy Koz (Virtualization Team)
// tested by: Joshua Chan, Anthony Wong, Dmitriy Koz (Virtualization Team)
// debugged by: Joshua Chan, Anthony Wong, Dmitriy Koz (Virtualization Team)

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
        
        // Initialize WindowObjController
        this.windowObjController = new WindowObjController(this.scene);
        
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
        
        this.socket = io();
        this.socket.on('gesture', function(gestureNum){
            // Apply gesture to active window
            var aw = this.windowObjController.getActiveWindow();
            
            if (aw !== null) {
                gestures[parseInt(gestureNum)](aw.obj);
            }
        });
        
        var that = this;
        this.socket.on('window', function(winData) {
            // Create image info
            var img = new Image();
            img.src = 'data:image/jpeg;base64,' + winData.buffer;
            
            // if window exists, get it and update it
            var win = that.windowObjController.getWindowById(winData.id);
            if (win !== null) {
                win.update(img);
            }
        });
        
        this.socket.on('windowCreate', function(winData) {
            // Create new window
            var win = that.windowObjController.createWindow(winData.id);
            that.scene.add( win.obj );
            console.log("Window " + winData.id + " created");
        });
        
        this.socket.on('windowDestroy', function(winData) {
            // Create new window
            var win = that.windowObjController.destroyWindow(winData.id);
            that.scene.remove( win.obj );
            console.log("Window " + winData.id + " destroyed");
        });
        
        this.render();
    };
    
    this.update = function() {
        // TODO: user windowControllerObject
        // Reticulum.update();
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
