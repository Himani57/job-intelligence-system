# Job Intelligence

An AI-powered job matching platform that analyzes resumes and recommends relevant jobs using semantic search and vector embeddings.

## Features

* Secure authentication using JWT
* Resume upload and text extraction
* AI-powered resume analysis
* Vector embeddings using Google Generative AI
* Semantic job matching with Pinecone
* Personalized job recommendations
* Browse available jobs
* Pagination for job listings
* Modern responsive UI

## Tech Stack

**Frontend:** React, Tailwind CSS, Axios

**Backend:** Node.js, Express.js, MongoDB

**AI & Vector Search:** Google Generative AI, LangChain, Pinecone

**Other:** JWT, Multer, ImageKit

## How It Works


Upload Resume
     ↓
Extract Resume Text
     ↓
Generate AI Embeddings
     ↓
Store & Search Vectors
     ↓
Find Similar Jobs
     ↓
Get Personalized Recommendations

## Getting Started

bash
git clone https://github.com/Himani57/job-intelligence-system.git
cd job-intelligence-system

Install dependencies:

bash
npm install


Create environment variables for:

env
MONGODB_URI=
JWT_SECRET=
GOOGLE_API_KEY=
PINECONE_API_KEY=
IMAGEKIT_PRIVATE_KEY=


## Future Improvements

* Job filters and sorting
* Save jobs
* Application tracking
* Skill gap analysis
* Automated job updates

## Author

**Himani Garkoti**

