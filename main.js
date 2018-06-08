var $$ = a
var $e = {
    createEl: s
}

/**
 * @param {Element} b 
 * 
 */
function a(b) {
    if (b == undefined || b == null || b == "") {
        console.error("Error!: Undefined");
    } else {
        return c(b)
    }
}

function c(d) {
    var e = document.querySelector(d)
    return {
        /**
         * Writes the inner text of the element (if possible)
         * @param {String} f
         */
        write: function (f) {
            e.innerText = f
        },
        /**
         * Writes the inner HTML of the element (if possible)
         * @param {String} g (e.g <div class="foo">hello world!</div>)
         */
        html: function (g) {
            e.innerHTML = g
        },
        /**
         * Sets the element value (if possible)
         * @param {any} h String or Integer
         */
        value: function (h) {
            e.value = h
        },
        /**
         * Sets the text color of the element
         * @param {String} i Color
         */
        color: function (i) {
            e.style.color = i
        },
        /**
         * Sets the background color of the element
         * @param {String} j Background Color
         */
        bgColor: function (j) {
            e.style.backgroundColor = j
        },
        /**
         * Sets the Element width
         * @param {Number} k Element width
         */
        width: function (k) {
            e.width = k
        },
        /**
         * Sets the Element width in CSS
         * @param {String} l Element width in CSS 
         * (e.g. $$("#foo").cssWidth("200px"))
         */
        cssWidth: function (l) {
            e.style.width = l
        },
        /**
         * Sets the Element height
         * @param {Number} m Element height
         */
        height: function (m) {
            e.height = m
        },
        /**
         * Sets the Element height in CSS
         * @param {String} o Element height in CSS
         * (e.g. $$("#foo").cssHeight("300px"))
         */
        cssHeight: function (o) {
            e.style.height = o
        },
        /**
         * Sets the Border of the selected element
         * @param {String} p Border Width
         * @param {String} q Border Type
         * @param {String} r Border Color
         */
        border: function (p, q, r) {
            e.style.border = p + " " + q + " " + r
        },
        /**
         * Sets the background od the element
         * @param {String} y background
         */
        background: function (y) {
            e.style.background = y
        },
        borderRadius: function (z) {
            e.style.borderRadius = z
        },
        appendHtml : function (za){
            e.innerHTML += za
        },
        element: e
    }
}

/**
 * Creates an Element
 * @param {Element} t HTML Element tag
 * @description
 * (e.g. $e("#foo").append("#bar")).
 * (Note: The create Element have a default id of "el". 
 * You can change it by "$$('#el').element.id = 'foo'".
 * You can change the 'foo' to any id you like.)
 */
function s(t) {
    var u = document.createElement(t)
    u.id = "el"
    return {
        /**
         * Append the Element to a Element
         * @param {Element} v
         */
        appendTo: function (v) {
            var w = document.querySelector(v)
            w.appendChild(u)
        }
    }
}

console.log("The API is Loaded and ready to use")