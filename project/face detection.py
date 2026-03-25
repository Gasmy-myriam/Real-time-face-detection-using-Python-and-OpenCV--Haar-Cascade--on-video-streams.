import pathlib
import cv2

cascade_path = cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
clf = cv2.CascadeClassifier(str(cascade_path))

#camera = cv2.VideoCapture(0)
camera = cv2.VideoCapture(r"C:\Users\HP\OneDrive\Bureau\votre-projet\face2.mp4")

while True:
    ret, frame = camera.read()
    if not ret:
        break
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = clf.detectMultiScale(
        gray,
        scaleFactor=1.1,
        minNeighbors=5,
        minSize=(30, 30),
        flags=cv2.CASCADE_SCALE_IMAGE
    )
    for (x, y, width, height) in faces:
        cv2.rectangle(frame, (x, y), (x + width, y + height), (0, 0, 255), 2)

    cv2.imshow("Frame", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

camera.release()
cv2.destroyAllWindows()