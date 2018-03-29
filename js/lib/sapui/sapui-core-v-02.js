// all common functions to configure modules


"use strict";
var com={};

// $ is alias for com.sapui
var $= com.sapui= {v:2}

$.initStructure=function (libPath){
var root = window
var structure=libPath.split(".")
for (var i = 0; i < structure.length; i++) {
    root[structure[i]]=root[structure[i]]||{}
    root= root[structure[i]];
    }
}
$.initconf =  function()
{
   for (var i=0; i < conf.modules.length;i++)
   {
     if (conf.modules[i].active)
     for (var j=0; j < conf.modules[i].src.length;j++)
     {
      var script = document.createElement('script')
      script.src = conf.modules[i].rootpath + conf.modules[i].src[j];
     document.write(script.outerHTML)
    }
   }
}
$.initconf()