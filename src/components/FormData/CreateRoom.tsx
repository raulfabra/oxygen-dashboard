import { useState } from "react";
import { Main } from "../../styles/stylesComponents";

export const CreateRoom = () => {
  const [formData, setFormData] = useState({
    photo: "",
    roomType: "",
    roomNumber: "",
    description: "",
    offer: "No",
    price: "",
    discount: "",
    cancellation: "",
    amenities: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData({
      ...formData,
      [name]: type === "file" ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Room Data:", formData);

    alert("La habitación se ha registrado con éxito.");
  };

  return (
    <Main $layout>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Picture:</label>
          <input type="file" name="photo" onChange={handleChange} accept="image/*" min={3} max={5} multiple />
          {formData.photo && <img src={formData.photo} alt="Employee" width="100" />}
        </div>
        <div>
          <label>Room Type:</label>
          <select name="types" value={formData.roomType} onChange={handleChange}>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double bed</option>
            <option value="Double Superior">Double Superior</option>
            <option value="Suit">Suit</option>
          </select>
        </div>
        <div>
          <label>Room Numeber:</label>
          <input type="text" name="roomNum" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Offer:</label>
          <select name="offer" value={formData.offer} onChange={handleChange}>
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>
        <div>
          <label>Price/perNight:</label>
          <input type="number" name="price" value={formData.priceNight} onChange={handleChange} required />
        </div>
        <div>
          <label>Discount:</label>
          <input type="range" name="discount" value={formData.discount} onChange={handleChange} required />
        </div>
        <div>
          <label>Cancellation:</label>
          <textarea name="cancellation" value={formData.cancellationRoom} onChange={handleChange} required />
        </div>
        <div>
          <label>Amenities:</label>
        </div>
        <button type="submit">Registrar Habitación</button>
      </form>
    </Main>
  );
};
