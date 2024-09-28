import "./budget.css";

function ContactForm() {
    const handleSetBudget = () => {
        const budgetInput = document.getElementById("budget");
        const daysInput = document.getElementById("days");
        const peopleInput = document.getElementById("people");
        
        sessionStorage.setItem("budget", budgetInput.value);
        sessionStorage.setItem("days", daysInput.value);
        sessionStorage.setItem("people", peopleInput.value);
        window.open("/travelplan", "_self");
    }

    return (
        <div className="budget-container">
            <div className="set-budget">
                <h1>Set your Budget</h1>
                <label style={{marginRight: "1rem", marginLeft: "-2rem"}}>Rs</label><input placeholder="Enter your Budget" id="budget"/>
                <input placeholder="Enter number of days" style={{paddingRight: "3rem"}} id="days"/>
                <input placeholder="Enter number of people" style={{paddingRight: "3rem"}} id="people"/>
                <button onClick={handleSetBudget}>Confirm</button>
            </div>
        </div>
    );
}

export default ContactForm;
