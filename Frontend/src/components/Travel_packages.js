import "./Travel_packages.css"
import { Link } from 'react-router-dom';

function handleClick(h2Value, id) {
    sessionStorage.setItem('selectedPackage', h2Value);
    console.log(sessionStorage.getItem('selectedPackage'));
    sessionStorage.setItem('selectedPackageId', id);
    console.log(sessionStorage.getItem('selectedPackageId'));
    window.open("/package", "_self");
}

var bud = parseInt(sessionStorage.getItem('budget'));
var days = parseInt(sessionStorage.getItem('days'));
var people = parseInt(sessionStorage.getItem('people'));
const budget = sessionStorage.getItem('budget');
function TravelPackages() {
    return (
        <div className="travel-container">
            <div className="sidebar-package">
            {budget !== null && <div className="budget">
                    <h2 id="budget">Budget : Rs {bud}</h2>
                    <h2>Number of days : {days}</h2>
                    <h2>Number of people : {people}</h2>
                </div>}
                {budget === null && <div className="budget">
                    <Link to={"/budget"} className="bud" style={{backgroundColor: "white", marginTop: "8rem"}}>Add a Budget</Link>
                </div>}
            </div>
            <div className="package-lister">
            <h1>Our Travel Packages</h1>
            <ul className="travel_list">
                <li className="item" onClick={() => handleClick("Hunza Tour package", "hunza")}>
                    <a href="https://pakistantourntravel.com/darbar-hunza-4days-3nights-tour/">
                    <div>
                        <img src="/hunza.png" className="travel_img" alt="travel1"></img>
                        <h2>Darbar Hunza Luxury tour</h2>
                        {budget !== null &&<h3>{"Rs " + 18000 * people * days}</h3>}
                                {budget !== null &&<h4 style={{color: "grey"}}>Rs {bud - 18000 * people * days} left</h4>}
                        <p>This Darbar Hunza 4Days Luxury tour offers Gilgit, Rakaboshi Viewpoint, Karimabad, Altit Fort, Baltit Fort, Baltit Market, Attabad Lake, and Sightseeing at Passu Cones and Khunjerab Pass. </p>
                    </div>
                    </a>
                </li>
                <li className="item" onClick={() => handleClick("Azad Kashmir Tour Package", "kashmir")}>
                    <a href="https://pakistantourntravel.com/tours/neelam-valley-3-day-sightseeing-tour/">
                    <div>
                        <img src="/kashmir.png" className="travel_img" alt="travel2"></img>
                        <h2>Azad Kashmir Tour Package</h2>
                        {budget !== null &&<h3>{"Rs " + 9000 * people * days}</h3>}
                                {budget !== null &&<h4 style={{color: "grey"}}>Rs {bud - 9000 * people * days} left</h4>}
                        <p>Neelam valley of Azad Kashmir is mainly known for its winter holidays. Neelam Valley 3 Day 2 Nights tour package is a short Neelum valley tour for couples and families having a short time.</p>
                    </div>
                    </a>
                </li>
                <li className="item" onClick={() => handleClick("Skardu Tour Package", "skardu")}>
                    <a href="https://pakistantourntravel.com/tours/skardu-khoj-resorts-tour/">
                    <div>
                        <img src="/skardu.png" className="travel_img" alt="travel3"></img>
                        <h2>Skardu Tour Package</h2>
                        {budget !== null &&<h3>{"Rs " + 8000 * people * days}</h3>}
                                {budget !== null &&<h4 style={{color: "grey"}}>Rs {bud - 8000 * people * days} left</h4>}
                        <p>Looking for a gateway to paradise with luxurious services?  Book the exclusive Khoj Resorts Tour in Shigar Valley from our exciting list of “Pakistan Tour Packages”. Khoj Resort in Skardu is a luxury travel destination in the mountains of Gilgit-Baltistan, Pakistan. It is located near the Skardu Airport.</p>
                    </div>
                    </a>
                </li>
                <li className="item" onClick={() => handleClick("Naran Khadan Tour Package", "naran")}>
                    <a href="https://pakistantourntravel.com/tours/naran-shogran-luxury-5days-4nights/">
                    <div>
                        <img src="/naran.png" className="travel_img" alt="travel4"></img>
                        <h2>Naran Kaghan Tour Package</h2>
                        {budget !== null &&<h3>{"Rs " + 30000 * people * days}</h3>}
                                {budget !== null &&<h4 style={{color: "grey"}}>Rs {bud - 30000 * people * days} left</h4>}
                        <p>Naran Shogran Luxury 5Days 4Nights Tour sums up the best possible facilities in Naran & Shogran.  Tour Packages suit those who have swag and need the fantastic location, lovely weather, and world-class facilities. </p>
                    </div>
                    </a>
                </li>
                <li className="item" onClick={() => handleClick("Chitral Tour Package", "chitral")}>
                    <a href="https://pakistantourntravel.com/chitral-tour-packages/chitral-kalash-tour/">
                    <div>
                        <img src="/chitral.png" className="travel_img" alt="travel5"></img>
                        <h2>Chitral Tour Package</h2>
                        {budget !== null &&<h3>{"Rs " + 15000 * people * days}</h3>}
                        {budget !== null &&<h4 style={{color: "grey"}}>Rs {bud - 15000 * people * days} left</h4>}
                        <p>Let me tell you very clearly that the Chitral Valley is the most beautiful in Northern Pakistan. Well, seeing is believing, whether it’s a diverse culture, smiling people, unique food, or fruits. Moreover, hospitality is just the next level.</p>
                    </div>
                    </a>
                </li>
                <li className="item" onClick={() => handleClick("Murrie Tour Package", "murree")}>
                    <a href="https://www.pakistantravelguide.pk/package/murree-naran-kaghan-tour-package-7-days-6-nights/">
                    <div>
                        <img src="/murree.png" className="travel_img" alt="travel6"></img>
                        <h2>Murree Tour Package</h2>
                        {budget !== null &&<h3>{"Rs " + 1000 * people * days}</h3>}
                        {budget !== null &&<h4 style={{color: "grey"}}>Rs {bud - 10000 * people * days} left</h4>}
                        <p>Best Travel Plan for a week ( 7 days 6 Nights ) to Murree, Galyat and Naran Kaghan for families and friends. In summers both Murree and Naran are good destinations with respect to weather conditions as the temperature remains 18-22 degree Celsius.</p>
                    </div>
                    </a>
                </li>
                <li className="item" onClick={() => handleClick("Swat Kalam Tour Package", "kalam")}>
                    <a href="https://pakistantourntravel.com/4-day-swat-tour-package/">
                    <div>
                        <img src="/kalam.png" className="travel_img" alt="travel7"></img>
                        <h2>Swat Kalam Tour Package</h2>
                        {budget !== null &&<h3>{"Rs " + 20000 * people * days}</h3>}
                        {budget !== null &&<h4 style={{color: "grey"}}>Rs {bud - 20000 * people * days} left</h4>}
                        <p>4 Day Swat Tour package is our Best Selling Swat Tour. Quality road infrastructure, robust local administration & the opening of the Swat Motorway are all ingredients of the Swat Tour.</p>
                    </div>
                    </a>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default TravelPackages;