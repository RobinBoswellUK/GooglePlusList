/*
 *  Tools
 *
 */
log("including HtmlTools.js")

/**
 * Function for html building, wraps any string
 *
 * @param   s       string to be wrapped
 * @param   prefix  prefix
 * @param   suffix  suffix
 */
function HtmlBuilder_wrap(s, prefix, suffix){
    return  "<"+prefix+">"+s+"</"+suffix+">"
}

/**
 * Function for html building, wraps and string with a tag
 *
 * @param   s         string to be wrapped
 * @param   element   string specifying element 
 */
function HtmlBuilder_element(s, element){
    return  "<"+ element +">"+ s +"</"+ element +">"
}

/**
 * Function for html building, wraps each element in an array
 *
 * @param   inarray  array to be wrapped
 * @param   prefix   prefix
 * @param   suffix   suffix
 */function HtmlBuilder_wrapArray(inarray, prefix, suffix){
    s = "";
    //check it is not a string, masqurading as an array
    if("string"==(typeof inarray)) {
		log("found string")
        s = prefix + inarray + suffix
    }else{  
      for (var i=0; i<inarray.length; i++){
          s += prefix + inarray[i] + suffix
      }
    }
    return s
}


/**
 *  @class TableGrid
 * <b>Class</b>
 * <p>tool for building tables and grids
 * <p>These types of tasks involve building one line at a time, and can be
 * varied in requirement from simple &lt;tr&gt; to &lt;div class="..."&gt; 
 *
 * This is a template for:
 *    adding aheader,
 *    looping over lines and calling a linebuilder function [extended],
 *    adding a footer.
 *
 * <p>Maintains a block for building the string
 *
 */
function TableGrid(){

    this.linebuilder
    this.linePrefix
    this.lineSuffix
    this.block=""
    
    /**
     * @memberof TableGrid
     * <hr>function <b>setLineBuilder</b> <hr> to set the line builder function and line beginning and end string
     * @param   lb  linebuilder function
     * @param   pre prefix
     * @param   suf suffix
    */
    this.setLineBuilder=function(lb,pre,suf){
      //log("setting linebuilder"+pre+"  "+suf)
      this.linebuilder=lb
      this.linePrefix=pre
      this.lineSuffix=suf
      this.block = ""
     }
     
    /**
     *    <hr>function <b>buildRows</b><hr> to do the line build
     *    will loop over the top layer and pass item sto line builder
     *  @param  table   data to be wrapped
     */
    this.buildRows=function(table){
        //will loop over the top layer and pass item sto line builder
        for(var i=0; i<table.length; i++){
            tg.buildLine(table[i])
        }
    }
    
    /**
     * <hr>function <b>buildLine</b><hr> to generate the line, wraps with the line beggining and end
     *  @param  table   data to be wrapped
     */
    this.buildLine=function(data){
        //prefix line
        s = this.linePrefix

        //run the line builder callback
        s += this.linebuilder(data)
        
        //suffix line
        s += this.lineSuffix 
        
        this.block += s
    }
    
    /**
     * @memberof  TableGrid
     * <hr>function <b>getBlock</b><hr>
     * @return the block
     */
    this.getBlock=function(){
        return this.block; }
    
    
    /**
     *   Standard types
     *
     *
     *
     *
     *
     */

}  //oef-class

/**
 *@memberof TableGrid
 *  Static variables
 */
TableGrid.SIMPLE_TABLE_ROWS = 1;
/**
 *@memberof TableGrid
 *  Static variables
 */
TableGrid.SIMPLE_TABLE_HEADER_ROW = 2;

/**
 *@memberof TableGrid
 *  Static sample arrays
 */
TableGrid.LIST_ANIMALS = ['dog', "cat", "spider", "fly", "salmon", "shark", "frog", "newt", "eagle", "duck" ]

/**
 *  @class TableGrid
 *  <hr>
 *  function <b>createTableGrid</b> <hr>
 *  Function to build predefined TableGrid instance 
 *  @param id   id of type to generate
 *      SIMPLE_TABLE_ROWS
 *      SIMPLE_TABLE_HEADER_ROW
 *  
 */
TableGrid.createTableGrid = function(id){
    log("createTableGrid "+id)
    switch (id){
        // ********************************************
       case TableGrid.SIMPLE_TABLE_ROWS: //TableGrid.SIMPLE_TABLE_ROWS:
            myLineBuilder=function(data){
                log("TableGrid.SIMPLE_TABLE_ROWS data isArray: "+ (data instanceof Array))
                return HtmlBuilder_wrapArray(data,"<td>","</td>")
            }
            //log("create "+ myLineBuilder)
            tg = new TableGrid()
            tg.setLineBuilder( myLineBuilder, "\t<tr>", "</tr>\n")
            return tg
    
        // ********************************************
        case TableGrid.SIMPLE_TABLE_HEADER_ROW:
            myLineBuilder=function(data){
                log("TableGrid.SIMPLE_TABLE_HEADER_ROW data isArray: "+typeof data)
                return HtmlBuilder_wrapArray(data,"<th>","</th>")
            }
            //log("create "+ myLineBuilder)
            tg = new TableGrid()
            tg.setLineBuilder( myLineBuilder, "\t<tr>", "</tr>\n")
            return tg
    }
    log("createTableGrid no match ")
    return false
} //eo-func

