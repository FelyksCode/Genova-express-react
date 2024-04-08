import React from "react";

function FormTemplate2({
  index,
  member,
  handleInputChange,
  handleKtmPhotoChange,
}) {
  return (
    <div key={index}>
      <label
        htmlFor={`fullName${index}`}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        Full Name {index + 1}
      </label>
      <input
        type="text"
        name={`fullName`}
        id={`fullName${index}`}
        value={member.fullName}
        onChange={(e) => handleInputChange(e, index)}
        className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={`Enter full name ${index + 1}`}
        required
      />
      <div>
        <label
          htmlFor={`nim${index}`}
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          NIM {index + 1}
        </label>
        <input
          type="text"
          name={`nim`}
          id={`nim${index}`}
          value={member.nim}
          onChange={(e) => handleInputChange(e, index)}
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter your NIM"
          required
        />
      </div>
      <div>
        <label
          htmlFor={`username${index}`}
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Username {index + 1}
        </label>
        <input
          type="text"
          name={`username`}
          id={`username${index}`}
          value={member.username}
          onChange={(e) => handleInputChange(e, index)}
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter your username"
          required
        />
      </div>
      <div>
        <label
          htmlFor={`email${index}`}
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Email {index + 1}
        </label>
        <input
          type="email"
          name={`email`}
          id={`email${index}`}
          value={member.email}
          onChange={(e) => handleInputChange(e, index)}
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Email Student"
          required
        />
      </div>
      <div>
        <label
          htmlFor={`ktmPhoto${index}`}
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          KTM Photo {index + 1}
        </label>
        <input
          type="file"
          name={`ktmPhoto`}
          id={`ktmPhoto${index}`}
          accept="image/*"
          onChange={(e) => handleKtmPhotoChange(e, index)}
          className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <br />
    </div>
  );
}

export default FormTemplate2;
