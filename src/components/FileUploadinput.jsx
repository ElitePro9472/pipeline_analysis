import React from "react";

const FileUploadInput = () => {
    return (
        <div className="mt-4 flex justify-center rounded-lg border-gray-900/25 px-6 py-20 bg-[#f1f0ef]">
            <div className="text-center">
                <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                        <div className='bg-primary text-white font-semibold text-3xl px-9 py-4 rounded-xl'>Upload a XLSX or CSV</div>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default FileUploadInput;