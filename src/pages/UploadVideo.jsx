import React, { useState } from "react";
import { FiUpload, FiX, FiImage, FiFileText } from "react-icons/fi";

function UploadVideo() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    category: "entertainment"
  });
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
    }
  };

  const handleThumbnailFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setThumbnailFile(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/')) {
        setVideoFile(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!videoFile || !formData.title) {
      alert("Please fill in all required fields");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    const uploadInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(uploadInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 500);

    setTimeout(() => {
      clearInterval(uploadInterval);
      setUploadProgress(100);
      setIsUploading(false);
      alert("Video uploaded successfully!");
      
      setFormData({
        title: "",
        description: "",
        tags: "",
        category: "entertainment"
      });
      setVideoFile(null);
      setThumbnailFile(null);
      setUploadProgress(0);
    }, 5000);
  };

  const removeVideoFile = () => {
    setVideoFile(null);
  };

  const removeThumbnailFile = () => {
    setThumbnailFile(null);
  };

  return (
    <div style={{ flex: 1, padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "#f1f5f9", fontSize: "28px", marginBottom: "30px", fontWeight: "600" }}>
        Upload Video
      </h1>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <div>
          <label style={{ color: "#f1f5f9", fontSize: "16px", fontWeight: "500", marginBottom: "10px", display: "block" }}>
            Video File *
          </label>
          <div
            className={`upload-area ${dragActive ? "drag-active" : ""}`}
            style={{
              border: dragActive ? "2px dashed #ff6b35" : "2px dashed #475569",
              borderRadius: "12px",
              padding: "40px",
              textAlign: "center",
              backgroundColor: dragActive ? "#1e293b" : "#0f172a",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => document.getElementById('video-input').click()}
          >
            <input
              id="video-input"
              type="file"
              accept="video/*"
              onChange={handleVideoFileChange}
              style={{ display: "none" }}
            />
            
            {videoFile ? (
              <div style={{ color: "#f1f5f9" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
                  <FiFileText size={24} />
                  <span>{videoFile.name}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeVideoFile();
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ef4444",
                      cursor: "pointer",
                      padding: "5px"
                    }}
                  >
                    <FiX size={20} />
                  </button>
                </div>
                <div style={{ fontSize: "14px", color: "#94a3b8" }}>
                  {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                </div>
              </div>
            ) : (
              <div>
                <FiUpload size={48} color="#94a3b8" style={{ marginBottom: "15px" }} />
                <div style={{ color: "#f1f5f9", marginBottom: "10px" }}>
                  Drag and drop your video here or click to browse
                </div>
                <div style={{ fontSize: "14px", color: "#94a3b8" }}>
                  Supported formats: MP4, WebM, OGG (Max 2GB)
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <label style={{ color: "#f1f5f9", fontSize: "16px", fontWeight: "500", marginBottom: "10px", display: "block" }}>
            Thumbnail (Optional)
          </label>
          <div
            style={{
              border: "2px dashed #475569",
              borderRadius: "12px",
              padding: "30px",
              textAlign: "center",
              backgroundColor: "#0f172a",
              cursor: "pointer"
            }}
            onClick={() => document.getElementById('thumbnail-input').click()}
          >
            <input
              id="thumbnail-input"
              type="file"
              accept="image/*"
              onChange={handleThumbnailFileChange}
              style={{ display: "none" }}
            />
            
            {thumbnailFile ? (
              <div style={{ color: "#f1f5f9" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
                  <FiImage size={24} />
                  <span>{thumbnailFile.name}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeThumbnailFile();
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ef4444",
                      cursor: "pointer",
                      padding: "5px"
                    }}
                  >
                    <FiX size={20} />
                  </button>
                </div>
                <div style={{ fontSize: "14px", color: "#94a3b8" }}>
                  {(thumbnailFile.size / (1024 * 1024)).toFixed(2)} MB
                </div>
              </div>
            ) : (
              <div>
                <FiImage size={32} color="#94a3b8" style={{ marginBottom: "10px" }} />
                <div style={{ color: "#f1f5f9", fontSize: "14px" }}>
                  Click to upload thumbnail
                </div>
                <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "5px" }}>
                  JPG, PNG, GIF (Max 10MB)
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <label style={{ color: "#f1f5f9", fontSize: "16px", fontWeight: "500", marginBottom: "10px", display: "block" }}>
            Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter video title"
            maxLength="100"
            required
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#0f172a",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#f1f5f9",
              fontSize: "16px"
            }}
          />
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "5px" }}>
            {formData.title.length}/100 characters
          </div>
        </div>

        <div>
          <label style={{ color: "#f1f5f9", fontSize: "16px", fontWeight: "500", marginBottom: "10px", display: "block" }}>
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Tell viewers about your video"
            rows="6"
            maxLength="5000"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#0f172a",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#f1f5f9",
              fontSize: "16px",
              resize: "vertical"
            }}
          />
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "5px" }}>
            {formData.description.length}/5000 characters
          </div>
        </div>

        <div>
          <label style={{ color: "#f1f5f9", fontSize: "16px", fontWeight: "500", marginBottom: "10px", display: "block" }}>
            Tags
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            placeholder="Add tags (separated by commas)"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#0f172a",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#f1f5f9",
              fontSize: "16px"
            }}
          />
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "5px" }}>
            Enter up to 15 tags, separated by commas
          </div>
        </div>

        <div>
          <label style={{ color: "#f1f5f9", fontSize: "16px", fontWeight: "500", marginBottom: "10px", display: "block" }}>
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#0f172a",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#f1f5f9",
              fontSize: "16px"
            }}
          >
            <option value="entertainment">Entertainment</option>
            <option value="education">Education</option>
            <option value="gaming">Gaming</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="business">Business</option>
          </select>
        </div>

        {isUploading && (
          <div>
            <div style={{ color: "#f1f5f9", marginBottom: "10px" }}>
              Uploading... {uploadProgress}%
            </div>
            <div style={{
              width: "100%",
              height: "8px",
              backgroundColor: "#475569",
              borderRadius: "4px",
              overflow: "hidden"
            }}>
              <div style={{
                width: `${uploadProgress}%`,
                height: "100%",
                backgroundColor: "#ff6b35",
                transition: "width 0.3s ease"
              }} />
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: "15px", justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={() => {
              setFormData({
                title: "",
                description: "",
                tags: "",
                category: "entertainment"
              });
              setVideoFile(null);
              setThumbnailFile(null);
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: "transparent",
              border: "1px solid #475569",
              borderRadius: "8px",
              color: "#f1f5f9",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
          
          <button
            type="submit"
            disabled={isUploading}
            style={{
              padding: "12px 24px",
              backgroundColor: isUploading ? "#475569" : "#ff6b35",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: isUploading ? "not-allowed" : "pointer"
            }}
          >
            {isUploading ? "Uploading..." : "Upload Video"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadVideo;
