
# 🎥 Real-Time Face Detection using Python & OpenCV (Haar Cascade)

## 📌 Overview

This project implements a **real-time face detection system** using **Python** and **OpenCV**. It captures video from a webcam or video file and detects human faces frame by frame using a **pre-trained Haar Cascade classifier**.

The system is lightweight, fast, and suitable for beginners exploring **computer vision**.

---

## 🚀 Features

* 📷 Real-time face detection via webcam
* 🎞️ Supports video file input (`.mp4`)
* ⚡ Fast processing using Haar Cascade classifier
* 🧠 Simple and easy-to-understand implementation
* 🟦 Draws bounding boxes around detected faces

---

## 🛠️ Technologies Used

* Python
* OpenCV (`cv2`)
* NumPy

---

## 📂 Project Structure

```
├── face detection.py      # Main script for face detection
├── face1.mp4              # Sample video
├── face2.mp4              # Sample video
├── faces.mp4              # Sample video
├── public/                # Frontend assets (if used)
├── src/                   # Source files (if used)
├── .gitignore
├── package.json
├── tsconfig.json
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Gasmy-myriam/Real-time-face-detection-using-Python-and-OpenCV--Haar-Cascade--on-video-streams.git
cd Real-time-face-detection-using-Python-and-OpenCV--Haar-Cascade--on-video-streams
```

### 2. Create virtual environment (recommended)

```bash
python -m venv venv
venv\Scripts\activate   # Windows
```

### 3. Install dependencies

```bash
pip install opencv-python numpy
```

---

## ▶️ Usage

### Run with Webcam

```bash
python "face detection.py"
```

### Run with Video File

Modify the script:

```python
cap = cv2.VideoCapture("faces.mp4")
```

---

## 🧠 How It Works

* Converts each frame to **grayscale**
* Uses **Haar Cascade Classifier** to detect faces
* Draws rectangles around detected faces
* Displays the processed video in real time

---

## 📸 Output Example

* Faces are detected and highlighted with **blue rectangles**
* Runs continuously until you press `q` to exit

---

## 🔮 Future Improvements

* Face recognition (not just detection)
* Integration with AI models (e.g., Deep Learning)
* Emotion detection
* GUI interface
* Performance optimization using GPU

---

## 👩‍💻 Author

**Gasmy Meriem**
GitHub: [https://github.com/Gasmy-myriam](https://github.com/Gasmy-myriam)

---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 📢 Share it


