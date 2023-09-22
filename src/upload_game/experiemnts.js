const obj = {
  h: 1,
  g: null,
}

Object.keys(obj).map((key) => {
  if (obj[key]) {console.log(obj[key]); }
})
