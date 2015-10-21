window.onload = function(){

// ********************************************
// do simple example
var htmlString=""

//add the header
htmlString+="<table>\n"

function myLineBuilder(ins){
    return HtmlBuilder_wrapArray(ins,"<td>","</td>")
}

//start the table grid
tg = new TableGrid()
tg.setLineBuilder(myLineBuilder, "\t<tr>", "</tr>\n")

var lineData = new Array(1,2,3);
tg.buildLine(lineData)

tg.buildLine(new Array(4,5,6))

//add the lines block
htmlString+= tg.getBlock()

//add footer
htmlString+="</table>"

//$("result").innerHTML = htmlString

// *******************************************
// do a list
htmlString = ''

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
$("result").innerHTML = htmlString

} //eof-onload

