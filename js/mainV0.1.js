"use strict";
var script = document.createElement('script')
var filepaths = ['js/lib/sapui-core-v-02.js'
                  , 'js/lib/calculator-events-v-02.js'
                  , 'js/lib/calculator-core-v-02.js']
for (var i=0; i < filepaths.length;i++)
{
    script.src = filepaths[i];
    document.write(script.outerHTML)
}
