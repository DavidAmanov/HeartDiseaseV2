import json
import sys
import joblib
import numpy as np



model = joblib.load('C:/Users/David/Desktop/dev/react-tutorial/HeartDiseaseV2/modelsSave/knn_model.pkl') 

data = json.loads(sys.argv[1])
data_array = np.array([[float(value) for value in data.values()]])
# data_array = {"age": 45, "cp": 2, "trestbps": 120, "chol": 240, "fbs": 0, "restecg": 1, "thalach": 150, "exang": 0, "oldpeak": 1.2, "slope": 2, "ca": 0, "thal": 3}

print(data_array)
# # Применение модели к данным для получения прогнозов
predictions = model.predict(data_array)

print(predictions)