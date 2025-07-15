#!/usr/bin/python3
OWO_NAME='蔚蓝档案'
OWO_SLUG='bluearchive_'
PICTURE_COUNT=45

f=open("info.json","w",encoding='utf-8')
f.write('''{
  "name": "%s",
  "prefix": "%s",
  "type": "jpg",
  "icon": "01",
  "items": ['''%(OWO_NAME,OWO_SLUG))
for i in range(1,PICTURE_COUNT+1):
  f.write('''"%02d"'''%(i))
  if i<PICTURE_COUNT:
    f.write(',')
f.write(''']
}''')
f.close()