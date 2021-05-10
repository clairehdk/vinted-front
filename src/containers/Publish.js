import Publish_input from "../components/Publish_input";
import axios from "axios";
import { useState } from "react";
import Loading from "../components/Loading";

const Publish = ({ token }) => {
  const [data, setData] = useState();
  const [isLoading, setLoader] = useState(true);
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
        "https://my-vinted-project.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setData(response.data);
      setLoader(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="publish">
      <div className="container">
        <h2>Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div className="publish_details">
            <input onChange={handlePicture} name="picture" type="file"></input>
          </div>
          <div className="publish_details">
            <Publish_input
              onChange={handleName}
              title="Titre"
              name="name"
              type="text"
              placeholder="ex : Chemise Sézane verte"
            />
            <Publish_input
              onChange={handleDescription}
              title="Décris ton article"
              name="description"
              type="text"
              placeholder="ex : porté quelques fois, taille correctement"
            />
          </div>
          <div className="publish_details">
            <Publish_input
              onChange={handleColor}
              title="Couleur"
              name="color"
              type="text"
              placeholder="Couleur"
            />
            <Publish_input
              onChange={handleBrand}
              title="Marque"
              name="brand"
              type="text"
              placeholder="Marque"
            />
            <Publish_input
              onChange={handleLocation}
              title="Emplacement"
              name="location"
              type="text"
              placeholder="Emplacement"
            />
            <Publish_input
              onChange={handleSize}
              title="Taille"
              name="size"
              type="text"
              placeholder="Taille"
            />
            <Publish_input
              onChange={handleEtat}
              title="Etat"
              name="etat"
              type="text"
              placeholder="Etat"
            />
          </div>
          <div className="publish_details">
            <Publish_input
              onChange={handlePrice}
              title="Prix"
              name="price"
              type="text"
              placeholder="0,00€"
            />
          </div>
          <input type="submit" value="Ajouter"></input>
        </form>
      </div>
      {/* {isLoading ? <Loading /> : alert("Votre offre a été créée")} */}
    </div>
  );
};

export default Publish;
