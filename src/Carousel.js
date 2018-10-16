import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps({ media }) {
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }
  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };
  render() {
    const { photos, active } = this.state;

    let hero = "http://placecorgi.com/300/300";
    if (photos[active] && photos[active].value) {
      hero = photos[active].value;
    }

    return (
      <div className="carousel">
        <img src={hero} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo.value}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
