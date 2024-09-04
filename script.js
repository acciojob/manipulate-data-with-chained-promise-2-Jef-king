//your JS code here. If required.

function resolveAfter3sec(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000)
	})
}
function filterEvenNumber(arr){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let evenNumber=arr.filter(a=>a%2===0);
			document.querySelector("#output")innerText=evenNumber;
		resolve(evenNumber);
		},1000);
		
	})
}
function multiplyBy2(arr){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let multiply=arr.forEach(a=>return a*2;);
			document.querySelector("#output")innerText=multiply;
		resolve(evenNumber);
		},2000);
	})
}
resolveAfter3sec()
	.then(filterEvennumber)
.then(multiplyBy2)