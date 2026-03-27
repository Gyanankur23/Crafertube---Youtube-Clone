import React, { useState } from "react";
import { FiSettings, FiVideo, FiHeart, FiUsers, FiEdit2, FiCamera } from "react-icons/fi";
import VideoCard from "../components/VideoCard";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";

function Profile() {
  const [activeTab, setActiveTab] = useState("videos");
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const userProfile = {
    name: "Gyanankur Baruah",
    username: "@gyanankurbaruah",
    subscribers: "125K",
    joinedDate: "Jan 2023",
    description: "Content creator passionate about technology, coding, and creative projects. Subscribe for tutorials, reviews, and tech insights!",
    avatar: "GB",
    totalViews: "2.5M",
    totalVideos: 24
  };

  const userVideos = [
    {
      id: "1",
      title: "First CrafterTube Video - Getting Started",
      channel: "John Crafter",
      thumbnail: thumb1,
      views: "1.2M views",
      timestamp: "2 days ago",
      duration: "10:23"
    },
    {
      id: "2",
      title: "Advanced React Patterns",
      channel: "John Crafter",
      thumbnail: thumb2,
      views: "850K views",
      timestamp: "1 week ago",
      duration: "15:45"
    },
    {
      id: "3",
      title: "Building a YouTube Clone",
      channel: "John Crafter",
      thumbnail: thumb3,
      views: "2.5M views",
      timestamp: "3 days ago",
      duration: "22:10"
    }
  ];

  const likedVideos = [
    {
      id: "4",
      title: "JavaScript Fundamentals",
      channel: "CodeMaster",
      thumbnail: thumb1,
      views: "500K views",
      timestamp: "1 month ago",
      duration: "18:30"
    },
    {
      id: "5",
      title: "CSS Grid Tutorial",
      channel: "DesignPro",
      thumbnail: thumb2,
      views: "300K views",
      timestamp: "2 weeks ago",
      duration: "12:15"
    }
  ];

  const subscriptions = [
    {
      name: "CodeMaster",
      subscribers: "1.2M",
      avatar: "CM"
    },
    {
      name: "DesignPro",
      subscribers: "800K",
      avatar: "DP"
    },
    {
      name: "TechGuru",
      subscribers: "2.3M",
      avatar: "TG"
    }
  ];

  return (
    <div style={{ flex: 1, padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ 
        backgroundColor: "#1e293b", 
        borderRadius: "16px", 
        padding: "30px", 
        marginBottom: "30px",
        border: "1px solid #334155"
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}>
          <div style={{ position: "relative" }}>
            <div style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: "#ff6b35",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "48px",
              fontWeight: "bold",
              border: "4px solid #0f172a"
            }}>
              {userProfile.avatar}
            </div>
            <button
              style={{
                position: "absolute",
                bottom: "5px",
                right: "5px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#ff6b35",
                border: "2px solid #1e293b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <FiCamera size={16} color="white" />
            </button>
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <h1 style={{ color: "#f1f5f9", fontSize: "28px", fontWeight: "600", margin: 0 }}>
                {userProfile.name}
              </h1>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "transparent",
                  border: "1px solid #475569",
                  borderRadius: "20px",
                  color: "#f1f5f9",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <FiEdit2 size={14} />
                Edit Profile
              </button>
              <button style={{
                padding: "8px 16px",
                backgroundColor: "transparent",
                border: "1px solid #475569",
                borderRadius: "20px",
                color: "#f1f5f9",
                cursor: "pointer"
              }}>
                <FiSettings size={14} />
              </button>
            </div>
            
            <div style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "15px" }}>
              {userProfile.username} • {userProfile.subscribers} subscribers • Joined {userProfile.joinedDate}
            </div>
            
            <p style={{ color: "#f1f5f9", lineHeight: "1.6", marginBottom: "20px" }}>
              {userProfile.description}
            </p>
            
            <div style={{ display: "flex", gap: "30px" }}>
              <div>
                <div style={{ color: "#f1f5f9", fontSize: "20px", fontWeight: "600" }}>
                  {userProfile.totalVideos}
                </div>
                <div style={{ color: "#94a3b8", fontSize: "14px" }}>Videos</div>
              </div>
              <div>
                <div style={{ color: "#f1f5f9", fontSize: "20px", fontWeight: "600" }}>
                  {userProfile.totalViews}
                </div>
                <div style={{ color: "#94a3b8", fontSize: "14px" }}>Total Views</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: "#1e293b", 
        borderRadius: "16px", 
        padding: "20px",
        border: "1px solid #334155"
      }}>
        <div style={{ 
          display: "flex", 
          borderBottom: "1px solid #334155", 
          marginBottom: "20px"
        }}>
          <button
            onClick={() => setActiveTab("videos")}
            style={{
              padding: "15px 20px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: activeTab === "videos" ? "2px solid #ff6b35" : "none",
              color: activeTab === "videos" ? "#ff6b35" : "#94a3b8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            <FiVideo />
            Videos
          </button>
          
          <button
            onClick={() => setActiveTab("liked")}
            style={{
              padding: "15px 20px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: activeTab === "liked" ? "2px solid #ff6b35" : "none",
              color: activeTab === "liked" ? "#ff6b35" : "#94a3b8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            <FiHeart />
            Liked Videos
          </button>
          
          <button
            onClick={() => setActiveTab("subscriptions")}
            style={{
              padding: "15px 20px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: activeTab === "subscriptions" ? "2px solid #ff6b35" : "none",
              color: activeTab === "subscriptions" ? "#ff6b35" : "#94a3b8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            <FiUsers />
            Subscriptions
          </button>
        </div>

        <div>
          {activeTab === "videos" && (
            <div>
              <h3 style={{ color: "#f1f5f9", marginBottom: "20px", fontSize: "18px" }}>
                Your Videos ({userVideos.length})
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {userVideos.map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            </div>
          )}

          {activeTab === "liked" && (
            <div>
              <h3 style={{ color: "#f1f5f9", marginBottom: "20px", fontSize: "18px" }}>
                Liked Videos ({likedVideos.length})
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {likedVideos.map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
              </div>
            </div>
          )}

          {activeTab === "subscriptions" && (
            <div>
              <h3 style={{ color: "#f1f5f9", marginBottom: "20px", fontSize: "18px" }}>
                Subscribed Channels ({subscriptions.length})
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                {subscriptions.map((channel, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "15px",
                      backgroundColor: "#0f172a",
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "background-color 0.2s"
                    }}
                  >
                    <div style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "#ff6b35",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold"
                    }}>
                      {channel.avatar}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: "#f1f5f9", fontWeight: "600", marginBottom: "4px" }}>
                        {channel.name}
                      </div>
                      <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                        {channel.subscribers} subscribers
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
