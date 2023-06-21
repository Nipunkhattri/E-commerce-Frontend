import React, { useEffect ,useState} from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { SingleProduct, UpdateProductById } from '../../redux/features/ProductSlice.js';
import './Admin.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Updateproduct = () => {
  const navigate = useNavigate();
  const [loading ,setloading ] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated } = useSelector((state)=> ({...state.auth}));
  useEffect(()=>{
    if(isAuthenticated == false){
      navigate('/adminlogin');
    }
  },[isAuthenticated])
  const { SingleId } = useSelector((state) => ({ ...state.Prod }));
  console.log(SingleId)
  const _id = location?.state?._id;
  console.log(_id);
  const [item , setitem] = useState();
  const [editedName, setEditedName] = useState();
  const [headline1Name, setheadline1] = useState();


  useEffect( ()=>{
    // setloading(true)
     dispatch(SingleProduct(_id))
    // .then((response) => {
    //     // console.log();
    //     // setitem(response.payload);
    // })  
    // .catch((err) => {
    //     console.log(err);
    //     // setError(error);
    // });
},[])

console.log(item)

const [form, setForm] = useState({
  id:'',
  headline: '',
  heading1: '',
  heading2: '',
  price: '',
  collection: '',
  images: [],
});

let idd;

useEffect(() => {
  console.log(SingleId?.headline);
  idd = SingleId?._id
  setForm({id:SingleId?._id ,headline: SingleId?.headline, heading1: SingleId?.headline1 ,heading2: SingleId?.headline2 ,price: SingleId?.Price , collection : SingleId?.collect,images: SingleId?.images});
}, [SingleId]);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};

// console.log(form);
const handleupdate = () =>{
  console.log(form);
  setloading(true)
   dispatch(UpdateProductById(form)).then((res)=>{
    setloading(false);
   })
}

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
}

const handlenavigate2 = () =>{
  navigate('/admincollect')
}

  return (
    <div className='admin'>
      {
        loading?
        toast.success("Loading...")
        :<></>
      }
      <div className='up'>
        <p className='pa'>DIFFUSE / ADD PRODUCT</p>
        {
          loading?
          <div  className='btndiv'>
          <button disabled className='addbtn1' onClick={handleupdate}>Update Product</button>
          <button className='addbtn2' onClick={handlenavigate2}>collection Product </button>
          </div>
          :
          <div  className='btndiv'>
          <button className='addbtn1' onClick={handleupdate}>Update Product</button>
          <button className='addbtn2' onClick={handlenavigate2}>collection Product </button>
          </div>
        }
      </div>

        {
      form?.collection !== undefined?
      <>
      <div className='mid'>
        <div className='midleft'>
            <div className='prdiv'>
                <label htmlFor="">ENTER PRODUCT NAME HERE</label>
                <input type="text" placeholder="" className='prname' name="headline" 
                value={form?.headline}
                onChange={handleInputChange}
                />
            </div>
            <div className='prdiv1'>
                <label htmlFor="">ENTER PRODUCT DESCRIPTION</label>
                <input type='text' placeholder={item?.headline1} id="" className='prtextarea'
                 name="heading1"
                 value={form?.heading1}
      onChange={handleInputChange}></input>
            </div>
            <div className='prdiv2'>
                <label htmlFor="">ENTER PRODUCT DESCRIPTION</label>
                <input type='text' placeholder='Hello Text 2' id="" className='prtextarea'
                name="heading2"
                value={form?.heading2}
                onChange={handleInputChange}></input>
            </div>
        </div>
        <div className='midright grid-container'>
            <div class="grid-item">
                <input type="file" name="image1" className='id1'
          accept="image/*"
          onChange={(e) => handleImageChange(e, 0)}/>
          {/* {console.log(form.images[0])} */}
          {form?.images[0] && <span className='sp'>Image added</span>}
            </div>
            <div class="grid-item">
                <input type="file" name="image2"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 1)}/>
          {form?.images[1] && <span className='sp'>Image added</span>}         
            <div class="grid-item">
                <input type="file"  name="image3"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 2)}/>
          {form?.images[2] && <span className='sp'>Image added</span>}
            </div>
            <div class="grid-item">
                <input type="file" name="image4"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 3)}/>
                    {form?.images[3] && <span className='sp'>Image added</span>} 
            </div>
            <div class="grid-item">
                <input type="file" name="image5"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 4)}/>
          {form?.images[4] && <span className='sp'>Image added</span>}
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
      </div>
      <div className='newcolect'>
            <label htmlFor="">ADD NEW COLLECTION NAME</label>
            <input type="text" placeholder="" className='priceinput' 
            name="collection"
            value={form?.collection}
            onChange={handleInputChange}/>
        </div>
      <div className='down'>  
        <div className='pricediv'>
            <label htmlFor="">ENTER PRICE HERE</label>
            <input type="text" placeholder="220$" className='priceinput' 
            name="price"
            value={form?.price}
            onChange={handleInputChange}/>
        </div>
        <div className='collecdiv'>
            <label htmlFor="">ENTER COLLECTION HERE</label>
       {
          form?.collection != "" ?
        <select id="country" disabled name="collection"
          value={form?.collection}
          onChange={handleInputChange}>
          <option value="">Select a Collection</option>
          <option value="Gray">Gray</option>
          <option value="Wine Red">Wine Red</option>
          <option value="MoonBlack">MoonBlack</option>
        </select>
        :
        <select id="country" name="collection"
        value={form?.collection}
        onChange={handleInputChange}>
        <option value="">Select a Collection</option>
        <option value="Gray">Gray</option>
        <option value="Wine Red">Wine Red</option>
        <option value="MoonBlack">MoonBlack</option>
      </select>
        } 
        </div>
      </div>
      </>
      :
      <>
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </>
        }
    </div>
  )
}

export default Updateproduct
