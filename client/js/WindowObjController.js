
var WindowObjController = function(scene) {
    
    var windows;
    
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
    
    this.init(scene);
    
    return this;
};
