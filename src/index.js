import './index.css'

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
