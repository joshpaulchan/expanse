
var WindowObjController = function(scene) {
    
    var windows;
    var activeWindow = null;
    
    this.init = function(scene) {
        this.windows = [];
    };
    
    this.createWindows = function(n, feeds) {
        // TODO:
    };
    
    this.createWindow = function(srcUrl) {
        var wdo = new WindowObj();
        this.windows.push(wdo);             // Track window
        // scene.add(wdo.obj);                 // Add window to scene
        
        // TODO: register wdo with Reticulum
        // i.e. reticulum.add
        // on gaze enter: set WindowObjController.activewindow to this window
        // on gaze leave: if (activewindow == this window) then make it null
        return wdo;
    };
    
    this.destroyWindow = function(windowId) {
        this.windows.filter(function(wo) {
            if (wo.id == windowId) {
                wo.close();
            }
            return (wo.id != windowId);
        });
    };
    
    this.getActiveWindow = function() {
        return this.activeWindow;
    };
    
    this.init(scene);
    
    return this;
};
