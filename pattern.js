const prompt = require('prompt-sync')();
var line ="";
for(var i=1; i<5;i++)
{
    for(var j=1;j<=i;j++)
        line +="*";
    line+= "\n";

}
console.log(line);
