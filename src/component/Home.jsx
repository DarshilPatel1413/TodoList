import React, { useState } from 'react'

const  Home = () => {

    let[add , setAdd]= useState('');
    let[list,setList]=useState([]);
    let[edittext,setEdittext]=useState(false);



let ADD = ()=>{

   if( add == ''){
   alert("Add Todo Data First..")
    
   }else{
    setList([...list,add]);
   }
   
}



let REMOVE=(id)=>{
    let remove = list.filter((item,index)=> index !== id)
    setList(remove)
}

let EDIT =(item,id)=>{
    if (edittext !== null) {
           
        let updatedList = list.map((item, index) => {
          if (index === edittext) {
            return add;
          }
          return item;
        });
        setList(updatedList);
    }else{
        setList([...list,add]);
    // setEdittext(id);
    // setAdd(list[id]);
}

// {list.map((item,index)=>{
//     setAdd(item)
// })}

// setAdd(list =>{

//     return( list.map(add => {

//         if(add.id === id){
//             return { ...list , edittext:true}
//         }
//         return list

//     })

//     )
// })





}



  return (<>    <div className='bg-slate-100 border border-black py-16 px-8 m-2 sm:px-52'>

<h1 className='underline flex mb-4 justify-center font-bold text-lg'>Store Your Todo's Here</h1>

<div className='bg-slate-300 text-black border border-black justify-between flex py-2 px-5 mb-5'>
     <input type="text" className='bg-slate-300 text-black w-full outline-none' placeholder='Type your Todos...'  name='add'  value={add} onChange={(e)=>setAdd(e.target.value)}/>
     <button className='border border-black rounded px-1 font-medium' onClick={()=>{
        ADD(add)
        setAdd("")
     }}>Add</button>
</div>
<h1 className='underline flex mb-2 justify-center font-bold text-lg'>Your Todo's List</h1>
<hr className='border-slate-400 w-full mb-4'/>
     <div className='px-3'>

        {list.map((demo,id)=>{
            return(<>
            <div className='border border-slate-300  flex justify-between my-2 px-2  items-center '>
                <p className=''>{demo}</p>
                <div className='p-1 '>
                <button onClick={()=>EDIT(id)} ><i className="fa-solid fa-pen-to-square px-2"></i></button>
                <button className='' onClick={()=>REMOVE(id)}><i className="fa-solid fa-trash"></i></button>
               
               
                </div>
                </div>
                </> )
        })}
        </div>
    </div>
    </>
 
  )}

export default Home
