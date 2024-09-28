import "./Package_current.css"
import { Link } from 'react-router-dom';
function TravelPackages() {
    const selectedPackage = sessionStorage.getItem('selectedPackage');

    return(
        <div className="travel-container">
            <h2>Package Details</h2>
            <p>Deserunt sint anim ex incididunt quis ex incididunt id tempor in consectetur tempor. Qui ut adipisicing adipisicing mollit. Nisi aliqua veniam mollit minim occaecat sit voluptate incididunt fugiat aliqua mollit culpa. Aliqua ipsum eu aliquip dolor consectetur mollit ipsum Lorem commodo.



 Cupidatat ex do dolore fugiat cillum fugiat. Aliqua duis aute esse cillum laborum nulla. Laboris laboris veniam sit et excepteur qui consequat. Veniam elit amet minim reprehenderit Lorem proident dolor culpa Lorem est laborum ullamco officia.

Proident et quis qui enim sit. Aliquip ex id occaecat eiusmod amet. Ut esse est proident sit reprehenderit magna in irure mollit voluptate do. Aute sint reprehenderit eiusmod exercitation laboris in dolor dolore aute. Minim dolor incididunt laboris enim ipsum do velit ut laborum nisi velit. Nostrud laborum eu adipisicing Lorem laboris irure tempor. Excepteur est sit irure consectetur magna nulla dolor cupidatat adipisicing ex irure culpa magna.

Dolore Lorem labore laboris ut adipisicing ullamco dolore minim ad Lorem exercitation laboris. Est irure laboris laborum aliqua pariatur duis adipisicing reprehenderit fugiat Lorem magna. Cillum ad sint exercitation magna laboris occaecat minim aute adipisicing. Eu ex adipisicing in do Lorem et dolore voluptate id. Nisi pariatur eu culpa sint qui. Commodo labore aute voluptate enim ut aliquip mollit elit.</p>
        </div>
    );
}

export default TravelPackages;