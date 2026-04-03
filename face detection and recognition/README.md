# 🎯 Face Detection & Recognition Web App

A simple Face Detection and Recognition system using **Flask** and **OpenCV**.
This project captures face data, trains a model, and performs real-time recognition through a web interface.

---

## 🚀 Features

* 📸 Capture face dataset using webcam
* 🧠 Train model using LBPH algorithm
* 🔍 Real-time face detection
* 👤 Face recognition with names
* 🌐 Live webcam streaming in browser
* ❌ No dlib required
* ❌ No virtual environment required

---

## 🛠️ Technologies Used

* Python
* OpenCV
* Flask
* NumPy
* Pillow

---

## 📁 Project Structure

```
face_recognition_web/
│
├── app.py
├── dataset_creator.py
├── trainer.py
│
├── dataset/
│   └── (captured images)
│
├── trainer/
│   ├── trainer.yml
│   └── labels.json
│
├── templates/
│   └── index.html
│
├── static/
│   └── style.css
```

---

## ⚙️ Installation

Install required libraries:

```
pip install flask
pip install opencv-python
pip install opencv-contrib-python
pip install numpy
pip install pillow
```

---

## ▶️ How to Run

### 1️⃣ Capture Dataset

```
python dataset_creator.py
```

* Enter your name
* 30 images will be captured automatically

---

### 2️⃣ Train Model

```
python trainer.py
```

* Creates:

  * `trainer.yml`
  * `labels.json`

---

### 3️⃣ Run Web App

```
python app.py
```

Open browser:

```
http://127.0.0.1:5000
```

---

## 🧠 Working

1. Capture face images → stored in `dataset/`
2. Train model → creates `trainer.yml`
3. Run web app → detects & recognizes faces

---

## 📌 Dataset Format

```
User.<name>.<count>.jpg
```

Example:

```
User.tanisha.1.jpg
User.tanisha.2.jpg
```

---

## ⚠️ Common Errors

* **trainer.yml not found** → Run `trainer.py`
* **Camera not working** → Try `VideoCapture(1)`
* **No face detected** → Improve lighting

---

## 🔥 Future Improvements

* Attendance system
* Better UI
* Login system
* Cloud deployment

---

## 👩‍💻 Author

Tanisha Chejara

---

## 📜 Note

This project is for educational purposes.
