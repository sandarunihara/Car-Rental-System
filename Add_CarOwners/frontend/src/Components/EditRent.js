import React from 'react'
import {CgClose} from "react-icons/cg"
import { FaUpload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const EditRent = () => {
  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 bottom-0 right-0 left-0 flex justify-center items-center'>
      <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
         <div className='flex justify-between items-center '>
            <h2 className='font-bold text-lg'>Edit Product</h2>
            <div className='cursor-pointer w-fit ml-auto text-2xl hover:text-red-600'>
                <CgClose/>
            </div>
         </div>
        
        <form  className='grid p-4 gap-2 overflow-y-scroll h-full pb-5'>
            <label htmlFor='productName'>Product Name :</label>
            <input 
                type='text' 
                placeholder='Enter product Name' 
                id='productName'
                name='productName'
                // value={data.productName}
                // onChange={handleOnChange}
                className='p-2 bg-slate-100 border rounded'
                required
            />

            <label htmlFor='brandName' className='mt-3'>Brand Name :</label>
            <input 
                type='text' 
                placeholder='Enter brand Name' 
                id='brandName'
                name='brandName'
                // value={data.brandName}
                // onChange={handleOnChange}
                className='p-2 bg-slate-100 border rounded'
                required
            />


            <label htmlFor='category' className='mt-3'>Category :</label>
            <select  name='category'  required className='p-2 bg-slate-100 cursor-pointer border rounded'>
            <option value={""}>Select Category</option>
                
            </select>
            <label htmlFor='productImage' className='mt-3'>Product Image :</label>
            <label htmlFor='uploadImageInput'>
                <div className='cursor-pointer p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center hover:bg-slate-200 '>
                    <div className='text-slate-600 flex justify-center items-center flex-col gap-2 '>
                        <span className='text-4xl'><FaUpload/></span>
                        <p className='text-sm'>Upload Product Image</p>
                        <input type='file' id='uploadImageInput' className='hidden' />
                    </div>
                </div>
            </label>
            <div>
                {/* {
                    data?.productImage[0]?(
                        <div className='flex items-center gap-2'>
                            {
                                data.productImage.map((el,index)=>{
                                    return(
                                        <div className='relative group'>
                                            <img src={el} alt={el} width={80} height={80} className='bg-slate-100 cursor-pointer' onClick={()=>{
                                            setfullScreenImage(el)
                                            setopenFullScreenImage(true)
                                        }} /> 
                                        <div className='cursor-pointer absolute bottom-0 right-0 p-1 hidden group-hover:block hover:text-red-600' onClick={()=>{handleDeleteProductImage(index)}}>
                                            <MdDelete/>
                                        </div>
                                        </div>
        
                                    )
                                })
                            }
                        </div>

                    ):(
                        <p className='text-red-600 text-xs'>*pleace upload product image</p>
                    )
                } */}
            </div>

            <label htmlFor='price' className='mt-3'>Price :</label>
            <input 
                type='number' 
                placeholder='Enter price' 
                id='price'
                name='price'
                // value={data.price}
                // onChange={handleOnChange}
                className='p-2 bg-slate-100 border rounded'
                required
            />

            <label htmlFor='sellingprice' className='mt-3'>Selling Price :</label>
            <input 
                type='number' 
                placeholder='Enter selling price' 
                id='sellingprice'
                name='sellingprice'
                // value={data.sellingprice}
                // onChange={handleOnChange}
                className='p-2 bg-slate-100 border rounded'
                required
            />

            <label htmlFor='description' className='mt-3'>Description :</label>
            <textarea className='h-28 bg-slate-100 border resize-none'  placeholder='Enter product description'  name='description'></textarea>

            <button className='bg-red-500 w-48 ml-48 py-1 rounded-full hover:scale-110 hover:bg-red-600 transition-all'>Update Product</button>
        </form>


      </div>

     
     
    </div>
  )
}

export default EditRent