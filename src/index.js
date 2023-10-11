import './index.css'

//------- panel相關 ------- 
const plusBtn = document.querySelector("#plus-btn")
const msgBtn = document.querySelector("#msg-btn")
const notificationBtn = document.querySelector("#notification-btn")
const moreBtn = document.querySelector("#more-btn")

const plusPanel = document.querySelector("#plus-panel")
const msgPanel = document.querySelector("#msg-panel")
const notificationPanel = document.querySelector("#notification-panel")
const morePanel = document.querySelector("#more-panel")

const panels = [plusPanel, msgPanel, notificationPanel, morePanel]

function openPanel(index){
    panels.forEach((p, idx)=>{
        if (index === idx) { //若每個按鈕裡的index參數等於idx,就打開對應的Panel
            p.classList.remove('hidden')
            return;
        }
        if (p.classList.contains('hidden')){ //若已經有'hidden'就什麼也不做
            return;
        }
        p.classList.add('hidden') //最後要收起來，不然點擊時會重疊
    })
}

//Panel點擊後防止因為window有加hidden而被關閉
// plusPanel.addEventListener("click", (e)=>{
//     e.stopPropagation()
//   })
// msgPanel.addEventListener("click", (e)=>{
//   e.stopPropagation()
// })
// notificationPanel.addEventListener("click", (e)=>{
//   e.stopPropagation()
// })
// morePanel.addEventListener("click", (e)=>{
//   e.stopPropagation()
// })
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//可以寫成forEach
panels.forEach(p=>{
    p.addEventListener("click", (e)=>{
        e.stopPropagation() 
    })
})

window.addEventListener("click", ()=>{
  plusPanel.classList.add("hidden")
  msgPanel.classList.add("hidden") 
  notificationPanel.classList.add("hidden") 
  morePanel.classList.add("hidden")   
})
//plus組
//按鈕點擊後移除hidden，顯示出Panel
plusBtn.addEventListener("click", (e)=>{
  e.stopPropagation() //不要向父層通知，讓外層不要有反應
  //plusPanel.classList.remove("hidden")
  openPanel(0)
})

//Panel點擊後防止因為window有加hidden而被關閉
// plusPanel.addEventListener("click", (e)=>{
//     e.stopPropagation()
//   })

//msg組
msgBtn.addEventListener("click", (e)=>{
  e.stopPropagation()
  //msgPanel.classList.remove("hidden")
  openPanel(1)
})

// msgPanel.addEventListener("click", (e)=>{
//   e.stopPropagation()
// })

//notification組
notificationBtn.addEventListener("click", (e)=>{
  e.stopPropagation()
  //notificationPanel.classList.remove("hidden")
  openPanel(2)
})

// notificationPanel.addEventListener("click", (e)=>{
//   e.stopPropagation()
// })

//more組
moreBtn.addEventListener("click", (e)=>{
  e.stopPropagation()
  //morePanel.classList.remove("hidden")
  openPanel(3)
})

// morePanel.addEventListener("click", (e)=>{
//   e.stopPropagation()
// })



//------- 左側相關 -------
//寫法一

function renderLeftItem(name, img){
    const item = `
        <div class="flex items-center justify-items-center w-full p-2 mb-1 rounded hover:bg-fb-input cursor-pointer">
            <div class="w-[32px] overflow-hidden rounded-full mr-4">
                <img src="${img}" alt="">
            </div>
            <p class="text-white text-[.9rem]">${name}</p>
        </div>`

    return item
}
const leftBlock = document.querySelector("#left-block")
function renderLeftBlock(){
    const leftArr = [
    {
        name: '布魯斯',
        img: 'https://bruce-fe-fb.web.app/image/avator.png'
    },{
        name: '活動',
        img: 'https://bruce-fe-fb.web.app/image/left/activity.svg'
    },{
        name: "天氣",
        img: "https://bruce-fe-fb.web.app/image/left/cloudy.png",
      },
      {
        name: "災害應變中心",
        img: "https://bruce-fe-fb.web.app/image/left/dynamic.svg",
      },
      {
        name: "新冠病毒資訊中心",
        img: "https://bruce-fe-fb.web.app/image/left/facemask.svg",
      },
      {
        name: "社團",
        img: "https://bruce-fe-fb.web.app/image/left/friend.svg",
      },
      {
        name: "企業管理平台",
        img: "https://bruce-fe-fb.web.app/image/left/job.png",
      },
      {
        name: "Messenger",
        img: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
      },
      {
        name: "近期廣告動態",
        img: "https://bruce-fe-fb.web.app/image/left/pay.png",
      },
      {
        name: "朋友名單",
        img: "https://bruce-fe-fb.web.app/image/left/sale.png",
      },
      {
        name: "最愛",
        img: "https://bruce-fe-fb.web.app/image/left/star.svg",
      },
      {
        name: "Marketplace",
        img: "https://bruce-fe-fb.web.app/image/left/store.svg",
      },
      {
        name: "Watch",
        img: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
      },
]
    let htmlStr = ''
    // for (let i=0; i<5; i++){
    //     htmlStr = htmlStr + renderLeftItem('布魯斯', 'https://bruce-fe-fb.web.app/image/avator.png')
    // }
    leftArr.forEach((obj)=>{
        htmlStr = htmlStr + renderLeftItem(obj.name, obj.img);
    })
    leftBlock.innerHTML = htmlStr;
}
renderLeftBlock()

//寫法二
// let data = [
//     {
//         name: "bruce",
//         url: "https://bruce-fe-fb.web.app/image/avator.png"
//     },
//     {
//         name: "mary",
//         url: "https://bruce-fe-fb.web.app/image/avator.png"
//     },
//     {
//         name: "Mike",
//         url: "https://bruce-fe-fb.web.app/image/avator.png"
//     },
// ] 

// function renderLeftItem(){
//     let htmlStr = '';
//     data.forEach(function(item, index){
//         htmlStr = htmlStr + `
//                 <div class="flex items-center justify-items-center w-full p-2 mb-1 rounded hover:bg-fb-input cursor-pointer">
//                     <div class="w-[32px] overflow-hidden rounded-full mr-4">
//                         <img src="${item.url}" alt="">
//                     </div>
//                     <p class="text-white text-[.9rem]">${item.name}</p>
//                 </div>`
//     })
//     leftBlock.innerHTML = htmlStr;
// }
// renderLeftItem();


//------- 右側相關 -------
function renderRightItem(name, img){
    const item = `
    <div class="flex items-center justify-items-center w-full py-2 px-1 rounded hover:bg-fb-input cursor-pointer">
        <div class="w-[45px]">
            <div class="relative w-[32px] cursor-pointer">
                <div class="overflow-hidden rounded-full">
                    <img src="${img}" alt="">
                </div>
                <div class="w-[8px] h-[8px] rounded-full bg-green-500 absolute bottom-0 right-0 ring-gray-900 ring"></div>
            </div>
        </div>
        <p class="text-white text-[.9rem]">${name}</p>
    </div>`

    return item
}
const rightBlock = document.querySelector("#right-block")

function renderRightBlock(){
    const rightArr = [
    {
        name: '布魯斯',
        img: 'https://bruce-fe-fb.web.app/image/avator.png'
    },{
        name: '瑪麗',
        img: 'https://bruce-fe-fb.web.app/image/left/activity.svg'
    },{
        name: "馬克",
        img: "https://bruce-fe-fb.web.app/image/left/cloudy.png",
      },
      {
        name: "詹姆斯",
        img: "https://bruce-fe-fb.web.app/image/left/dynamic.svg",
      },
      {
        name: "海倫",
        img: "https://bruce-fe-fb.web.app/image/left/facemask.svg",
      },
      {
        name: "提姆",
        img: "https://bruce-fe-fb.web.app/image/left/friend.svg",
      },
      {
        name: "費歐納",
        img: "https://bruce-fe-fb.web.app/image/left/job.png",
      },
      {
        name: "艾倫",
        img: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
      }
]
    let htmlStr = `<p class="mb-2 text-lg text-gray-400">聯絡人</p>`
    rightArr.forEach((obj)=>{
        htmlStr = htmlStr + renderRightItem(obj.name, obj.img);
    })
    rightBlock.innerHTML = htmlStr;
}
renderRightBlock()