(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{pfKO:function(e,A,a){"use strict";a.r(A),a.d(A,"_frontmatter",(function(){return s})),a.d(A,"default",(function(){return g}));var t=a("wx14"),n=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),{}),l=function(e){return function(A){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",A)}},c=l("Row"),r=l("Column"),b=l("ArticleCard"),d={_frontmatter:s},p=o.a;function g(e){var A=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(p,Object(t.a)({},d,a,{components:A,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"This lab will allow students to learn how to intrument a hybrid application for observability using Instana.  The application consists\nof a cloud native component running in kubernetes (OpenShift) and a traditional server with IBM MQ and IBM App Connect Enterprise.",Object(i.b)("br",{parentName:"p"}),"\n","Once instrumented, students will explore the rich set of monitoring data available to monitor the traditional and cloud native infratructure,\nthe application, and the web traffic.  Students will see how Instana can help them get to root cause quickly and in an intuitive way by\nallowing the Instana UI to guide them through the diagnosis.  Students will also learn how to customize the environment and define custom Events."),Object(i.b)("p",null,"1) In the first portion of the lab, students will instrument kubernetes and IBM ACE and MQ for monitoring."),Object(i.b)("p",null,"2) Once instrumented, students will explore key aspects of the Instana user interface.   Part 1 must be completed before proceding the second\nportion of the lab."),Object(i.b)("p",null,"3) In the 3rd section of the lab, students will perform a diagnostic scenario in the hybrid application"),Object(i.b)("p",null,"4) Finally, in the 4th section students will learn how to perform administrative tasks."),Object(i.b)("p",null,"After completing the Login section, use the other links to go directly to one of the lab exercises."),Object(i.b)("p",null,"When you first login to the Soleil virtual machines, a chrome browser will open with multiple tabs.  The first tab will be this lab guide.  We recommend that you use\nthe lab guide within the virtual machine so that you can easily copy and past text into the terminal windows."),Object(i.b)("h2",null,"Logging into the Environment"),Object(i.b)("p",null,"  Before beginning the exercises, take the following steps to login to the soleil environment and access the lab environment."),Object(i.b)("p",null,"  After opening your browser and logging into the lab, you’ll see an image of a two computers.  The first is named thinkdemo. This\nserver is the kubernetes(OpenShift) cluster where the cloud native portion of the application will run."),Object(i.b)("p",null,"  ",Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"images/Skytap.png",alt:null}))),Object(i.b)("p",null,"  If the background is green, it means the virtual machine is running.  If it is not running, click the start arrow to start the VM\n",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"41px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.56097560975611%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXklEQVQ4y62UvUrEQBDHg73gC1hoZ6OV6Ev4GL6EndVZiYIgqJ1gZ2Ntd4VwxMPkQGwsjohevkniHeRj8zcT3DUk8UziLcxmsmR++5+dyUrIRpqmCzOJpkUOiSv0fR+O48B13fzZxmzbFn4OJIjneYjjGGEYIoqiVqbruvBzoGVZ/0qTFIqUKV1aqDvghDUrBAkSReEKi8Up+izz2fc7DyqPYoaVlHmAM4vRH/tiPWY/sDJ4LpCr+QhCbJ0r2L97xbsfVjZsDTQ+I+xcjrDcG2AzA18rBsKEVWCNgXoG3L5QsXYyxOrxI5YOH3BwP+6eMgF3r0ZYORpg/XSIXv8N5jTqDpwEETbOnrB38wJlMq3tgLnA8mGTmttnW2xAVWZNqvxbY2dh4qO/Gry2sesGSzv8ejRpmiZUJknS2kgQ93MgXTuqqkKW5U5WjJW41CAIYBgGTNNsbaSQ+wu/sb8AdSMFe84gXUoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 27 20 00 11",title:"2021 04 27 20 00 11",src:"/InstanaMiddlewareLab/static/37244716675d44157bc09fe79b5f6125/11028/2021-04-27-20-00-11.png",srcSet:["/InstanaMiddlewareLab/static/37244716675d44157bc09fe79b5f6125/11028/2021-04-27-20-00-11.png 41w"],sizes:"(max-width: 41px) 100vw, 41px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"  The 2nd VM is named “MQ and ACE”.  This VM is a traditional server running IBM MQ and IBM App Connect Enterprise."),Object(i.b)("p",null,"  After the VM is running, click the picture of the “thinkdemo” computer to launch the desktop.  Login to the virtual machine as the\nuser “demo” and password “Passw0rd”. "),Object(i.b)("p",null,"  For more information on using the soleil environment, scroll towards the bottom of the page."),Object(i.b)("h2",null,"Begin the Exercises"),Object(i.b)("p",null,"You are now ready to start performing the lab exercises.  You must complete the Installation section first.  After that, the sections can be done in any order.  For a new user of Instana, we recommend\nperforming the Explore Instana section of the labe next.  If you are already familiar with Instana, you can select any other section of the lab."),Object(i.b)("p",null,"Select one of the lab exercises in the upper left corner or select one of the images below."),Object(i.b)(c,{mdxType:"Row"},Object(i.b)(r,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(b,{color:"dark",subTitle:"Installing and Configuring Monitoring",title:"Install the Instana Monitoring Agent and Configure the Sensors",href:"/tutorials/Install",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHi1kpOTYr/xAAZEAADAAMAAAAAAAAAAAAAAAAAAQIDETH/2gAIAQEAAQUChIudIVOR5Loff//EABYRAQEBAAAAAAAAAAAAAAAAABEQIf/aAAgBAwEBPwE1n//EABYRAQEBAAAAAAAAAAAAAAAAABEBEP/aAAgBAgEBPwFIZ//EABkQAAIDAQAAAAAAAAAAAAAAAAAhAQIQEf/aAAgBAQAGPwJjzsDtOf/EABkQAQEBAAMAAAAAAAAAAAAAAAEhABAxUf/aAAgBAQABPyFRnkJJkuIOw0RgxvF//9oADAMBAAIAAwAAABDHH//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8Q29IXL//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQIBAT8QzwSF/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARIUFR/9oACAEBAAE/ENkrTDsKoK0mHKRl6axiOfAVSeRan//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"multi cloud",title:"multi cloud",src:"/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/2e753/multi-cloud.jpg",srcSet:["/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/69549/multi-cloud.jpg 288w","/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/473e3/multi-cloud.jpg 576w","/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/2e753/multi-cloud.jpg 1152w","/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/040c5/multi-cloud.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(r,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(b,{color:"dark",subTitle:"Explorer Instana",title:"Explore the Instana UI and Capabilities",href:"/tutorials/Explore",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACT0lEQVQ4y21Ty27TUBC1WLBACNQdAsQCqS0CJEAgWCPxdUj8BnuQUkjS4MTOo2lJ6ZNEgXRRoG0SkzSu7fiZw8z40bRipNF9zT33nJm5yo3lZ3hfWMGWeYDm7zZK1Rby2oZ4qbaJUn0Tqv4VH7b28bbXw7sfP9E1TSCM4PoB/CAU92jOrtx++RqfNB0OfPTPxjg8GuAX+eFRH3/6hozHJwYOBgZ2TyfYG59iNHURhgmQ5wtQGEXiyq1Xb5AvV8E2sRwYti0HEV2YzWa0O5MxoIvw2YmJ68L1PALzYDuO3I0YkO4oCw+f42NRhSvUg+yQzSOA3e8dBLQfEWjKguccww8xSKfbkxg25SYB5hKGaVDMDBgYI3wuaRiRVOGanM0SQDbbmWK1UsuYKtcWn2BF1WQRXgI0LQsFVceUJCIBjKJzdqKCUlGpNyUFArjw6AVydOl/DPn1vNoQ6fOpmJ/7dKY3NrIY5er9x8iVyhcAuRDMJPBddNs1mocZwND4Sz7KGHPea82WAAvg9eWnBFi58GokiQdc18LOtwIFe1IIth0q0vZ+J2PqUAt90RuYTuO0KFfuPUBRq8kiSFolHW3HpbN16bO0EFGSR64uG+eOJWc5VO4sYlWvZxIEOIiD+dVybU1kzVd4vsocW19vZS2nKHeXMoa27cAiP28JB2p1jV5PixKzS0H7Q4N+1YkwPB4MMRyNmeESClrch83WNrb22hlbbhcGTFMwDyjyyc/oZ5VIoWnZsi+ART1mOJ6YEpBK55GTLutLktMYlsqNn6r4BxDKCqnHq25kAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"InstanaTopology",title:"InstanaTopology",src:"/InstanaMiddlewareLab/static/306598c97c969e0d54a1331e06d5281c/3cbba/InstanaTopology.png",srcSet:["/InstanaMiddlewareLab/static/306598c97c969e0d54a1331e06d5281c/7fc1e/InstanaTopology.png 288w","/InstanaMiddlewareLab/static/306598c97c969e0d54a1331e06d5281c/a5df1/InstanaTopology.png 576w","/InstanaMiddlewareLab/static/306598c97c969e0d54a1331e06d5281c/3cbba/InstanaTopology.png 1152w","/InstanaMiddlewareLab/static/306598c97c969e0d54a1331e06d5281c/f3527/InstanaTopology.png 1357w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(r,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(b,{color:"dark",subTitle:"Diagnose a Problem",title:"Learn How Instana Can Help you Quickly Diagnose a Complex Problem",href:"/tutorials/Diagnose",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAYdnu1xYVA//xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREhMhMf/aAAgBAQABBQKDVvzGyLsfTYf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGH/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAEhUXEREv/aAAgBAQAGPwJK6OwYPDy7klH/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhQWExcZH/2gAIAQEAAT8h4qcavI6T4YjdkU/jxFIQDRRVR3sUp7Tor1k//9oADAMBAAIAAwAAABAUH//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EKr/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAECAQE/EHsjP//EAB0QAQACAgMBAQAAAAAAAAAAAAERIQAxUWFxQaH/2gAIAQEAAT8QfMHQvfX7hpxF6UgXfZD7WXSJg2UMGzc7wRERFKWQl4tINoarLAcd5NvnyaeGf//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"prereqs",title:"prereqs",src:"/InstanaMiddlewareLab/static/0efc2e819bc8b55fa24b4d70cd67db29/2e753/prereqs.jpg",srcSet:["/InstanaMiddlewareLab/static/0efc2e819bc8b55fa24b4d70cd67db29/69549/prereqs.jpg 288w","/InstanaMiddlewareLab/static/0efc2e819bc8b55fa24b4d70cd67db29/473e3/prereqs.jpg 576w","/InstanaMiddlewareLab/static/0efc2e819bc8b55fa24b4d70cd67db29/2e753/prereqs.jpg 1152w","/InstanaMiddlewareLab/static/0efc2e819bc8b55fa24b4d70cd67db29/040c5/prereqs.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(r,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(b,{color:"dark",subTitle:"Administer Instana",title:"Learn How to Perform Administrative Tasks in Instana",href:"/tutorials/Console_Access",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMEBf/aAAwDAQACEAMQAAABTflt6Ek8wG//xAAaEAACAwEBAAAAAAAAAAAAAAABAgMRIgAT/9oACAEBAAEFAolvmioONROb9WIZtf/EABcRAAMBAAAAAAAAAAAAAAAAAAABEQL/2gAIAQMBAT8B0Kw//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAhMf/aAAgBAgEBPwHXkpf/xAAXEAEAAwAAAAAAAAAAAAAAAAABACAh/9oACAEBAAY/ApgV/8QAFxABAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAQABPyER2F1DhsYzYccBdnVf/9oADAMBAAIAAwAAABCY7//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAIuxwv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxCQeCtn/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFBUYH/2gAIAQEAAT8Qw/fAhchYG3SWofSUEeSY1DN7j5QT/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"secure access",title:"secure access",src:"/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/2e753/secure-access.jpg",srcSet:["/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/69549/secure-access.jpg 288w","/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/473e3/secure-access.jpg 576w","/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/2e753/secure-access.jpg 1152w","/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/040c5/secure-access.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("hr",null),Object(i.b)("h2",null,"Using the soleil environment"),Object(i.b)("p",null,"  There are a couple of things that are important to know when using the soleil environment.  At the top of the screen you will see a menu bar.  You’ll notice a full screen icon as shown below. You’ll have a much better experience with the lab if you use full screen."),Object(i.b)("p",null,"  ",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"450px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"7.638888888888888%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiUlEQVQI1x3MQRJDMABAUXepa9S0O2Mhm8qCkqgigiIXqEWd+zdj8Xd/XjCNI1JKnHP0fYfWinG0lOWTYRgwxvh6mubFcfzOL89z5nnGWotSijiOEUKwriuBMQNpKvgsC7quKQoP+fGRZbRtd/ZuW8qq4rvvTB7KMukhTZIk3O53LmHINYrYNscfWtdVGODDasAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 27 20 24 32",title:"2021 04 27 20 24 32",src:"/InstanaMiddlewareLab/static/ab067aa7ba078c01ca30e4cabb5d3a61/532bf/2021-04-27-20-24-32.png",srcSet:["/InstanaMiddlewareLab/static/ab067aa7ba078c01ca30e4cabb5d3a61/7fc1e/2021-04-27-20-24-32.png 288w","/InstanaMiddlewareLab/static/ab067aa7ba078c01ca30e4cabb5d3a61/532bf/2021-04-27-20-24-32.png 450w"],sizes:"(max-width: 450px) 100vw, 450px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"  Another icon on the taskbar that is important is the clipboard icon"),Object(i.b)("p",null,"  ",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"450px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"7.638888888888888%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAiElEQVQI1x2MOQ6DMADA+FPZy1wkGMpNCVCuHFUiIbHRkXe7UQcvluXgYwxFUbDvO9u2Mgw9xmi67oVSCimlZ2Oa3lzXxXEcNE3DOI7E8YNeCLTWtN45ZwmkVCRJinWOwUdt60c+yPKcZVn/zPOCED3n+aUsK+5RRJKm3MKQqq790PDMcqx1/ABP7VV5YEL5lwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 28 10 47 13",title:"2021 04 28 10 47 13",src:"/InstanaMiddlewareLab/static/4de010df1906b878e7d722ada9996b78/532bf/2021-04-28-10-47-13.png",srcSet:["/InstanaMiddlewareLab/static/4de010df1906b878e7d722ada9996b78/7fc1e/2021-04-28-10-47-13.png 288w","/InstanaMiddlewareLab/static/4de010df1906b878e7d722ada9996b78/532bf/2021-04-28-10-47-13.png 450w"],sizes:"(max-width: 450px) 100vw, 450px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"  The only way to paste content into the virtual machine is by using this icon."),Object(i.b)("p",null,"  To copy text into the virtual machine, perform a copy as you normally would do on your laptop/desktop.  Then, click the clipboard icon. You will notice that there is text within the clipboard user interface"),Object(i.b)("p",null,"  ",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"599px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVQoz62Sy27bMBBF9aVdZZVlV/2cbvsbRRYF0oVh2HrEelCy4toSqbcomnJ8O6QTOd1XwMVweM+IEnidIAiwC0MIIdA0Der6QzX1LWQrF/VNb/fvzE1mjnOBOI7hFMcDKl5gPk84q5uUktBUx6nHSxtYeY2L03DErM7W/2CXmYkO7Fo4v90EHjshLTqc6tHqWA+oGo1NmeBh84iv/jd82TzgO/uBrr3iT9Uv7GeJdoLz9Bzi53OEX6sE5/kKpd8WTfqCQU/otbSSWv/j37k3zJcrfYiCg//4iF7DqeUFnBain1ENdxnT1LJVKDsFMeib3vdNNf1n/iAknJhlyPavYFlulaR7mL19fqB1hn6QaLsB6Z588gwbxgwZ+en7nOlPhYCc6JejKKTrjqwYS5AmMaJwZ/uQqomEols0kTA9SxLybzOM2Jjmfc9Dnu8h5QhnvV5ju91a+cELfJbDDenF9HWMMZRlSaCEyetqtYLrulaeT1GKM2x2MRLisiyzGXU45xBVZYNdUUiLdgTv6EYnk0eFieo4jqiIsSxxnA7hokLRGXYkRi3sXwZx709bZNE5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 27 20 40 37",title:"2021 04 27 20 40 37",src:"/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/747eb/2021-04-27-20-40-37.png",srcSet:["/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/7fc1e/2021-04-27-20-40-37.png 288w","/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/a5df1/2021-04-27-20-40-37.png 576w","/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/747eb/2021-04-27-20-40-37.png 599w"],sizes:"(max-width: 599px) 100vw, 599px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"  This will make the text available within the virtual machine. Then, within the virtual machine, either type “Ctrl-V” or right-click and use your browser to paste the text into the virtual machine."),Object(i.b)("p",null,"  To copy text from the virtual machine, do the process in reverse.  Copy the text inside the virtual machine.  Then, click the clipboard icon and you will notice that the text is visible on the screen."),Object(i.b)("p",null,"  ",Object(i.b)("span",Object(t.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"599px"}}),"\n      ",Object(i.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVQoz62Sy27bMBBF9aVdZZVlV/2cbvsbRRYF0oVh2HrEelCy4toSqbcomnJ8O6QTOd1XwMVweM+IEnidIAiwC0MIIdA0Der6QzX1LWQrF/VNb/fvzE1mjnOBOI7hFMcDKl5gPk84q5uUktBUx6nHSxtYeY2L03DErM7W/2CXmYkO7Fo4v90EHjshLTqc6tHqWA+oGo1NmeBh84iv/jd82TzgO/uBrr3iT9Uv7GeJdoLz9Bzi53OEX6sE5/kKpd8WTfqCQU/otbSSWv/j37k3zJcrfYiCg//4iF7DqeUFnBain1ENdxnT1LJVKDsFMeib3vdNNf1n/iAknJhlyPavYFlulaR7mL19fqB1hn6QaLsB6Z588gwbxgwZ+en7nOlPhYCc6JejKKTrjqwYS5AmMaJwZ/uQqomEols0kTA9SxLybzOM2Jjmfc9Dnu8h5QhnvV5ju91a+cELfJbDDenF9HWMMZRlSaCEyetqtYLrulaeT1GKM2x2MRLisiyzGXU45xBVZYNdUUiLdgTv6EYnk0eFieo4jqiIsSxxnA7hokLRGXYkRi3sXwZx709bZNE5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2021 04 27 20 40 37",title:"2021 04 27 20 40 37",src:"/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/747eb/2021-04-27-20-40-37.png",srcSet:["/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/7fc1e/2021-04-27-20-40-37.png 288w","/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/a5df1/2021-04-27-20-40-37.png 576w","/InstanaMiddlewareLab/static/b2a975d864e14ad6e15e01e3f3b0afc2/747eb/2021-04-27-20-40-37.png 599w"],sizes:"(max-width: 599px) 100vw, 599px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("p",null,"  Whatever text you see on the VM clipboard, you’ll be able to past within your laptop/desktop."),Object(i.b)("p",null,"  Note:  The clipboard is a little bit unreliable.  You may need to attempt to copy/paste a couple of timess.  Also, try to avoid clicking in multiple places on the screen. Copy the content (Ctrl-C), click on the clipboard, then immediately paste to either your laptop or into the virtual machine."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-acf8011e831928711729.js.map