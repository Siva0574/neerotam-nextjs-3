# Neerotam Next.js Website

This is a Next.js website project.

## Requirements
- Node.js (Recommended v18+)
- Git
- Git LFS (Required for video files)

## Clone & Run (IMPORTANT)

This project contains large `.mp4` video files tracked using **Git LFS**.

### Step 1: Install Git LFS
#### Mac
```bash
brew install git-lfs
Windows
Download from:
https://git-lfs.github.com/

Step 2: Enable Git LFS
git lfs install
Step 3: Clone the project
git clone https://github.com/Siva0574/neerotam-nextjs-3.git
cd neerotam-nextjs-3
Step 4: Download LFS video files
git lfs pull
Step 5: Install dependencies
npm install
Step 6: Run the project
npm run dev
Open in browser:
http://localhost:3000

Note
⚠️ GitHub "Download ZIP" will NOT download actual video files.
Please use git clone + git lfs pull to get full videos.


---

# ✅ Now GitHub push steps

```bash
git add README.md
git commit -m "Added README with Git LFS setup instructions"
git push
