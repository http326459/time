/**
 * Created by Administrator on 2017/4/20.
 */
/*! lucky-card 1.0.0 https://github.com/Franslee/lucky-card 2016-03-17 */
/*
!function(a,b,c){"use strict";function d(a,b){this.cover=null,this.ctx=null,this.scratchDiv=null,this.cardDiv=null,this.cHeight=0,this.cWidth=0,this.supportTouch=!1,this.events=[],this.startEventHandler=null,this.moveEventHandler=null,this.endEventHandler=null,this.opt={coverColor:"#C5C5C5",coverImg:"",ratio:.8,callback:null},this.init(a,b)}function e(a,b,c){var d=a.getImageData(0,0,300,100),e=[];f(d.data,function(a,b){var c=d.data[b+3];0===c&&e.push(c)}),e.length/d.data.length>c&&b&&"function"==typeof b&&b()}function f(a,b){return Array.prototype.forEach.call(a,function(a,c){b(a,c)})}function g(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))}function h(a){this.moveEventHandler=i.bind(this),this.cover.addEventListener(this.events[1],this.moveEventHandler,!1),this.endEventHandler=j.bind(this),b.addEventListener(this.events[2],this.endEventHandler,!1),a.preventDefault()}function i(a){var c=this.supportTouch?a.touches[0]:a,d=this.cover.getBoundingClientRect(),e=b.documentElement.scrollTop||b.body.scrollTop,f=b.documentElement.scrollLeft||b.body.scrollLeft,g=c.pageX-d.left-f,h=c.pageY-d.top-e;this.ctx.beginPath(),this.ctx.fillStyle="#FFFFFF",this.ctx.globalCompositeOperation="destination-out",this.ctx.arc(g,h,10,0,2*Math.PI),this.ctx.fill(),a.preventDefault()}function j(a){this.opt.callback&&"function"==typeof this.opt.callback&&e(this.ctx,this.opt.callback,this.opt.ratio),this.cover.removeEventListener(this.events[1],this.moveEventHandler,!1),b.removeEventListener(this.events[2],this.endEventHandler,!1),a.preventDefault()}d.prototype.createCanvas=function(){if(this.cover=b.createElement("canvas"),this.cover.id="cover",this.cover.height=this.cHeight,this.cover.width=this.cWidth,this.ctx=this.cover.getContext("2d"),this.opt.coverImg){var a=this,c=new Image;c.src=this.opt.coverImg,c.onload=function(){a.ctx.drawImage(c,0,0,a.cover.width,a.cover.height)}}else this.ctx.fillStyle=this.opt.coverColor,this.ctx.fillRect(0,0,this.cover.width,this.cover.height);this.scratchDiv.appendChild(this.cover)},d.prototype.eventDetect=function(){"ontouchstart"in a&&(this.supportTouch=!0),this.events=this.supportTouch?["touchstart","touchmove","touchend"]:["mousedown","mousemove","mouseup"],this.addEvent()},d.prototype.addEvent=function(){this.startEventHandler=h.bind(this),this.cover.addEventListener(this.events[0],this.startEventHandler,!1)},d.prototype.clearCover=function(){this.ctx.clearRect(0,0,this.cover.width,this.cover.height)},d.prototype.init=function(a,c){if(!g())return void alert("对不起，当前浏览器不支持Canvas，无法使用本控件！");var d=this;f(arguments,function(a){if("object"==typeof a)for(var b in a)"callback"===b&&"function"==typeof a[b]?d.opt.callback=a[b].bind(d):b in d.opt&&(d.opt[b]=a[b]);else"function"==typeof a&&(d.opt.callback=a.bind(d))}),this.scratchDiv=b.getElementById("scratch"),this.cardDiv=b.getElementById("card"),this.scratchDiv&&this.cardDiv&&(this.cHeight=this.cardDiv.clientHeight,this.cWidth=this.cardDiv.clientWidth,this.createCanvas(),this.eventDetect())},d["case"]=function(a,b){return new d(a,b)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return d}):"undefined"!=typeof module&&module.exports?(module.exports=d["case"],module.exports.LuckyCard=d):a.LuckyCard=d}(window,document);*/

    !function(a, b, c) {
        "use strict";
        function d(a, b) {
            this.cover = null,
                this.ctx = null,
                this.scratchDiv = null,
                this.cardDiv = null,
                this.cHeight = 0,
                this.cWidth = 0,
                this.supportTouch = !1,
                this.events = [],
                this.startEventHandler = null,
                this.moveEventHandler = null,
                this.endEventHandler = null,
                this.opt = {
                    coverColor: "#C5C5C5",
                    coverImg: "",
                    ratio: .8,
                    callback: null,
                },
                this.init(a, b)
        }
        function e(a, b, c) {
            var d = a.getImageData(0, 0, 300, 100),
                e = [];
            f(d.data,
                function(a, b) {
                    var c = d.data[b + 3];
                    0 === c && e.push(c)
                }),
            e.length / d.data.length > c && b && "function" == typeof b && b()
        }
        function f(a, b) {
            return Array.prototype.forEach.call(a,
                function(a, c) {
                    b(a, c)
                })
        }
        function g() {
            var a = b.createElement("canvas");
            return ! (!a.getContext || !a.getContext("2d"))
        }
        function h(a) {
            this.moveEventHandler = i.bind(this),
                this.cover.addEventListener(this.events[1], this.moveEventHandler, !1),
                this.endEventHandler = j.bind(this),
                b.addEventListener(this.events[2], this.endEventHandler, !1),
                a.preventDefault()
        }
        function i(a) {
            var c = this.supportTouch ? a.touches[0] : a,
                d = this.cover.getBoundingClientRect(),
                e = b.documentElement.scrollTop || b.body.scrollTop,
                f = b.documentElement.scrollLeft || b.body.scrollLeft,
                g = c.pageX - d.left - f,
                h = c.pageY - d.top - e;
            this.ctx.beginPath(),
                this.ctx.fillStyle = "#FFFFFF",
                this.ctx.globalCompositeOperation = "destination-out",
                this.ctx.arc(g, h, 10, 0, 2 * Math.PI),
                this.ctx.fill(),
                a.preventDefault()
        }
        function j(a) {
            this.opt.callback && "function" == typeof this.opt.callback && e(this.ctx, this.opt.callback, this.opt.ratio),
                this.cover.removeEventListener(this.events[1], this.moveEventHandler, !1),
                b.removeEventListener(this.events[2], this.endEventHandler, !1),
                a.preventDefault()
        }
        d.prototype.createCanvas = function() {
            if (this.cover = b.createElement("canvas"), this.cover.id = "cover", this.cover.height = this.cHeight, this.cover.width = this.cWidth, this.ctx = this.cover.getContext("2d"), this.opt.coverImg) {
                var a = this,
                    c = new Image;
                c.src = this.opt.coverImg,
                    c.onload = function() {
                        a.ctx.drawImage(c, 0, 0, a.cover.width, a.cover.height)
                    }
            } else this.ctx.fillStyle = this.opt.coverColor,
                this.ctx.fillRect(0, 0, this.cover.width, this.cover.height);
            this.scratchDiv.appendChild(this.cover)
        },
            d.prototype.eventDetect = function() {
                "ontouchstart" in a && (this.supportTouch = !0),
                    this.events = this.supportTouch ? ["touchstart", "touchmove", "touchend"] : ["mousedown", "mousemove", "mouseup"],
                    this.addEvent()
            },
            d.prototype.addEvent = function() {
                this.startEventHandler = h.bind(this),
                    this.cover.addEventListener(this.events[0], this.startEventHandler, !1)
            },
            d.prototype.clearCover = function() {
                this.ctx.clearRect(0, 0, this.cover.width, this.cover.height)
            },
            d.prototype.init = function(a, c) {
                if (!g()) return void alert("对不起，当前浏览器不支持Canvas，无法使用本控件！");
                var d = this;
                f(arguments,
                    function(a) {
                        if ("object" == typeof a) for (var b in a)"callback" === b && "function" == typeof a[b] ? d.opt.callback = a[b].bind(d) : b in d.opt && (d.opt[b] = a[b]);
                        else "function" == typeof a && (d.opt.callback = a.bind(d))
                    }),
                    this.scratchDiv = b.getElementById("scratch"),
                    this.cardDiv = b.getElementById("card"),
                this.scratchDiv && this.cardDiv && (this.cHeight = this.cardDiv.clientHeight, this.cWidth = this.cardDiv.clientWidth, this.createCanvas(), this.eventDetect())
            },
            d["case"] = function(a, b) {
                return new d(a, b)
            },
            "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
                return d
            }) : "undefined" != typeof module && module.exports ? (module.exports = d["case"], module.exports.LuckyCard = d) : a.LuckyCard = d
    } (window, document);