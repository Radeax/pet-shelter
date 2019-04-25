(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(67)},37:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),c=a.n(r),s=(a(37),a(38),a(39),a(15)),i=a(12),o=a(8),u=a(9),p=a(10),m=a(13),h=a(11),E=a(14),d=a(4),g=a.n(d);var b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){g.a.get("/pets").then(function(e){a.setState({pets:e.data.pets},function(){a.sortType()})}).catch(function(e){console.log(e)})},a.sortType=function(){var e=Object(o.a)(a.state.pets);e=function(e,t){for(var a=0;a<e.length-1;a++)for(var n=0;n<e.length-1-a;n++)if(e[n][t].toUpperCase()>e[n+1][t].toUpperCase()){var l=e[n];e[n]=e[n+1],e[n+1]=l}return e}(e,"type"),a.setState({pets:e})},a.state={pets:[]},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"These pets are looking for a home!"),l.a.createElement("p",null,l.a.createElement(s.b,{to:"/pet/new"},"Add a pet to the shelter")),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,this.state.pets.map(function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(s.b,{to:"/pet/"+e._id+"/details"},l.a.createElement("button",null,"Details")),l.a.createElement(s.b,{to:"/pet/"+e._id+"/edit"},l.a.createElement("button",null,"Edit"))))}))))}}]),t}(n.Component),f=a(2),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).changeName=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{name:e.target.value})})},a.changeType=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{type:e.target.value})})},a.changeDescription=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{description:e.target.value})})},a.changeSkills1=function(e){var t=Object(o.a)(a.state.pet.skills);t[0]=e.target.value,a.setState({pet:Object(f.a)({},a.state.pet,{skills:t})})},a.changeSkills2=function(e){var t=Object(o.a)(a.state.pet.skills);t[1]=e.target.value,a.setState({pet:Object(f.a)({},a.state.pet,{skills:t})})},a.changeSkills3=function(e){var t=Object(o.a)(a.state.pet.skills);t[2]=e.target.value,a.setState({pet:Object(f.a)({},a.state.pet,{skills:t})})},a.changeLikes=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{likes:e.target.value})})},a.create=function(e){e.preventDefault(),g.a.post("/pets",a.state.pet).then(function(e){e.data.errors?(a.setState({errors:e.data.errors.errors}),console.log(a.state)):a.props.history.push("/")}).catch(function(e){console.log(e)})},a.cancel=function(e){e.preventDefault(),a.props.history.push("/")},a.state={pet:{name:"",type:"",description:"",skills:["","",""],likes:0},errors:{}},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Know of a pet needing a home?"),l.a.createElement("p",null,"The pet must have a name"),l.a.createElement("form",{onSubmit:this.create},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Pet Name:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeName}),this.state.errors.name?l.a.createElement("span",{className:"error"},"\xa0",this.state.errors.name.message):l.a.createElement("span",null))),l.a.createElement("tr",null,l.a.createElement("td",null,"Pet Type:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeType}),this.state.errors.type?l.a.createElement("span",{className:"error"},"\xa0",this.state.errors.type.message):l.a.createElement("span",null))),l.a.createElement("tr",null,l.a.createElement("td",null,"Description:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeDescription}),this.state.errors.description?l.a.createElement("span",{className:"error"},"\xa0",this.state.errors.description.message):l.a.createElement("span",null))),l.a.createElement("tr",null,l.a.createElement("td",null,"Skills:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Skill 1:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeSkills1}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Skill 2:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeSkills2}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Skill 3:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeSkills3}))))))))),l.a.createElement("button",{type:"submit"},"Add Pet")),l.a.createElement("button",{onClick:this.cancel},"Cancel"))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){g.a.get("/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({pet:e.data.pet})}).catch(function(e){console.log(e)})},a.changeName=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{name:e.target.value})})},a.changeType=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{type:e.target.value})})},a.changeDescription=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{description:e.target.value})})},a.changeSkills1=function(e){var t=Object(o.a)(a.state.pet.skills);t[0]=e.target.value,a.setState({pet:Object(f.a)({},a.state.pet,{skills:t})})},a.changeSkills2=function(e){var t=Object(o.a)(a.state.pet.skills);t[1]=e.target.value,a.setState({pet:Object(f.a)({},a.state.pet,{skills:t})})},a.changeSkills3=function(e){var t=Object(o.a)(a.state.pet.skills);t[2]=e.target.value,a.setState({pet:Object(f.a)({},a.state.pet,{skills:t})})},a.update=function(e){e.preventDefault(),console.log(a.state),g.a.put("/pets/".concat(a.props.match.params._id),a.state.pet).then(function(e){e.data.errors?a.setState({errors:e.data.errors.errors}):a.props.history.push("/")}).catch(function(e){console.log(e)})},a.cancel=function(e){e.preventDefault(),a.props.history.push("/")},a.state={pet:{name:"",type:"",skills:[],likes:0},errors:{}},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Edit This Pet"),l.a.createElement("form",{onSubmit:this.update},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Pet Name:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeName,value:this.state.pet.name}),this.state.errors.name?l.a.createElement("span",{className:"error"},"\xa0",this.state.errors.name.message):l.a.createElement("span",null))),l.a.createElement("tr",null,l.a.createElement("td",null,"Pet Type:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeType,value:this.state.pet.type}),this.state.errors.type?l.a.createElement("span",{className:"error"},"\xa0",this.state.errors.type.message):l.a.createElement("span",null))),l.a.createElement("tr",null,l.a.createElement("td",null,"Description:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeDescription,value:this.state.pet.description}),this.state.errors.description?l.a.createElement("span",{className:"error"},"\xa0",this.state.errors.description.message):l.a.createElement("span",null))),l.a.createElement("tr",null,l.a.createElement("td",null,"Skills:")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Skill 1:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeSkills1,value:this.state.pet.skills[0]}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Skill 2:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeSkills2,value:this.state.pet.skills[1]}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Skill 3:"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",onChange:this.changeSkills3,value:this.state.pet.skills[2]}))))))))),l.a.createElement("button",{type:"submit"},"Update Pet")),l.a.createElement("button",{onClick:this.cancel},"Cancel"))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){g.a.get("/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({pet:e.data.pet})}).catch(function(e){console.log(e)})},a.delete=function(e){g.a.delete("/pets/".concat(a.props.match.params._id)).then(function(e){a.props.history.push("/")}).catch(function(e){console.log(e)})},a.update=function(e){g.a.put("/pets/".concat(a.props.match.params._id),a.state.pet)},a.like=function(e){a.setState({pet:Object(f.a)({},a.state.pet,{likes:a.state.pet.likes+1})},a.update),a.refs.like.setAttribute("disabled","disabled")},a.state={pet:{name:"",type:"",skills:[],likes:0},errors:{}},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Details about ",this.state.pet.name),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Pet Type: "),l.a.createElement("td",null,this.state.pet.type)),l.a.createElement("tr",null,l.a.createElement("td",null,"Description: "),l.a.createElement("td",null,this.state.pet.description)),l.a.createElement("tr",null,l.a.createElement("td",null,"Skills: "),l.a.createElement("td",null,this.state.pet.skills.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("p",null,e))}))),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null))),"Likes: ",this.state.pet.likes),l.a.createElement("button",{ref:"like",onClick:this.like},"Like this Pet"),l.a.createElement("button",{onClick:this.delete},"Adopt this pet!"))}}]),t}(n.Component);var S=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(s.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:b}),l.a.createElement(i.a,{path:"/pet/new",component:k}),l.a.createElement(i.a,{path:"/pet/:_id/edit",component:v}),l.a.createElement(i.a,{path:"/pet/:_id/details",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.ffe29ad6.chunk.js.map