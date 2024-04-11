# imports 
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report
import xgboost as xgb

data = pd.read_csv('Data/Heart_disease_cleveland_new.csv')
#see the head of data set 
print(data.head())
# all columns: age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal,target 
# delete not valid columns: sex, thal, ca - define what columns are useless 
cleanData = data.drop(['sex','cp','trestbps', 'restecg', 'exang', 'slope','oldpeak' , 'thal', 'ca'], axis=1)
print(cleanData.head())

# Split data for learning, testing, validation 
train_data, temp_data = train_test_split(cleanData, test_size=0.3, random_state=42)
test_data, validation_data = train_test_split(temp_data, test_size=0.5, random_state=42)

# L1-LR model
l1_lr_model = LogisticRegression(penalty='l1', solver='liblinear')
l1_lr_model.fit(train_data.drop('target', axis=1), train_data['target'])
l1_lr_predictions = l1_lr_model.predict(test_data.drop('target', axis=1))
l1_lr_accuracy = accuracy_score(test_data['target'], l1_lr_predictions)
print("Точность модели L1-LR:", l1_lr_accuracy)
print("Отчет о классификации для L1-LR:")
print(classification_report(test_data['target'], l1_lr_predictions))
print("-------------------------------------------------------")

#K-Nearest Neighbors model
knn_model = KNeighborsClassifier()
knn_model.fit(train_data.drop('target', axis=1), train_data['target'])
knn_predictions = knn_model.predict(test_data.drop('target', axis=1))
knn_accuracy = accuracy_score(test_data['target'], knn_predictions)
print("Точность модели KNN:", knn_accuracy)
print("Отчет о классификации для KNN:")
print(classification_report(test_data['target'], knn_predictions))
print("-------------------------------------------------------")

# XGBoost model
dtrain = xgb.DMatrix(train_data.drop('target', axis=1), label=train_data['target'])
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
xgb_model = xgb.train(params, dtrain, num_boost_round=100)
dtest = xgb.DMatrix(test_data.drop('target', axis=1))
xgb_predictions = xgb_model.predict(dtest)
xgb_predictions = [1 if pred > 0.5 else 0 for pred in xgb_predictions]
xgb_accuracy = accuracy_score(test_data['target'], xgb_predictions)
print("Точность модели XGBoost:", xgb_accuracy)
print("Отчет о классификации для XGBoost:")
print(classification_report(test_data['target'], xgb_predictions))