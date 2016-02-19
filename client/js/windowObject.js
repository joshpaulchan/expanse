
var windowObject = function() {
    
    this.init = function() {
        // TODO create all necessary objects
        var geometry = new THREE.BoxGeometry( 1, 1, 0 );
        var material = new THREE.MeshBasicMaterial( { color: "#3498db" } );
        this.obj = new THREE.Mesh( geometry, material );
    };
    
    this.getPosition = function() {
        // TODO: return the position coordinates of the (center?) of the window
    };
    
    this.setPosition = function(x, y, z) {
        // TODO: set the position of the windowObject
    };
    
    this.close = function() {
        // TODO: this whole thing
    };
    
    this.setSize = function() {
        // TODO: figure out params
        // TODO: figure out this whole thing
    };
    
    this.update = function() {
        this.obj.rotation.x = 0.01;
    };
    
    this.init();
    
    return this;
};
