let key=['פ','מ','ן','ו','ט','א','ר','ק','ף','ך','ל','ח','י','ע','כ','ג','ד','ש','ץ','ת','צ','מ','נ','ה','ב','ס','ז']
let words=["גאוגרפיה","אנציקלופדיה","מתמטיקה","אלגברה","גאומטריה","קומבינטוריקה"]
let f
let bool=false

function k(r,j,size){
    bool=false
    for(let i=0;i<size.length;i++){
        if(size[i]==r[j]){
            let p=document.getElementById('d'+i)
            p.innerText=size[i]
            bool=true
        } 
    }
    if(bool==false)
        f++
    document.getElementById('a'+j).disabled=true
    finish(size)
}
function start(){
    let s2=document.querySelector('p')
    s2.innerText=""
    let s=document.querySelector('section')
    s.innerHTML=""
    let p=document.querySelector('footer')
    p.innerHTML=""
    f=0
    let w=words[Math.floor(Math.random()*words.length)]
    let size=[]
    for(let i=0;i<w.length;i++){
        let d=document.createElement('div')
        d.innerText="___"
        s.appendChild(d)
        d.id='d'+i
        size[i]=w[i]
    }
    for(let i=0;i<key.length;i++){
        let a=document.createElement('button')
        a.innerText=key[i]
        p.appendChild(a)
        a.id='a'+i
        a.addEventListener('click',function(){k(key,i,size)})
    }  
}
function finish(size){
    let c=0
        for(let i=0;i<size.length;i++){
            if(document.getElementById('d'+i).innerText!="___")
                c++
        }
        if(f==5){
            let s=document.querySelector('p')
            s.innerText="נכשלת:("
            let b=document.querySelector('button')
            b.innerText="שחק שוב"
            for(let i=0;i<size.length;i++){
                if(document.getElementById('d'+i).innerText=="___"){
                   document.getElementById('d'+i).innerText=size[i]
                   document.getElementById('d'+i).style.color="red"
                }
            }
            for(let i=0;i<key.length;i++){
                    document.getElementById('a'+i).disabled=true
                }
        }
        if(c==size.length){
            let s=document.querySelector('p')
            s.innerText="כל הכבוד!!!"
            let b=document.querySelector('button')
            b.innerText="שחק שוב"
            for(let i=0;i<key.length;i++){
                    document.getElementById('a'+i).disabled=true
                }
        }
    }

