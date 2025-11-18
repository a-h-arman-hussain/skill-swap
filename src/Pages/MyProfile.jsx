import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import Login from "./Login";
import { motion, AnimatePresence } from "framer-motion";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState(user?.displayName || "");
  const [newPhoto, setNewPhoto] = useState(user?.photoURL || "");

  if (!user) return <Login />;

  const handleSave = () => {
    if (!newName && !newPhoto) {
      toast.error("No changes made!");
      return;
    }

    updateProfile(user, {
      displayName: newName || user.displayName,
      photoURL: newPhoto || user.photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setIsModalOpen(false);
        window.location.reload();
      })
      .catch((err) => toast.error(`Update failed: ${err.message}`));
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <title>Skill Swap | My Profile</title>
      <div className="card bg-base-100 shadow-2xl w-full max-w-md p-6 rounded-2xl">
        <div className="flex flex-col items-center text-center">
          <motion.img
            src={
              user.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            }
            alt="User"
            className="w-28 h-28 rounded-full border-4 mb-4"
            style={{ borderColor: "#22d3ee" }}
            animate={{
              borderColor: [
                "#22d3ee",
                "#3b82f6",
                "#a855f7",
                "#ec4899",
                "#22d3ee",
              ],
            }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
          />
          <h2 className="text-2xl font-semibold text-cyan-600">
            {user.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-600 mt-2">{user.email}</p>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="btn text-white mt-6 border-0 font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-[length:200%_200%]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            Update Profile
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-xl font-bold mb-4 text-center text-cyan-600">
                Update Profile
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="label text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter new name"
                  />
                </div>
                <div>
                  <label className="label text-sm font-medium">Photo URL</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newPhoto}
                    onChange={(e) => setNewPhoto(e.target.value)}
                    placeholder="Enter new photo URL"
                  />
                </div>
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>
                  <button onClick={handleSave} className="btn bg-cyan-500 text-white">
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyProfile;
