function highlight(code) {
  return code.replace(/(F+|L+|R+|\d+)/g, match => {
    let color = "";
    if (match.startsWith('F')) color = "pink";
    else if (match.startsWith('L')) color = "red";
    else if (match.startsWith('R')) color = "green";
    else if (/\d/.test(match)) color = "orange";
    
    return `<span style="color: ${color}">${match}</span>`;
  });
}