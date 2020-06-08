import pandas as pd 

def export():
    csv = pd.read_csv('../dataset/BirthRate_Parsed.csv')
    keys = csv.keys() 
    print(keys())
export()