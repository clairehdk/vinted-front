import Pubinput from "../components/Pubinput";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Line from "../components/Line";

const Publish = ({ token, setModal }) => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [location, setLocation] = useState("");
  const [etat, setEtat] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState();

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
  };
  const handleColor = (event) => {
    const value = event.target.value;
    setColor(value);
  };
  const handleBrand = (event) => {
    const value = event.target.value;
    setBrand(value);
  };
  const handleLocation = (event) => {
    const value = event.target.value;
    setLocation(value);
  };
  const handleEtat = (event) => {
    const value = event.target.value;
    setEtat(value);
  };
  const handlePrice = (event) => {
    const value = event.target.value;
    setPrice(value);
  };
  const handleSize = (event) => {
    const value = event.target.value;
    setSize(value);
  };
  const handlePicture = (event) => {
    const value = event.target.files[0];
    setPicture(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("color", color);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("location", location);
      formData.append("etat", etat);
      formData.append("price", price);
      formData.append("picture", picture);
      const response = await axios.post(
        "http://localhost:3001/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data._id) {
        history.push(`/offer/${response.data._id}`);
      } else {
        alert("Une erreur est survenue");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return token ? (
    <div className="publish">
      <div className="container">
        <h2>Vends tes articles</h2>
        <form onSubmit={handleSubmit}>
          <div className="publish_details file">
            <div>
              <button className="blanc">
                <i className="fas fa-plus fa-lg"></i>
                <label htmlFor="file">Ajoute des photos</label>
              </button>
            </div>

            <input id="file" onChange={handlePicture} type="file"></input>
          </div>
          <div className="publish_details">
            <Pubinput
              onChange={handleName}
              title="Titre"
              name="name"
              type="text"
              placeholder="ex : Chemise Sézane verte"
            />
            <Line />
            <div>
              <span>Décris ton article</span>
              <textarea
                onChange={handleDescription}
                name="description"
                placeholder="ex : porté quelques fois, taille correctement"
              />
            </div>
            {/* <Pubinput
              onChange={handleDescription}
              title="Décris ton article"
              name="description"
              type="textaera"
              placeholder="ex : porté quelques fois, taille correctement"
            /> */}
          </div>
          <div className="publish_details">
            <Pubinput
              onChange={handleColor}
              title="Couleur"
              name="color"
              type="text"
              placeholder="Couleur"
            />
            <Line />
            <Pubinput
              onChange={handleBrand}
              title="Marque"
              name="brand"
              type="text"
              placeholder="Marque"
            />
            <Line />
            <Pubinput
              onChange={handleLocation}
              title="Emplacement"
              name="location"
              type="text"
              placeholder="Emplacement"
            />
            <Line />
            <Pubinput
              onChange={handleSize}
              title="Taille"
              name="size"
              type="text"
              placeholder="Taille"
            />
            <Line />
            <Pubinput
              onChange={handleEtat}
              title="Etat"
              name="etat"
              type="text"
              placeholder="Etat"
            />
          </div>
          <div className="publish_details">
            <Pubinput
              onChange={handlePrice}
              title="Prix"
              name="price"
              type="text"
              placeholder="0,00€"
            />
          </div>
          <div className="submit">
            <input className="bleu" type="submit" value="Ajouter"></input>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Publish;
