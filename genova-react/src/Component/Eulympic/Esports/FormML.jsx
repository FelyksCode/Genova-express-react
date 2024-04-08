import React, { useState, useEffect } from "react";
import "./Eulympic.css";
import FormTemplate from "./FormTemplate2";
import axios from "axios";
// "_id": "660ab388747695f586c790b0",
// "race_name": "Ulympic - Basket",

// "_id": "660ab388747695f586c790b1",
// "race_name": "Ulympic - Futsal",

// "_id": "660ab388747695f586c790b2",
// "race_name": "Ulympic - Volly",

// "_id": "660ab388747695f586c790ad",
// "race_name": "Ulympic - Badminton (Ganda Putra)",

// "_id": "660ab388747695f586c790ac",
// "race_name": "Ulympic - Badminton (Ganda Campuran)",

const FormML = () => {
  let id = "";
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);

  const [teamName, setTeamName] = useState("");
  const [leaderIdLine, setLeaderIdLine] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedSportID, setSelectedSportID] = useState("");

  const [members, setMembers] = useState([]);

  const [transferProof, setTransferProof] = useState("");
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };
  const handleLeaderIdLineChange = (e) => {
    setLeaderIdLine(e.target.value);
  };
  const handleSportChange = (e) => {
    const newSelectedSport = e.target.value;
    console.log("e.target.value: ", newSelectedSport);
    setSelectedSport(newSelectedSport);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  // Define the sports to members mapping outside the component if it doesn't change
  const sportsToMembersMap = {
    volleyball: 10,
    basketball: 7,
    badmintonCampuran: 2,
    badmintonPutra: 2,
    futsal: 12,
  };

  useEffect(() => {
    // Initialize or update members based on the selected sport
    if (selectedSport) {
      setMembers(
        Array.from({ length: sportsToMembersMap[selectedSport] || 0 }, () => ({
          fullName: "",
          nim: "",
          email: "",
          ktmPhoto: null, // Assuming you want to track the file as null initially
        }))
      );
    }
    let newId = "";
    switch (selectedSport) {
      case "volleyball":
        newId = "660ab388747695f586c790b2";
        break;
      case "basketball":
        newId = "660ab388747695f586c790b0";
        break;
      case "badmintonCampuran":
        newId = "660ab388747695f586c790ac";
        break;
      case "badmintonPutra":
        newId = "660ab388747695f586c790ad";
        break;
      case "futsal":
        newId = "660ab388747695f586c790b1";
        break;
      default:
        newId = "";
        break;
    }
    setSelectedSportID(newId);
    console.log(selectedSportID);
  }, [selectedSport, selectedSportID]);

  const handleInputChange = (e, index) => {
    const { name, value, files } = e.target;
    const updatedMembers = [...members];
    if (name === "ktmPhoto") {
      updatedMembers[index][name] = files[0]; // Handle file input
    } else {
      updatedMembers[index][name] = value; // Handle text inputs
    }
    setMembers(updatedMembers);
  };

  const handleTransferProofChange = (e) => {
    setTransferProof(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("team_name", teamName);
    formData.append("line_id", leaderIdLine);

    // Append each team member's details to formData
    members.forEach((member, index) => {
      formData.append(`users[${index}][name]`, member.fullName);
      formData.append(`users[${index}][nim]`, member.nim);
      formData.append(`users[${index}][email]`, member.email);
      formData.append(`users[${index}][game_id]`, selectedSport);
      // Check if ktmPhoto is not null before appending
      if (member.ktmPhoto) {
        formData.append(`users[${index}][ktm]`, member.ktmPhoto);
      }
    });

    try {
      // Note: You don't need to manually set the `Content-Type` header here.
      // Axios and the browser will handle it when you pass a FormData object.
      const response = await axios.post(
        `http://127.0.0.1:8090/users/register/${selectedSportID}`,
        formData
      );
      const teamId = response.data.data.team.team_id;

      if (transferProof) {
        const formProof = new FormData();
        formProof.append("proof", transferProof);
        const resProof = await axios.post(
          `http://127.0.0.1:8090/team/${teamId}/confirmPayment`,
          formProof
        );
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error: ", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error: ", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error: ", error.message);
      }
    }

    // Reset form and state after submission
    setShowModal(false);
    setStep(1);
    setTeamName("");
    setLeaderIdLine("");
    setSelectedSport("");
    setMembers([]);
    setTransferProof("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStep(1);
    setTeamName("");
    setLeaderIdLine("");
    setSelectedSport("");
    setMembers([]);
    setTransferProof("");
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="bentukbutton type1 w-full sm:w-auto md:w-full"
      >
        <span className="btn-txt1">Daftar Lomba</span>
      </button>

      {showModal && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h1 className="text-white">Form pendaftaran</h1>
              <button
                onClick={handleCloseModal}
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              {step === 1 && (
                <form className="space-y-4" action="#">
                  <div>
                    <label
                      htmlFor="teamName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Team Name
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      id="teamName"
                      value={teamName}
                      onChange={handleTeamNameChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your team name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="leaderIdLine"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Leader's ID Line
                    </label>
                    <input
                      type="text"
                      name="leaderIdLine"
                      id="leaderIdLine"
                      value={leaderIdLine}
                      onChange={handleLeaderIdLineChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter leader's ID Line"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sport"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Choose Sport
                    </label>
                    <select
                      name="sport"
                      id="sport"
                      value={selectedSport}
                      onChange={handleSportChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    >
                      <option value="">Select a sport</option>
                      <option value="volleyball">Volleyball</option>
                      <option value="basketball">Basketball</option>
                      <option value="badmintonCampuran">
                        Badminton Ganda Campuran
                      </option>
                      <option value="badmintonPutra">
                        Badminton Ganda Putra
                      </option>
                      <option value="futsal">Futsal</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Next
                  </button>
                </form>
              )}
              {step === 2 && (
                <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                  <div className="h-96 overflow-scroll overflow-x-hidden">
                    {members.map((member, index) => (
                      <FormTemplate
                        key={index}
                        index={index}
                        member={member}
                        handleInputChange={(e) => handleInputChange(e, index)}
                        handleKtmPhotoChange={(e) =>
                          handleInputChange(e, index)
                        }
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Next
                  </button>
                </form>
              )}
              {step === 3 && (
                <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="transferProof"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Transfer Proof
                    </label>
                    <input
                      type="file"
                      name="transferProof"
                      id="transferProof"
                      accept="image/*"
                      onChange={handleTransferProofChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Register for the competition
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormML;
