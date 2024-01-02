import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import RequestModal from "./Modal";

export default function Usercheck() {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mr-3 my-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Request
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                        <th scope="col" className="py-3">
                            Detail
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="">
                            <button href="#" className="font-medium text-white p-2 bg-green-600 rounded-lg mr-2">Accept</button>
                            <button className="font-medium text-white p-2 bg-red-600 rounded-lg">Reject</button>
                        </td>
                        <td className="px-2">
                            <i><FaEye className="text-lg" /></i>
                        </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Ahmed
                        </th>
                        <td className="px-6 py-4">
                            Send Donation
                        </td>
                        <td className="px-6 py-4">
                            Cash
                        </td>
                        <td className="px-6 py-4">
                            40000
                        </td>
                        <td className="">
                            <button href="#" className="font-medium text-white p-2 bg-green-600 rounded-lg mr-2">Accept</button>
                            <button className="font-medium text-white p-2 bg-red-600 rounded-lg">Reject</button>
                        </td>
                        <td className="px-2">
                            <i onClick={setShowModal} ><FaEye className="text-lg" /></i>
                        </td>
                        <RequestModal showModal={showModal} setShowModal={setShowModal} />
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        <td className="">
                            <button href="#" className="font-medium text-white p-2 bg-green-600 rounded-lg mr-2">Accept</button>
                            <button className="font-medium text-white p-2 bg-red-600 rounded-lg">Reject</button>
                        </td>
                        <td className="px-2">
                            <i><FaEye className="text-lg" /></i>
                        </td>
                    </tr>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Google Pixel Phone
                        </th>
                        <td className="px-6 py-4">
                            Gray
                        </td>
                        <td className="px-6 py-4">
                            Phone
                        </td>
                        <td className="px-6 py-4">
                            $799
                        </td>
                        <td className="">
                            <button href="#" className="font-medium text-white p-2 bg-green-600 rounded-lg mr-2">Accept</button>
                            <button className="font-medium text-white p-2 bg-red-600 rounded-lg">Reject</button>
                        </td>
                        <td className="px-2">
                            <i><FaEye className="text-lg" /></i>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple Watch 5
                        </th>
                        <td className="px-6 py-4">
                            Red
                        </td>
                        <td className="px-6 py-4">
                            Wearables
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                        <td className="">
                            <button href="#" className="font-medium text-white p-2 bg-green-600 rounded-lg mr-2">Accept</button>
                            <button className="font-medium text-white p-2 bg-red-600 rounded-lg">Reject</button>
                        </td>
                        <td className="px-2">
                            <i><FaEye className="text-lg" /></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
