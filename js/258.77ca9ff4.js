(globalThis["webpackChunkportfolio_website"]=globalThis["webpackChunkportfolio_website"]||[]).push([[258],{8947:(M,g,I)=>{"use strict";I.d(g,{Z:()=>n});var e=I(9835),a=I(6970);const s=M=>((0,e.dD)("data-v-3bb5027a"),M=M(),(0,e.Cn)(),M),c={class:"row align-center justify-between header"},t={class:"row-items text-dark-green fw-600 fs-20"},i={class:"row align-center justify-center q-mt-sm"},l={key:0,class:"menu-option q-ml-md cursor-pointer no-mobile"},N=s((()=>(0,e._)("div",{class:"menu-option q-ml-md cursor-pointer no-mobile"},"Services",-1)));function o(M,g,I,s,o,D){return(0,e.wg)(),(0,e.iD)("nav",c,[(0,e._)("div",{class:"row-items text-dark-green fw-700 fs-36 gt-sm",onClick:g[0]||(g[0]=M=>this.$router.push({path:"/"}))},(0,a.zw)(o.foxGloveLogo),1),(0,e._)("div",{class:"row-items text-dark-green fw-700 fs-20 lt-md",onClick:g[1]||(g[1]=M=>this.$router.push({path:"/"}))},(0,a.zw)(o.foxGloveLogo),1),(0,e._)("div",t,[(0,e._)("div",i,[(0,e._)("div",{class:"menu-option cursor-pointer no-mobile",onClick:g[2]||(g[2]=M=>this.$router.push({path:"/"}))}," Home "),D.isContactPage?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",l," Why Choose Us? ")),N,D.isContactPage?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",{key:1,class:"menu-option q-ml-md cursor-pointer gt-sm",onClick:g[3]||(g[3]=M=>D.goToContact())}," Contact Us ")),D.isContactPage?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",{key:2,class:"menu-option q-ml-md cursor-pointer lt-md fs-12",onClick:g[4]||(g[4]=M=>D.goToContact())}," Contact Us "))])])])}I(6727);const D={name:"navBar",data(){return{foxGloveLogo:"<foxglove tech/>"}},methods:{goToContact(){this.$router.push({name:"contact-us"})}},computed:{isContactPage(){var M;return null===(M=this.$route.name)||void 0===M?void 0:M.includes("contact-us")}}};var T=I(1639);const A=(0,T.Z)(D,[["render",o],["__scopeId","data-v-3bb5027a"]]),n=A},7258:(M,g,I)=>{"use strict";I.r(g),I.d(g,{default:()=>U});var e=I(9835),a=I(3736),s=I.n(a);const c=M=>((0,e.dD)("data-v-3ca5f986"),M=M(),(0,e.Cn)(),M),t={class:"contact-us"},i={class:"row align-center justify-center gt-sm q-mt-md"},l=(0,e.uE)('<div class="col-6" data-v-3ca5f986><div class="fw-500 fs-32 text-dark-green" data-v-3ca5f986> You are at the right place! </div><div class="fw-500 fs-32 text-dark-green q-mt-xl q-mb-xl" data-v-3ca5f986> Fill up the form and we will get back to you shortly :) </div><div class="row q-mt-xl q-pt-xl lets-work-container" data-v-3ca5f986><div class="col-auto dots-padding" data-v-3ca5f986><img src="'+s()+'" data-v-3ca5f986></div><div class="col-auto lets-work q-ml-xl q-pt-sm" data-v-3ca5f986><div data-v-3ca5f986>LETS</div><div data-v-3ca5f986>WORK</div><div data-v-3ca5f986>TOGETHER.</div></div></div></div>',1),N={class:"col-6 q-pl-xl"},o=c((()=>(0,e._)("label",{class:"fw-500 fs-20 text-dark-green"},[(0,e.Uk)("Name "),(0,e._)("span",{class:"asterisk"},"*")],-1))),D=c((()=>(0,e._)("label",{class:"fw-500 fs-20 text-dark-green"},[(0,e.Uk)("Contact Number "),(0,e._)("span",{class:"asterisk"},"*")],-1))),T=c((()=>(0,e._)("label",{class:"fw-500 fs-20 text-dark-green"},[(0,e.Uk)("Email ID "),(0,e._)("span",{class:"asterisk"},"*")],-1))),A=c((()=>(0,e._)("label",{class:"fw-500 fs-20 text-dark-green"},"Organisation",-1))),n=c((()=>(0,e._)("label",{class:"fw-500 fs-20 text-dark-green"},"Message",-1))),u=c((()=>(0,e._)("label",{class:"fw-500 fs-20 text-dark-green"},"Drop in any files",-1))),r={class:"row justify-center btn-container"};function d(M,g,I,a,s,c){const d=(0,e.up)("nav-bar"),j=(0,e.up)("q-input"),m=(0,e.up)("q-btn"),z=(0,e.up)("q-form");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e.Wm)(d),(0,e._)("div",t,[(0,e._)("div",i,[l,(0,e._)("div",N,[(0,e.Wm)(z,{class:"column align-center justify-center"},{default:(0,e.w5)((()=>[o,(0,e.Wm)(j,{type:"text",rounded:"",modelValue:s.name,"onUpdate:modelValue":g[0]||(g[0]=M=>s.name=M),required:"",borderless:"",class:"q-mt-xs q-mb-sm"},null,8,["modelValue"]),D,(0,e.Wm)(j,{type:"text",rounded:"",required:"",modelValue:s.contactNumber,"onUpdate:modelValue":g[1]||(g[1]=M=>s.contactNumber=M),borderless:"",class:"q-mt-xs q-mb-sm"},null,8,["modelValue"]),T,(0,e.Wm)(j,{type:"email",rounded:"",modelValue:s.emailID,"onUpdate:modelValue":g[2]||(g[2]=M=>s.emailID=M),borderless:"",required:"",class:"q-mt-xs q-mb-sm"},null,8,["modelValue"]),A,(0,e.Wm)(j,{type:"text",modelValue:s.organisation,"onUpdate:modelValue":g[3]||(g[3]=M=>s.organisation=M),rounded:"",borderless:"",class:"q-mt-xs q-mb-sm"},null,8,["modelValue"]),n,(0,e.Wm)(j,{type:"text",modelValue:s.message,"onUpdate:modelValue":g[4]||(g[4]=M=>s.message=M),rounded:"",borderless:"",class:"q-mt-xs q-mb-sm"},null,8,["modelValue"]),u,(0,e.Wm)(j,{type:"text",modelValue:s.files,"onUpdate:modelValue":g[5]||(g[5]=M=>s.files=M),rounded:"",borderless:"",class:"q-mt-xs q-mb-sm"},null,8,["modelValue"]),(0,e._)("div",r,[(0,e.Wm)(m,{label:"Send","no-caps":"",type:"submit",class:"q-mt-lg align-center text-center fw-500 fs-24 text-dark-green bg-bright-yellow"})])])),_:1})])])])])}var j=I(8947);const m={name:"contactUs",components:{NavBar:j.Z},data(){return{name:"",contactNumber:null,emailID:"",organisation:"",message:"",files:null}}};var z=I(1639),w=I(8326),y=I(8810),Q=I(4483),C=I(9984),v=I.n(C);const x=(0,z.Z)(m,[["render",d],["__scopeId","data-v-3ca5f986"]]),U=x;v()(m,"components",{QForm:w.Z,QInput:y.Z,QBtn:Q.Z})},3736:M=>{M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjQ0IiB2aWV3Qm94PSIwIDAgMjAgMjQ0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjAgMTBDMjAgMTUuNTIyOCAxNS41MjI4IDIwIDEwIDIwQzQuNDc3MTUgMjAgMCAxNS41MjI4IDAgMTBDMCA0LjQ3NzE1IDQuNDc3MTUgMCAxMCAwQzE1LjUyMjggMCAyMCA0LjQ3NzE1IDIwIDEwWiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMTBDMjAgMTUuNTIyOCAxNS41MjI4IDIwIDEwIDIwQzQuNDc3MTUgMjAgMCAxNS41MjI4IDAgMTBDMCA0LjQ3NzE1IDQuNDc3MTUgMCAxMCAwQzE1LjUyMjggMCAyMCA0LjQ3NzE1IDIwIDEwWiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgNDJDMjAgNDcuNTIyOCAxNS41MjI4IDUyIDEwIDUyQzQuNDc3MTUgNTIgMCA0Ny41MjI4IDAgNDJDMCAzNi40NzcyIDQuNDc3MTUgMzIgMTAgMzJDMTUuNTIyOCAzMiAyMCAzNi40NzcyIDIwIDQyWiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgNDJDMjAgNDcuNTIyOCAxNS41MjI4IDUyIDEwIDUyQzQuNDc3MTUgNTIgMCA0Ny41MjI4IDAgNDJDMCAzNi40NzcyIDQuNDc3MTUgMzIgMTAgMzJDMTUuNTIyOCAzMiAyMCAzNi40NzcyIDIwIDQyWiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgNzRDMjAgNzkuNTIyOCAxNS41MjI5IDg0IDEwIDg0QzQuNDc3MTggODQgMi4zNThlLTA1IDc5LjUyMjggMi4zNThlLTA1IDc0QzIuMzU4ZS0wNSA2OC40NzcyIDQuNDc3MTggNjQgMTAgNjRDMTUuNTIyOSA2NCAyMCA2OC40NzcyIDIwIDc0WiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgNzRDMjAgNzkuNTIyOCAxNS41MjI5IDg0IDEwIDg0QzQuNDc3MTggODQgMi4zNThlLTA1IDc5LjUyMjggMi4zNThlLTA1IDc0QzIuMzU4ZS0wNSA2OC40NzcyIDQuNDc3MTggNjQgMTAgNjRDMTUuNTIyOSA2NCAyMCA2OC40NzcyIDIwIDc0WiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMTcwQzIwIDE3NS41MjMgMTUuNTIyOCAxODAgMTAgMTgwQzQuNDc3MTUgMTgwIDAgMTc1LjUyMyAwIDE3MEMwIDE2NC40NzcgNC40NzcxNSAxNjAgMTAgMTYwQzE1LjUyMjggMTYwIDIwIDE2NC40NzcgMjAgMTcwWiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMTcwQzIwIDE3NS41MjMgMTUuNTIyOCAxODAgMTAgMTgwQzQuNDc3MTUgMTgwIDAgMTc1LjUyMyAwIDE3MEMwIDE2NC40NzcgNC40NzcxNSAxNjAgMTAgMTYwQzE1LjUyMjggMTYwIDIwIDE2NC40NzcgMjAgMTcwWiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMjAyQzIwIDIwNy41MjMgMTUuNTIyOCAyMTIgMTAgMjEyQzQuNDc3MTUgMjEyIDAgMjA3LjUyMyAwIDIwMkMwIDE5Ni40NzcgNC40NzcxNSAxOTIgMTAgMTkyQzE1LjUyMjggMTkyIDIwIDE5Ni40NzcgMjAgMjAyWiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMjAyQzIwIDIwNy41MjMgMTUuNTIyOCAyMTIgMTAgMjEyQzQuNDc3MTUgMjEyIDAgMjA3LjUyMyAwIDIwMkMwIDE5Ni40NzcgNC40NzcxNSAxOTIgMTAgMTkyQzE1LjUyMjggMTkyIDIwIDE5Ni40NzcgMjAgMjAyWiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMjM0QzIwIDIzOS41MjMgMTUuNTIyOCAyNDQgMTAgMjQ0QzQuNDc3MTUgMjQ0IDAgMjM5LjUyMyAwIDIzNEMwIDIyOC40NzcgNC40NzcxNSAyMjQgMTAgMjI0QzE1LjUyMjggMjI0IDIwIDIyOC40NzcgMjAgMjM0WiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMjM0QzIwIDIzOS41MjMgMTUuNTIyOCAyNDQgMTAgMjQ0QzQuNDc3MTUgMjQ0IDAgMjM5LjUyMyAwIDIzNEMwIDIyOC40NzcgNC40NzcxNSAyMjQgMTAgMjI0QzE1LjUyMjggMjI0IDIwIDIyOC40NzcgMjAgMjM0WiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMTM4QzIwIDE0My41MjMgMTUuNTIyOCAxNDggMTAgMTQ4QzQuNDc3MTUgMTQ4IDAgMTQzLjUyMyAwIDEzOEMwIDEzMi40NzcgNC40NzcxNSAxMjggMTAgMTI4QzE1LjUyMjggMTI4IDIwIDEzMi40NzcgMjAgMTM4WiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMTM4QzIwIDE0My41MjMgMTUuNTIyOCAxNDggMTAgMTQ4QzQuNDc3MTUgMTQ4IDAgMTQzLjUyMyAwIDEzOEMwIDEzMi40NzcgNC40NzcxNSAxMjggMTAgMTI4QzE1LjUyMjggMTI4IDIwIDEzMi40NzcgMjAgMTM4WiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMTA2QzIwIDExMS41MjMgMTUuNTIyOSAxMTYgMTAgMTE2QzQuNDc3MTggMTE2IDIuMzU4ZS0wNSAxMTEuNTIzIDIuMzU4ZS0wNSAxMDZDMi4zNThlLTA1IDEwMC40NzcgNC40NzcxOCA5NiAxMCA5NkMxNS41MjI5IDk2IDIwIDEwMC40NzcgMjAgMTA2WiIgZmlsbD0iI0ZGRTQ0RiIvPgo8cGF0aCBkPSJNMjAgMTA2QzIwIDExMS41MjMgMTUuNTIyOSAxMTYgMTAgMTE2QzQuNDc3MTggMTE2IDIuMzU4ZS0wNSAxMTEuNTIzIDIuMzU4ZS0wNSAxMDZDMi4zNThlLTA1IDEwMC40NzcgNC40NzcxOCA5NiAxMCA5NkMxNS41MjI5IDk2IDIwIDEwMC40NzcgMjAgMTA2WiIgZmlsbD0iI0ZGRTQ0RiIvPgo8L3N2Zz4K"}}]);