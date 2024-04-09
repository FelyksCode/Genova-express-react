import React from "react";

function FormTemplate({
  index,
  member,
  handleInputChange,
  handleKtmPhotoChange,
  isInternal,
}) {
  return isInternal ? (
    <div key={index}>
      <label
        htmlFor={`fullName${index}`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Full Name Anggota {index + 1}
      </label>
      <input
        type="text"
        name={`fullName`}
        id={`fullName${index}`}
        value={member.fullName}
        onChange={(e) => handleInputChange(e, index)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={`Enter full name ${index + 1}`}
        required
      />
      <div>
        <label
          htmlFor={`nim${index}`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          NIM Anggota {index + 1}
        </label>
        <input
          type="text"
          name={`nim`}
          id={`nim${index}`}
          value={member.nim}
          onChange={(e) => handleInputChange(e, index)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter your NIM"
          required
        />
      </div>
      <div>
        <label
          htmlFor={`email${index}`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email Anggota {index + 1}
        </label>
        <input
          type="email"
          name={`email`}
          id={`email${index}`}
          value={member.email}
          onChange={(e) => handleInputChange(e, index)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Email Student"
          required
        />
      </div>
      <div>
        <label
          htmlFor={`ktmPhoto${index}`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          KTM Photo Anggota {index + 1}
        </label>
        <input
          type="file"
          name={`ktmPhoto`}
          id={`ktmPhoto${index}`}
          accept="image/*"
          onChange={(e) => handleKtmPhotoChange(e, index)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <br />
    </div>
  ) : (
    <div key={index}>
      <label
        htmlFor={`fullName${index}`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Full Name Anggota {index + 1}
      </label>
      <input
        type="text"
        name={`fullName`}
        id={`fullName${index}`}
        value={member.fullName}
        onChange={(e) => handleInputChange(e, index)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={`Enter full name ${index + 1}`}
        required
      />
      <div>
        <label
          htmlFor={`nim${index}`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ID Line Anggota {index + 1}
        </label>
        <input
          type="text"
          name={`idLine`}
          id={`idLine${index}`}
          value={member.idLine}
          onChange={(e) => handleInputChange(e, index)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter your ID Line"
          required
        />
      </div>
      <div>
        <label
          htmlFor={`email${index}`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email Anggota {index + 1}
        </label>
        <input
          type="email"
          name={`email`}
          id={`email${index}`}
          value={member.email}
          onChange={(e) => handleInputChange(e, index)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label
          htmlFor={`kampus${index}`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nama Kampus Anggota {index + 1}
        </label>
        <input
          type="text"
          name={`kampus`}
          id={`kampus${index}`}
          value={member.kampus}
          onChange={(e) => handleInputChange(e, index)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Enter nama kampus"
          required
        />
      </div>
      <div>
        <label
          htmlFor={`ktmPhoto${index}`}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          KTM Photo Anggota {index + 1}
        </label>
        <input
          type="file"
          name={`ktmPhoto`}
          id={`ktmPhoto${index}`}
          accept="image/*"
          onChange={(e) => handleKtmPhotoChange(e, index)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <br />
    </div>
  );
}

export default FormTemplate;
