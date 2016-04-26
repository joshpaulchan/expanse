
var WindowObjController = function(scene) {
    var windows;
    var activeWindow = null;
    
    this.init = function(scene) {
        this.windows = {};
    };
    
    this.createWindow = function(id) {
        var wdo = new WindowObj(id);
        this.windows[id] = wdo;             // Track window
        
        var that = this;
    	Reticulum.add( wdo.obj, {
			clickCancelFuse: false, //load reticle when on an object
			reticleHoverColor: 0x00fff6, //crosshair color 
			fuseVisible: true, //is visible
			fuseDuration: 0.5, //reticle takes 0.5 seconds to load
			fuseColor: 0xcc0000, //color
        	onGazeOut: function() { //Function when reticle moves off object
        	    // TODO: if (activeWindow == this window) then leave
        	},
        	onGazeLong: function() { //Function for when the reticle has been on the window long enough for the fuse to load
                that.setActiveWindow(wdo);
        	}
    	});

        return wdo;
    };
    
    this.destroyWindow = function(windowId) {
        this.windows[windowId].close();
    };
    
    this.getWindowById = function(id) {
        return this.windows[id];
    };
    
    this.getActiveWindow = function() {
        return this.activeWindow;
    };
    
    this.setActiveWindow = function(wdo) {
        this.activeWindow = wdo;
    };
    
    this.init(scene);
    
    return this;
};
