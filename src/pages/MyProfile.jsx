import React, { useContext, useState } from "react";
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";


const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)


  const [isEdit, setIsEdit] = useState(false);

  const [image, setImage] = useState(false)

  const updateUserFrofileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);

      image && formData.append('image', image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } });
      console.log(data)
      if (data.success) {
        toast.success(data.message);
        await  loadUserProfileData();
        setIsEdit(false);
        setImage(false);


      }else{
        toast.error(data.message)
      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)

    }

  }


  return userData && (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          {
            isEdit ?
              <label htmlFor="image">
                <div className="inline-block relative cursor-pointer">
                  <img className="w-36 rounded opacity-75" src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                  <img className="w-10 absolute button-12 right-12" src={image ? "" : assets.upload_icon} alt="" />
                </div>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
              </label>
              : <img src={userData.image} alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-300" />

          }

          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="mt-2 p-2 border rounded-md text-center w-full"
            />
          ) : (
            <h2 className="text-xl font-semibold mt-2">{userData.name}</h2>
          )}
          <p className="text-gray-500">{userData.email}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-gray-600">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="p-2 border rounded-md w-full"
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>

          <div>
            <p className="text-gray-600">Address:</p>
            {isEdit ? (
              <>
                <input
                  type="text"
                  value={userData.address?.line1 || ""}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line1: e.target.value,
                      },
                    }))
                  }
                  className="p-2 border rounded-md w-full mb-2"
                  placeholder="Address Line 1"
                />
                <input
                  type="text"
                  value={userData.address?.line2 || ""}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line2: e.target.value,
                      },
                    }))
                  }
                  className="p-2 border rounded-md w-full"
                  placeholder="Address Line 2"
                />
              </>
            ) : (
              <p>
                {userData.address?.line1}, {userData.address?.line2}
              </p>
            )}
          </div>


          <div>
            <p className="text-gray-600">Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                className="p-2 border rounded-md w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

          <div>
            <p className="text-gray-600">Date of Birth:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="p-2 border rounded-md w-full"
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Edit/Save Button */}
        <div className="mt-4">
          {isEdit ? (
            <button
              onClick={updateUserFrofileData}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
