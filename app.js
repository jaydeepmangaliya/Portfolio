var typed = new Typed(".change",{
    strings: ["Software Developer.","Web designer.","React Developer","Frontend Developer."]
    ,typeSpeed:50,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

var sidem = document.getElementById("sidemenu");

function openmenu()
{
    sidem.style.right = "-28px";
}

function closemenu()
{
    sidem.style.right = "-270px";
}


var tablinks = document.getElementsByClassName("tlink");
var tabcontents = document.getElementsByClassName("tcontent");

function opentab(tabname){
    for(tabl of tablinks){
        tabl.classList.remove("actlink");
    }
    for(tabc of tabcontents){
        tabc.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("actlink");
    document.getElementById(tabname).classList.add("active-tab");
}

AOS.init();

AOS.init({
    offset:120,
    duration: 900,
})

let divs = document.querySelectorAll('div');

window.onscroll = () => {
divs.forEach(div => {
    let top = window.scrollY;
    let offset = div.offsetTop;
    let height = div.offsetHeight;

    if (top >= offset && top < offset + height) {
        div.classList.add('show-animate');
    }
    

    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");

// const app = express();

// // app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended:true}));


// app.get("/",function(req , res)
// {
//     res.sendFile(__dirname+"/index.html");
    
// });
// app.post("/",function(req,res)
// {
//     var em = req.body.email;
//     var msg = req.body.message;
//     console.log(em, msg);
// });


// app.listen(3000, function() 
// {
//    console.log("Server is running on port 3000"); 
// }); 

// gsap.registerPlugin(ScrollTrigger)

// const Scroll = new function() {
// 	let sections
// 	let page
// 	let main
// 	let scrollTrigger
// 	let tl
// 	let win
	
// 	// Init
// 	this.init = () => {
// 		sections = document.querySelectorAll('section')
// 		page = document.querySelector('#page')
// 		main = document.querySelector('main')
// 		win = {
// 			w: window.innerWidth,
// 			h: window.innerHeight
// 		}
		
// 		this.setupTimeline()
// 		this.setupScrollTrigger()
// 		window.addEventListener('resize', this.onResize)
// 	}
	
// 	// Setup ScrollTrigger
// 	this.setupScrollTrigger = () => {
// 		page.style.height = (this.getTotalScroll() + win.h) + 'px'
		
// 		scrollTrigger = ScrollTrigger.create({
// 			id: 'mainScroll',
// 			trigger: 'main',
// 			animation: tl,
// 			pin: true,
// 			scrub: true,
// 			snap: {
// 				snapTo: (value) => {
					
// 					let labels = Object.values(tl.labels)
					
// 					const snapPoints = labels.map(x => x / tl.totalDuration());
// 					const proximity = 0.1
					
// 					console.log(tl.labels , tl.totalDuration(), labels, snapPoints)
					
// 					for (let i = 0; i < snapPoints.length; i++) {
// 						if (value > snapPoints[i] - proximity && value < snapPoints[i] + proximity) {
// 							return snapPoints[i]
// 						}
// 					}
// 				},
// 				duration: { min: 0.2, max: 0.6 },
// 			},
// 			start: 'top top',
// 			end: '+=' + this.getTotalScroll(),
// 		})
// 	}
	
// 	// Setup timeline
// 	this.setupTimeline = () => {
// 		tl = gsap.timeline()
// 		tl.addLabel("label-initial")
		
// 		sections.forEach((section, index) => {
// 			const nextSection = sections[index+1]
// 			if (!nextSection) return

// 			tl.to(nextSection, {
// 				y: -1 * nextSection.offsetHeight,
// 				duration: nextSection.offsetHeight,
// 				ease: 'linear',
// 			})
// 			.addLabel(`label${index}`)
// 		})
// 	}
	
// 	// On resize
// 	this.onResize = () => {
// 		win = {
// 			w: window.innerWidth,
// 			h: window.innerHeight
// 		}
		
// 		this.reset()
// 	}
	
// 	// Reset
// 	this.reset = () => {
// 		if (typeof ScrollTrigger.getById('mainScroll') === 'object') {
// 			ScrollTrigger.getById('mainScroll').kill()
// 		}
		
// 		if (typeof tl === 'object') {
// 			tl.kill()
// 			tl.seek(0)
// 		}
		
// 		document.body.scrollTop = document.documentElement.scrollTop = 0
// 		this.init()
// 	}
	
// 	// Get total scroll
// 	this.getTotalScroll = () => {
// 		let totalScroll = 0
// 		sections.forEach(section => {
// 			totalScroll += section.offsetHeight
// 		})
// 		totalScroll -= win.h
// 		return totalScroll
// 	}
// }

// Scroll.init()

// //add GSAP logo
// logo("dark")