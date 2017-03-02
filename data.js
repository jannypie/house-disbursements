var gov = [
  {
    "ORGANIZATION": "FISCAL YEAR 2017 COMMUNICATIONS SERVICES",
    "PROGRAM": "COMMUNICATIONS SERVICES",
    "DESCRIPTION": "OFFICE TOTALS:",
    "YTD_AMOUNT": 281539.27,
    "QTD AMOUNT": 281539.27
  },
  {
    "ORGANIZATION": "FISCAL YEAR 2017 CDN ENHANCE",
    "PROGRAM": "CDN ENHANCE",
    "DESCRIPTION": "RENT  COMMUNICATION  UTILITIES",
    "YTD_AMOUNT": 131069.08,
    "QTD AMOUNT": 131069.08
  },
  {
    "ORGANIZATION": "FISCAL YEAR 2017 CDN ENHANCE",
    "PROGRAM": "CDN ENHANCE",
    "DESCRIPTION": "CDN ENHANCE TOTALS:",
    "YTD_AMOUNT": 131069.08,
    "QTD AMOUNT": 131069.08
  },
  {
    "ORGANIZATION": "FISCAL YEAR 2017 CDN ENHANCE",
    "PROGRAM": "CDN ENHANCE",
    "DESCRIPTION": "OFFICE TOTALS:",
    "YTD_AMOUNT": 131069.08,
    "QTD AMOUNT": 131069.08
  }
]

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
