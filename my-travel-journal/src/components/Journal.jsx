import './Journal.css'

export default function Journal(){
    return (
        <section className="journal">
            <img className="journal-image" src="../../public/images/mount-fuji.png" alt="Mount Fuji"/>
            <div className="journal-text">
                <div className="journal-location">
                    <img src="../../public/images/map-point.png"/>
                    <h4>JAPAN</h4>
                    <a href="https://goo.gl/maps/PygTi2AYoq2L1GXz8">View on Google Maps</a>
                </div>
                <h1 className="journal-title">Mount Fuji</h1>
                <p className="journal-date">12 Jan,2021 - 24 Jan,2021</p>
                <p className="journal-description">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters 
                    (12,380 feet). Mount Fuji is the single most popular tourist 
                    site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </section>
    )
}