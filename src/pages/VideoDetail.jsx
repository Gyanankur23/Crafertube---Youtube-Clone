import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt } from "react-icons/ai";

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videos = [
      {
        id: "1",
        title: "First CrafterTube Video - Getting Started",
        channel: "CrafterChannel",
        views: "1.2M",
        timestamp: "2 days ago",
        duration: "10:23",
        description: "Welcome to CrafterTube! This is our first video where we introduce the platform and show you how to get started. In this tutorial, we'll cover:\n\n• Creating your account\n• Setting up your channel\n• Uploading your first video\n• Basic editing features\n• Community guidelines\n\nMake sure to like and subscribe for more content!",
        videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
        likes: "45K",
        dislikes: "1.2K",
        subscribers: "125K"
      },
      {
        id: "2",
        title: "Awesome Tutorial - Advanced Techniques",
        channel: "LearnWithMe",
        views: "850K",
        timestamp: "1 week ago",
        duration: "15:45",
        description: "In this comprehensive tutorial, we dive deep into advanced techniques that will take your skills to the next level. We cover everything from basic concepts to expert-level strategies.\n\nTopics covered:\n• Advanced fundamentals\n• Professional techniques\n• Best practices\n• Common mistakes to avoid\n• Tips from industry experts",
        videoUrl: "https://www.youtube.com/embed/wnHW6o8WMas",
        likes: "32K",
        dislikes: "890",
        subscribers: "89K"
      },
      {
        id: "3",
        title: "React Basics - Complete Beginner's Guide",
        channel: "DevCrafter",
        views: "2.5M",
        timestamp: "3 days ago",
        duration: "22:10",
        description: "Learn React from scratch! This complete beginner's guide covers everything you need to know to start building modern web applications with React.\n\nWhat you'll learn:\n• React fundamentals\n• Components and props\n• State management\n• Hooks (useState, useEffect)\n• Building your first app\n• Deployment strategies",
        videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
        likes: "89K",
        dislikes: "2.1K",
        subscribers: "340K"
      },
      {
        id: "4",
        title: "JavaScript Advanced Concepts",
        channel: "CodeMaster",
        views: "500K",
        timestamp: "5 days ago",
        duration: "18:30",
        description: "Advanced JavaScript concepts including closures, prototypes, and async programming.",
        videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
        likes: "15K",
        dislikes: "450",
        subscribers: "125K"
      },
      {
        id: "5",
        title: "CSS Grid Layout Tutorial",
        channel: "DesignPro",
        views: "300K",
        timestamp: "2 weeks ago",
        duration: "12:15",
        description: "Master CSS Grid layout with practical examples and responsive design techniques.",
        videoUrl: "https://www.youtube.com/embed/txEw49Xbezo",
        likes: "12K",
        dislikes: "320",
        subscribers: "95K"
      },
      {
        id: "6",
        title: "Node.js Backend Development",
        channel: "BackendGuru",
        views: "750K",
        timestamp: "1 month ago",
        duration: "25:45",
        description: "Complete guide to building backend applications with Node.js and Express.",
        videoUrl: "https://www.youtube.com/embed/Oe421IPeIwI",
        likes: "28K",
        dislikes: "780",
        subscribers: "180K"
      },
      {
        id: "7",
        title: "MongoDB Database Design",
        channel: "DataExpert",
        views: "420K",
        timestamp: "3 weeks ago",
        duration: "20:10",
        description: "Learn MongoDB database design patterns and best practices for scalable applications.",
        videoUrl: "https://www.youtube.com/embed/ofme2o29ngU",
        likes: "18K",
        dislikes: "520",
        subscribers: "140K"
      },
      {
        id: "8",
        title: "React Hooks Deep Dive",
        channel: "ReactNinja",
        views: "1.8M",
        timestamp: "4 days ago",
        duration: "35:20",
        description: "Deep dive into React Hooks including useState, useEffect, useContext, and custom hooks.",
        videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
        likes: "67K",
        dislikes: "1.8K",
        subscribers: "420K"
      },
      {
        id: "9",
        title: "Web Performance Optimization",
        channel: "SpeedMaster",
        views: "650K",
        timestamp: "1 week ago",
        duration: "28:15",
        description: "Optimize web performance with techniques like lazy loading, code splitting, and caching.",
        videoUrl: "https://www.youtube.com/embed/cHggPvXe67I",
        likes: "24K",
        dislikes: "690",
        subscribers: "195K"
      },
      {
        id: "10",
        title: "TypeScript Fundamentals",
        channel: "TypeScriptPro",
        views: "920K",
        timestamp: "6 days ago",
        duration: "30:45",
        description: "Complete TypeScript fundamentals including types, interfaces, generics, and advanced features.",
        videoUrl: "https://www.youtube.com/embed/BwuLxPH8IDs",
        likes: "35K",
        dislikes: "980",
        subscribers: "280K"
      },
      {
        id: "11",
        title: "Docker Containerization",
        channel: "DevOpsWizard",
        views: "380K",
        timestamp: "2 weeks ago",
        duration: "22:30",
        description: "Learn Docker containerization from basics to advanced deployment strategies.",
        videoUrl: "https://www.youtube.com/embed/3c-iBn71dDE",
        likes: "16K",
        dislikes: "440",
        subscribers: "150K"
      },
      {
        id: "12",
        title: "GraphQL API Design",
        channel: "APIMaster",
        views: "560K",
        timestamp: "10 days ago",
        duration: "26:40",
        description: "Design and implement GraphQL APIs with best practices and optimization techniques.",
        videoUrl: "https://www.youtube.com/embed/MBazJ2aTg6w",
        likes: "22K",
        dislikes: "620",
        subscribers: "210K"
      },
      {
        id: "13",
        title: "Vue.js vs React Comparison",
        channel: "FrameworkFighter",
        views: "1.1M",
        timestamp: "3 days ago",
        duration: "18:55",
        description: "Comprehensive comparison between Vue.js and React frameworks with pros and cons.",
        videoUrl: "https://www.youtube.com/embed/Ujp-nPS2QOQ",
        likes: "42K",
        dislikes: "1.1K",
        subscribers: "320K"
      },
      {
        id: "14",
        title: "Python Web Development",
        channel: "PythonPro",
        views: "780K",
        timestamp: "1 week ago",
        duration: "32:20",
        description: "Build web applications with Python using Flask and Django frameworks.",
        videoUrl: "https://www.youtube.com/embed/xvFZjo5PkG0",
        likes: "31K",
        dislikes: "850",
        subscribers: "245K"
      },
      {
        id: "15",
        title: "AWS Cloud Services",
        channel: "CloudExpert",
        views: "890K",
        timestamp: "5 days ago",
        duration: "40:15",
        description: "Master AWS cloud services including EC2, S3, Lambda, and deployment strategies.",
        videoUrl: "https://www.youtube.com/embed/a9__D53Wsus",
        likes: "38K",
        dislikes: "1.0K",
        subscribers: "290K"
      },
      {
        id: "16",
        title: "Machine Learning Basics",
        channel: "MLGenius",
        views: "2.2M",
        timestamp: "2 weeks ago",
        duration: "45:30",
        description: "Introduction to machine learning concepts, algorithms, and practical implementations.",
        videoUrl: "https://www.youtube.com/embed/ukzFI9rgwfU",
        likes: "85K",
        dislikes: "2.2K",
        subscribers: "520K"
      },
      {
        id: "17",
        title: "Git Advanced Techniques",
        channel: "GitMaster",
        views: "440K",
        timestamp: "4 days ago",
        duration: "24:10",
        description: "Advanced Git techniques including branching strategies, rebasing, and conflict resolution.",
        videoUrl: "https://www.youtube.com/embed/GOiI74K9BrM",
        likes: "19K",
        dislikes: "530",
        subscribers: "175K"
      },
      {
        id: "18",
        title: "CSS Animations Tutorial",
        channel: "AnimationPro",
        views: "670K",
        timestamp: "1 week ago",
        duration: "19:25",
        description: "Create stunning CSS animations with keyframes, transitions, and performance optimization.",
        videoUrl: "https://www.youtube.com/embed/L_gDCrKgJLE",
        likes: "26K",
        dislikes: "720",
        subscribers: "220K"
      },
      {
        id: "19",
        title: "REST API Best Practices",
        channel: "BackendPro",
        views: "520K",
        timestamp: "6 days ago",
        duration: "27:50",
        description: "Learn REST API best practices including design patterns, security, and documentation.",
        videoUrl: "https://www.youtube.com/embed/Q-Bpqy9gqnM",
        likes: "21K",
        dislikes: "590",
        subscribers: "195K"
      },
      {
        id: "20",
        title: "Mobile App Development",
        channel: "MobileDev",
        views: "1.5M",
        timestamp: "2 weeks ago",
        duration: "38:40",
        description: "Build mobile applications with React Native and Flutter for iOS and Android.",
        videoUrl: "https://www.youtube.com/embed/mkEmsaTjhQc",
        likes: "58K",
        dislikes: "1.5K",
        subscribers: "380K"
      }
    ];

    const foundVideo = videos.find(v => v.id === id);
    setVideo(foundVideo);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div style={{ flex: 1, padding: "20px", textAlign: "center" }}>
        <div>Loading video...</div>
      </div>
    );
  }

  if (!video) {
    return (
      <div style={{ flex: 1, padding: "20px", textAlign: "center" }}>
        <h2>Video not found</h2>
        <p>The video you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, padding: "20px", display: "flex", gap: "20px" }}>
      <div style={{ flex: 1 }}>
        <div style={{ backgroundColor: "#000", borderRadius: "12px", overflow: "hidden", marginBottom: "20px" }}>
          <ReactPlayer
            url={video.videoUrl}
            width="100%"
            height="500px"
            controls
            playing
          />
        </div>
        
        <div style={{ marginBottom: "20px" }}>
          <h1 style={{ color: "#f1f5f9", fontSize: "20px", marginBottom: "10px", fontWeight: "600" }}>
            {video.title}
          </h1>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px" }}>
            <div style={{ color: "#94a3b8", fontSize: "14px" }}>
              {video.views} views • {video.timestamp}
            </div>
            
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <button style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "5px", 
                background: "transparent", 
                border: "1px solid #475569", 
                padding: "8px 12px", 
                borderRadius: "18px", 
                color: "#f1f5f9", 
                cursor: "pointer"
              }}>
                <AiOutlineLike size={18} />
                <span>{video.likes}</span>
              </button>
              
              <button style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "5px", 
                background: "transparent", 
                border: "1px solid #475569", 
                padding: "8px 12px", 
                borderRadius: "18px", 
                color: "#f1f5f9", 
                cursor: "pointer"
              }}>
                <AiOutlineDislike size={18} />
                <span>{video.dislikes}</span>
              </button>
              
              <button style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "5px", 
                background: "transparent", 
                border: "1px solid #475569", 
                padding: "8px 12px", 
                borderRadius: "18px", 
                color: "#f1f5f9", 
                cursor: "pointer"
              }}>
                <AiOutlineShareAlt size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
          
          <div style={{ 
            backgroundColor: "#1e293b", 
            padding: "15px", 
            borderRadius: "12px",
            borderTop: "1px solid #334155"
          }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <div style={{ 
                width: "40px", 
                height: "40px", 
                borderRadius: "50%", 
                backgroundColor: "#ff6b35", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "white", 
                fontWeight: "bold",
                marginRight: "12px"
              }}>
                {video.channel[0]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#f1f5f9", fontWeight: "600", fontSize: "16px" }}>
                  {video.channel}
                </div>
                <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                  {video.subscribers} subscribers
                </div>
              </div>
              <button style={{
                backgroundColor: "#ff6b35",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "18px",
                fontWeight: "600",
                cursor: "pointer"
              }}>
                Subscribe
              </button>
            </div>
            
            <div style={{ 
              color: "#f1f5f9", 
              lineHeight: "1.6", 
              whiteSpace: "pre-wrap",
              fontSize: "14px"
            }}>
              {video.description}
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ width: "300px" }}>
        <h3 style={{ color: "#f1f5f9", marginBottom: "15px", fontSize: "16px" }}>Related Videos</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
            <img 
              src="/src/assets/thumb2.jpg" 
              alt="Related video" 
              style={{ width: "120px", height: "68px", borderRadius: "8px", objectFit: "cover" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ color: "#f1f5f9", fontSize: "13px", fontWeight: "600", marginBottom: "5px" }}>
                Related Video Title
              </div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>
                Channel Name
              </div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>
                500K views • 1 week ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
