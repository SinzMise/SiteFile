#!/usr/bin/python3
OWO_NAME='蔚蓝档案'
OWO_SLUG='bluearchive'
PICTURE_COUNT=45

f=open("OwO.json","w",encoding='utf-8')
f.write('''    "%s": {
        "name": "%s",
        "type": "image",
        "container": [
'''%(OWO_NAME,OWO_SLUG))
for i in range(1,PICTURE_COUNT+1):
    f.write('''            {
                "text": "bluearchive-%02d",
                "icon": "<img src='https://files.blog.sinzmise.top/emotes/ba/bluearchive_%02d.jpg'>"
            }'''%(i,i))
    if i<PICTURE_COUNT:
        f.write(',')
    f.write('\n')
f.write('''        ]
    }''')
f.close()