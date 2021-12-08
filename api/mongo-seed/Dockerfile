FROM mongo:5.0.2

COPY init.json /init.json
CMD mongoimport --uri "mongodb://root:123456@challengedb:27017/challenge?authSource=admin" -p "123456" --collection users --drop --type json --file /init.json --jsonArray