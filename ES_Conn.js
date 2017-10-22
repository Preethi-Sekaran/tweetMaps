search = require('elasticsearch');
var client = new elasticsearch.Client( {  

hosts: [
  '[https://search-twitter-geo-c7a6z4j6pegnm7npsevbq5snqu.us-east-2.es.amazonaws.com:80]'
]

});

module.exports = client;  
