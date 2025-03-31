import React, { useState } from "react";

export default function UploadSection() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileUpload = async () => {
    if (!file) return;
    setUploadStatus("Uploading...");

    // Dummy Cloudflare API simulation
    setTimeout(() => {
      setUploadStatus(`Uploaded: https://dummy-cloudflare.com/${file.name}`);
    }, 2000);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-bold">Upload Files</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button className="bg-blue-500 text-white p-2 rounded mt-2" onClick={handleFileUpload}>
        Upload
      </button>
      <p>{uploadStatus}</p>
    </div>
  );
}
