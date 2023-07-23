// CONNECT HTML ELEMENTS TO JAVASCRIPT DOM (SET UP)

// ADD LISTENER TO DOCUMENT (FUNCTION OF LISTENER IS TO CALL SUBMIT FUNCTION)
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("empForm").addEventListener("submit", (event) => {

// PREVENT SUBMIT BUTTON FROM SENDING INFO TO A BLACK HOLE
        event.preventDefault()

// GRAB INPUT VALUES FROM FORM
const $ = (bringDOM) => document.getElementById(bringDOM)
 
        const id = $("id").value
        const name = $("name").value
        const ext = $("ext").value
        const email = $("email").value
        const department = $("department").value

// LOG VALUES IN CONSOLE
        console.log(`ID: ${id}\nName: ${name}\nExtension: ${ext}\nEmail: ${email}\nDepartment: ${department}`)
    })})

 


 