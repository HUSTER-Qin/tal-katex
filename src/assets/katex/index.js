// import katex from "./katex.mjs"
// import './katex.css'
import renderMathInElement from './auto-render';

function avoidXSS(val) {
    if (typeof val == 'undefined') return ''
    val = String(val)
    var reg = /(onabort|onactivate|onafterprint|onafterupdate|onbeforeactivate|onbeforecopy|onbeforecut|onbeforedeactivate|onbeforeeditfocus|onbeforepaste|onbeforeprint|onbeforeunload|onbeforeupdate|onblur|onbounce|oncellchange|onchange|onclick|oncontextmenu|oncontrolselect|oncopy|oncut|ondataavailable|ondatasetchanged|ondatasetcompvare|ondblclick|ondeactivate|ondrag|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|onerror|onerrorupdate|onfilterchange|onfinish|onfocus|onfocusin|onfocusout|onhelp|onkeydown|onkeypress|onkeyup|onlayoutcompvare|onload|onlosecapture|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onmove|onmoveend|onmovestart|onpaste|onpropertychange|onreadystatechange|onreset|onresize|onresizeend|onresizestart|onrowenter|onrowexit|onrowsdevare|onrowsinserted|onscroll|onselect|onselectionchange|onselectstart|onstart|onstop|onsubmit|onunload)/gi
    val = val.replace(reg, `'$1'`)
    val = val.replace(/\<(script.*?|\/script)\>/gm, `&lt;$1&gt;`)
    return val
}

function decode(el, binding, vnode, opt) {
	var txt = binding.value
	console.log(opt)
	var _opts = opt || {
		delimiters: [{
			left: "$$",
			right: "$$",
			display: false
		}]
	}
    if (binding.value) {
        txt = avoidXSS(txt)
        txt = renderMathInElement(txt, _opts)
        vnode.elm.innerHTML = txt
    } else {
        vnode.elm.innerHTML = txt
    }

}
export default {
    install: function (Vue, options) {
        Vue.directive("katex", {
            bind(el, binding, vnode) {
                decode(el, binding, vnode, options)
            },
            update(el, binding, vnode) {
                decode(el, binding, vnode, options)
            }
        })
    }
}