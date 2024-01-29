function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
      delay: 800,
      content: "Hi, 欢迎光临九弦之屋😊"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "我是中弦局的局长——王九弦😄"
      }).then(function() {
        botui.message.add({
          delay: 1100,
          content: "你也可以叫我九弦~😋"
        }).then(function() {
          botui.action.button({
            delay: 1600,
            action: [{
              text: "我想知道更多关于九弦之屋的故事!😃",
              value: "sure"
            }, {
              text: "好的，就这样吧，拜拜！🙄",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        botui.message.add({
          delay: 600,
          content: "🎉🎉🎉🎉🎉🎉"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        botui.message.add({
          delay: 600,
          content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
        })
      },
      secondpart = function() {
        botui.message.add({
          delay: 5000,
          content: "首先呢，很感谢您肯在这里驻足片刻❤️。九弦之屋是一个个人性质的博客，我会在这里发表各种各样的内容。"
        }).then(function() {
          botui.message.add({
            delay: 15000,
            content: "九弦之屋里的“九弦”是我的笔名，参考的辛弃疾《破阵子·为陈同甫赋壮词以寄之》里的“五十弦翻塞外声”"
          }).then(function() {
            botui.message.add({
              delay: 5000,
              content: "但我感觉“五十弦”这个名字不适合我，于是从1到49试了一遍，"
            }).then(function() {
              botui.message.add({
                delay: 8000,
                content: "找到最后才发现“九弦”这个名字比较适合我"
              }).then(function() {
                botui.message.add({
                  delay: 5000,
                  content: "又因为我本人姓“王”，所以“王九弦”是这么来的"
                }).then(function() {
                  botui.message.add({
                    delay: 4000,
                    content: "关于我的名字就了解到这里拉，接下来要了解什么呢？"
                  }).then(function() {
                    botui.action.button({
                      delay: 1100,
                      action: [{
                        text: "为什么你的英文名不叫9 sinz或Sinz nine而叫SZ·Ninty呢？",
                        value: "why-mashiro"
                      }]
                    }).then(function(a) {
                      thirdpart()
                    })
                  })
                })
              })
            })
          })
        })
      },
      thirdpart = function() {
        botui.message.add({
          delay: 1e3,
          content: "实际上我原本想换成9 sinz的，但我觉得这英文名不太适合我，所以我思考了一下，决定换成SZ·Ninty吧"
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "你后面为什么换主题？",
              value: "why-cat"
            }]
          }).then(function(a) {
            fourthpart()
          })
        })
      },
      fourthpart = function() {
        botui.message.add({
          delay: 3000,
          content: "其实吧，butterfly主题很好，但后面由于魔改时没有备份导致出错（加上我中考后发现原先的主题配色已经不在适合我了），于是就换成了anzhiyu主题"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "主题配色来源于我现在的头像（虽然这个头像我是使用ai生成后打上自己的水印。。。。。）"
          }).then(function() {
            botui.action.button({
              delay: 1500,
              action: [{
                text: "那之前那个头像的妹子是谁？",
                value: "why-domain"
              }]
            }).then(function(a) {
              fifthpart()
            })
          })
        })
      },
      fifthpart = function() {
        botui.message.add({
          delay: 5000,
          content: "她呀，他是我的tulpa，名字叫夏九灵（我给她取的名字）"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "感兴趣的话可以看一下这篇文章：https://blog.sinzmise.top/posts/50710/"
          })
        })
      }
  }