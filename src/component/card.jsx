export const DisplayCard = (props) => {
    const {  cvg, url, alt, isFrontCard, cardholderName, cardNumber, year, month, className} = props


    const divStyle = {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 245,
        width: 447,
    }


    return (
        <div className={className}>
            <div style={divStyle}>
                <img src={url} alt={alt} style={{position: "relative"}}/>
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
    const pStyle = {
        position: "absolute",
        right: 50,

    }
    return (
        <>
            <p style={pStyle}>{cvg ? cvg : "000"}</p>
        </>
    )
}

const FrontCard = (props) => {
    const {cardholderName, cardNumber, year, month} = props
    const divStyle = {
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "1fr 1fr 1fr",
        width: 447,
        height: 245,
    }

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
                <div style={divStyle}>
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






