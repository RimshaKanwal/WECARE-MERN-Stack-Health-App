import json
import pickle
import requests
import os
import sys

name = sys.argv[1]
# days = sys.argv[2]
disease = sys.argv[2]
dayDifference = sys.argv[3]
endingDay = sys.argv[4]
hour = sys.argv[5]
pm25 = []
graph = []
key = '44792ca93a37456ba2680123201205'
cardhour = []
time = []


def call(location, noDays, gap):
    url = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key='+key
    final_url = url+"&q="+location+"&format=json&num_of_days="+noDays+"&tp="+gap
    results = requests.get(final_url)
    return results.text


# # for predicting air pollution on which preecautions will be displayed
# data = call(name, days, '3')
# json_parsed = json.loads(data)
# filename = os.path.join(os.getcwd(), 'python\Regressor_model.sav')
# city = json_parsed['data']['request'][0]
# load_lr_model = pickle.load(open(filename, 'rb'))
# for x in json_parsed['data']['weather']:
#     for y in x['hourly']:
#         x = [[y['tempC'], y['windspeedKmph'], y['winddirDegree'], y['DewPointC']]]
#         extratree_pred = load_lr_model.predict(x)
#         pm25.append(extratree_pred)
#         cardhour.append(y['time'])


# # for predicting air pollution on which graph will be displayed
# data = call(name, days, '1')
# json_parsed = json.loads(data)

# filename = os.path.join(os.getcwd(), 'python\Regressor_model.sav')

# load_lr_model = pickle.load(open(filename, 'rb'))
# for x in json_parsed['data']['weather']:
#     for y in x['hourly']:
#         x = [[y['tempC'], y['windspeedKmph'], y['winddirDegree'], y['DewPointC']]]
#         extratree_pred = load_lr_model.predict(x)
#         graph.append(extratree_pred)
#         time.append(y['time'])


# for predicting based on calender


# for predicting air pollution on which preecautions will be displayed
testpm25 = []
data = call(name, '14', '3')
json_parsed = json.loads(data)
filename = os.path.join(os.getcwd(), 'python\Regressor_model.sav')
city = json_parsed['data']['request'][0]
load_lr_model = pickle.load(open(filename, 'rb'))
for x in json_parsed['data']['weather']:
    for y in x['hourly']:
        x = [[y['tempC'], y['windspeedKmph'], y['winddirDegree'], y['DewPointC']]]
        extratree_pred = load_lr_model.predict(x)
        testpm25.append(extratree_pred)
        cardhour.append(y['time'])
finalcardhour = []
finaltest = []
start = int(dayDifference)*8
total = start+int(endingDay)*8
for i in range(start, total):
    finaltest.append(testpm25[i])
    finalcardhour.append(cardhour[i])


# for predicting air pollution on which graph will be displayed
data = call(name, '14', '1')
json_parsed = json.loads(data)
filename = os.path.join(os.getcwd(), 'python\Regressor_model.sav')
testinput1 = ''
load_lr_model = pickle.load(open(filename, 'rb'))
for x in json_parsed['data']['weather']:
    for y in x['hourly']:
        x = [[y['tempC'], y['windspeedKmph'], y['winddirDegree'], y['DewPointC']]]
        extratree_pred = load_lr_model.predict(x)
        graph.append(extratree_pred)
        time.append(y['time'])


finalgraph = []
finaltime = []
start1 = int(dayDifference)*24
total1 = (start1+int(endingDay)*24)
for i in range(start1, total1):
    finalgraph.append(graph[i])
    finaltime.append(time[i])

data = call(name, '1', '1')


mapCurrent = json_parsed['data']['current_condition']

map_temp = mapCurrent[0]['temp_C']
map_speed = mapCurrent[0]['windspeedKmph']
map_winddir = mapCurrent[0]['winddirDegree']
map_dewpoint = 3
json_parsed_map = json.loads(data)
check = "false"
for x in json_parsed_map['data']['weather']:
    for y in x['hourly']:
        if(y['time'] == hour):
            check = "true"
            map_dewpoint = y['DewPointC']
preinput = [[map_temp, map_speed, map_winddir, map_dewpoint]]

predmap = load_lr_model.predict(preinput)

print(finaltest)
# print(graph)
print(finalgraph)
# print(time)
print(finaltime)
print(city['query'])
# print(cardhour)
print(finalcardhour)
print(predmap)
print(check)


# print(x)
pm25 = []
graph = []
cardhour = []
time = []
finaltime = []
finalgraph = []
finalcardhour = []
