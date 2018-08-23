import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default function getBreeds() {
  return function(dispatch, getState) {
    const { animal } = getState();
    petfinder.breed.list({ animal }).then(data => {
      let breeds = [];
      if (
        data.petfinder &&
        data.petfinder.breeds &&
        Array.isArray(data.petfinder.breeds.breed)
      ) {
        breeds = data.petfinder.breeds.breed;
      }
      dispatch({ type: "CHANGE_BREEDS", payload: breeds });
    });
  };
}
