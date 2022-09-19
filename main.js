const prompt = require('prompt-sync')({sigint: true});
console.log("Hi! I'm The Color Calculator! Do you wish to Combine or Deconstruct a Color? ")

let decision = prompt("")

if (decision === "combine"){
    console.log("COMBINING COLORS!")
    let color1 = prompt("Enter your first color: ")
    let color2 = prompt("Enter your second color: ")
    if (color1 === "red" && color2 === "blue"){
        console.log(" The combined colors makes: PURPLE! ")
   
      }else if (color1 === "blue" && color2 === "red"){
        console.log("The combined colors makes: PURPLE")
   
      }else if  (color1 === "yellow" && color2 === "blue"){
            console.log("The combined colors makes: GREEN")
    
         }else if  (color1 === "yellow" && color2 === "red"){
            console.log(" The combined colors makes: ORANGE ")
    
         }else if  (color1 === "blue" && color2 === "yellow"){
            console.log("The combined colors makes: GREEN")
    
         }else if  (color1 === "blue" && color2 === "yellow"){
            console.log(" The combined colors makes: GREEN")
   
         }else if  (color1 !== "yellow" || "blue"|| "red"){
            console.log(" ERROR ")
    
         }else if  (color2 !== "blue" || "red"|| "yellow"){
                console.log("ERROR")
}
}
 if (decision === "deconstruct"){
    console.log("DECONSTRUCTING COLORS!")
    let color3 = prompt("Enter the color you would like to deconstruct: ")
    if (color3 === "green"){
        console.log("Deconstructs into: YELLOW & BLUE ")
    
      } else if(color3 === "orange"){
        console.log("Deconstructs into: RED & YELLOW")
   
      } else if(color3 === "purple"){
        console.log("Deconstructs into: BLUE & RED")
    
      }else if(color3 !== "purple" || "green" || "orange"){
        console.log(" ERROR ")
    }
 }
 