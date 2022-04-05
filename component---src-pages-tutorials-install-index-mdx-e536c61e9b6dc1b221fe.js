(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{W9NE:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n("wx14"),A=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("013z"),s=(n("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=l("Row"),r=l("Column"),d=l("ArticleCard"),h={_frontmatter:s},u=i.a;function p(e){var t=e.components,n=Object(A.a)(e,["components"]);return Object(o.b)(u,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this portion of the lab, you will be installing the Instana Monitoring, installing the “Quote of the Day” hybrid application, and configuring the Instana to monitor the application."),Object(o.b)("p",null,"At this point, you should be logged into Soleil and should see the two virtual machines.\n",Object(o.b)("span",Object(a.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"629px"}}),"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAACl0lEQVQ4y4VU2Y7bMAz0/39X+1Cg3U1zOpusncSOT1m+7fiIpySTLLJboBUwECWPKHJI2XjVcyxOa+x2FnaWhe1uj+V6I9ju37G3baxME2/vFsy3HX4vllhv33BwXKw2JtwwQlbVSItSYMy8BV7M31itTSFsiDxfrrBYrbHcbGAfT3SRjcPJwbt9EMe89sjRjmwvUsifHZ7dkMgu4jSDEqTQeYEkyxHrVMhl06KoG5nL9iLzbf/yyZk4dH0ffpwgr2+krKw+wGt2JIfrGjntPR9+gL8/YDieL+lt93ucg1AcMYnnIFZYk36rvY0XO4ATJUgp+mcOz8xjxImGsSddZiS0H8UfBAZHdnTP+PU6w2xOOs+XUiTXDz7xGByUSwjIh1GUJcqq/CvdxyHWkjXVef5hf+Xx5Q8YPw4KP48JfKVhUyUZHEWoEqkwV/d09qRgvGbb4n1qGy6adTziTPwouZ03Too2wxRxVoCjZWR3oaUgFIFEJekVouG/YHg5MA4DussAXXcIcnLSdMiyDGEYIqdUx3FE27bo+wHX6/UTxi9rI6qAtusQVwqquiAqL8jaAU1DfUfRdvSNBzv935imCYalgLq/4HvxDTa1hekqmE5IhaoluiShVqFmr6pKbE12ycWgb+V9j3l88URODfA0TXJDkWpkOkFMqSoS/EwFcBwHCdme5yGMIri6Qlw0CLKaXldOHBdBEGAg2XgYJz1JhLPiBUHZwNYtVN1jYn3GuzaU7mNmvaeHTeA0x7stGmYt0I8D3M6hhx7DcgPYzhn6KcKQ9hNFr4Eid4OIKl9Lm3HkPj3diCJnScThdB2kergCZXFrnZQqLO1CeinSqKT2iVWMnFunGegH0dPcoyCdY7oo0ZpSHgV/ALXtut4fDYHjAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Skytap",title:"Skytap",src:"/InstanaMiddlewareLab/static/037319eac7eaf173bc82fdd094111105/8cb46/Skytap.png",srcSet:["/InstanaMiddlewareLab/static/037319eac7eaf173bc82fdd094111105/7fc1e/Skytap.png 288w","/InstanaMiddlewareLab/static/037319eac7eaf173bc82fdd094111105/a5df1/Skytap.png 576w","/InstanaMiddlewareLab/static/037319eac7eaf173bc82fdd094111105/8cb46/Skytap.png 629w"],sizes:"(max-width: 629px) 100vw, 629px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null,"If you haven’t already done it, click on the thinkdemo VM"),Object(o.b)("p",null,"Click on the window and you will see a login dialog.  Login as demo with a password of “Passw0rd”"),Object(o.b)("p",null,"After logging in, you will see that chrome has already been opened with 3 tabs at the top.  The first tab is the lab guide.  The 2nd tab is the Instana user interface,\nand the 3rd tab is a list of user accounts.  From this point forward, we recommend you use the lab guide within the virtual machine."),Object(o.b)("p",null,"Open the 3rd tab and review the user accounts.  You’ll notice 3 columns.  The first column is the student name.  This matches the student name that you were assigned.\nNext to the Student Name, you will see an “Instana Login” column.  This column represents the username that you will use to login to the Instana user interface.  Find\nthe username associated with your “Student Name”.  Finally, you will see a password column.\n",Object(o.b)("span",Object(a.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"723px"}}),"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"10.069444444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVElEQVQI101MSQoAIQzz/0/Vqm0PgmCtJDAwh5CVlDFGAqpKFpGccxLuzrz3Tl9rpTczdgA0ui8vOMEQ4VorW2s8xfick3tvepyiw+beyy4iyH/9ACtTmUYOm3hWAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"accounts",title:"accounts",src:"/InstanaMiddlewareLab/static/2d9f073509407224164ebd60d7103164/9f764/accounts.png",srcSet:["/InstanaMiddlewareLab/static/2d9f073509407224164ebd60d7103164/7fc1e/accounts.png 288w","/InstanaMiddlewareLab/static/2d9f073509407224164ebd60d7103164/a5df1/accounts.png 576w","/InstanaMiddlewareLab/static/2d9f073509407224164ebd60d7103164/9f764/accounts.png 723w"],sizes:"(max-width: 723px) 100vw, 723px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null," Click on the 2nd tab in the browser to open the Instana user interface.  You’ll see a login dialog.\n",Object(o.b)("span",Object(a.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"482px"}}),"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98.2638888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACf0lEQVQ4y5VT227TQBD1C1/Ar/DCHYkH+CW+BwnUKikVSqu2AoR6DSqUpFEJVSlNL3bq2ImT2N71ZZ3DzBIXB1olrHQ0s+PZ49kzs0bP66O6u4da40Db3b06oab9euMbdr/UEAoBXqPRCNOWcdI6w8LbJbyaf4OXr0uo7R9gee0D3n3coPgyygSv35+dMMsyCKpAMqS8MXEWMk0YxwmSJNEH0lRpn2NRFGubpukV2UwVOm4XG9ufcHh0jObhEVgC9vdqDXz+uq+1ZeKccBroyiO6ajRxiBdLkWPWpQmDUMB2umjbLpRSUESQ2yKpmoL8x0acsIYpUiJhDbWOpBsjHus5FZQnSXMuRBPynFlWGybh/MKCbXfQcVzdoFkXF8T5ussRwaeRkVEElsALQvhkec9/ngaeCCGkvp3Bs2dRp49tBz1vwMpioFKI/2jGxNgwu+X2ceZ68AYhVavQExF6YUR/JuIomRk8MUY/SHDuxDg2hzixfBydE3lHou1lsHpqAu0CJuKewoVL149TGJ4f42dboHni4nurp23rUmhCs6tgFg7qfSFmXiHTRUm6EXVZIRDcmAwe2S5ByBQ+2aAAayjQ8aWOs+8GUucFOv93Ds+jwe+CHo0WNKBmDNPxixkj97tJjGwcseMI+8MBrEiiRSP3IwxwKgXSEREWO6RI1OSG7vo06H/eGCBp7q7t8rxp4s76Oh5vbeHu5qbGA/J5/4jwdGcHz6tV7efxe5Rzn/Bke1vjIcWeUc4pVWu8aDZhzM3BWFiAUS7/i8VF3F5Zwa1K5frvjFJJ59UHAxiN4RCVy0usdTpYLYD3ZcvCkm1jeYzVv3LyvBXCe8dBSDL8Aq921taZCGhEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"login",title:"login",src:"/InstanaMiddlewareLab/static/5fd55e363e7179b9ac347036fcf581e6/20d66/login.png",srcSet:["/InstanaMiddlewareLab/static/5fd55e363e7179b9ac347036fcf581e6/7fc1e/login.png 288w","/InstanaMiddlewareLab/static/5fd55e363e7179b9ac347036fcf581e6/20d66/login.png 482w"],sizes:"(max-width: 482px) 100vw, 482px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nEnter the “Instana Login” name associated with ",Object(o.b)("strong",{parentName:"p"},"your student name")," and enter the password that you found on the 3rd tab. Finally, click the Login button."),Object(o.b)("p",null," You will see the summary page for Instana.  We’ll come back to the user interface later.  "),Object(o.b)("p",null," For now, open a Terminal window within the virtual machine.  To do this, select “Applications” in the upper left corner.  Then, flyover “System Tools”. Finally, select “Terminal”\n",Object(o.b)("span",Object(a.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"516px"}}),"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.7638888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC10lEQVQ4y3VTyW4TQRCdf+ULuCHugJDgxAW4gBQQAhIJQgAhRUCME+9bPJ593/exjRQiLo/qdhw5iTk89Ux39auqV6+FB4/2cOflFHdfjHH7+RhvXx1iMhxA1m1IioF2b4jxVEJ3MIZmOHD9GI4XEiI4/k0Io2Yf/cYAg+MRukd9aGMRSRwh3kASx0iSGGmaIEtTZFmKNEn43nUIi7pAlUXwHRN5HGC5XKCsKlSEsixh2jYFJgiCEFEUIyLyIAiINLuIuQqBBfgUrGo6LNuhwJwTFUWJPM8gaSY834eu6zBMEzYlUBSFkzLCoiiuQCjLgl8wDJNINbiexwkZWBWyPIPjODAti1+o65qjqkr+v469JGz1+qRNyrMzUkVREVOLLHue57BMnVcThuGNajaJ1sTCmw/7qOhDnEnwqdJ1ENtL0gxT2URAZKqq8io321yTbELYO/iKkg410ohtsHZWhwWyvIIhjxB5Btd5W5XXiYXdT19Q04dCFfikn+e6yEk7HlDkcIYfEdgKVefAduxLDf9bISdcLqGaFiyPhuO4SPPVpHOatC6eIHBN7gCXkjGtHVq36bci3D/A3NIgNY+QqxJ+29R64HEvMttoYgdRGHAnsJbZxL0LJ2wl3NvZwWJGz6rfhTXsweq1UY17XPw4TiBKHq0xOcDgHmQTX8znK6ItEHZpynNNgnj0HdF0jEKeoqRXU9ZzJNR6d9qBF4UIiNyL6EURec4mTec3QPvCLpsy/Uj0UlhgtVjQAQlP+oWaiHuPb2HS+gl/JsKmhCp1EpDZ556DyiUbufYKrAhKvBoKud4ijzGrFKQbS1BIp9DbTbx+9hSjxg9InRPI3Rbs09EKk6uwKFncbUJ4R0P5e36+ITJNeE5VziaQaVBPHt5H5/AbJse/CA0Yo8FWaEQatRsQ3u9/xp+zM6SX3iNSttJzrGwTZ3GImlqqqT2G0ja2gNq1mDt8/AOzCdCUyKOMwgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"terminal",title:"terminal",src:"/InstanaMiddlewareLab/static/b6232b3a783eda78ef0f89bbeb43ab2b/31011/terminal.png",srcSet:["/InstanaMiddlewareLab/static/b6232b3a783eda78ef0f89bbeb43ab2b/7fc1e/terminal.png 288w","/InstanaMiddlewareLab/static/b6232b3a783eda78ef0f89bbeb43ab2b/31011/terminal.png 516w"],sizes:"(max-width: 516px) 100vw, 516px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(o.b)("p",null," A terminal window will open.  Select the terminal windows."),Object(o.b)("h2",null,"Preparing to Install the Instana Agent"),Object(o.b)("p",null,"Next, we’ll be installing the Instana Agent.  "),Object(o.b)("p",null,"To make things easier, we’ll switch to the root user account using “sudo”"),Object(o.b)("p",null,"Type the follwing command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"sudo -i\n")),Object(o.b)("p",null,"When prompted, enter “Passw0rd” for the password."),Object(o.b)("p",null,"Throughout these procedures, we are going to be using your student name for various naming conventions and to identify objects.  In order to simplify the steps in this document,\nyou are going to setup an environment variable named $STUDENT and set it to the student name that you were assigned (student1 through student30) "),Object(o.b)("p",null,"Type the following command, but replace STUDENTXXX with your student name."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"export STUDENT=**STUDENTXXX**\n")),Object(o.b)("p",null,"The commend should look something like this:   ",Object(o.b)("strong",{parentName:"p"},"export STUDENT=student27")),Object(o.b)("p",null,"Test to make sure the variable was set properly.  Type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'echo $STUDENT```\n\n\nThroughout this lab, we will be using the "oc" command to run commands within OpenShift.  The "oc" command is similar to kubectl for other versions of kubernetes.  There are\nsome minor syntax differences.\n\nBefore installing the Instana Agent, we need to create a namespace (OpenShift Project) where the Agent will run.  Type "oc create namespace instana-agent" to create\nthe namespace.\n ![](images/namespace.png)\n\n Next, change your context to the instana-agent namespace (OpenShift project) by typing "oc project instana-agent".  If you want to confirm that you have changed to the \n instana-agent project, type "oc project".\n\n Next, you need to setup the proper permissions for the Namespace/Project.  This will allow the Agent to have access to monitor the entire cluster.\n\n Type the following command:   oc adm policy add-scc-to-user privileged -z instana-agent\n \n You should see output similar to the screen capture below.\n  ![](images/permissions.png)\n\nYou are now ready to install the Agent.   \n\n\n\n## Install the Instana Agent\nLeave the Terminal window open, but select the browser and navigate to the tab containing the Instana user interface.   \n\nSelect the "Stan" the robot icon in the upper left corner\n  ![](images/stan.png)\n\nNext, click the "Deploy Agent" button near the upper right corner.\n  ![](images/DeployAgent.png)\n\nA window will open with a list of different environments where you can install the Instana Agent.  In this lab, we are installing into OpenShift, so select OpenShift from the list.\n  ![](images/OpenShift.png)\n\nSelect the dropdown list next to the word "Technology".  Notice that there are multiple options for installing the Agent.  Choose the "YAML" option from the list.\n  ![](images/yaml.png) \n\nEnter a name for the Cluster and Zone as seen below.  Use your student name for the Cluster name and your student name for the Zone name.  This will allow you to find\nyour Agent and Kubernetes Cluster within the user interface and not get confused by data coming in from other students.\n  ![](images/ZoneCluster.png) \n\nNext, click the "Download" button to download the yaml file.  The yaml file has been configured specifically to connect to your Instana SaaS environment.\n  ![](images/Download.png) \n\nYou can now install the downloaded yaml file into the environment. This will install the Instana Agent as a daemonset within the OpenShift cluster.  The process is nearly\nidentical for other versions of kubernetes.\n\nTo install the Agent from the yaml file, type:  oc create -f /home/demo/Downloads/configuration.yaml\n  ![](images/install.png)\n\nYou will notice one error on the screen which simply indicates that it attemped to create the "instana-agent" project, but it already existed.  This error can be ignored.\n\nNext, type:  oc get pods\n\nThis will provide a list of the pods that are in this namespace (project).  Notice that the instana-agent pod is running.\n  ![](images/pods.png)\n\nIf the pod is not running, wait a minute and issue the "oc get pods" command again.\n\nOnce the pod is running, navigate to the Instana user interface.   Leave the terminal window open because you will be using it later.\n\n\n## Install the Quote of the Day Application\nNext, you\'ll be installing the "Quote of the Day" application.   For the containerized portion of the application, a lot of the monitoring instrumentation.  In some cases, minor \nconfiguration changes are necessary.  You\'ll see that when we deploy the "Quote of the Day" application, we\'ll specify that we want to enable the Instana monitoring.\n\nFor more information about the Quote of the Day application, you can go to this GitLab location:  https://gitlab.com/quote-of-the-day/quote-of-the-day\nIt is not necessary to go to this GitLab location, but you might be interested in learning more about the application.\n\nThe first thing you need to do is to create namespaces (projects) for the application and the load generation tool to run.   Then, you need to setup the OpenShift permissions\nfor those projects.  Run the following commands.   When you run the commands, **specify your student name** instead of student***. \n\nFor example, if your student name is student27, issue the following command:   oc create namespace student27\n\nIssue the following 6 commands, replacing student*** with your student name:\n\noc create namespace student***-load\n\noc project student***-load\n\noc adm policy add-scc-to-user anyuid -z default\n\noc create namespace student***\n\noc project student***\n\noc adm policy add-scc-to-user anyuid -z default\n\n\nThe helm repository where we will be installing the application has already been setup on your virtual machine.  But, let\'s update the helm repo to ensure we get the current code.\nIssue the following command:\n\n**Perform the helm install of Quote of the Day**\n\nYou should see output indicating that it successfully got an update to the "qotd" chart repository.\n  ![](images/HelmUpdate.png)\n\nNext, you need to define a Website within the Instana user interface.  Open the browser tab with the Instana UI.  Then, click on the Websites & Mobile Apps icon hear the upper left corner.\n  ![](images/Websites.png)\n\nYou will see a list of previously defined Websites.   You are going to create a new Website by clicking on the "+ Add Website" link near the upper right corner.\n  ![](images/AddWebsite.png)\n\nA dialog will open asking for a Website Name.  Enter your student name as the Website Name as seen below.\n  ![](images/WebsiteName.png)\n\nA dialog will open with some javascript.  For an existing web application, you could add this javascript to the HTML pages.  But, in this case, we will use it when we deploy The\nQuote of the Day application.\n  ![](images/WebsiteKey.png)\n\nAs seen in the dialog, copy the value associated with the "key".  Do not include the single quotes when you copy the text.  You\'ll use the key when performing the helm install of the \napplication.  This will allow the application to send End User Experience (EUM) data to the Instana server.\n\nYou will be issuing a helm install command to install the application.  Before you do the install, you need to make sure the helm command matches your environment.  You previously \ncreate two namespace(projects) using your student name.  We\'ll be using those names in the command.\n\nEdit the following file using vi or the Linux Test Editor that can be found under the Applications->Accessories menu.  Edit /media/qotd\nOnce the file is open, go to the bottom of the screen where you\'ll see the following command:\n\nhelm install student6 qotd/qotd --set host=apps.console.thinkdemo.tivlab.raleigh.ibm.com --set instanaReportingUrl=https://eum-coral-saas.instana.io --set instanaEnumMinJsUrl=https://eum.instana.io/eum.min.js --set instanaKey=aOY24DI5TziFBCfXFQEHuQ --set enableInstana=true --set appNamespace=student6 --set loadNamespace=student6-load --set useNodePort=true --set branding="student6"\n\nYou need to change 2 things within this helm command.   \n1) Replace student6 with your student name. \n2) Rplace the instanaKey with the key for the website that you created earlier within the Instana UI.   \n\nNow that you have edited the /media/qotd file, save your changes.\n\nNext, select the helm install command.  Then, right click and select "Copy"\n  ![](images/Copy.png)\n\nNow, open the terminal window.  Within the terminal window, right click and select "Paste" to paste the helm command into the terminal window.\n  ![](images/Paste.png)\n\nPress the "Enter" key to run the helm install.  You should see output similar to what\'s shown below.\n  ![](images/HelmInstall.png)\n\nAt this point, the application should be running.  In addition, the load generation tool is continuously running transactions against the application.  Let\'s verify that things are \nrunning.\n\nType:  oc get pods -n student***\nReplace student*** with your student name\n\nYou should see results similar to what\'s shown below.\nNAME                              READY   STATUS    RESTARTS   AGE\nqotd-author-67cf448cc-5pcxg       1/1     Running   0          2d7h\nqotd-author-67cf448cc-tfvsc       1/1     Running   0          2d7h\nqotd-db-546b4b7fbd-g2kcs          1/1     Running   0          2d7h\nqotd-engraving-7d65f94f85-8k9xz   1/1     Running   0          2d7h\nqotd-engraving-7d65f94f85-jlq6c   1/1     Running   0          2d7h\nqotd-image-7c7958b79f-bzkg6       1/1     Running   0          2d7h\nqotd-image-7c7958b79f-v9jls       1/1     Running   0          2d7h\nqotd-pdf-7bcbc7d97b-hcw7w         1/1     Running   0          2d7h\nqotd-quote-799b6b7f6d-lc78t       1/1     Running   0          2d7h\nqotd-quote-799b6b7f6d-smbw2       1/1     Running   0          2d7h\nqotd-rating-fc4d48bcb-dtbmq       1/1     Running   0          2d7h\nqotd-rating-fc4d48bcb-g4gsl       1/1     Running   0          2d7h\nqotd-rating-fc4d48bcb-xhddn       1/1     Running   0          2d7h\nqotd-web-876ccc966-9tqbd          1/1     Running   0          2d7h\nqotd-web-876ccc966-hhv68          1/1     Running   0          2d7h\n\nIf the pods are not running, wait a minute and try the "oc get pods" command again.\n\nNext, verify that the automated workload is running.\nType:  oc get pods -n student***-load\nReplace student*** with your student name.\n\nYou should see results similar to what\'s shown below.\nNAME                           READY   STATUS    RESTARTS   AGE\nqotd-load-6dd948db76-4nb2p     1/1     Running   3          41d\nqotd-load-6dd948db76-n7z6l     1/1     Running   3          41d\nqotd-load-6dd948db76-p6h84     1/1     Running   3          41d\nqotd-load-6dd948db76-zwhvr     1/1     Running   3          41d\nqotd-usecase-bb7cf7ccd-74hmr   1/1     Running   3          41d\n\nIf the pods are not running, wait a minute and try the "oc get pods" command again.\n\n**Configure Quote of the Day to use an external ACE and MQ**\nThe next step is to modify the configuration of the Quote of the Day application so that it uses an external ACE and MQ server.  By default it simulates the ACE/MQ workload.\n\nYou will do this by editing the deployment for the qotd-engraving.  In the command shown below, change studentXXX to your student name.\n\nType the following command:  \n```sh\noc edit deployment qotd-engraving -n $STUDENT\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Install and Configure the Instana Agent for ACE and MQ")),Object(o.b)("p",null,"This concludes the section of the report on Chargeback. In this section, you’ve learned how to create reports, view reports generated by other people, assign rate cards, schedule reports, and more.  "),Object(o.b)("p",null,"To continue other portions of the lab, select one of the lab exercises in the upper left corner or select one of the images below."),Object(o.b)(c,{mdxType:"Row"},Object(o.b)(r,{colLg:3,colMd:3,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(d,{color:"dark",subTitle:"Automation with VMware",title:"Want to learn how to automate infrastructure management in VMWare vSphere?",href:"/tutorials/vmware",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHi1kpOTYr/xAAZEAADAAMAAAAAAAAAAAAAAAAAAQIDETH/2gAIAQEAAQUChIudIVOR5Loff//EABYRAQEBAAAAAAAAAAAAAAAAABEQIf/aAAgBAwEBPwE1n//EABYRAQEBAAAAAAAAAAAAAAAAABEBEP/aAAgBAgEBPwFIZ//EABkQAAIDAQAAAAAAAAAAAAAAAAAhAQIQEf/aAAgBAQAGPwJjzsDtOf/EABkQAQEBAAMAAAAAAAAAAAAAAAEhABAxUf/aAAgBAQABPyFRnkJJkuIOw0RgxvF//9oADAMBAAIAAwAAABDHH//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8Q29IXL//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQIBAT8QzwSF/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARIUFR/9oACAEBAAE/ENkrTDsKoK0mHKRl6axiOfAVSeRan//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"multi cloud",title:"multi cloud",src:"/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/2e753/multi-cloud.jpg",srcSet:["/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/69549/multi-cloud.jpg 288w","/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/473e3/multi-cloud.jpg 576w","/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/2e753/multi-cloud.jpg 1152w","/InstanaMiddlewareLab/static/c9b7861020998cb44c77fb3492a3e5ec/040c5/multi-cloud.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(r,{colLg:3,colMd:3,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(d,{color:"dark",subTitle:"Automation with the Public Cloud",title:"Want to learn how to automate infrastructure management in Public clouds?",href:"/tutorials/ibmcloud",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQT/2gAMAwEAAhADEAAAAeU3seeAWBX/xAAbEAACAQUAAAAAAAAAAAAAAAABAgMABBAiMf/aAAgBAQABBQLU1JbY4oJDyQKzf//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhNh/9oACAEDAQE/AVhfE//EABgRAAIDAAAAAAAAAAAAAAAAAAABERNR/9oACAECAQE/AZ0qZ//EABsQAAICAwEAAAAAAAAAAAAAAAABETECAxAS/9oACAEBAAY/AoeKZOviLPVSf//EABoQAAIDAQEAAAAAAAAAAAAAAAABESExQVH/2gAIAQEAAT8haTaNoqbpXhhURWyRLREj6Qj/2gAMAwEAAgADAAAAEAcf/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARIVH/2gAIAQMBAT8QSN4nV2f/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EFeCuo//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUGBkdH/2gAIAQEAAT8QuH+ACdkW2Hlez7EUiUkL20rtceRJhLSTSRWDFz//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"public cloud",title:"public cloud",src:"/InstanaMiddlewareLab/static/24b0863c3ee7a3421e3c87a052448094/2e753/public-cloud.jpg",srcSet:["/InstanaMiddlewareLab/static/24b0863c3ee7a3421e3c87a052448094/69549/public-cloud.jpg 288w","/InstanaMiddlewareLab/static/24b0863c3ee7a3421e3c87a052448094/473e3/public-cloud.jpg 576w","/InstanaMiddlewareLab/static/24b0863c3ee7a3421e3c87a052448094/2e753/public-cloud.jpg 1152w","/InstanaMiddlewareLab/static/24b0863c3ee7a3421e3c87a052448094/040c5/public-cloud.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(r,{colLg:3,colMd:3,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(d,{color:"dark",subTitle:"Managing SRE console access",title:"Do you want to learn how to provide SRE secure terminal access to Virtual Machines?",href:"/tutorials/Console_Access",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMEBf/aAAwDAQACEAMQAAABTflt6Ek8wG//xAAaEAACAwEBAAAAAAAAAAAAAAABAgMRIgAT/9oACAEBAAEFAolvmioONROb9WIZtf/EABcRAAMBAAAAAAAAAAAAAAAAAAABEQL/2gAIAQMBAT8B0Kw//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAhMf/aAAgBAgEBPwHXkpf/xAAXEAEAAwAAAAAAAAAAAAAAAAABACAh/9oACAEBAAY/ApgV/8QAFxABAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAQABPyER2F1DhsYzYccBdnVf/9oADAMBAAIAAwAAABCY7//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAIuxwv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxCQeCtn/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFBUYH/2gAIAQEAAT8Qw/fAhchYG3SWofSUEeSY1DN7j5QT/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"secure access",title:"secure access",src:"/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/2e753/secure-access.jpg",srcSet:["/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/69549/secure-access.jpg 288w","/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/473e3/secure-access.jpg 576w","/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/2e753/secure-access.jpg 1152w","/InstanaMiddlewareLab/static/e752514c4d92adbfa4652e1b4e41c0e2/040c5/secure-access.jpg 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(o.b)("hr",null))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-install-index-mdx-e536c61e9b6dc1b221fe.js.map