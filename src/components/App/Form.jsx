// import { useState } from "react";
const groceries = [
  "Chleb",
  "Mleko",
  "Jajka",
  "Jabłka",
  "Banany",
  "Pomidory",
  "Ryż",
  "Makaron",
  "Masło",
  "Cukier",
  "Kawa",
  "Herbata",
  "Sól",
  "Pieprz",
  "Oliwa z oliwek",
  "Mąka",
  "Cebula",
  "Czosnek",
  "Marchewki",
  "Sałata",
  "Jogurt",
  "Ser",
  "Szynka",
  "Kiełbasa",
  "Ketchup",
  "Musztarda",
  "Oliwki",
  "Kapusta",
  "Papryka",
  "Kukurydza",
  "Ananasy",
  "Brzoskwinie",
  "Truskawki",
  "Maliny",
  "Gruszki",
  "Winogrona",
  "Arbuz",
  "Pomarańcze",
  "Cytryny",
  "Pomelo",
  "Melon",
  "Jogurt naturalny",
  "Jogurt owocowy",
  "Twaróg",
  "Jogurt grecki",
  "Mleko kokosowe",
  "Śmietana",
  "Kefir",
  "Ser feta",
  "Ser pleśniowy",
  "Ser topiony",
  "Masło orzechowe",
  "Dżem",
  "Nutella",
  "Miód",
  "Syrop klonowy",
  "Orzechy",
  "Nasiona słonecznika",
  "Nasiona dyni",
  "Orzechy laskowe",
  "Orzechy włoskie",
  "Pistacje",
  "Borówki",
  "Żurawina",
  "Morele",
  "Śliwki",
  "Wiśnie",
  "Awokado",
  "Bananowy",
  "Cytrynowy",
  "Truskawkowy",
  "Czekoladowy",
  "Karmelowy",
  "Jabłkowy",
  "Kokosowy",
  "Malinowy",
  "Pomarańczowy",
  "Brzoskwiniowy",
  "Mango",
  "Granat",
  "Czereśnie",
  "Kiwi",
  "Ananasowy",
  "Winogronowy",
  "Jagodowy",
  "Marakuja",
  "Arbuzowy",
  "Miętowy",
  "Jabłko-zioła",
  "Świeża mięta",
  "Bazylia",
  "Pietruszka",
  "Koper",
  "Rukola",
  "Tymianek",
  "Oregano",
  "Szczypiorek",
  "Imbir",
  "Kurkuma",
  "Cynamon",
  "Goździki",
  "Groszek",
  "Brukselka",
  "Kalafior",
  "Brokuły",
  "Kapary",
  "Patison",
  "Dynia",
  "Bakłażan",
  "Seler",
  "Soczewica",
  "Fasola",
  "Groch",
  "Ciecierzyca",
  "Tofu",
  "Tempeh",
  "Seitan",
  "Kiełki",
  "Chia",
  "Quinoa",
];

function Form({ handleSubmit, handleChange, formData }) {
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product:</label>
          <input
            type="text"
            id="name"
            name="name"
            list="hints"
            placeholder="Insert Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <datalist id="hints">
            {groceries
              .filter((e) => e.toLowerCase().includes(formData.name))
              .map((e, i) => {
                return <option key={i} value={e} />;
              })}
          </datalist>
        </div>
        <div>
          <label htmlFor="message">Note:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter some Notes"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-input"
          ></textarea>
        </div>
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
