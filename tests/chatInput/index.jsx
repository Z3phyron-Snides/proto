import React, { useState } from "react";

const ChatInput = ({ onSendMessage }) => {
    const [inputValue, setInputValue] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [previewType, setPreviewType] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [photo, setPhoto] = useState(null);
    const [video, setVideo] = useState(null);

    const handleSendMessage = () => {
        if (inputValue) {
            onSendMessage({ text: inputValue, type: "text" });
            setInputValue("");
        } else if (photo) {
            onSendMessage({ media: photo, type: "photo" });
            setPhoto(null);
        } else if (video) {
            onSendMessage({ media: video, type: "video" });
            setVideo(null);
        }
    };

    const handlePopup = () => {
        setShowPopup(!showPopup);
    };

    const handlePreview = type => {
        setPreviewType(type);
        setShowPreview(true);
    };

    const handleClosePreview = () => {
        setShowPreview(false);
    };

    const handlePhotoChange = e => {
        const photo = e.target.files[0];
        if (photo.size <= 5000000) {
            setPhoto(photo);
            handlePreview("photo");
        }
    };

    const handleVideoChange = e => {
        const video = e.target.files[0];
        if (video.size <= 5000000) {
            setVideo(video);
            handlePreview("video");
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button onClick={handlePopup}>+</button>
            </div>
            {showPopup && (
                <div>
                    <div>
                        <input type="file" accept="image/*" onChange={handlePhotoChange} />
                        <input type="file" accept="video/*" onChange={handleVideoChange} />
                    </div>
                </div>
            )}
            {showPreview && previewType === "photo" && (
                <div>
                    <img src={URL.createObjectURL(photo)} />
                    <button onClick={handleClosePreview}>Close</button>
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            )}
            {showPreview && previewType === "video" && (
                <div>
                    <video src={URL.createObjectURL(video)} controls />
                    <button onClick={handleClosePreview}>Close</button>
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            )}
            <button onClick={handleSendMessage}>Send</button>
        </div>
    )
}