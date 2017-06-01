module.exports = function main(tline) {
  // Write your cade here
  var a = Number(tline);
  // var a = tline;
  var tsum = 0;
  while(a>0){
  	tsum += a % 10;
  	a = Math.floor(a / 10);
  }
  return tsum;
};
