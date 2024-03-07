export const DisplayCard = (props) => {
    const {  cvg, url, alt, isFrontCard, cardholderName, cardNumber, year, month, className} = props





    return (
        <div className={className}>
            <div className="containerCardBack" >
                <img  className="imageCard" src={url} alt={alt} />
                {isFrontCard ? <FrontCard cardNumber={cardNumber}
                                          year={year}
                                          month={month}
                                          cardholderName={cardholderName}
                    ></FrontCard>
                    : <BackCard cvg={cvg}></BackCard>
                }            </div>
        </div>

    )
}

const BackCard = ({cvg}) => {

    return (
        <>
            <p className="cvg">{cvg ? cvg : "000"}</p>
        </>
    )
}

const FrontCard = (props) => {
    const {cardholderName, cardNumber, year, month} = props

    const cercle = {
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderRadius: "50%",
        margin: 20,
    }

    const minCercle = {
        width: 30,
        height: 30,
        backgroundColor: "transparent",
        border: "1px solid",
        borderRadius: "50%",

    }

    return (
        <>
            <div style={{position: "absolute"}}>
                <div className="containerCardFront">
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div style={cercle}></div>
                        <div style={minCercle}></div>
                    </div>
                    <div>
                        <p style={{fontSize: "1.6rem"}}>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</p>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <p>{cardholderName ? cardholderName : 'Steve Jobs'}</p>
                        <p>{month ? month : "00"}/{year ? year : "00"}</p>
                    </div>

                </div>
            </div>
        </>
    )
}






