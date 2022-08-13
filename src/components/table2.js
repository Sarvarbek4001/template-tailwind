import React, { useEffect, useState } from "react";
import {
  TrashIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";
import { PencilAltIcon } from "@heroicons/react/solid";
import ReactPaginate from "react-paginate";
import Select from "./select";
import { useSelector } from "react-redux/es/exports";
/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: "Lindsay Walton1",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

export default function Table2() {
  const [pageCount, setPageCount] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const [data, setData] = useState([]);
  const [recordsTotal, setRecordsTotal] = useState(0);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    fetchData();
    // const endOffset = parseInt(itemOffset) + parseInt(itemsPerPage);
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setPageCount(Math.ceil(recordsTotal / parseInt(itemsPerPage)));
  }, [itemOffset, itemsPerPage, recordsTotal]);

  const handlePageClick = (event) => {
    console.log(event.selected);
    const newOffset = (event.selected * parseInt(itemsPerPage)) % recordsTotal;
    setItemOffset(newOffset);
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.13:5000/api/region/table",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            draw: 1,
            start: itemOffset,
            length: itemsPerPage,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      setData(json.body.data);
      setRecordsTotal(json.body.recordsFiltered);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </button>
        </div>
      </div>
      <Select setItemsPerPage={setItemsPerPage} itemsPerPage={itemsPerPage} />
      <div className="mt-2 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Country Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                        {item.countryName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                        {item.name}
                      </td>

                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex justify-evenly ">
                        <button className="mr-2 border py-1 px-3 bg-red-900 rounded-[4px] text-white transform hover:scale-110 hover:bg-white hover:border-red-900 hover:text-red-900 ease-in-out duration-300">
                          <PencilAltIcon className="h-6 w-6" />
                        </button>
                        <button className=" border py-1 px-3 bg-gray-900 rounded-[4px] text-white transform hover:scale-110 hover:bg-white hover:border-gray-900 hover:text-gray-900 ease-in-out duration-300">
                          <TrashIcon className="h-6 w-6" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <ChevronRightIcon className="text-white w-6 h-6 bg-gray-900 rounded-[4px] ml-2" />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          <ChevronLeftIcon className="text-white w-6 h-6 bg-gray-900 rounded-[4px] mr-2" />
        }
        renderOnZeroPageCount={null}
        containerClassName="flex my-5 justify-end"
        pageLinkClassName="py-2 px-4 "
        // previousLinkClassName="bg-gray-900 text-white py-2 px-4 rounded-[4px] mr-2"
        // nextLinkClassName="bg-gray-900 text-white py-2 px-4 rounded-[4px] ml-2"
        activeLinkClassName="py-2 px-4 bg-indigo-700 rounded-[4px] text-white"
      />
    </div>
  );
}
