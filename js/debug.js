// Auto reload
var Gaze = require('gaze').Gaze;
var gaze = new Gaze('**/*');

gaze.on('all', function(event, filepath) {
    if (window.location) {
        window.location.reload();
    }
});