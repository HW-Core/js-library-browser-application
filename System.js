/*
 * Copyright (C) 2007 - 2014 Hyperweb2 All rights reserved.
 * GNU General Public License version 3; see www.hyperweb2.com/terms/
 */
hw2.define([
    'hw2!PATH_JS_LIB:application/include.js'
], function () {
    $ = this;

    return $.Browser.System = $.public.class.extends($.System)([
        $.protected({
            router: null
        }),
        $.public({
            __construct: function () {
                this._i.router=new $.Router.I();
                
                this._i.router.addListner(this);
                
                this.__super();
            }
        })
    ]);
});