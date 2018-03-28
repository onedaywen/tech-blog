let compile = (function(){
    let res = {};
    function parseTpl(template){
        return template && template.trim() || '';
    }
    return function (template) {
    	if(res[template]) return res;
    	res[template] = parseTpl(template);
    	return res;
    };
})();

let s1 = compile('<div>{{ msg }}</div>');
let s2 = compile('<div>{{ msg }}</div>');

console.log(s1 === s2)
console.log(s1, s2)