window.onload = function(){


// ********************************************
// do simple test
var htmlString="<hr>Test<br>"

//TableGrid
tg = TableGrid.createTableGrid(TableGrid.SIMPLE_TABLE_ROWS)
tg.buildRows( TableGrid.LIST_ANIMALS )

//get the lines block
testString= tg.getBlock()

//check the string
testResult = "	<tr><td>dog</td></tr>\n\
	<tr><td>cat</td>"==((testString).slice(0,40))
//log(testString.slice(0,40))
htmlString+= (testResult)? "PASS": "FAIL";

$("result1").innerHTML = htmlString


// ********************************************
// do simple table example
var htmlString="<hr>"

//add the table header
htmlString+="<table><caption>Simple Table</caption>\n"

//start the table grid
function myLineBuilder(ins){
    return HtmlBuilder_wrapArray(ins,"<td>","</td>")
}
tg = new TableGrid()
tg.setLineBuilder(myLineBuilder, "\t<tr>", "</tr>\n")
tg.buildLine( new Array(1,2,3) )
tg.buildLine( new Array(4,5,6) )

//get the lines block
htmlString+= tg.getBlock()

//add table footer
htmlString+="</table>"

$("result2").innerHTML = htmlString


// ********************************************
// do a simple table using predefined
var htmlString="<hr>"

// add the header
htmlString+="<table><caption>Simple Table Using Predefined</caption>\n"

//start the table grid
tg = TableGrid.createTableGrid(TableGrid.SIMPLE_TABLE_ROWS)
tg.buildLine( new Array(7,8,9) )
tg.buildLine( new Array(10,11,12) )

//get the lines block
htmlString+= tg.getBlock()
//add footer
htmlString+="</table>"

$("result3").innerHTML = htmlString




// *******************************************
// do a list, using the g+ data
htmlString = '<hr>'

function myGridLineBuilder(data){
    s = '\n\t<div class="post_tags">\n\t\t'
    s += HtmlBuilder_wrapArray(data.tagList, ' <span class="hashtag_button">', '</span>')
    s += '\n\t</div>'
    s += '\n\t<div class="post_title">'
    s += '\n\t\t<a href="'+data.link+'/">'
    s += '\n\t\t'+data.title+'</a>'
    s += '\n\t</div>'
    return s
}

tg = new TableGrid()
tg.setLineBuilder( myGridLineBuilder, '\n<div class="list_container">', '\n</div>')

//add the lines block
tg.buildRows(myPostList)
htmlString += tg.getBlock()

//$("result").textContent = htmlString
$("result4").innerHTML = htmlString

} //eof-onload

