
import './App.css'
import {Background} from "./component/background.jsx";
import { DisplayCard} from "./component/card.jsx";
import {CVGCard, DateCard, FormCard, NameCard, NumberCard} from "./component/formCard.jsx";
import {useState} from "react";




function App() {
    const [cvg, setCvg] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');


    return (
            <div className={"appGrid"}>
        <Background url={ "/src/assets/images/bg-main-desktop.png"}>
            <DisplayCard url={"/src/assets/images/bg-card-back.png"} alt={"back card"}  cvg={cvg}  isFrontCard={false} className={"backCard"}></DisplayCard>
        <DisplayCard url={"/src/assets/images/bg-card-front.png"} alt={"front card"} isFrontCard={true} className={"frontCard"}   cardholderName={cardholderName}
                     cardNumber={cardNumber}
                     year={year}
                     month={month}></DisplayCard>
        </Background>
                <div style={{display : "flex" ,justifyContent : "center", alignItems : "center", flexDirection: "column"}}>
            <FormCard>
                <NameCard placeholder={"Ex. Steve JOBS"} title={"Veuillez entrer un votre nom est prenom uniquement ! "} setCardholderName={setCardholderName} />
                <NumberCard placeholder={"Ex. 8927 4501 3623 2561"} title={"Non valide"}  cardNumber={cardNumber} setCardNumber={setCardNumber}  />
                <DateCard setYear={setYear}  setMonth={setMonth}><CVGCard setCvg={setCvg} className={"inputDate"}></CVGCard></DateCard>
            </FormCard>
                </div>
            </div>

)
}

export default App

