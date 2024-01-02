import React, { useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { RxDotsHorizontal, RxCross2 } from "react-icons/rx";
import { db } from '../Config/Firebase';
import { onSnapshot, collection, where, query, deleteDoc, getDocs } from 'firebase/firestore';
import { MdDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';

export default function Viewpost() {
  const [Post, setPost] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Posts'), (snapshot) => {
      const newData = [];
      snapshot.forEach((doc) => {
        // Extract data from each document
        const documentData = doc.data();
        newData.push({
          id: doc.id,
          // Add other document fields as needed
          // For instance:
          title: documentData.title,
          description: documentData.description,
          img: documentData.img,
        });
      });
      // Update state with the new data
      setPost(newData);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();

  }, [])

  const deletepost = async (data) => {
    try {
      // Create a reference to the books collection
      const PostsRef = collection(db, 'Posts');

      // Create a query to find the document based on the title
      const q = query(PostsRef, where('description', '==', data.description));

      // Get the documents that match the query
      const querySnapshot = await getDocs(q);

      // Loop through the matched documents (in case multiple documents have the same title)
      querySnapshot.forEach(async (doc) => {
        // Delete each document found
        await deleteDoc(doc.ref);
        console.log('Document deleted successfully!');
      });
    } catch (error) {
      console.error('Error deleting document: ', error);
    }

  }
  return (
    <>
      <div>
        <h1 className='text-center text-blue-700 text-3xl font-bold'>View Post</h1>
      </div>
      {Post?.map((v, i) => (
        <div className="flex justify-center mt-7">
          <div class="block w-3/6 pt-3  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='flex items-center justify-between px-3ra'>
              <div className='flex items-center'>
                <img className='w-10 rounded-full mr-2 border-2 border-gray-500' src="https://image.winudf.com/v2/image/Y29tLmFwcC5zYXlsYW5pX2ljb25fMF84YzYwYzE2OQ/icon.png?w=184&fakeurl=1" alt="" />
                <p>{v.title}</p>
              </div>
              <div className='flex items-start '>
                <TbEdit className='mr-5 text-xl' />
                <MdDelete onClick={() => deletepost(v)} className='text-xl' />
              </div>
            </div>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-2 px-3">{v.description}</p>
            <img className='w-full h-64 ' src={v.img} alt="" />
            <div className='flex justify-between bg-gray-100 h-14 '>
              <p className='p-2 m-3 h-9 font-semibold text-sm '>Donate for needy people </p>
              <button className='bg-green-600 text-white text-sm text-center  m-3 px-2 rounded-lg'>Donate Now</button>
            </div>
          </div>
        </div>
      ))
      }



    </>

  )
}
