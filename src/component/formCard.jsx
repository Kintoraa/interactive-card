import {useRef, useState} from "react";

export const FormCard = ({children}) => {
        const [display, setDisplay] = useState(true);
        const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplay(() => !display);

        if(formRef.current){
            formRef.current.reset();

        }

    };

    return (
        display ?
        <form onSubmit={handleSubmit} ref={formRef}>
            {children}
            <button type="submit">Valider</button>
        </form>  : <ConfirmForm ></ConfirmForm>

    );

}

const ConfirmForm = () => {
    const pStyle = {
        paddingTop: 50,
    }


    return (
        <>
          <span className="circleConfirm">
        <i className="fa-solid fa-check" style={{color: "white", fontSize: "1.3rem"}}></i>
          </span>
            <p style={{fontSize: "3rem", textTransform: "uppercase", ...pStyle}}>Thank You ! </p>
            <p style={pStyle}>Vous avez ajouté une carte ! </p>
            <button onClick={() => window.location.reload()}>Continue</button>
        </>
    )
}

export const NameCard = (props) => {
const {placeholder, title, setCardholderName} = props;


    return (
        <div>
            <label htmlFor="cardholderName">Nom du titulaire de la carte:</label>
            <input
                type="text"
                id="cardholderName"
                placeholder={placeholder}
                title={title}
                onChange={(e) => setCardholderName(e.target.value)}
                pattern="([a-zA-Z]+\s?){1,3}"
                maxLength={20}
                required
            />
        </div>
    );
};

export const NumberCard = (props) => {
const {setCardNumber, cardNumber, title, placeholder} = props;

const formatCardNumber  = (value) => {
    const sanitizedInput = value.replace(/\s/g, '');
    const formatedInput = sanitizedInput.replace(/(.{4})/g, '$1 ');

    const limitedInput = formatedInput.slice(0, 19)

    setCardNumber(limitedInput);
}



    return (
        <div>
            <label htmlFor="cardNumber">Numéro de carte:</label>
            <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                placeholder={placeholder}
                title={title}
                onChange={(e) => formatCardNumber(e.target.value)}
                pattern="[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}"
                maxLength={19}
                required
            />
        </div>
    )
}

export const DateCard = ({children, setYear, setMonth}) => {
    const className = "inputDate";

    return (
        <div>
            <label htmlFor="expirationDate">Date d'expiration (MM/AA):</label>
            <input
                className={className}
                type="text"
                id="expirationDate"
                onChange={(e) => setMonth(e.target.value)}
                pattern="^(0[1-9]|1[0-2])$"
                placeholder="MM"
                required
                maxLength={2}
                style={{marginRight: 10}}
            />
            <input
                className={className}
                type="text"
                id="expirationDate"
                onChange={(e) => setYear(e.target.value)}
                pattern="^(25|26|27|28|29|30|31|32|33|34|35)$"
                placeholder="AA"
                required
                maxLength={2}
                style={{marginRight: 10}}
            />
            {children}

        </div>
    )
}


export const CVGCard = ({setCvg, className}) => {

    return (
        <>
            <input
                className={className}
                type="text"
                id="expirationDate"
                placeholder="CVG"
                onChange={(e) => setCvg(e.target.value)}
                pattern="[0-9]{3}"
                required
                maxLength={3}

            />
        </>

    )
}