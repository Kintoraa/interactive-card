export const Background = ({url, children}) => {
    const className = "background"
    return (
        <div style={{height: "auto"}}>
        <div className={className} >
            <img src={url} className={"imageBackground"} alt={"image de fond"}/>
            {children}
        </div>
            </div>
    );
};