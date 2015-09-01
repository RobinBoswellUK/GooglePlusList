window.onload = function(){

//start the table grid
var htmlString=""

//add the header
htmlString+="<table>\n"

// ********************************************
function myLineBuilder(ins){
    return HtmlBuilder_wrapArray(ins,"<td>","</td>")
}

tg = new TableGrid()
tg.setLineBuilder(myLineBuilder, "\t<tr>", "</tr>\n")

var lineData = new Array(1,2,3);
tg.buildLine(lineData)

tg.buildLine(new Array(4,5,6))

//add the lines block
htmlString+= tg.getBlock()

//add footer
htmlString+="</table>"

//log(htmlString)

// *******************************************
//do the new block
htmlString = ''


function myGridLineBuilder(data){
//   <span class="hashtag_button"> #drawtoast </span>
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
//tg.setLineBuilder( myGridLineBuilder, '\t<div class="post_tags">\n', '\t</div>\n')
tg.setLineBuilder( myGridLineBuilder, '\n<div class="list_container">', '\n</div>')
//add the lines block
tg.buildRows(myPostList)
htmlString+= tg.getBlock()
//add footer
htmlString+= '</div>'

//log(htmlString)
//$("result").textContent = htmlString
$("result").innerHTML = htmlString

/*
 <div class="list_container">

  <div class="post_tags">
    <span class="hashtag_button"> #drawtoast </span>
  </div>
  <div class="post_title">
    <a class="post_title" href="https://plus.google.com/+DoctorbobapplicationsCoUk/posts/15z5ApKvfcN"> 
Design Brainstorming and evaluation technique </a>
  </div>
  
</div>
*/
// *******************************************

} //eof-onload


/*
 *   Data for JSON list
 *
 *
 */
var myPostList = [
  {tagList:["tag1","tag3"], title: "Title1" , link:"https://plus.google.com/+DoctorbobapplicationsCoUk/posts/15z5ApKvfcN" },
  {tagList:["tag1","tag2"], title: "Title2" , link:"https://plus.google.com/+DoctorbobapplicationsCoUk/posts/15z5ApKvfcN" }
];

