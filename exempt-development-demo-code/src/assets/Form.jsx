import { useState } from 'react'

function Form() {
    const [shedHeight, setShedHeight] = useState(0);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (shedHeight > 3) {
            document.getElementById("frmDetails").style.display = "none";
            document.getElementById("result").innerHTML = 
                "<h2>Warning!</h2>" +
                "<p>Your structure is not eligible to be an exempt development. Seek planning approval.</p>";
            
            document.getElementById("clauseHeader").innerHTML = "Non-compliance with the following SEPP (2008) clauses:";
            document.getElementById("clauseList").innerHTML =
                "<li><a href=https://legislation.nsw.gov.au/view/html/inforce/current/epi-2008-0572#pt.2-div.1-sdiv.9:~:text=(c)%C2%A0%C2%A0be%20not%20higher%20than%203m%20above%20ground%20level%20(existing)%2C%20and>Subdivion 9, Clause 2.18(c)</a></li>";

            document.getElementById("result").classList.add("fail");
            document.getElementById("result").style.display = "flex";
        } else {
            document.getElementById("frmDetails").style.display = "none";
            document.getElementById("result").innerHTML =
                "<h2>Success!</h2>" +
                "<p>Your structure is compliant for exempt development. No approval needed.</p>";

            document.getElementById("clauseHeader").innerHTML = "Relevant SEPP (2008) clauses:";
            document.getElementById("clauseList").innerHTML =
                "<li><a href=https://legislation.nsw.gov.au/view/html/inforce/current/epi-2008-0572#pt.2-div.1-sdiv.9:~:text=(c)%C2%A0%C2%A0be%20not%20higher%20than%203m%20above%20ground%20level%20(existing)%2C%20and>Subdivion 9, Clause 2.18(c)</a></li>";
            
            document.getElementById("result").classList.add("success");
            document.getElementById("result").style.display = "flex";
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="frmDetails">
                {/* Property selector doesn't do anything; it is there purely for layout purposes. */}
                <label for="property">1. Select a property:</label>
                <select name="property" id="property">
                    <option value="property1">Property 1</option>
                    <option value="property2">Property 2</option>
                    <option value="property3">Property 3</option>
                    <option value="property4">Property 4</option>
                </select>
                <label for="height">2. Enter shed height from the ground to the highest point (m):</label>
                <input id="heightInput" placeholder="0.00" name="height" type="number" min="0" onChange={(e) => setShedHeight(e.target.value)} step=".01" required />
                <button id="btnSubmit" name="Height" type="submit">Check</button>
            </form>
            <div id="result"></div>
            <h3 id="clauseHeader"></h3>
            <ul id="clauseList"></ul>
        </>
    );
}

export default Form