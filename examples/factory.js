function createPop (title, msg, show, ensure, cancel) {
	let pop = {};
	pop.title = title;
	pop.msg = msg;
	pop.show = show;
    pop.ensure = ensure || (() => {console.log('弹窗确认回调')});
    pop.cancel = cancel || (() => {console.log('弹窗取消回调')});
	return pop;
}

let pop1 = createPop({
	title: '提示1', 
	msg: '显示的内容1', 
	show: true
});
let pop2 = createPop({
	title: '提示2', 
	msg: '显示的内容2', 
	show: true
});
let pop3 = createPop({
	title: '提示3', 
	msg: '显示的内容3', 
	show: true
});

console.log(pop1, pop2, pop3)