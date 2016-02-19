
var App = function() {
    
    var scene;
    var camera;
    var renderer;
    var cube;
    
    this.init = function() {
        // Create scene
        this.scene = new THREE.Scene();
        
        // Initialize camera
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 700 );
        this.camera.position.set(0, 0, 5);
        
        // Initialize renderer
        this.renderer = new THREE.WebGLRenderer();
        this.stereoRenderer = new THREE.StereoEffect(this.renderer);
        rem = this.renderer.domElement;
        
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( rem );
        
        
        // FIXME: use windowControllerObject
        this.windowObj = new windowObject();
        
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
