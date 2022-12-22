import './Journal.css'

export default function Journal(props){
    return (
        <section className="journal">
            <img className="journal-image" src={`../../public/${props.item.imageUrl}`} alt={props.item.title}/>
            <div className="journal-text">
                <div className="journal-location">
                    <img src="../../public/map-point.png"/>
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="journal-title">{props.item.title}</h1>
                <p className="journal-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="journal-description">
                    {props.item.description}
                </p>
            </div>
        </section>
    )
}