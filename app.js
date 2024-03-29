console.log("Javascript is on")

const app = {

    init : function(){
        console.log("INIT")
        //INITIALISATION DES VARIABLES
        app.value_first = 0;
        app.value_second = 0;
        app.value_result = 0;
        app.operator = ""

        // ON RECUPERE LES TOUCHES DU CLAVIER VIRTUEL
        app.zero = document.getElementById("zero");
        app.one = document.getElementById("one");
        app.two = document.getElementById("two");
        app.three = document.getElementById("three");
        app.four = document.getElementById("four");
        app.five = document.getElementById("five");
        app.six = document.getElementById("six");
        app.seven = document.getElementById("seven");
        app.eight = document.getElementById("eight");
        app.nine = document.getElementById("nine");
        app.dot = document.getElementById("dot");
        app.more = document.getElementById("more");
        app.less = document.getElementById("less");
        app.multiply = document.getElementById("multiply");
        app.divide = document.getElementById("divide");
        app.equal = document.getElementById("equal");
        app.back = document.getElementById("back");
        app.clear = document.getElementById("clear");

        // ON RECUPERE L'INPUT = L'ECRAN
        app.screen = document.getElementById("screen");

        // ON ECOUTE LE CLAVIER REEL ET ON AGIT
        app.real_keyboard();

        // ON ECOUTE LE CLAVIER VIRTUEL ET ON AGIT
        app.zero.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("0");
        } );
        app.one.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("1");
        } );
        app.two.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("2");
        } );
        app.three.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("3");
        } );
        app.four.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("4");
        } );
        app.five.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("5");
        } );
        app.six.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("6");
        } );
        app.seven.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("7");
        } );
        app.eight.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("8");
        } );
        app.nine.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("9");
        } );
        app.dot.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard(".");
        } );
        app.more.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("+");
        } );
        app.less.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("-");
        } );
        app.multiply.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("*");
        } );
        app.divide.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("/");
        } );
        app.equal.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("=");
        } );
        app.back.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("Back");
        } );
        app.clear.addEventListener("click", (e)=>{ 
            app.click_here(e);
            app.virtual_keyboard("Clear");
        } );
    },

    // CONSOLE.LOG DES VARIABLES ===> 
    //UTILE SIMPLEMENT POUR LE CONTRÔLE LORS DU DEVELOPEMENT
    print_values : function(){
        console.log(" ===///   PRINT   ///===");
        console.log("app.value_first => ", app.value_first);
        console.log(typeof(app.value_first));
        console.log("app.value_second => ", app.value_second);
        console.log(typeof(app.value_second));
        console.log("app.value_result => ", app.value_result);
        console.log(typeof(app.value_result));
        console.log("app.operator => ", app.operator);
        console.log(typeof(app.operator));
        let input_current_value = app.get_value();
        console.log("Input value =  ", input_current_value);
        console.log(typeof(input_current_value));
        console.log("===============");
    },
    // ON RECUPERE LA VALEUR DE L'INPUT
    get_value : function(){
        let current_value = document.getElementById("screen").value;
        return current_value;
    },
    // ON DEFINIE LA ZONE DE CLICK
    click_here : function(x){
        if(x.target.localName == "h2"){
            app.press_effect(x.target.parentNode);
        } else {
            app.press_effect(x.target);
        }
    },
    // ON APPUIE SUR UNE TOUCHE (VISUAL EFFECT)
    press_effect : function(x){
        x.animate([
            { transform: "translateZ(0.5rem)"},
            { transform: "translateZ(0.125rem)", easing: "ease-in-out"},
            { transform: "translateZ(0.5rem)"}
            ], {
            duration: 300,
            iterations: 1
            })
    },

    // ECOUTEUR DU CLAVIER REEL ET SEQUENCES
    real_keyboard : function(){
        console.log("Real Keyboard Listener activated");
        app.screen.onkeypress = (e) => {
            let key_pressed = e.key;
            
            if("0123456789.+-*/=".indexOf(key_pressed) < 0 ){
                return false;
            }
            if(key_pressed == "."){
                let tempo_value = app.get_value();
                
                if(tempo_value.indexOf(key_pressed) >= 0){
                    return false;
                }
                return;
            }
            if("+-*/".indexOf(key_pressed) >= 0){
                app.manage_operator(key_pressed);
                return false;
            }
            if(key_pressed == "="){
                app.value_second = app.get_value()*1;
                app.calculate(app.operator);
                return false;
            }
            
        }
    },
    // ECOUTEUR DU CLAVIER VIRTUEL ET SEQUENCES
    virtual_keyboard : function(x){
        console.log("Virtual Keyboard Listener activated");
        let key_pressed = x;
        if("0123456789".indexOf(key_pressed) >= 0 ){
            if(app.screen.value){
                let new_value = app.screen.value + key_pressed;
                app.screen.value = new_value;
                return;
            }
            app.screen.value = key_pressed;
            return;
        }
        if(key_pressed == "."){
            let tempo_value = app.get_value();
            if(tempo_value.indexOf(key_pressed) >= 0){
                return false;
            }
            if(!app.screen.value){
                return false;
            }
            let new_value = app.screen.value + key_pressed;
            app.screen.value = new_value;
            return;
        }
        if("+-*/".indexOf(key_pressed) >= 0){
            app.manage_operator(key_pressed);
            return false;
        }
        if(key_pressed == "="){
            app.value_second = app.get_value()*1;
            app.calculate(app.operator);
            return false;
        }
        if(key_pressed == "Clear"){
            app.screen.value = "";
            return false;
        }
        if(key_pressed == "Back"){
            let new_value = app.screen.value.substring(0, app.screen.value.length-1);
            app.screen.value = new_value;
            return;
        }
    },
    // ON GERE LA SAISIE D'UN OPERATEUR
    manage_operator : function(x){
        console.log("Manage Operator");
        if(app.operator !== ""){
            app.value_second = app.get_value()*1;
            app.calculate(app.operator);
        }
        app.value_first = app.get_value()*1;
        switch(x){
            case "+" : 
                app.operator = "+";
                app.screen.value = "";
                break;
            case "-" : 
                app.operator = "-";
                app.screen.value = "";
                break;
            case "*" : 
                app.operator = "*";
                app.screen.value = "";
                break;
            case "/" : 
                app.operator = "/";
                app.screen.value = "";
                break;
            default : 
                break;
        }
    },
    // ON CALCULE LE RESULTAT (x = app.operator)
    calculate : function(x){
        console.log("Calculate");
        switch(x){
            case "+" : 
                app.value_second = app.get_value()*1;
                app.value_result = app.value_first + app.value_second;
                app.screen.value = app.value_result;
                break;
            case "-" : 
                app.value_second = app.get_value()*1;
                app.value_result = app.value_first - app.value_second;
                app.screen.value = app.value_result;
                break;
            case "*" : 
                app.value_second = app.get_value()*1;
                app.value_result = app.value_first * app.value_second;
                app.screen.value = app.value_result;
                break;
            case "/" : 
                app.value_second = app.get_value()*1;
                app.value_result = app.value_first / app.value_second;
                app.screen.value = app.value_result;
                break;
            default : 
                app.value_result = app.get_value()*1;
                app.screen.value = app.value_result;
                break;
        }
        app.operator = "";
    }
    
}
document.addEventListener("DOMContentLoaded", app.init)