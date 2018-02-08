var expect = require('chai').expect;
var request = require('request');
var server = require('../app');
var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);



describe('server response', function(){
  before (function () {
    server.listen(4000);
  });


  it("should return a staus code of 200", function(done){
    chai.request('http://localhost:4000')
      .get('/users')
      .end(function (err, res) {
        console.log(res.statusCode)
        expect(res).to.have.status(200)
        done()
      });
   });
});


// describe('server response', function(){
//   before (function () {
//     server.listen(4000);
//   });
//
//   it("should return a staus code of 200", function(done){
//     chai.request('http://localhost:4000')
//       .get('/users')
//       .expect(function (err, res) {
//
//       }.to.have.status(200)
//       .end(done);
//    });
// });
