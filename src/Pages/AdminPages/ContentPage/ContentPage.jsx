import { X, Upload } from "lucide-react";
import { useState } from "react";

const ContentPage = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [videoImage, setVideoImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (!file) return;

    setError(null);
    setIsUploading(true);

    const fileSizeMB = file.size / (1024 * 1024);

    if (type === "banner" && !file.type.startsWith("image/")) {
      setError("Banner must be an image file!");
      setIsUploading(false);
      return;
    }

    if (type === "video" && !file.type.match(/^(image|video)\//)) {
      setError("Please upload an image or video file!");
      setIsUploading(false);
      return;
    }

    if (fileSizeMB > 5) {
      setError("Image size must be less than 5MB!");
      setIsUploading(false);
      return;
    }

    if (type === "video" && file.type.startsWith("video/") && fileSizeMB > 50) {
      setError("Video size must be less than 50MB!");
      setIsUploading(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      type === "banner" ? setBannerImage(e.target.result) : setVideoImage(e.target.result);
      setIsUploading(false);
    };
    reader.onerror = () => {
      setError("Error reading file!");
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (type) => {
    type === "banner" ? setBannerImage(null) : setVideoImage(null);
  };

  const handlePublish = () => {
    if (!bannerImage && !videoImage) {
      setError("Please upload at least one banner or video/image!");
      return;
    }
    setError(null);
    alert("Service published successfully!");
  };

  return (
    <div className="">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-medium mb-2">Upload Content</h1>
        <p className="text-xs sm:text-sm text-gray-600">Manage and upload your banners and media content.</p>
      </div>
      <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-md border border-gray-200">
        {error && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-xs sm:text-sm">
            {error}
          </div>
        )}
        {isUploading && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-xs sm:text-sm">
            Uploading file...
          </div>
        )}

        <div className="mb-6 sm:mb-8">
          <label className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
            Banner Image <span className="text-gray-400 text-xs sm:text-sm">(Max 5MB)</span>
          </label>
          <div className="relative">
            {bannerImage ? (
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 border border-gray-300 rounded-lg overflow-hidden group">
                <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
                <button
                  onClick={() => handleDelete("banner")}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={12} sm:size={16} />
                </button>
              </div>
            ) : (
              <label className="w-32 h-32 sm:w-48 sm:h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition">
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 mb-2 text-gray-400" />
                <span className="text-xs sm:text-sm">Upload banner</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "banner")}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <label className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
            Offer Image <span className="text-gray-400 text-xs sm:text-sm">(Image &lt; 5MB, Video &lt; 50MB)</span>
          </label>
          <div className="relative">
            {videoImage ? (
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 border border-gray-300 rounded-lg overflow-hidden group">
                <img src={videoImage} alt="Video or Image" className="w-full h-full object-cover" />
                <button
                  onClick={() => handleDelete("video")}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={12} sm:size={16} />
                </button>
              </div>
            ) : (
              <label className="w-32 h-32 sm:w-48 sm:h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition">
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 mb-2 text-gray-400" />
                <span className="text-xs sm:text-sm">Upload file</span>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) => handleFileChange(e, "video")}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handlePublish}
            disabled={isUploading}
            className="py-2 px-4 sm:px-6 bg-purple-200 text-black rounded-lg hover:shadow-xl text-sm sm:text-base transition-colors"
          >
            Publish Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;