function permuteString(s) {
  if (s.length === 1) return [s];

  let result = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let rest = s.slice(0, i) + s.slice(i + 1);

    let restPerms = permuteString(rest);

    for (let j = 0; j < restPerms.length; j++) {
      result.push(char + restPerms[j]);
    }
  }

 
  return [...new Set(result)];
}

console.log(permuteString("abc"));

