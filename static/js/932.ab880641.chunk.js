"use strict";(self.webpackChunkmesto_react=self.webpackChunkmesto_react||[]).push([[932],{538:function(e,n,t){t.d(n,{G:function(){return p},I:function(){return c}});var i=t(413),a=t(942),o=t(925),s=t(791),r=t(600),l=t(184),u=["className","inverted","error","errorMessage"],c=s.forwardRef((function(e,n){var t,s=e.className,c=e.inverted,d=e.error,p=e.errorMessage,f=(0,o.Z)(e,u);return(0,l.jsxs)("label",{className:(0,r.A)(["text-field",s]),children:[(0,l.jsx)("input",(0,i.Z)({ref:n,className:(0,r.A)(["text-field__input"],(t={},(0,a.Z)(t,"text-field__input_type_error",d),(0,a.Z)(t,"text-field__input_type_inverted",c),t))},f)),(0,l.jsx)("span",{className:"text-field__error",children:p})]})})),d=["inverted","className","children"],p=function(e){var n=e.inverted,t=e.className,s=e.children,u=(0,o.Z)(e,d);return(0,l.jsx)("button",(0,i.Z)((0,i.Z)({className:(0,r.A)(["button button__submit",t],(0,a.Z)({},"button__submit_type_inverted",n))},u),{},{children:s}))}},932:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i=t(413),a=t(439),o=t(791),s=t(942),r=t(231),l=t(600),u=t(538),c=t(184),d=function(e){var n=e.name,t=e.title,i=e.buttonText,a=e.children,o=e.isOpen,d=e.onClose,p=e.onSubmit,f=e.isSubmitDisabled,m=(0,r.WO)(o,d),x=m.handleCloseOnOverlay,_=m.onAnimationEnd,b=m.isVisible;return(0,c.jsx)(c.Fragment,{children:b&&(0,c.jsx)("div",{onMouseDown:x,onAnimationEnd:_,className:(0,l.A)(["popup","popup_type_".concat(n)],(0,s.Z)({},"popup_opened",o)),children:(0,c.jsxs)("div",{className:"popup__container",children:[(0,c.jsx)("h2",{className:"popup__title",children:t}),(0,c.jsxs)("form",{onSubmit:p,name:n,className:"popup__form",autoComplete:"off",children:[a,(0,c.jsx)(u.G,{disabled:f,type:"submit","aria-label":i,children:i})]}),(0,c.jsx)("button",{onClick:d,className:"button popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"})]})})})},p=t(395),f=function(e){var n,t,i=e.isOpen,a=e.onClose,s=o.useContext(p.Ec),l=s.currentUser,f=s.updateUserInfo,m=s.isLoading,x=(0,r.V$)(""),_=(0,r.V$)(""),b=(0,r.UQ)({initialText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",inputsValidity:[x.isValid,_.isValid],isLoading:m}),h=b.buttonText,v=b.setButtonText,j=b.isSubmitDisabled;o.useEffect((function(){x.set(l.name),_.set(l.about)}),[l,i]);return o.useEffect((function(){i&&setTimeout((function(){x.ref.current.focus()}),100)}),[i]),(0,c.jsxs)(d,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:h,isOpen:i,onClose:a,onSubmit:function(e){e.preventDefault(),v("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),f({name:x.value,about:_.value}).then((function(){a()})).catch(console.log).finally((function(){v("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))},isSubmitDisabled:j,children:[(0,c.jsx)(u.I,{value:null!==(n=x.value)&&void 0!==n?n:"",onChange:x.onChange,ref:x.ref,error:Boolean(x.error),errorMessage:x.error,type:"text",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),(0,c.jsx)(u.I,{className:"popup__field",value:null!==(t=_.value)&&void 0!==t?t:"",onChange:_.onChange,ref:_.ref,error:Boolean(_.error),errorMessage:_.error,type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0})]})},m=function(e){var n=e.isOpen,t=e.onClose,i=o.useContext(p.Ec),a=i.updateAvatar,s=i.isLoading,l=(0,r.V$)(""),f=(0,r.UQ)({initialText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",inputsValidity:[l.isValid],isLoading:s}),m=f.buttonText,x=f.setButtonText,_=f.isSubmitDisabled,b=function(){l.clear(),t()};return o.useEffect((function(){n&&setTimeout((function(){l.ref.current.focus()}),100)}),[n]),(0,c.jsx)(d,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:m,isOpen:n,onClose:b,isSubmitDisabled:_,onSubmit:function(e){e.preventDefault(),x("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),a({avatar:l.value}).then((function(){b()})).catch(console.log).finally((function(){x("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))},children:(0,c.jsx)(u.I,{className:"popup__field",value:l.value,onChange:l.onChange,ref:l.ref,error:Boolean(l.error),errorMessage:l.error,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0})})},x=function(e){var n=e.isOpen,t=e.onClose,i=o.useContext(p.HY),a=i.addCard,s=i.isLoading,l=(0,r.V$)(""),f=(0,r.V$)(""),m=(0,r.UQ)({initialText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",inputsValidity:[l.isValid,f.isValid],isLoading:s}),x=m.buttonText,_=m.setButtonText,b=m.isSubmitDisabled,h=function(){l.clear(),f.clear(),t()};return o.useEffect((function(){n&&setTimeout((function(){l.ref.current.focus()}),100)}),[n]),(0,c.jsxs)(d,{name:"add",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442",buttonText:x,isOpen:n,onClose:h,onSubmit:function(e){e.preventDefault(),_("\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435..."),a({link:f.value,name:l.value}).then((function(){h()})).catch(console.log).finally((function(){_("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")}))},isSubmitDisabled:b,children:[(0,c.jsx)(u.I,{value:l.value,onChange:l.onChange,ref:l.ref,error:Boolean(l.error),errorMessage:l.error,type:"text",placeholder:"\u041c\u0435\u0441\u0442\u043e",minLength:"2",maxLength:"30",required:!0}),(0,c.jsx)(u.I,{className:"popup__field",value:f.value,onChange:f.onChange,ref:f.ref,error:Boolean(f.error),errorMessage:f.error,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0})]})},_=function(e){var n=e.isOpen,t=e.onClose,i=e.cardId,a=o.useContext(p.HY),s=a.deleteCard,l=a.isLoading,u=(0,r.UQ)({initialText:"\u0414\u0430",isLoading:l}),f=u.buttonText,m=u.setButtonText,x=u.isSubmitDisabled;return(0,c.jsx)(d,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:f,isOpen:n,onClose:t,onSubmit:function(e){e.preventDefault(),m("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),s(i).then((function(){t()})).catch(console.log).finally((function(){m("\u0414\u0430")}))},isSubmitDisabled:x})},b=function(e){var n=e.link,t=e.name,i=e.isOpen,a=e.onClose,o=(0,r.WO)(i,a),u=o.handleCloseOnOverlay,d=o.onAnimationEnd,p=o.isVisible;return(0,c.jsx)(c.Fragment,{children:p&&(0,c.jsx)("div",{onClick:u,onAnimationEnd:d,className:(0,l.A)(["popup","popup_type_image","popup_dark"],(0,s.Z)({},"popup_opened",i)),children:Boolean(i)&&(0,c.jsxs)("div",{className:"popup__container popup__container_image",children:[(0,c.jsx)("img",{className:"popup__full-screen-image",src:n,alt:t}),(0,c.jsx)("p",{className:"popup__location",children:t}),(0,c.jsx)("button",{onClick:a,className:"button popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"})]})})})},h=function(e){var n=e.text,t=e.error;return(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:n}),(0,c.jsx)("h4",{children:t})]})},v=o.memo((function(e){var n=e._id,t=e.name,i=e.link,a=e.likes,r=e.owner,u=e.onImageClick,d=e.onCardDelete,f=o.useContext(p.Ec).currentUser,m=o.useContext(p.HY).likeCard,x=f._id===r._id,_=a.some((function(e){return e._id===f._id}));return(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("img",{onClick:function(){u({name:t,link:i})},src:i,alt:t,className:"card__photo"}),(0,c.jsxs)("div",{className:"card__description",children:[(0,c.jsx)("h2",{className:"card__location",children:t}),(0,c.jsxs)("div",{className:"card__like",children:[(0,c.jsx)("button",{onClick:function(){m(_,n)},className:(0,l.A)(["button card__like-button"],(0,s.Z)({},"card__like-button_active",_)),type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a"}),(0,c.jsx)("p",{className:"card__likes",children:a.length})]})]}),x&&(0,c.jsx)("button",{onClick:function(){d(n)},className:"button card__delete-button",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})]})})),j=function(e){var n=e.onEditProfile,t=e.onAddPlace,a=e.onEditAvatar,s=e.cardProps,r=o.useContext(p.Ec).currentUser,l=r.name,u=r.avatar,d=r.about,f=o.useContext(p.HY).cards;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("section",{className:"profile",children:[(0,c.jsxs)("div",{onClick:a,className:"profile__avatar-container",children:[(0,c.jsx)("img",{className:"profile__avatar",src:u,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),(0,c.jsx)("div",{className:"profile__avatar-edit"})]}),(0,c.jsxs)("div",{className:"profile__info",children:[(0,c.jsx)("h1",{className:"profile__name",children:l}),(0,c.jsx)("button",{onClick:n,className:"button profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),(0,c.jsx)("p",{className:"profile__description",children:d})]}),(0,c.jsx)("button",{onClick:t,className:"button profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})]}),(0,c.jsx)("section",{className:"gallery","aria-label":"\u041f\u043e\u0441\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",children:f.map((function(e){return(0,c.jsx)(v,(0,i.Z)((0,i.Z)({},e),s),e._id)}))})]})},C=function(){var e=o.useContext(p.HY).error,n=(0,r.BF)({initialIsOpen:!1}),t=(0,r.BF)({initialIsOpen:!1}),s=(0,r.BF)({initialIsOpen:!1}),l=(0,r.BF)({initialIsOpen:!1}),u=(0,r.BF)({initialIsOpen:!1}),d=o.useState({}),v=(0,a.Z)(d,2),C=v[0],g=v[1],N=o.useState(""),O=(0,a.Z)(N,2),k=O[0],y=O[1],T={onCardDelete:o.useCallback((function(e){l.open(),y(e)}),[]),onImageClick:o.useCallback((function(e){var n=e.name,t=e.link;u.open(),g({name:n,link:t})}),[])};return e?(0,c.jsx)(h,{text:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",error:e}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(j,{onAddPlace:n.open,onEditAvatar:s.open,onEditProfile:t.open,cardProps:T}),(0,c.jsx)(f,{isOpen:t.isOpen,onClose:t.close}),(0,c.jsx)(m,{isOpen:s.isOpen,onClose:s.close}),(0,c.jsx)(x,{isOpen:n.isOpen,onClose:n.close}),(0,c.jsx)(_,{isOpen:l.isOpen,onClose:l.close,cardId:k}),(0,c.jsx)(b,(0,i.Z)({isOpen:u.isOpen,onClose:u.close},C))]})}}}]);
//# sourceMappingURL=932.ab880641.chunk.js.map