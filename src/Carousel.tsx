import React from "react";
import { PetMedia, PetPhoto } from "petfinder-client";

interface Props {
  media: PetMedia;
}

interface State {
  active: number;
  photos: PetPhoto[];
}

class Carousel extends React.Component<Props, State> {
  public state: State = {
    photos: [],
    active: 0
  };
  public static getDerivedStateFromProps({ media }: Props) {
    let photos: PetPhoto[] = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }
  public handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index
      });
    }
  };
  public render() {
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
