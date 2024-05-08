import json
import sys
import joblib
import numpy as np



model = joblib.load('modelsSave/knn_model.pkl')

data = json.loads(sys.argv[1])
data_array = np.array([[float(value) for value in data.values()]])
# Применение модели к данным для получения прогнозов
predictions = model.predict(data_array)
print(json.dumps(predictions.tolist()))