import { useContext } from 'react'
import classes from './styles.module.css'
import { GlobalContext } from '../../context'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function AddNewBlog(){

    const {formData,setFormData} =useContext(GlobalContext);
    const navigation = useNavigate();

    async function handleSaveBlogToDataBase(){
        const response=await axios.post('http://localhost:5000/api/blogs/add',{
            title:formData.title,
            description:formData.description
        });
        
        const result=await response.data;
        if(result){
            setFormData({
                title:'',
                description:''
            })
            navigation('/')
        }

    }


    return <div className={classes.wrapper}>
        <h1>Add a Blog</h1>
        <div className={classes.formWrapper}>
            <input
            name='title'
            placeholder='Enter Blog Title'
            id='title'
            type='text'
            value={formData.title}
            onChange={(e)=>setFormData(
                {
                    ...formData,
                    title:e.target.value
                }
            )}
            />
            <textarea
            name='description'
            placeholder='Enter Blog Description'
            id='description'
            value={formData.description}
            onChange={(e)=>setFormData(
                {
                    ...formData,
                    description:e.target.value
                }
            )}
            />
            <button onClick={handleSaveBlogToDataBase}>Add New Blog</button>
        </div>
    </div>
}