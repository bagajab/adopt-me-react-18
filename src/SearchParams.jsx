import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          type="text"
          value={location}
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />

          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          disabled={breeds.length === 0}
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
