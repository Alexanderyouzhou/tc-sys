const axios = require('axios')
const qs = require('qs')

// axios.get("http://localhost:10055/rest/tcweb/test.api").then(response => {
//     console.log(response.data)
// }, response => {
// 	console.log("error")
// })
// axios.post('http://localhost:10055/rest/tcweb/post.api', qs.stringify({firstName: 'Fred54545'})).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.log(error);
// });

module.exports = {
	get:function(url,para,callback){
		var link = 'http://' + HOST_DOMAIN + url
		console.log(link)
		axios.get(link).then(response =>{
			callback(response.data)
		}, error => {
			console.log("test error")
		})
	},
	post:function(url,para,callback){
		// console.log(para)
		var link = 'http://' + HOST_DOMAIN + url
		axios.post(link,qs.stringify(para)).then(function (response) {
		callback(response.data)
}).catch(function (error) {
		console.log(error);
});
	}
	  // axios.delete('/list/resource/'+_id, 
   //              {
   //              headers: {"Content-Type": "application/json","X-Merchant": "53cdd6f50cf261fadf0dd74c"}
   //          })
   //          .then((response) => {
   //                console.log(response);  
   //          })
   //          .catch((error) => {
   //                console.log(error);
   //          });
   //get  delete  head             post  put  patch          
	
}