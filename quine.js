var code = `
var code = \`
(function () {
  var lines = code.split('\\n');
  console.log(lines[1]);
  var arr = code.split('').map(function(c) {
    switch(c.charCodeAt(0)) {
      case 13:
      case 92:
      case 96:
        return "\\"+String.fromCharCode(c.charCodeAt(0));
        break;
      default:
        return c;
    }
  })
  arr[0] = '';
  arr[arr.length-1] = '';
  console.log(arr.join(''));
  console.log(lines[lines.length-2]);
  code.split('\\n').forEach(function(line, j) {
    if (j > 1 && j < code.length-2) {
      console.log(line);
    }
  });
})();
\`;
`;
(function () {
  var lines = code.split('\n');
  console.log(lines[1]);
  var arr = code.split('').map(function(c) {
    switch(c.charCodeAt(0)) {
      case 13:
      case 92:
      case 96:
        return "\\"+String.fromCharCode(c.charCodeAt(0));
        break;
      default:
        return c;
    }
  })
  arr[0] = '';
  arr[arr.length-1] = '';
  console.log(arr.join(''));
  console.log(lines[lines.length-2]);
  code.split('\n').forEach(function(line, j) {
    if (j > 1 && j < code.length-2) {
      console.log(line);
    }
  });
})();
