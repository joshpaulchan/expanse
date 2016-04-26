
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
        	onGazeOver: function() { //Function when reticle intersects the object
        	
        	},
        	onGazeOut: function() { //Function when reticle moves off object
        	
        	},
        	onGazeLong: function() { //Function for when the reticle has been on the window long enough for the fuse to load
                that.setActiveWindow(wdo);
        	},
        	onGazeClick: function() { //Function on Click

        	}
    	});
        
        // TODO: register wdo with Reticulum
        // i.e. reticulum.add
        // on gaze enter: set WindowObjController.activewindow to this window
        // on gaze leave: if (activewindow == this window) then make it null
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
