let single = (function(){
    let unique;
    function Construc(){
        this.a = 100;
    }
    return function () {
    	if(unique) return unique;
    	unique = new Construc();
    	return unique;
    };
})();

let s1 = single();
let s2 = single();

console.log(s1 === s2)
console.log(s1, s2)


// let compile = (function(){
//     let res = {};
//     function parseTpl(template){
//         return template && template.trim() || '';
//     }
//     return function (template) {
//     	if(res[template]) return res;
//     	res[template] = parseTpl(template);
//     	return res;
//     };
// })();

// let s1 = compile('<div>{{ msg }}</div>');
// let s2 = compile('<div>{{ msg }}</div>');

// console.log(s1 === s2)
// console.log(s1, s2)