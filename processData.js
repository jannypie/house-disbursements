// levels 2 & 3
var programs = {}
$(gov).each(function(i,el) {
  if (programs[el.PROGRAM]) {
    console.log("a");
    programs[el.PROGRAM].children.push({"name": el.DESCRIPTION, "size": el.YTD_AMOUNT})
  } else {
    console.log("b");
    programs[el.PROGRAM] = {
      "name": el.PROGRAM,
      "children": [{"name": el.DESCRIPTION, "size": el.YTD_AMOUNT}]
    }
  }
})

// level 1
var orgs = {}
$(gov).each(function(i,el) {
  if (orgs[el.ORGANIZATION]) {
    console.log("a");
    orgs[el.ORGANIZATION].children.push(programs[el.PROGRAM])
  } else {
    console.log("b");
    orgs[el.ORGANIZATION] = {
      "name": el.ORGANIZATION,
      "children": [programs[el.PROGRAM]]
    }
  }
})

$(orgs).each(function(i,el) {
  document.append('<p>'+el.name+'</p>')
})
