import json
import sys
import joblib
import numpy as np
import pandas as pd

feature_names = ['age', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
model_path_knn = 'modelSave/knn_model.pkl'
model_knn = joblib.load(model_path_knn) 

data = json.loads(sys.argv[1])
unseen = np.array([data])
unseen_df = pd.DataFrame(unseen, columns=feature_names)

result = model_knn.predict(unseen_df)
predicted_json = json.dumps(result.tolist())
print(predicted_json)