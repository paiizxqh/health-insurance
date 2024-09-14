from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # เปิดใช้งาน CORS

# โหลดโมเดล
model = joblib.load('final_poly_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # รับ input
    age = data['age']
    sex = data['sex']
    bmi = data['bmi']
    children = data['children']
    smoker = data['smoker']
    region = data['region']

    # เตรียมข้อมูลสำหรับโมเดล
    input_data = pd.DataFrame({
        'age': [age],
        'sex': [sex],
        'bmi' : [bmi], 
        'children': [children], 
        'smoker' : [smoker], 
        'region' : [region]
    })

    # ทำนายเบี้ยประกัน
    new_data_processed = model.named_steps['preprocessor'].transform(input_data)
    new_data_poly = model.named_steps['poly'].transform(new_data_processed)
    predicted_charges = model.named_steps['model'].predict(new_data_poly)

    
    return jsonify({'insurance_charge': predicted_charges[0]})

if __name__ == '__main__':
    app.run(debug=True)