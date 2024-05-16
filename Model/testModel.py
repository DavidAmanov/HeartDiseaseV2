import joblib
import numpy as np
import pandas as pd


model_path = 'modelsSave/knn_model.pkl'
knn = joblib.load(model_path)

feature_names = ['age', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
unseen = np.array([[3.2, 1.1, 1.5, 2.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]])
unseen_df = pd.DataFrame(unseen, columns=feature_names)
result = knn.predict(unseen_df)
print('Predicted result for observation ' + str(unseen) + ' is: ' + str(result))