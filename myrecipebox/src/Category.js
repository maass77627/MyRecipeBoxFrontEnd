 import React from "react";
//  import { useState } from "react";

function Category() {

    // const [selectedOption, setSelectedOption] = useState([])

    // function handleClick(e) {
    //     console.log(e)
    // }

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setSelectedOption(e.target.value)

    //  }


    // function handleChange() {

    // }

    return(
        <div>
            <div id="button">{Category.name}</div>
            {/* <form>
            <select id="options" value={selectedOption} onChange={handleChange}>
            <option value="" disabled>
             
            </option>
           <option value="option1">Option 1</option>
           <option value="option2">Option 2</option>
           <option value="option3">Option 3</option>
           </select>
           <button type="submit">Submit</button>

            </form> */}
        </div>
        
    )
}

export default Category