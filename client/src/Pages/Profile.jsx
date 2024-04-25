import axios from "../config/instance";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const [data, setData] = useState({});
  const [profile, setProfile] = useState({});

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

      navigate("/profiles");
    } catch (error) {
      console.log(error);
    }
  };

  async function inputFile(event) {
    console.log(event, `<<< `);
    setData(event.target.files[0]);
  }

  const fetchProfile = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/profiles",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      console.log(response, `<<<<`);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(profile, `,<<`);
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 justify-center items-center">
          <div className="rounded-t-lg h-32 overflow-hidden">
            <img
              className="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-32"
              src={profile.photoProfile}
              alt=""
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">Sarah Smith</h2>
            <div>
              <h1 className="font-normal text-base"> Bio: {profile.bio} </h1>
              <h1 className="font-normal text-base"> Address: {profile.address} </h1>
            </div>
          </div>

          <div className="flex screen justify-center mt-10 p-14 items-center">
            <div className="flex w-full h-10 bg-blue-200 justify-center items-center rounded-xl p-4">
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
        </div>
      </div>
    </>
  );
}
