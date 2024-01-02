import React, { useState } from 'react'
import { FaHandPaper } from 'react-icons/fa'
import { db, storage } from '../Config/Firebase'
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage'
import { RxCross1 } from 'react-icons/rx'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router'

export default function Addpost() {
  const [Addpost, setAddpost] = useState({
    title: "",
    description: "",
    img: ""

  })
  const [url, seturl] = useState("")
  const [imgsave, setimgsave] = useState("")
  const navigate = useNavigate()


  const handlechg = (e) => {
    setAddpost({ ...Addpost, [e.target.name]: e.target.value })
  }
  const handleimg = (e) => {
    console.log(e.target.files[0])
    const fileRef = ref(storage, "images/" + e.target.files[0].name);

    const uploadTask = uploadBytesResumable(fileRef, e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Update progress
        let progress = Math.round(100 * (snapshot.bytesTransferred / snapshot.totalBytes))
        setimgsave(progress)
      },
      (error) => {
        console.log(error)
        // Handle errors
      },
      async () => {
        // File uploaded successfully
        const downloadURL = await getDownloadURL(fileRef);
        console.log(downloadURL)
        seturl(downloadURL)
        setimgsave("")
      }
    )

  }
  const changeImg = () => {
    seturl("")

  }
  const Addpostdata = async () => {
    const obj = {
      title: Addpost.title,
      description: Addpost.description,
      img: url
    }
    if (obj.description !== "" && obj.img !== "") {
      try {
        const docRef = await addDoc(collection(db, "Posts"), obj);
        docRef.then(
          alert("data save"),
        )
      }
      catch (e) {
        console.log(e)

      }
      seturl("")
      navigate("/viewpost")
    }
    else {
      alert("Enter Correct Data")
    }
  }

  return (
    <div>
      <div class="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
      <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input name='title' class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text" onChange={(e) => handlechg(e)} />
        <textarea onChange={(e) => handlechg(e)} name='description' class="description bg-gray-100 sec p-3 h-40 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
        <div className="sm:col-span-2">
          {
            url !== "" ?
              <>
                <div class="relative inline-block w-full mt-3">
                  <img className=" heading flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  " src={url} alt='' />
                  <div class="absolute top-0 right-0 p-2" onClick={() => changeImg()}>
                    <RxCross1 className='text-3xl font-bold' />
                  </div>
                </div>
              </>
              :
              <label htmlFor="dropzone-file" className=" my-4 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                {
                  imgsave === "" ?
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FaHandPaper className='text-5xl mb-2 ' />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG(MAX. 800x400px)</p>
                    </div>
                    :
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: imgsave + "%" }}></div>
                    </div>
                }
                <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleimg(e)} />
              </label>



          }
        </div>
        {/* <div class="icons flex text-gray-500 m-2">
          <FaImage/>
          <MdVideoLibrary/>
        </div> */}
        <div class="buttons flex justify-end">
          <div class="btn border border-blue-500 p-1 px-8 font-semibold cursor-pointer text-white ml-2 bg-blue-500" onClick={() => Addpostdata()}>Post</div>
        </div>
      </div></div>


  )
}
