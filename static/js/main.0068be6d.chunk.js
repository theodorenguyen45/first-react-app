(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/marketing.5cf63dde.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/dev.1aa7a9f6.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/coding.d515da59.jpg"},35:function(e,t,a){e.exports=a(81)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),i=(a(40),a(6)),m=a(7),s=a(9),o=a(8),u=a(10),h=function(){return l.a.createElement("a",{className:"db dtc-l v-mid yellow link dim w-100 w-25-l tc tl-l mb2-l mb0-l",href:"#Home",title:"Home"},l.a.createElement("img",{src:"http://tachyons.io/img/logo.jpg",className:"dib w2 h2 br-100",alt:"Site Name"}))},p=(a(17),function(){return l.a.createElement("div",{className:"db dtc-l v-mid w-100 w-75-l tc tr-l menu-collapse"},l.a.createElement("a",{className:"link dim light-gray f6 f5-l dib ttu mr3 mr3-l hover-orange",href:"#Service",title:"Service"},"Service"),l.a.createElement("a",{className:"link dim light-gray f6 f5-l dib ttu mr3 mr3-l hover-orange",href:"#SmartBrain",title:"Smart Brain"},"Smart Brain"),l.a.createElement("a",{className:"link dim light-gray f6 f5-l dib ttu mr3 mr3-l hover-orange",href:"#About",title:"About"},"About"),l.a.createElement("a",{className:"link dim light-gray f6 f5-l dib ttu hover-orange",href:"#Contact",title:"Contact"},"Contact"))}),d=function(){return l.a.createElement("div",{className:"flex justify-center"},l.a.createElement("nav",{className:"tc db dt-ns w-80-l border-box pa3 ph5-l ph3-ns header-nav"},l.a.createElement(h,null),l.a.createElement(p,null)))},b=function(){return l.a.createElement("a",{className:"f4 no-underline grow dib v-mid bg-orange white ba b--orange ph3 pv2 mb2 mb3-l",href:"/"},"Tell me more!")},f=function(){return l.a.createElement("header",{className:""},l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"tc mt5-m mt6-l ph3"},l.a.createElement("h1",{className:"f1-l fw2 white ttc mb0 lh-title"},"Welcome to my landing page!"),l.a.createElement("h2",{className:"f1-l fw5 white mt3-l ttu mb4-l"},"It's nice to see you"),l.a.createElement(b,null))))},g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).onClickServiceCard=function(){a.setState({isClicked:!a.state.isClicked})},a.state={isClicked:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("li",{className:"flex items-center bg-light-green dib pa3 ma2 grow shadow-5 ba b--orange pointer relative",onClick:this.onClickServiceCard},l.a.createElement("img",{src:"https://robohash.org/".concat(this.props.index),alt:"robot",style:{height:"100px",width:"100px",order:"2"}}),l.a.createElement("div",{className:"tl"},l.a.createElement("h4",null,l.a.createElement("label",{className:"orange"},"Name: "),this.props.people.name),l.a.createElement("p",null,l.a.createElement("label",{className:"orange"},"Gender: "),this.props.people.gender),l.a.createElement("p",null,l.a.createElement("label",{className:"orange"},"Height: "),this.props.people.height),l.a.createElement("p",null,l.a.createElement("label",{className:"orange"},"Hair Color: "),this.props.people.hair_color)))}}]),t}(n.Component),E=function(e){var t=e.people;return l.a.createElement("ul",{className:"pa0 flex flex-row flex-wrap justify-center"},t.map(function(e,t){return l.a.createElement(g,{key:t,index:Math.floor(100*Math.random()+1),people:e})}))},v=function(e){var t=e.searchChange;return l.a.createElement("div",null,l.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search",onChange:t}))},w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).fetchUsers=function(){return fetch("https://swapi.co/api/people/").then(function(e){return e.json()})},e.onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={people:[],searchField:""},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchUsers().then(function(t){return e.setState({people:t.results})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.people,a=this.state.people.filter(function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return l.a.createElement("div",{className:"flex flex-wrap items-center justify-around bg-light-gray"},l.a.createElement("div",{id:"Service",className:"tc mv5 w-80-l"},l.a.createElement("h1",{className:"ttu"},"Service"),l.a.createElement("h3",{className:"i fw1"},"Loren ipsum dorlor sit amet consectetur"),l.a.createElement(v,{searchChange:this.onSearchChange}),l.a.createElement("div",{className:"flex items-center justify-around flex-row-l flex-column ma3"},Object.keys(t).length>0?l.a.createElement(E,{people:a}):l.a.createElement("p",{className:"tc"},"Loading"))))}}]),t}(n.Component),N=a(31),x=a.n(N),C=a(32),y=a.n(C),k=a(33),j=a.n(k),S=(a(41),function(e){var t=e.image,a=e.timeFrame,n=e.title,r=e.className;return l.a.createElement("li",{className:"flex temporary-l temporary items-center-l tl mb4-l ".concat(r.li)},l.a.createElement("div",{className:r.imageDiv},l.a.createElement("img",{className:"br-100 image",src:t,alt:"Marketing"})),l.a.createElement("div",{className:r.textDiv},l.a.createElement("h2",{className:"orange"},a),l.a.createElement("h3",null,n),l.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi mollitia pariatur tenetur laudantium incidunt molestias voluptates illo iste error repudiandae labore modi voluptatem quasi officia dolor, nobis cumque! Fugiat, quidem?")))}),A=function(){var e={li:"tr-l",imageDiv:"tc order-2-l",textDiv:""};return l.a.createElement("div",{className:"flex flex-wrap items-center justify-around bg-washed-green"},l.a.createElement("div",{id:"About",className:"tc mv5 w-80-l flex-column justify-around items-center"},l.a.createElement("h1",{className:"ttu"},"About"),l.a.createElement("h3",{className:"i fw1"},"Loren ipsum dorlor sit amet consectetur"),l.a.createElement("ul",{className:"flex flex-column list pa0 ma3"},l.a.createElement(S,{image:x.a,timeFrame:"2013 - 2015",title:"English - Marketing",className:e}),l.a.createElement(S,{image:y.a,timeFrame:"2015 - 2018",title:"BIT",className:{li:"",imageDiv:"tc grid-column-start-2",textDiv:"order-3-l"}}),l.a.createElement(S,{image:j.a,timeFrame:"2018 - Present",title:"Graduate Developer",className:e}))))},O=(a(42),function(){var e=["pa3 br2 b--transparent grow"];return l.a.createElement("div",{className:"flex flex-wrap items-center justify-around contact white"},l.a.createElement("div",{id:"Contact",className:"tc mv5 w-80-l"},l.a.createElement("h1",{className:"ttu"},"Contact"),l.a.createElement("h3",{className:"i fw1"},"Loren ipsum dorlor sit amet consecteturr"),l.a.createElement("div",{className:"flex flex-column flex-row-l justify-around ma3"},l.a.createElement("div",{className:"flex flex-column justify-between w-100 mh3-l"},l.a.createElement("input",{className:"mb3 ".concat(e),type:"text",placeholder:"Your Name *"}),l.a.createElement("input",{className:"mb3 ".concat(e),type:"email",placeholder:"Your Email *"}),l.a.createElement("input",{className:"mb3 ".concat(e),type:"tel",placeholder:"Your Phone *"})),l.a.createElement("div",{className:"w-100 mb3-l"},l.a.createElement("textarea",{className:"w-100 h-100 resize-none ".concat(e),name:"message",id:"message",placeholder:"Your Message *"}))),l.a.createElement("div",null,l.a.createElement("input",{className:"pointer bg-orange white ".concat(e),type:"button",value:"Send Message"}))))}),L=function(){return l.a.createElement("footer",{className:"pv4 ph3 ph5-ns tc"},l.a.createElement("div",null,l.a.createElement("a",{className:"link dim gray dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--orange",href:"#Facebook",title:""},l.a.createElement("svg",{"data-icon":"facebook",viewBox:"0 0 32 32"},l.a.createElement("title",null,"facebook icon"),l.a.createElement("path",{d:"M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"}))),l.a.createElement("a",{className:"link dim white dib h2 w2 br-100 mr3 pa2 bg-near-white ba b--orange",href:"#Twitter",title:""},l.a.createElement("svg",{"data-icon":"twitter",viewBox:"0 0 32 32"},l.a.createElement("title",null,"twitter icon"),l.a.createElement("path",{d:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"}))),l.a.createElement("a",{className:"link dim gray dib br-100 h2 w2 mr3 pa2 bg-near-white ba b--orange",href:"#Github",title:""},l.a.createElement("svg",{"data-icon":"github",viewBox:"0 0 32 32"},l.a.createElement("title",null,"github icon"),l.a.createElement("path",{d:"M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"})))))},B=function(){return l.a.createElement("h3",{className:"mt5"},"Hey. your current rank is...")},F=a(15),M=a.n(F),D=function(e){var t=e.imageUrl,a=e.box;return l.a.createElement("div",{className:"flex justify-center mb4 relative"},l.a.createElement("img",{id:"inputimage",src:t,width:"300px",height:"auto",alt:""}),l.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}}))},_=new M.a.App({apiKey:"712f5d8b674244c3b2a2bb6492f4599a"}),I=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),l=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*l,rightCol:n-t.right_col*n,bottomRow:l-t.bottom_row*l}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),_.models.predict(M.a.FACE_DETECT_MODEL,e.state.input).then(function(t){return e.displayFaceBox(e.calculateFaceLocation(t))}).catch(function(e){return console.log(e)})},e.state={input:"",imageUrl:"",box:{}},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"flex flex-wrap flex-column items-center justify-around"},l.a.createElement("div",{id:"SmartBrain",className:"tc mv5 w-80-l"},l.a.createElement("h1",{className:"ttu"},"Smart Brain"),l.a.createElement("h3",{className:"i fw1"},"This is a face recognition"),this.state.input.length<1&&l.a.createElement("h3",{className:"mt5"},"In order to use face detection. Simply patse an image url into the text box and click Detect"),l.a.createElement(B,null),l.a.createElement("div",{className:"custom-grid"},l.a.createElement("input",{className:"customInput f4 pa3 ba b--green bg-lightest-blue",onChange:this.onInputChange,type:"text",placeHolder:"exp: https://imageurl.com"}),l.a.createElement("button",{className:"grow f4 link ph3 pv2 dib white bg-light-purple mt3 ma0-l ml2-l",onClick:this.onButtonSubmit},"Detect"))),l.a.createElement(D,{imageUrl:this.state.imageUrl,box:this.state.box}))}}]),t}(n.Component),R=a(34),U=a.n(R),H={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},T=function(e){var t=e.onRouteChange;return l.a.createElement("div",{className:"background-gradient absolute h-100 w-100 flex items-center"},l.a.createElement(U.a,{className:"particeles",params:H}),l.a.createElement("article",{className:"flex br3 b--black-10 mv4 w-80 w-50-m mw6 shadow-5 center justify-center"},l.a.createElement("main",{className:"pa4 black-80 z-2"},l.a.createElement("form",{className:"measure flex flex-column items-center"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0 tc"},l.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:t})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("a",{href:"#0",className:"f6 link dim black db"},"Register"))))))},z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).onRouteChange=function(){e.setState({route:"home"})},e.state={route:"signin"},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return"signin"===this.state.route?l.a.createElement(T,{onRouteChange:this.onRouteChange}):l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(w,null),l.a.createElement(I,null),l.a.createElement(A,null),l.a.createElement(O,null),l.a.createElement(L,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80);c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.0068be6d.chunk.js.map