import React,{useState ,useEffect} from 'react'
import "./Admin.css"
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/features/ProductSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AdminPage = () => {
    const dispatch = useDispatch();
    const[loading , setloading ] = useState(false);
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state)=> ({...state.auth}));
    const { Product1 } = useSelector((state) => ({ ...state.Prod }));
    useEffect(()=>{
      if(isAuthenticated == false){
        navigate('/adminlogin');
      }
    })



    const [currentLine, setCurrentLine] = useState('');

    const [form, setForm] = useState({
        headline: '',
        heading1: '',
        heading2: [],
        price: '',
        collection: '',
        svj:'',
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

  const handleInputChange1 = (event) => {
    setCurrentLine(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (currentLine.trim() !== '') {
        setForm((prevForm) => ({
          ...prevForm,
          heading2: [...prevForm.heading2, currentLine],
        }));
        setCurrentLine('');
      }
    }
  };
  // console.log(lines)
  const handlenavigate2 = () =>{
    navigate('/admincollect')
  }

    console.log(form);
      const handleSubmit = () => {
        // e.preventDefault();
        setloading(true);
        console.log(form.images[4]);
        dispatch(addProduct(form)).then(()=>{
          setloading(false);
        })
        // Perform further actions with the form data
      };


  return (
    <div className='admin'>
      {
        loading?
        <div class="loader"></div>
        :
        <></>
      }
      <div className='up'>
        <p className='pa'>DIFFUSE / ADD PRODUCT</p>
        {
          loading?
          <button className='addbtn1' onClick={handleSubmit}>Add Product</button>
          :
          <button className='addbtn1' onClick={handleSubmit}>Add Product</button>
        }
      </div>
      <div className='mid'>
        <div className='midleft'>
            <div className='prdiv'>
                <label htmlFor="">ENTER PRODUCT NAME HERE</label>
                <input type="text" placeholder='Product Name' className='prname' name="headline" value={form.headline}
          onChange={handleInputChange} />
            </div>
            <div className='prdiv1'>
                <label htmlFor="">ENTER PRODUCT DESCRIPTION</label>
                <input type='text' placeholder='Product Description' id="" className='prtextarea'
                 name="heading1"
                 value={form.heading1}
                 onChange={handleInputChange}></input>
            </div>
            <div className='prdiv2'>
                <label htmlFor="">ENTER PRODUCT DESCRIPTION</label>
                <input type='text' placeholder='Bullet Points' id="" className='prtextarea'
                name="heading2"
                onChange={handleInputChange1}
                onKeyPress={handleKeyPress}
                value={currentLine}></input>
            <div className="line-preview">
        {form.heading2.map((line, index) => (
          <div key={index} className="line-item"> {index+1}.{line} </div>
        ))}
             </div>
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
            <input type="text" placeholder="Collection Name" className='priceinput' 
            name="collection"
            value={form.collection}
            onChange={handleInputChange}/>
        </div>
      <div className='newcolect'>
            <label htmlFor="">ADD NEW COLLECTION NAME</label>
            <input type="text" placeholder="Product Id" className='priceinput' 
            name="svj"
            value={form.svj}
            onChange={handleInputChange}/>
        </div>
      <div className='down'>  
        <div className='pricediv'>
            <label htmlFor="">ENTER PRICE HERE</label>
            <input type="text" placeholder="Price" className='priceinput' 
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
        {/* <option value="Gray">Gray</option>
        <option value="Wine Red">Wine Red</option>
      */}
         {
           Array.isArray(Product1) ?
           Product1?.map((item,index)=>{
             console.log(item)
             return(
               //  <h2 key={index} onClick={handlestoredata(item)}>{index+1}.{item}</h2>
               // </div>
               <option key={index} value={item.collect}>{item.collect}</option>
            // <li className='list' key={index} onClick={()=>handlestoredata(item)}>{item}</li>
             )
            })
          :<></>
         }
      </select>
        } 
        </div>
      </div>
    </div>
  )
}

export default AdminPage
