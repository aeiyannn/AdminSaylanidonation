import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { db, storage } from '../Config/Firebase';
import { collection, getDocs, onSnapshot, addDoc, getDoc, query, where, deleteDoc, doc } from 'firebase/firestore';
import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';
import { FaHandPaper } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Addslider() {
  const [url, seturl] = useState("")
  const [imgsave, setimgsave] = useState("")
  const [header, setheader] = useState("")
  const EndRef = useRef(null)
  const [Slider, setSlider] = useState([])



  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Slider'), (snapshot) => {
      const newData = [];
      snapshot.forEach((doc) => {
        // Extract data from each document
        const documentData = doc.data();
        newData.push({
          id: doc.id,
          // Add other document fields as needed
          // For instance:
          description: documentData.description,
          img: documentData.img,
        });
      });
      // Update state with the new data
      setSlider(newData);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [])
  const scrollToBottom = () => {
    EndRef.current?.scrollIntoView({ behavior: "smooth" })
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
  const AddSlider = async () => {
    const obj = {
      description: header,
      img: url
    }
    if (obj.description !== "" && obj.img !== "") {
      try {
        const docRef = await addDoc(collection(db, "Slider"), obj);
        docRef.then(
          alert("data save"),
        )
      }
      catch (e) {
        console.log(e)

      }
      seturl("")
      scrollToBottom()
    }
    else {
      toast.error("Enter Must All Field")
    }
  }
  const changeImg = () => {
    seturl("")

  }
  const deleteslider = async (data) => {
    try {
      // Create a reference to the books collection
      const booksRef = collection(db, 'Slider');

      // Create a query to find the document based on the title
      const q = query(booksRef, where('img', '==', data.img));

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
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-2"
      >
        {

          Slider?.map((v, i) => (
            <SwiperSlide>
              <div className="flex justify-center">
                <div className="relative w-4/5">
                  <img className="w-full mt-4 h-64 rounded-lg" src={v.img} alt="" />
                  <div onClick={() => deleteslider(v)} className="absolute top-4 text-3xl right-0 p-2">
                    <RxCross1 className="text-3xl text-red-800" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Add Slider</h2>
          <div action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add header(Optional)</label>
              <input onChange={(e) => setheader(e.target.value)} type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div className="sm:col-span-2">
              {
                url !== "" ?
                  <>
                    <div class="relative inline-block w-full">
                      <img className=" heading flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  " src={url} alt='' />
                      <div class="absolute top-0 right-0 p-2" onClick={() => changeImg()}>
                        <RxCross1 className='text-3xl font-bold' />
                      </div>
                    </div>
                  </>
                  :
                  <label htmlFor="dropzone-file" className=" flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
            <p onClick={() => AddSlider()} className='bg-blue-600 text-white rounded-lg p-2 text-center mx-48'>Add Slider</p>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>


  )
}
