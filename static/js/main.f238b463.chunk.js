(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={app:"App_app__23Ato",title:"App_title__axLul",titleContacts:"App_titleContacts__zLsXc"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3LgZ8",label:"ContactForm_label__2RhSs",input:"ContactForm_input__UMYcV",btnAdd:"ContactForm_btnAdd__28MZV"}},22:function(t,e,n){},3:function(t,e,n){t.exports={contacts:"ContactList_contacts__jErxF",item:"ContactList_item__KWrk4",name:"ContactList_name__IyEwN",tel:"ContactList_tel__2WYvh",btnDel:"ContactList_btnDel__2ClRX"}},34:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(14),r=n.n(s),i=(n(22),n(17)),o=n(15),l=n(7),u=n(8),m=n(10),d=n(9),b=n(16),h=n.n(b),p=n(3),j=n.n(p),f=n(0),_=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(f.jsx)("ul",{className:j.a.contacts,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{className:j.a.item,children:[Object(f.jsx)("p",{className:j.a.name,children:a}),Object(f.jsx)("p",{className:j.a.tel,children:c}),Object(f.jsx)("button",{className:j.a.btnDel,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},C=n(4),O=n.n(C),x=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{className:O.a.filter,children:Object(f.jsxs)("label",{className:O.a.label,children:[Object(f.jsx)("p",{className:O.a.text,children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n,className:O.a.input})]})})},v=n(6),g=n(2),N=n.n(g),A=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",text:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSabmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetInput()},t.resetInput=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{className:N.a.form,onSubmit:this.handleSabmit,children:[Object(f.jsxs)("label",{className:N.a.label,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange,className:N.a.input})]}),Object(f.jsxs)("label",{className:N.a.label,children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange,className:N.a.input})]}),Object(f.jsx)("button",{type:"sabmit",className:N.a.btnAdd,children:"Add contact"})]})}}]),n}(a.Component),S=(n(13),n(32),n(33),n(11)),y=n.n(S),w=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.forSubmitHandler=function(e){var n=t.state.contacts,a=Object(o.a)({id:h.a.generate()},e);n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))},t.deleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisisbleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisisbleContacts();return Object(f.jsxs)("div",{className:y.a.app,children:[Object(f.jsx)("h1",{className:y.a.title,children:"Phonebook"}),Object(f.jsx)(A,{onSubmit:this.forSubmitHandler}),Object(f.jsx)("h2",{className:y.a.titleContacts,children:"Contacts"}),Object(f.jsx)(x,{value:t,onChange:this.changeFilter}),Object(f.jsx)(_,{contacts:e,onDeleteContacts:this.deleteContacts})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={filter:"Filter_filter__Ezlqi",label:"Filter_label__gX15p",text:"Filter_text__2vjIw",input:"Filter_input__1f7-o"}}},[[34,1,2]]]);
//# sourceMappingURL=main.f238b463.chunk.js.map