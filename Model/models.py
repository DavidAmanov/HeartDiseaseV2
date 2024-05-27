# imports 
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report
from xgboost import XGBClassifier
import joblib

data = pd.read_csv('Data/Heart_disease_cleveland_new.csv')
#see the head of data set 
print(data.head())
# all columns: age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal,target 
# delete not valid columns: sex - define what columns are useless 
cleanData = data.drop(['sex'], axis=1) 
print(cleanData.head())

# Split data for learning, testing, validation 
train_data, temp_data = train_test_split(cleanData, test_size=0.3, random_state=42)
test_data, validation_data = train_test_split(temp_data, test_size=0.5, random_state=42)

# L1-LR model
l1_lr_model = LogisticRegression(penalty='l1', solver='liblinear')
l1_lr_model.fit(train_data.drop('target', axis=1), train_data['target'])
l1_lr_predictions = l1_lr_model.predict(test_data.drop('target', axis=1))
l1_lr_accuracy = accuracy_score(test_data['target'], l1_lr_predictions)
print("accuracy L1-LR:", l1_lr_accuracy)
print("Classification Report for L1-LR:")
print(classification_report(test_data['target'], l1_lr_predictions))
print("-------------------------------------------------------")

#K-Nearest Neighbors model
knn_model = KNeighborsClassifier()
knn_model.fit(train_data.drop('target', axis=1), train_data['target'])
knn_predictions = knn_model.predict(test_data.drop('target', axis=1))
knn_accuracy = accuracy_score(test_data['target'], knn_predictions)
print("accuracy KNN:", knn_accuracy)
print("Classification Report for KNN:")
print(classification_report(test_data['target'], knn_predictions))
print("-------------------------------------------------------")

# XGBoost model

params = {
    'objective': 'binary:logistic',
    'eval_metric': 'logloss',
    'eta': 0.1,
    'max_depth': 6,
    'min_child_weight': 1,
    'subsample': 0.8,
    'colsample_bytree': 0.8,
    'seed': 42
}
xgb_model = XGBClassifier(**params, use_label_encoder=False)
xgb_model.fit(train_data.drop('target', axis=1), train_data['target'])
xgb_predictions = xgb_model.predict(test_data.drop('target', axis=1))
xgb_accuracy = accuracy_score(test_data['target'], xgb_predictions)
print("accuracy XGB:", xgb_accuracy)
print("Classification Report for XGB:")
print(classification_report(test_data['target'], xgb_predictions))
print("-------------------------------------------------------")

# Сохранение модели L1-LR
joblib.dump(l1_lr_model, 'C:/Users/David/Desktop/dev/react-tutorial/HeartDiseaseV2/modelSave/l1_lr_model.pkl')

# Сохранение модели KNN
joblib.dump(knn_model, 'C:/Users/David/Desktop/dev/react-tutorial/HeartDiseaseV2/modelSave/knn_model.pkl')

# Сохранение модели XGBoost
joblib.dump(xgb_model, 'C:/Users/David/Desktop/dev/react-tutorial/HeartDiseaseV2/modelSave/xgb_model.pkl')
