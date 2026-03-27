# CrafterTube - YouTube Clone

A fully functional YouTube clone built with React and Node.js, featuring video upload, user authentication, and a modern UI.

## 🚀 Features

### Frontend (React)
- **Home Page**: Browse trending videos with infinite scroll
- **Video Player**: Full-featured video player with comments, likes, and recommendations
- **Upload System**: Drag-and-drop video upload with metadata editing
- **User Profiles**: Personal channels with uploaded videos, liked videos, and subscriptions
- **Authentication**: Secure user registration and login
- **Responsive Design**: Mobile-first approach with YouTube-like UI
- **Search & Filter**: Advanced video discovery with category filtering
- **Dark Theme**: Modern dark mode interface

### Backend (Node.js)
- **RESTful API**: Complete CRUD operations for videos and users
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **File Upload**: Multer-based video and thumbnail upload system
- **Database**: MongoDB with Mongoose ODM for data modeling
- **Security**: Rate limiting, CORS, helmet, and input validation
- **Error Handling**: Comprehensive error handling and logging

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework
- **React Router** - Client-side routing
- **React Player** - Video player component
- **React Icons** - Icon library
- **Axios** - HTTP client
- **CSS3** - Styling with custom properties

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Multer** - File upload handling
- **Bcrypt** - Password hashing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Clone and Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/crafertube-youtube-clone.git
cd crafertube-youtube-clone
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
```

4. **Environment Setup**
Create a `.env` file in the `backend` directory:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/crafertube
JWT_SECRET=your-super-secret-jwt-key
FRONTEND_URL=http://localhost:3000
```

5. **Start the application**

For development (both frontend and backend):
```bash
npm run dev
```

Or start separately:

Frontend:
```bash
npm start
```

Backend:
```bash
cd backend
npm run dev
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `POST /api/auth/subscribe/:channelId` - Subscribe to channel (protected)
- `POST /api/auth/unsubscribe/:channelId` - Unsubscribe from channel (protected)
- `GET /api/auth/subscriptions` - Get subscribed channels (protected)
- `GET /api/auth/liked-videos` - Get liked videos (protected)

### Videos
- `GET /api/videos` - Get all videos (with pagination and filtering)
- `GET /api/videos/trending` - Get trending videos
- `GET /api/videos/:id` - Get video by ID
- `POST /api/videos/upload` - Upload video (protected, multipart/form-data)
- `POST /api/videos/:id/like` - Like video (protected)
- `POST /api/videos/:id/dislike` - Dislike video (protected)
- `GET /api/videos/user/:userId` - Get user's videos
- `DELETE /api/videos/:id` - Delete video (protected)

## 📁 Project Structure

```
crafertube-youtube-clone/
├── src/                          # Frontend source
│   ├── components/               # React components
│   │   ├── VideoCard.jsx
│   │   ├── VideoGrid.jsx
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── ...
│   ├── pages/                    # Page components
│   │   ├── Home.jsx
│   │   ├── VideoDetail.jsx
│   │   ├── UploadVideo.jsx
│   │   └── Profile.jsx
│   ├── styles/                   # CSS files
│   │   ├── global.css
│   │   ├── colors.css
│   │   └── responsive.css
│   ├── assets/                   # Static assets
│   └── App.jsx                   # Main App component
├── backend/                      # Backend source
│   ├── controllers/              # Route controllers
│   │   ├── authController.js
│   │   └── videoController.js
│   ├── models/                   # Database models
│   │   ├── userModel.js
│   │   └── videoModel.js
│   ├── routes/                   # API routes
│   │   ├── authRoutes.js
│   │   └── videoRoutes.js
│   ├── middleware/               # Custom middleware
│   │   └── authMiddleware.js
│   ├── config/                   # Configuration files
│   │   └── dbConfig.js
│   ├── uploads/                  # File upload directory
│   │   ├── videos/
│   │   └── thumbnails/
│   └── server.js                 # Server entry point
├── public/                       # Public assets
├── package.json                  # Frontend dependencies
├── vercel.json                   # Vercel deployment config
└── README.md                     # This file
```

## 🎨 UI/UX Features

- **YouTube-like Interface**: Familiar layout and interactions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Theme**: Modern dark color scheme
- **Smooth Animations**: Micro-interactions and transitions
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and lazy loading

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for secure password storage
- **Rate Limiting**: Prevent API abuse
- **CORS**: Cross-origin resource sharing
- **Input Validation**: Sanitize and validate all inputs
- **Helmet**: Security headers for Express.js

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment
1. Build the frontend: `npm run build`
2. Configure production environment variables
3. Deploy backend to your preferred hosting service
4. Point your domain to the deployed application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- YouTube for the inspiration
- React and Node.js communities
- All contributors who help improve this project

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainer.

---

**Built with ❤️ by the CrafterTube Team**
