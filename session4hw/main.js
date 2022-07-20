alert("Hi, this is an Asian simulation game. This is entirely satire btw.")
alert("You are currently 5 years old.")
var socval=0
var parval=0
var iqpt=0
var othertalent=0
var kidaction=prompt("What would you like to do? (learn maths/play the piano/play with friends)")
if (kidaction="learn maths"){iqpt=iqpt+10
     parval=parval+10
      socval=socval-10
      alert("Nice, you're gonna grow up to be a smart but awkward teen!")}
else if(kidaction=="play the piano"){iqpt=iqpt+10, parval=parval+10,othertalent=othertalent+10, alert("nice, playing with piano helps make you smarter and more musical!")}
else if(kidaction=="play with friends"){socval=socval+10, parval=parval-10, alert("you're very social, but your parents don't like that, neither do your grades...")}
else{alert("Do you not understand the question?? you must not be asian. CHOOSE AGAIN") 
var kidaction=prompt("What would you like to do? (learn maths/play the piano/play with friends)")}
console.log("As a kid:")
console.log(`soc value:${socval}`)
console.log(`how much your parents like you:${parval}`)
console.log(`your IQ points:${iqpt}`)
console.log(`other talents:${othertalent}`)

alert("You are now a teen.")
var teenaction=prompt("What would you like to do?(party all day all night/study all day and be a mathlete/do some sports)")
if (teenaction=="study all day and be a mathlete"){iqpt=iqpt+10
    parval=parval+10
     socval=socval-10
     alert("Nice, you're gonna make your parents proud!")}
else if(teenaction=="do some sports"){socval=socval+10, parval=parval-10,othertalent=othertalent+10, alert("nice, doing some sports makes you climb up the social ladder, and it is a nice skill to have!")}
else if(teenaction=="party all day all night"){socval=socval+10, parval=parval-100, iqpt=iqpt-10,alert("you're very social, but your parents don't like that, neither do your grades...")}
else{alert("Do you not understand the question?? you must not be asian. CHOOSE AGAIN")
var teenaction=prompt("What would you like to do?(party all day all night/study all day and be a mathlete/do some sports)")
}
console.log(`As a teen`)
console.log(`soc value:${socval}`)
console.log(`how much your parents like you:${parval}`)
console.log(`your IQ points:${iqpt}`)
console.log(`other talents:${othertalent}`)
alert("You are all grown up now! The game also sadly ends here:( btw everything here is a joke! And see you!")
