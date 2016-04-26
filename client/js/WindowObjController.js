
var WindowObjController = function(scene) {
    
    var windows;
    var activeWindow = null;
    
    this.init = function(scene) {
        this.windows = {};
    };
    
    this.createWindow = function(id) {
        var wdo = new WindowObj(id);
        this.windows[id] = wdo;             // Track window
        
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
    
    this.init(scene);
    
    return this;
};
