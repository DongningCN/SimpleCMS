/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('SimpleCMS.Application', {
    extend: 'Ext.app.Application',
    
    name: 'SimpleCMS',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
        Ext.util.Format.defaultValue = function (value, defaultValue) {
            return Ext.isEmpty(value) ? defaultValue : value;
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
