    let scrollTop=window.pageYOffset;
document.querySelector(".ham").addEventListener("click",()=>{ let bla=window.pageYOffset;
    if(document.querySelector(".ham").classList.contains("closed")){
    document.querySelector("#div1").classList.remove("backcrossup")
    document.querySelector("#div2").classList.remove("backcrossdown")
    document.querySelector("#div1").classList.remove("new1")
    document.querySelector("#div2").classList.remove("new2")
    document.querySelector("#div1").classList.add("crossup")
    document.querySelector("#div2").classList.add("crossdown")
    document.querySelector(".ham").classList.remove("closed")
    document.querySelector(".pangram").classList.add("text")
    document.querySelector(".drop_menu-2").classList.remove("send_up")
    document.querySelector(".pangram").classList.remove("text_change")
    document.querySelector(".ham").classList.add("opened")
    document.querySelector(".drop_menu-2").classList.add("send_down")
    document.querySelectorAll('.hamdiv').forEach((elem)=>{
        elem.style.backgroundColor="black"
    })
    setTimeout(()=>{
        document.querySelector(".drop_menu-1").classList.add("send_down")
        document.querySelector(".drop_menu-1").classList.remove("send_up")
        document.querySelector(".drop_menu-1").classList.remove("first_time")
    },200)
    if((bla>830)&&(bla<4690)){
        document.querySelector("nav").style.backgroundColor="white"
        console.log("1")
    }
    document.querySelector(".drop_menu-2").classList.remove("first_time")
}
    else if(document.querySelector(".ham").classList.contains("opened")){
    document.querySelector("#div1").classList.add("backcrossup")
    document.querySelector("#div2").classList.add("backcrossdown")
    document.querySelectorAll('.hamdiv').forEach((elem)=>{
        elem.style.backgroundColor="white"})
    document.querySelector("#div1").classList.remove("crossup")
    document.querySelector("#div2").classList.remove("crossdown")
    setTimeout(()=>{
        document.querySelector(".drop_menu-2").classList.remove("send_down")
        document.querySelector(".drop_menu-2").classList.add("send_up")
    },200)
    document.querySelector(".ham").classList.remove("opened")
    document.querySelector(".ham").classList.add("closed")
    document.querySelector(".pangram").classList.remove("text")
    document.querySelector(".pangram").classList.add("text_change")
    document.querySelector(".drop_menu-1").classList.remove("send_down")
    document.querySelector(".drop_menu-1").classList.add("send_up")
    if((bla>830)&&(bla<4690)){
        document.querySelector("nav").style.backgroundColor="#1c1c1c"
        console.log("2")
    }
    }
})
function parallax(){
    let scrollTop=window.pageYOffset;
    console.log(scrollTop)
    let h = window.innerHeight;
    // console.log(`h=${h}`)
    let value = 1-(scrollTop/(1.0*h));
    let run_distance=scrollTop-2200;
    let actual_value;
    if (run_distance<0) actual_value=-run_distance
    else actual_value=run_distance
    // document.querySelector(".line1").style.top='calc(7vh - '+ (scrollTop)*0.5 + 'px)';
    // document.querySelector(".aside1").style.top='calc(37vh - '+ (scrollTop)*10.5 + 'px)';
    document.querySelector(".line1").style.transform="translateY(-"+scrollTop*0.3+"px)";
    document.querySelector(".aside1").style.transform="translateY(-"+scrollTop*0.4+"px)";
    document.querySelector(".aside2").style.transform="translateY(-"+scrollTop*0.5+"px)";
    document.querySelector(".frag").style.transform="translateY(-"+scrollTop*0.3+"px)";
    document.querySelector(".te").style.transform="translateY(-"+scrollTop*0.6+"px)";
    document.querySelector(".tline1").style.transform="translateY(-"+scrollTop*0.3+"px)";
    document.querySelector(".tside1").style.transform="translateY(-"+scrollTop*0.4+"px)";
    document.querySelector(".tside2").style.transform="translateY(-"+scrollTop*0.45+"px)";
    document.querySelector(".tline3").style.transform="translateY(-"+scrollTop*0.6+"px)";
    document.querySelector(".abs").style.opacity="2"
    document.querySelector('.g2').style.transform = `translateY(calc(${(1130 - scrollTop) * 0.3}px + 24%))`;
    document.querySelector('.g3').style.transform = `translateY(calc(${(1130 - scrollTop) * 0.15}px + 12%))`;
    document.querySelector('.g4').style.transform = `translateY(calc(${(1130 - scrollTop) * 0.25}px + 20%))`;
    document.querySelector('.de1').style.transform = `translateY(calc(${(3806 - scrollTop) * 0.075}px))`;
    document.querySelector('.de2').style.transform = `translateY(calc(${(3806 - scrollTop) * 0.075}px))`;
    document.querySelector('.de3').style.transform = `translateY(calc(${(3806 - scrollTop) * 0.075}px))`;
    
    // document.querySelector("#h5").style.transform=`rotate(${actual_value*0.2}deg)`
    // console.log("yo")
    // console.log(`actual=${actual_value}`)
    // setTimeout(document.querySelector("#h5").style.transform=`rotate(${actual_value*(-0.2)}deg)`,500)

    // document.querySelector(".g5").style.transform=`rotate(0)`
    if (scrollTop<1.0*h){
        document.querySelectorAll(".imgfixed").forEach((elem)=>elem.style.opacity=`${value}`)
        // console.log(`value=${value}`)
        // console.log("done")
        document.querySelectorAll(".imgfixed").forEach((elem)=>elem.style.position="fixed")
    }
    else {document.querySelectorAll(".imgfixed").forEach((elem)=>elem.style.opacity="0")
    document.querySelectorAll(".imgfixed").forEach((elem)=>elem.style.position="absolute")
}
document.querySelector('.pizza24').style.transform = `translateY(calc(${(-3700 + scrollTop) * 0.09}px - 10%)`;

document.querySelector('.muaf').style.transform = `translateY(calc(${(-4761 + scrollTop) * 0.07}px - 10%)`;
if (document.querySelector(".ham").classList.contains("closed")){
if ((scrollTop>830)&&(scrollTop<4690)){
    document.querySelector("nav").style.background="#1c1c1c"
    document.querySelector("nav").style.position="fixed"
    document.querySelector("nav").style.top="0px"
    console.log("3")
}
else{
    document.querySelector("nav").style.background="none"
    document.querySelector("nav").style.position="absolute"
    document.querySelector("nav").style.top="0px"
    console.log("4")
}
if (document.querySelector(".ham").classList.contains("opened")){
        document.querySelector("nav").style.background="none"
        document.querySelector("nav").style.position="fixed"
        document.querySelector("nav").style.top="0px"
        console.log("5")
    
}}
if (document.querySelector(".ham").classList.contains("opened")) {
    console.log("RE")
    document.querySelector("nav").style.backgroundColor = "none";
}
}
window.addEventListener("scroll",()=>{
    parallax()
})

let ft2=document.querySelector('.ft2')
let ft3=document.querySelector('.ft3')
let ft4=document.querySelector('.ft4')
let ft5=document.querySelector('.ft5')
let ft6=document.querySelector('.ft6')
let ft7=document.querySelector('.ft7')
let ft8=document.querySelector('.ft8')
let ft9=document.querySelector('.ft9')
let ft10=document.querySelector('.ft10')
let ft11=document.querySelector('.ft11')
let ft12=document.querySelector('.ft12')
document.querySelector('.ft1').addEventListener("click",()=>{
    document.querySelector(".disp").style.fontFamily="Atkinson Hyperlegible";
    document.querySelector(".disp").style.color="black";
    // console.log("doing");
})
ft2.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Domine"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft3.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Exo 2"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft4.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Kanit"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft5.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Kdam Thmor Pro"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft6.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Noto Sans JP"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft7.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Oleo Script Swash Caps"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft8.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Oswald"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft9.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Playfair Display"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft10.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Questrial"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft11.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Saira"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
ft12.addEventListener("mouseover",()=>{
    document.querySelector(".disp").style.fontFamily="Water Brush"
    document.querySelector(".disp").style.color="black"
    // console.log("doing")
})
document.querySelector('#h1').addEventListener("mouseover",()=>{
    document.querySelector('#h1').style.backgroundColor="white";
    document.querySelector('#h1').style.color="black"
    document.querySelector('#br1').style.display="none"
    document.querySelector('#we1').style.fontSize="35px"
    document.querySelector('#we1').style.marginLeft="10px"
    document.querySelector('#we1').style.marginTop="20px"
    document.querySelector('#we1').style.marginRight="10px"
    document.querySelector('#we1').style.width="70%"
    document.querySelector('#we1').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr1").style.display="block"
    document.querySelector("#eye1").style.display="block"
    document.querySelector("#rrr1").classList.add("cir")
})
document.querySelector('#h2').addEventListener("mouseover",()=>{
    document.querySelector('#h2').style.backgroundColor="white";
    document.querySelector('#h2').style.color="black"
    document.querySelector('#br2').style.display="none"
    document.querySelector('#we2').style.fontSize="35px"
    document.querySelector('#we2').style.marginLeft="10px"
    document.querySelector('#we2').style.marginTop="20px"
    document.querySelector('#we2').style.marginRight="10px"
    document.querySelector('#we2').style.width="70%"
    document.querySelector('#we2').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr2").style.display="block"
    document.querySelector("#eye2").style.display="block"
    document.querySelector("#rrr2").classList.add("cir")
})
document.querySelector('#h3').addEventListener("mouseover",()=>{
    document.querySelector('#h3').style.backgroundColor="white";
    document.querySelector('#h3').style.color="black"
    document.querySelector('#br3').style.display="none"
    document.querySelector('#we3').style.fontSize="35px"
    document.querySelector('#we3').style.marginLeft="10px"
    document.querySelector('#we3').style.marginTop="20px"
    document.querySelector('#we3').style.marginRight="10px"
    document.querySelector('#we3').style.width="70%"
    document.querySelector('#we3').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr3").style.display="block"
    document.querySelector("#eye3").style.display="block"
    document.querySelector("#rrr3").classList.add("cir")
})
document.querySelector('#h4').addEventListener("mouseover",()=>{
    document.querySelector('#h4').style.backgroundColor="white";
    document.querySelector('#h4').style.color="black"
    document.querySelector('#br4').style.display="none"
    document.querySelector('#we4').style.fontSize="35px"
    document.querySelector('#we4').style.marginLeft="10px"
    document.querySelector('#we4').style.marginTop="20px"
    document.querySelector('#we4').style.marginRight="10px"
    document.querySelector('#we4').style.width="70%"
    document.querySelector('#we4').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr4").style.display="block"
    document.querySelector("#eye4").style.display="block"
    document.querySelector("#rrr4").classList.add("cir")
})
document.querySelector('#h12').addEventListener("mouseover",()=>{
    document.querySelector('#h12').style.backgroundColor="white";
    document.querySelector('#h12').style.color="black"
    document.querySelector('#br12').style.display="none"
    document.querySelector('#we12').style.fontSize="35px"
    document.querySelector('#we12').style.marginLeft="10px"
    document.querySelector('#we12').style.marginTop="20px"
    document.querySelector('#we12').style.marginRight="10px"
    document.querySelector('#we12').style.width="70%"
    document.querySelector('#we12').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr12").style.display="block"
    document.querySelector("#eye12").style.display="block"
    document.querySelector("#rrr12").classList.add("cir")
})
document.querySelector('#h6').addEventListener("mouseover",()=>{
    document.querySelector('#h6').style.backgroundColor="white";
    document.querySelector('#h6').style.color="black"
    document.querySelector('#br6').style.display="none"
    document.querySelector('#we6').style.fontSize="35px"
    document.querySelector('#we6').style.marginLeft="10px"
    document.querySelector('#we6').style.marginTop="20px"
    document.querySelector('#we6').style.marginRight="10px"
    document.querySelector('#we6').style.width="70%"
    document.querySelector('#we6').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr6").style.display="block"
    document.querySelector("#eye6").style.display="block"
    document.querySelector("#rrr6").classList.add("cir")
})
document.querySelector('#h7').addEventListener("mouseover",()=>{
    document.querySelector('#h7').style.backgroundColor="white";
    document.querySelector('#h7').style.color="black"
    document.querySelector('#br7').style.display="none"
    document.querySelector('#we7').style.fontSize="35px"
    document.querySelector('#we7').style.marginLeft="10px"
    document.querySelector('#we7').style.marginTop="20px"
    document.querySelector('#we7').style.marginRight="10px"
    document.querySelector('#we7').style.width="70%"
    document.querySelector('#we7').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr7").style.display="block"
    document.querySelector("#eye7").style.display="block"
    document.querySelector("#rrr7").classList.add("cir")
})
document.querySelector('#h8').addEventListener("mouseover",()=>{
    document.querySelector('#h8').style.backgroundColor="white";
    document.querySelector('#h8').style.color="black"
    document.querySelector('#br8').style.display="none"
    document.querySelector('#we8').style.fontSize="35px"
    document.querySelector('#we8').style.marginLeft="10px"
    document.querySelector('#we8').style.marginTop="20px"
    document.querySelector('#we8').style.marginRight="10px"
    document.querySelector('#we8').style.width="70%"
    document.querySelector('#we8').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr8").style.display="block"
    document.querySelector("#eye8").style.display="block"
    document.querySelector("#rrr8").classList.add("cir")
})
document.querySelector('#h9').addEventListener("mouseover",()=>{
    document.querySelector('#h9').style.backgroundColor="white";
    document.querySelector('#h9').style.color="black"
    document.querySelector('#br9').style.display="none"
    document.querySelector('#we9').style.fontSize="35px"
    document.querySelector('#we9').style.marginLeft="10px"
    document.querySelector('#we9').style.marginTop="20px"
    document.querySelector('#we9').style.marginRight="10px"
    document.querySelector('#we9').style.width="70%"
    document.querySelector('#we9').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr9").style.display="block"
    document.querySelector("#eye9").style.display="block"
    document.querySelector("#rrr9").classList.add("cir")
})
document.querySelector('#h10').addEventListener("mouseover",()=>{
    document.querySelector('#h10').style.backgroundColor="white";
    document.querySelector('#h10').style.color="black"
    document.querySelector('#br10').style.display="none"
    document.querySelector('#we10').style.fontSize="35px"
    document.querySelector('#we10').style.marginLeft="10px"
    document.querySelector('#we10').style.marginTop="20px"
    document.querySelector('#we10').style.marginRight="10px"
    document.querySelector('#we10').style.width="70%"
    document.querySelector('#we10').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr10").style.display="block"
    document.querySelector("#eye10").style.display="block"
    document.querySelector("#rrr10").classList.add("cir")
})
document.querySelector('#h11').addEventListener("mouseover",()=>{
    document.querySelector('#h11').style.backgroundColor="white";
    document.querySelector('#h11').style.color="black"
    document.querySelector('#br11').style.display="none"
    document.querySelector('#we11').style.fontSize="35px"
    document.querySelector('#we11').style.marginLeft="10px"
    document.querySelector('#we11').style.marginTop="20px"
    document.querySelector('#we11').style.marginRight="10px"
    document.querySelector('#we11').style.width="70%"
    document.querySelector('#we11').innerHTML="Just keep examining every low bid quoted for zinc etchings."
    document.querySelector("#rrr11").style.display="block"
    document.querySelector("#eye11").style.display="block"
    document.querySelector("#rrr11").classList.add("cir")
})
document.querySelector('#h1').addEventListener("mouseleave",()=>{
    document.querySelector('#h1').style.backgroundColor="#1c1c1c";
    document.querySelector('#h1').style.color="white"
    document.querySelector('#br1').style.display="block"
    document.querySelector('#we1').style.fontSize="160px"
    document.querySelector('#we1').style.marginLeft="10px"
    document.querySelector('#we1').style.marginTop="20px"
    document.querySelector('#we1').style.marginRight="0px"
    document.querySelector('#we1').style.width="100%"
    document.querySelector('#we1').innerHTML="Aa"
    document.querySelector("#rrr1").style.display="none"
    document.querySelector("#eye1").style.display="none"
    document.querySelector("#rrr1").classList.remove("cir")
})
document.querySelector('#h2').addEventListener("mouseleave",()=>{
    document.querySelector('#h2').style.backgroundColor="#1c1c1c";
    document.querySelector('#h2').style.color="white"
    document.querySelector('#br2').style.display="block"
    document.querySelector('#we2').style.fontSize="160px"
    document.querySelector('#we2').style.marginLeft="10px"
    document.querySelector('#we2').style.marginTop="20px"
    document.querySelector('#we2').style.marginRight="0px"
    document.querySelector('#we2').style.width="100%"
    document.querySelector('#we2').innerHTML="Aa"
    document.querySelector("#rrr2").style.display="none"
    document.querySelector("#eye2").style.display="none"
    document.querySelector("#rrr2").classList.remove("cir")
})
document.querySelector('#h3').addEventListener("mouseleave",()=>{
    document.querySelector('#h3').style.backgroundColor="#1c1c1c";
    document.querySelector('#h3').style.color="white"
    document.querySelector('#br3').style.display="block"
    document.querySelector('#we3').style.fontSize="160px"
    document.querySelector('#we3').style.marginLeft="10px"
    document.querySelector('#we3').style.marginTop="20px"
    document.querySelector('#we3').style.marginRight="0px"
    document.querySelector('#we3').style.width="100%"
    document.querySelector('#we3').innerHTML="Aa"
    document.querySelector("#rrr3").style.display="none"
    document.querySelector("#eye3").style.display="none"
    document.querySelector("#rrr3").classList.remove("cir")
})
document.querySelector('#h4').addEventListener("mouseleave",()=>{
    document.querySelector('#h4').style.backgroundColor="#1c1c1c";
    document.querySelector('#h4').style.color="white"
    document.querySelector('#br4').style.display="block"
    document.querySelector('#we4').style.fontSize="160px"
    document.querySelector('#we4').style.marginLeft="10px"
    document.querySelector('#we4').style.marginTop="20px"
    document.querySelector('#we4').style.marginRight="0px"
    document.querySelector('#we4').style.width="100%"
    document.querySelector('#we4').innerHTML="Aa"
    document.querySelector("#rrr4").style.display="none"
    document.querySelector("#eye4").style.display="none"
    document.querySelector("#rrr4").classList.remove("cir")
})
document.querySelector('#h12').addEventListener("mouseleave",()=>{
    document.querySelector('#h12').style.backgroundColor="#1c1c1c";
    document.querySelector('#h12').style.color="white"
    document.querySelector('#br12').style.display="block"
    document.querySelector('#we12').style.fontSize="160px"
    document.querySelector('#we12').style.marginLeft="10px"
    document.querySelector('#we12').style.marginTop="20px"
    document.querySelector('#we12').style.marginRight="0px"
    document.querySelector('#we12').style.width="100%"
    document.querySelector('#we12').innerHTML="Aa"
    document.querySelector("#rrr12").style.display="none"
    document.querySelector("#eye12").style.display="none"
    document.querySelector("#rrr12").classList.remove("cir")
})
document.querySelector('#h6').addEventListener("mouseleave",()=>{
    document.querySelector('#h6').style.backgroundColor="#1c1c1c";
    document.querySelector('#h6').style.color="white"
    document.querySelector('#br6').style.display="block"
    document.querySelector('#we6').style.fontSize="160px"
    document.querySelector('#we6').style.marginLeft="10px"
    document.querySelector('#we6').style.marginTop="20px"
    document.querySelector('#we6').style.marginRight="0px"
    document.querySelector('#we6').style.width="100%"
    document.querySelector('#we6').innerHTML="Aa"
    document.querySelector("#rrr6").style.display="none"
    document.querySelector("#eye6").style.display="none"
    document.querySelector("#rrr6").classList.remove("cir")
})
document.querySelector('#h7').addEventListener("mouseleave",()=>{
    document.querySelector('#h7').style.backgroundColor="#1c1c1c";
    document.querySelector('#h7').style.color="white"
    document.querySelector('#br7').style.display="block"
    document.querySelector('#we7').style.fontSize="160px"
    document.querySelector('#we7').style.marginLeft="10px"
    document.querySelector('#we7').style.marginTop="20px"
    document.querySelector('#we7').style.marginRight="0px"
    document.querySelector('#we7').style.width="100%"
    document.querySelector('#we7').innerHTML="Aa"
    document.querySelector("#rrr7").style.display="none"
    document.querySelector("#eye7").style.display="none"
    document.querySelector("#rrr7").classList.remove("cir")
})
document.querySelector('#h8').addEventListener("mouseleave",()=>{
    document.querySelector('#h8').style.backgroundColor="#1c1c1c";
    document.querySelector('#h8').style.color="white"
    document.querySelector('#br8').style.display="block"
    document.querySelector('#we8').style.fontSize="160px"
    document.querySelector('#we8').style.marginLeft="10px"
    document.querySelector('#we8').style.marginTop="20px"
    document.querySelector('#we8').style.marginRight="0px"
    document.querySelector('#we8').style.width="100%"
    document.querySelector('#we8').innerHTML="Aa"
    document.querySelector("#rrr8").style.display="none"
    document.querySelector("#eye8").style.display="none"
    document.querySelector("#rrr8").classList.remove("cir")
})
document.querySelector('#h9').addEventListener("mouseleave",()=>{
    document.querySelector('#h9').style.backgroundColor="#1c1c1c";
    document.querySelector('#h9').style.color="white"
    document.querySelector('#br9').style.display="block"
    document.querySelector('#we9').style.fontSize="160px"
    document.querySelector('#we9').style.marginLeft="10px"
    document.querySelector('#we9').style.marginTop="20px"
    document.querySelector('#we9').style.marginRight="0px"
    document.querySelector('#we9').style.width="100%"
    document.querySelector('#we9').innerHTML="Aa"
    document.querySelector("#rrr9").style.display="none"
    document.querySelector("#eye9").style.display="none"
    document.querySelector("#rrr9").classList.remove("cir")
})
document.querySelector('#h10').addEventListener("mouseleave",()=>{
    document.querySelector('#h10').style.backgroundColor="#1c1c1c";
    document.querySelector('#h10').style.color="white"
    document.querySelector('#br10').style.display="block"
    document.querySelector('#we10').style.fontSize="160px"
    document.querySelector('#we10').style.marginLeft="10px"
    document.querySelector('#we10').style.marginTop="20px"
    document.querySelector('#we10').style.marginRight="0px"
    document.querySelector('#we10').style.width="100%"
    document.querySelector('#we10').innerHTML="Aa"
    document.querySelector("#rrr10").style.display="none"
    document.querySelector("#eye10").style.display="none"
    document.querySelector("#rrr10").classList.remove("cir")
})
document.querySelector('#h11').addEventListener("mouseleave",()=>{
    document.querySelector('#h11').style.backgroundColor="#1c1c1c";
    document.querySelector('#h11').style.color="white"
    document.querySelector('#br11').style.display="block"
    document.querySelector('#we11').style.fontSize="160px"
    document.querySelector('#we11').style.marginLeft="10px"
    document.querySelector('#we11').style.marginTop="20px"
    document.querySelector('#we11').style.marginRight="0px"
    document.querySelector('#we11').style.width="100%"
    document.querySelector('#we11').innerHTML="Aa"
    document.querySelector("#rrr11").style.display="none"
    document.querySelector("#eye11").style.display="none"
    document.querySelector("#rrr11").classList.remove("cir")
})
document.querySelector("#visbtn1").addEventListener("click",()=>{
    document.querySelector("#visbtn2").classList.remove("activated")
    document.querySelector("#visbtn3").classList.remove("activated")
    document.querySelector("#visbtn4").classList.remove("activated")
    document.querySelector("#visbtn5").classList.remove("activated")
    document.querySelector("#visbtn1").classList.add("activated")
})
document.querySelector("#visbtn2").addEventListener("click",()=>{
    document.querySelector("#visbtn1").classList.remove("activated")
    document.querySelector("#visbtn3").classList.remove("activated")
    document.querySelector("#visbtn4").classList.remove("activated")
    document.querySelector("#visbtn5").classList.remove("activated")
    document.querySelector("#visbtn2").classList.add("activated")
})
document.querySelector("#visbtn3").addEventListener("click",()=>{
    document.querySelector("#visbtn2").classList.remove("activated")
    document.querySelector("#visbtn1").classList.remove("activated")
    document.querySelector("#visbtn4").classList.remove("activated")
    document.querySelector("#visbtn5").classList.remove("activated")
    document.querySelector("#visbtn3").classList.add("activated")
})
document.querySelector("#visbtn4").addEventListener("click",()=>{
    document.querySelector("#visbtn2").classList.remove("activated")
    document.querySelector("#visbtn3").classList.remove("activated")
    document.querySelector("#visbtn1").classList.remove("activated")
    document.querySelector("#visbtn5").classList.remove("activated")
    document.querySelector("#visbtn4").classList.add("activated")
})
document.querySelector("#visbtn5").addEventListener("click",()=>{
    document.querySelector("#visbtn2").classList.remove("activated")
    document.querySelector("#visbtn3").classList.remove("activated")
    document.querySelector("#visbtn4").classList.remove("activated")
    document.querySelector("#visbtn1").classList.remove("activated")
    document.querySelector("#visbtn5").classList.add("activated")
})
document.querySelector("#visbtn2").addEventListener("click",()=>{
    setTimeout(()=>{
    document.querySelector(".tline1").classList.add("active")
    document.querySelector(".tside1").classList.add("active")
    document.querySelector(".tside2").classList.add("active")
    document.querySelector(".tbox").classList.add("active")
    document.querySelector(".two").classList.add("active")
    document.querySelector(".cont").style.display="block";
    document.querySelector(".tline1").classList.add("active")
    document.querySelector(".line1").classList.remove("active")
    document.querySelector(".aside1").classList.remove("active")
    document.querySelector(".aside2").classList.remove("active")
    document.querySelector(".te").classList.remove("active")
    document.querySelector(".frag").classList.remove("active")
    document.querySelector(".content").style.display="none";

},900)
})
document.querySelector("#visbtn1").addEventListener("click",()=>{
    setTimeout(()=>{document.querySelector(".tline1").classList.add("active")
    document.querySelector(".line1").classList.add("active")
    document.querySelector(".aside1").classList.add("active")
    document.querySelector(".aside2").classList.add("active")
    document.querySelector(".te").classList.add("active")
    document.querySelector(".frag").classList.add("active")
    document.querySelector(".cont").style.display="none";
    document.querySelector(".tline1").classList.remove("active")
    document.querySelector(".tside1").classList.remove("active")
    document.querySelector(".tside2").classList.remove("active")
    document.querySelector(".tbox").classList.remove("active")
    document.querySelector(".two").classList.remove("active");
    document.querySelector(".content").style.display="block";
},900)
})