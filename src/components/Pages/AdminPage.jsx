import React,{useState} from 'react'
import "./Admin.css"
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/features/ProductSlice';

const AdminPage = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        headline: '',
        heading1: '',
        heading2: '',
        price: '',
        collection: '',
        images: [],
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      };

      
  const handleImageChange = (e, index) => {
    const files = e.target.files;
    const updatedImages = [...form.images];
    
    if (files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        updatedImages[index] = reader.result;
        setForm((prevForm) => ({
          ...prevForm,
          images: updatedImages,
        }));
      };
    }
  };

    console.log(form);
      const handleSubmit = () => {
        // e.preventDefault();
        dispatch(addProduct(form))
        // Perform further actions with the form data
      };


  return (
    <div className='admin'>
      <div className='up'>
        <p className='pa'>DIFFUSE / ADD PRODUCT</p>
        <button className='addbtn1' onClick={handleSubmit}>Add Product</button>
      </div>
      <div className='mid'>
        <div className='midleft'>
            <div className='prdiv'>
                <label htmlFor="">ENTER PRODUCT NAME HERE</label>
                <input type="text" placeholder='Hello Text 1' className='prname' name="headline" value={form.headline}
          onChange={handleInputChange} />
            </div>
            <div className='prdiv1'>
                <label htmlFor="">ENTER PRODUCT DESCRIPTION</label>
                <input type='text' placeholder='Hello Text 2' id="" className='prtextarea'
                 name="heading1"
                 value={form.heading1}
                 onChange={handleInputChange}></input>
            </div>
            <div className='prdiv2'>
                <label htmlFor="">ENTER PRODUCT DESCRIPTION</label>
                <input type='text' placeholder='Hello Text 2' id="" className='prtextarea'
                name="heading2"
                value={form.heading2}
                onChange={handleInputChange}></input>
            </div>
        </div>
        <div className='midright grid-container'>
            <div class="grid-item">
                <input type="file" name="image1" className='id1'
          accept="image/*"
          onChange={(e) => handleImageChange(e, 0)}/>
          {/* {console.log(form.images[0])} */}
           {form.images[0] && <span className='sp'>Image added</span>}
            </div>
            <div class="grid-item">
                <input type="file" name="image2"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 1)}/>
            {form.images[1] && <span className='sp'>Image added</span>}            </div>
            <div class="grid-item">
                <input type="file"  name="image3"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 2)}/>
          {form.images[2] && <span className='sp'>Image added</span>}
            </div>
            <div class="grid-item">
                <input type="file" name="image4"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 3)}/>
          {form.images[3] && <span className='sp'>Image added</span>} 
            </div>
            <div class="grid-item">
                <input type="file" name="image5"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 4)}/> 
          {form.images[4] && <span className='sp'>Image added</span>}
            </div>
            {/* <div class="grid-item">
                <input type="file" name="" id="" />
            </div>
            <div class="grid-item">
                <input type="file" name="" id="" />
            </div>
            <div class="grid-item">
                <input type="file" name="" id="" />
            </div> */}
        </div>
      </div>
      <div className='newcolect'>
            <label htmlFor="">ADD NEW COLLECTION NAME</label>
            <input type="text" placeholder="" className='priceinput' 
            name="collection"
            value={form.collection}
            onChange={handleInputChange}/>
        </div>
      <div className='down'>  
        <div className='pricediv'>
            <label htmlFor="">ENTER PRICE HERE</label>
            <input type="text" placeholder="220$" className='priceinput' 
            name="price"
            value={form.price}
            onChange={handleInputChange}/>
        </div>
        <div className='collecdiv'>
            <label htmlFor="">ENTER COLLECTION HERE</label>
        {
          form.collection != "" ?
        <select id="country" disabled name="collection"
          value={form.collection}
          onChange={handleInputChange}>
          <option value="">Select a Collection</option>
          <option value="Gray">Gray</option>
          <option value="Wine Red">Wine Red</option>
          <option value="MoonBlack">MoonBlack</option>
        </select>
        :
        <select id="country" name="collection"
        value={form.collection}
        onChange={handleInputChange}>
        <option value="">Select a Collection</option>
        <option value="Gray">Gray</option>
        <option value="Wine Red">Wine Red</option>
        <option value="MoonBlack">MoonBlack</option>
      </select>
        } 
        </div>
      </div>
    </div>
  )
}

export default AdminPage
