export const GifItem = ({ title, url }) => {
    return (
        <div className="col-md-4">
            <div className="card" style={{ height: "250px" }}>
                <img src={url} alt={title} className="h-75" />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                </div>
            </div>
        </div>
    );
};
