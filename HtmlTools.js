/*
 *  Tools
 *
 */


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
    return  "<"+element+">"+s+"</"+element+">"
}

/**
 * Function for html building, wraps each element in an array
 *
 * @param   a       array to be wrapped
 * @param   prefix  prefix
 * @param   suffix  suffix
 */function HtmlBuilder_wrapArray(a, prefix, suffix){
    s = "";
    for (var i=0; i<a.length; i++){
        s += prefix + a[i] + suffix
    }
    return s
}


/**
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
     * function <b>setLineBuilder</b> to set the line builder function and line beginning and end string
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
     *    function <b>buildRows</b> to do the line build
     *    will loop over the top layer and pass each item to line builder
     *  @param  table   data to be wrapped
     */
    this.buildRows=function(table){
        //will loop over the top layer and pass each item to line builder
        for(var i=0; i<table.length; i++){
            tg.buildLine(table[i])
        }
    }
    
    /**
     * function <b>buildLine</b> to generate the line, wraps with the line beggining and end
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
     * function <b>getBlock</b>
     * @return the block
     */
    this.getBlock=function(){ return this.block; }
    
}  //oef-class
