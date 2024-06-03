import json
import sys
import joblib
import numpy as np
import pandas as pd
import xgboost as xgb

feature_names = ['age', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']

data = json.loads(sys.argv[1])
unseen = np.array([data])
unseen_df = pd.DataFrame(unseen, columns=feature_names)

#knn model
model_path_knn = 'modelSave/knn_model.pkl'
model_knn = joblib.load(model_path_knn) 
result_knn = model_knn.predict(unseen_df)
probabilities_knn = model_knn.predict_proba(unseen_df)

#l1 lr model
model_path_l1_lr = 'modelSave/l1_lr_model.pkl'
model_l1_lr = joblib.load(model_path_l1_lr) 
result_l1_lr = model_l1_lr.predict(unseen_df)
probabilities_l1_lr = model_l1_lr.predict_proba(unseen_df)

#xgb_model
unseen_xgb = unseen_df.astype(float)
model_path_xgb = 'modelSave/xgb_model.pkl'
model_xgb = joblib.load(model_path_xgb) 
result_xgb = model_xgb.predict(unseen_xgb)
probabilities_xgb = model_xgb.predict_proba(unseen_xgb)


predicted_json = json.dumps({
    "prediction_knn": result_knn.tolist(),
    "probabilities_knn": probabilities_knn.tolist(),
    "prediction_l1_lr": result_l1_lr.tolist(),
    "probabilities_l1_lr": probabilities_l1_lr.tolist(),
    "prediction_xgb": result_xgb.tolist(),
    "probabilities_xgb": probabilities_xgb.tolist(),
})
print(predicted_json)