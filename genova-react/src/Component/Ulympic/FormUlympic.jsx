import React, { useState } from 'react';
import "./Ulympic.css";

const FormUlympic = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1); // state untuk mengatur langkah dalam proses pendaftaran

  const [teamName, setTeamName] = useState('');
  const [leaderIdLine, setLeaderIdLine] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  
  const [fullName, setFullName] = useState('');
  const [nim, setNim] = useState('');
  const [email, setEmail] = useState('');
  const [ktmPhoto, setKtmPhoto] = useState('');

  const [transferProof, setTransferProof] = useState('');

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
    setSelectedSport(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleNimChange = (e) => {
    setNim(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKtmPhotoChange = (e) => {
    setKtmPhoto(e.target.value);
  };

  const handleTransferProofChange = (e) => {
    setTransferProof(e.target.files[0]);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses submit form sesuai dengan kebutuhan Anda
    // Misalnya, simpan data ke database atau tampilkan informasi pendaftaran
    // Setelah selesai, atur state kembali ke awal untuk pendaftaran berikutnya
    setShowModal(false);
    setStep(1);
    setTeamName('');
    setLeaderIdLine('');
    setSelectedSport('');
    setFullName('');
    setNim('');
    setEmail('');
    setKtmPhoto('');
    setTransferProof('');
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setStep(1);
    setTeamName('');
    setLeaderIdLine('');
    setSelectedSport('');
    setFullName('');
    setNim('');
    setEmail('');
    setKtmPhoto('');
    setTransferProof('');
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Daftar Lomba
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
              <h1 className='text-white'>Form pendaftaran</h1>
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
                      <option value="badminton">Badminton</option>
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
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={fullName}
                      onChange={handleFullNameChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nim"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      NIM
                    </label>
                    <input
                      type="text"
                      name="nim"
                      id="nim"
                      value={nim}
                      onChange={handleNimChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter your NIM"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ktmPhoto"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      KTM Photo
                    </label>
                    <input
                      type="file"
                      name="ktmPhoto"
                      id="ktmPhoto"
                      accept="image/*"
                      onChange={handleKtmPhotoChange}
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

export default FormUlympic;
