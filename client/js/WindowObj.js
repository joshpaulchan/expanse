
var WindowObj = function() {
    
    windowDefaultWidth = 3;
    windowDefaultHeight = 3;
    
    this.init = function() {
        
        // Create container object
        this.obj = new THREE.Group();
        
        // Create base plane
        var geometry = new THREE.PlaneGeometry( windowDefaultHeight, windowDefaultWidth);
        var material = new THREE.MeshBasicMaterial( { color: "#3498db", wireframe: false} );
        // var material = new THREE.MeshDepthMaterial();
        var baseMesh = new THREE.Mesh( geometry, material );
        
        this.obj.add(baseMesh);
        this.id = this.obj.id;
    };
    
    this.getId = function() {
        return this.id;
    };
    
    this.getPosition = function() {
        // return the position coordinates of the (center?) of the window
        return this.obj.position;
    };
    
    this.setPosition = function(x, y, z) {
        // set the position of the windowObject
        this.obj.position.x = x;
        this.obj.position.y = y;
        this.obj.position.z = z;
        return this.obj.position;
    };
    
    this.close = function() {
        // TODO: this whole thing
    };
    
    this.getSize = function() {
        // TODO: return the width and height of the window calculated from the top left corner to the bottom right
        var w = 0;
        var h = 0;
        return ({ "w": w, "h": h});
    };
    
    this.setSize = function(w, h) {
        // TODO: figure out this whole thing
    };
    
    this.update = function() {
        this.obj.rotation.x = 0.01;
    };
    
    this.init();
    
    return this;
};
