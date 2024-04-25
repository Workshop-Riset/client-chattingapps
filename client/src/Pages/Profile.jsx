// import axios from "../config/instance";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {

    const [data, setData] = useState({})
    
  const goUpload = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("foto", data);

      await axios({
        method: "patch",
        url: `/profiles/upload-img`,
        data: formData,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  async function inputFile(event) {
    console.log(event,`<<< `);
    setData(event.target.files[0]);
  }
  return (
    <>
      <div className="flex screen justify-center mt-4 items-center">
        <div className="flex w-3/5 bg-blue-200 justify-center items-center rounded-xl p-4">
          <form onSubmit={goUpload}>
            <div className="">
              <label
                className="flex mb-2 text-xl font-medium text-gray-900 justify-center items-center"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 mt-4 "
                id="file_input"
                type="file"
                onChange={inputFile}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                className="flex rounded-xl h-8 w-20 bg-green-900 justify-center items-center text-white mt-4"
                type="submit"
              >
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
