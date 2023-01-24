buf = new Buffer.alloc(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);



buf = new Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

str = 'Simply Easy Learning'
buf = new Buffer.alloc(str.length, str);
var json = buf.toJSON(buf);

console.log(json);

str1 = "poopy"
str2 = "haha"
var buffer1 = new Buffer.alloc(str1.length, str1);
var buffer2 = new Buffer.alloc(str2.length, str2);
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());

var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}