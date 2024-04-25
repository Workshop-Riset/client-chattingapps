import { useState, useEffect } from "react";
import axios from "../config/instance";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import library animasi

export default function Contact() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: '/friends',
        headers: {
          Authorization: 'Bearer ' + localStorage.access_token
        }
      });
      console.log(response.data);
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full sm:max-w-md">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Contacts</h2>
        </div>
        <div className="divide-y divide-gray-300">
          {contacts.map((contact, index) => (
            <motion.div key={index} className="py-4 flex items-center space-x-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 20 }} // Animasi muncul
              animate={{ opacity: 1, y: 0 }} // Animasi muncul
              exit={{ opacity: 0, y: -20 }} // Animasi hilang
              transition={{ duration: 0.3 }}
              style={{ marginBottom: "1rem" }} // Tambahkan jarak antar kontak
            >
              <img src={contact.Profile.photoProfile} alt="Profile" className="rounded-full w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold">{contact.Profile.fullName}</h3>
                <p className="text-gray-700">{contact.Profile.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
