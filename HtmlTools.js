/*
 *  Tools
 *
 */


/**
 * Function for html building, wraps any string
 *
 * @param   s   string to be wrapped
 * @param   pre prefix
 * @param   suf suffix
 */
function HtmlBuilder_wrap(s, pre, suf){
    return  "<"+pre+">"+s+"</"+suf+">"
}

/**
 * Function for html building, wraps and string with a tag
 *
 * @param   s   string to be wrapped
 * @param   e   string specifying element 
 */
function HtmlBuilder_element(s, e){
    return  "<"+e+">"+s+"</"+e+">"
}

/**
 * Function for html building, wraps each element in an array
 *
 * @param   a   array to be wrapped
 * @param   pre prefix
 * @param   suf suffix
 */function HtmlBuilder_wrapArray(a, pre, suf){
    s = "";
    for (var i=0; i<a.length; i++){
        s += pre + a[i] + suf
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
function  TableGrid(){
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